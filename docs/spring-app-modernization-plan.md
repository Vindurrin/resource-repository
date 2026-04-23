# Spring App Modernization Plan (Java 21 + Current Stack)

## 0) Current State Snapshot (as of 2026-04-23)

### What exists now
- Spring Boot backend under `spring-app`.
- Java target is `1.8`.
- Spring Boot parent is `2.1.4.RELEASE`.
- Direct MySQL dependency uses legacy coordinates (`mysql:mysql-connector-java`).
- Database credentials are committed in plaintext in `application.properties`.
- CORS is hardcoded per endpoint to `http://localhost:4200`.
- Persistence model uses `java.util.Date` and compensates timezone with manual `+6 hours` logic.
- Search endpoint loads all resources then filters in Java.
- Tests are JUnit 4 style and include a DB integration test that requires a local MySQL instance and hardcoded credentials.
- Root repo appears to have no `.github/workflows` automation currently.

### Risks to modernization
- Jumping directly from Spring Boot 2.1 -> 3.x requires Jakarta package migration (`javax.*` -> `jakarta.*`) and Hibernate 6 behavior changes.
- Angular client is legacy (Angular 7), so cross-app API contract changes must be tightly managed.
- Repo history indicates PR-based workflow exists, but branch hygiene and CI policy are not codified.

---

## 1) Target End State

### Platform baseline
- Java 21 LTS for local/dev/CI/runtime.
- Spring Boot 3.3.x (or latest stable 3.x at implementation time), Spring Framework 6.x.
- Maven Wrapper updated to modern Maven 3.9.x.
- MySQL driver via `com.mysql:mysql-connector-j`.
- Flyway for schema migrations.
- Test stack on JUnit 5 + Testcontainers.

### Engineering baseline
- Repeatable CI (build, unit/integration tests, static checks, dependency/CVE checks).
- No secrets in source control.
- Versioned API error model and controller advice.
- Query-level filtering instead of in-memory scanning.
- Time handling with `java.time` (`Instant`/`OffsetDateTime`/`LocalDate`) and explicit UTC semantics.

---

## 2) Implementation Strategy (Fast + Safe)

Use **small PRs in sequence**, each mergeable and deployable. Avoid one giant migration PR.

### Phase A — Safety rails first (1–2 days)
1. Add CI workflow at repo level (`.github/workflows/ci.yml`) that runs:
   - `spring-app`: `./mvnw -B verify`
   - (optional) `angular-client`: install + test/build if still maintained.
2. Add CODEOWNERS + branch protection recommendations:
   - Require PR review + passing checks.
   - Disallow direct pushes to default branch.
3. Add Dependabot config for Maven + npm ecosystems.
4. Introduce secret handling baseline:
   - Replace plaintext DB creds with env vars.
   - Add `.env.example` and updated docs.

**Conflict note:** introducing root-level CI/Dependabot can conflict with any pending repo governance PRs. Merge this phase before other migration work.

### Phase B — Build/runtime modernization (2–4 days)
1. Upgrade Maven wrapper to 3.9.x.
2. Update `pom.xml` incrementally:
   - Spring Boot 2.1.4 -> 2.7.latest (bridge release).
   - Resolve deprecations/warnings.
   - Then 2.7.latest -> 3.3.x.
3. Set Java release to 21 and update compiler/surefire/failsafe plugin compatibility.
4. Replace deprecated MySQL driver coordinates.

**Conflict note:** this phase will touch `pom.xml` heavily; serialize all dependency PRs behind it.

### Phase C — Jakarta + API compatibility refactor (2–5 days)
1. Migrate imports:
   - `javax.persistence.*` -> `jakarta.persistence.*`
   - `javax.validation.*` -> `jakarta.validation.*`
2. Move field injection to constructor injection.
3. Replace ad-hoc exception handling with `@RestControllerAdvice` and structured error DTO.
4. Keep endpoint paths stable initially (for Angular compatibility).

**Conflict note:** endpoint signatures and DTO changes can conflict with frontend PRs. Use compatibility adapters until Angular is upgraded.

### Phase D — Data/time correctness + performance (2–4 days)
1. Replace `Date` with `OffsetDateTime`/`Instant` (UTC).
2. Remove `fixDate()` timezone hacks; enforce timezone parsing at API boundary.
3. Convert search endpoint to repository query methods / Specifications.
4. Add pagination and sorting (`Pageable`) to list endpoints.

**Conflict note:** this affects JSON shape and query behavior. Ship behind versioned API if frontend churn is high.

### Phase E — Security + production readiness (2–4 days)
1. Add Spring Security baseline:
   - Start with actuator/auth hardening and CORS via centralized config.
   - Then JWT/OIDC depending on product direction.
2. Add request validation + standardized 400 responses.
3. Add actuator health/readiness/liveness and metrics.
4. Rate-limit and request logging hygiene (PII-safe).

### Phase F — Testing/quality hardening (2–4 days)
1. Replace JUnit 4 tests with JUnit 5.
2. Move DB integration tests to Testcontainers MySQL.
3. Add controller slice tests and repository tests.
4. Add mutation/coverage gates (JaCoCo threshold).

### Phase G — Feature acceleration track (parallel after Phase C)
With platform stable, deliver product-facing enhancements:
1. Advanced search/filter API (`role`, `project`, status, date range).
2. Bulk operations (bulk create/update/delete with validation report).
3. Audit trail (created/updated by/at).
4. Soft delete + restore.
5. CSV export/import and async job handling for heavy operations.
6. Team/resource relationship normalization (replace `List<String>` resource names with relational mapping if business logic needs integrity).

---

## 3) Work Breakdown by Objective

## 3.1 Modernization

### Done today (already in repo)
- Basic CRUD API and persistence structure.

### To do
- Java 21 and Spring Boot 3.3+.
- Jakarta migration.
- Maven + plugin updates.
- API pagination/filtering.
- Replace legacy date/time model.

## 3.2 Security

### Done today
- Minimal bean validation annotations.

### Gaps
- Plaintext DB password in source.
- No authn/authz.
- Per-method CORS annotations.
- No security headers/rate limiting/audit.

### To do
- Secrets via env/secret manager.
- Centralized CORS + security filter chain.
- Auth strategy (JWT/OIDC).
- CVE scanning and dependency policy.

## 3.3 Infrastructure / DevEx

### Done today
- Maven wrapper and basic tests exist.

### Gaps
- No visible GitHub Actions.
- No branch/PR governance documented.
- Tests rely on local DB credentials.

### To do
- CI/CD workflow.
- Branch policy + PR templates + labels.
- Testcontainers in CI.
- Optional containerization and deployment manifests.

## 3.4 Feature additions (post-modernization)

### High-value near-term
- Resource availability calendar endpoints.
- Capacity planning reports by project/team.
- Conflict detection (overlapping assignments).
- Search relevance improvements.

### Medium-term
- Notifications/webhooks for assignment changes.
- Role-based workflow approvals.
- Historical trend dashboards.

---

## 4) Branch/PR Workflow Proposal (to reduce conflicts)

## 4.1 Branch taxonomy
- `main` (protected, deployable only)
- `chore/platform-*` (build/tooling/security plumbing)
- `refactor/api-*` (non-breaking refactors)
- `feat/*` (product changes)

## 4.2 Merge order (strict)
1. `chore/ci-governance`
2. `chore/java21-boot27-bridge`
3. `chore/boot3-jakarta`
4. `refactor/time-model`
5. `refactor/query-pagination`
6. `chore/security-baseline`
7. Feature branches

## 4.3 PR sizing guidance
- Keep PRs < ~500 LOC when possible.
- One architectural concern per PR.
- Include rollback note in each PR body.
- Include “frontend impact” and “DB migration impact” sections.

## 4.4 Merge conflict hotspots to pre-plan
- `spring-app/pom.xml` (dependency bumps)
- controllers/models (Jakarta + DTO + time refactors)
- `application.properties` (secrets/env migration)
- root-level docs/workflows (team process changes)

---

## 5) Concrete Backlog (ready to execute)

## Sprint 0 (Preparation)
- [ ] Add root CI workflow and badges.
- [ ] Add Dependabot + security scan workflow.
- [ ] Add PR template + branch protection docs.
- [ ] Remove committed secrets; rotate DB password.

## Sprint 1 (Java/Spring migration)
- [ ] Upgrade to Boot 2.7 bridge.
- [ ] Upgrade to Boot 3.3 + Java 21.
- [ ] Jakarta imports migration.
- [ ] Fix compile/test breakages.

## Sprint 2 (Correctness + security)
- [ ] Replace `Date` + `fixDate()` with `java.time` UTC model.
- [ ] Add centralized exception handling.
- [ ] Replace per-endpoint CORS with global config.
- [ ] Add actuator + health probes.

## Sprint 3 (Performance + product)
- [ ] Repository-level filtered search.
- [ ] Pagination/sorting.
- [ ] Audit columns and migration scripts.
- [ ] Capacity/conflict endpoints.

---

## 6) Definition of Done (per PR)
- Builds on Java 21 in CI.
- Tests pass (unit + integration where applicable).
- No plaintext secrets.
- Backward compatibility impact documented.
- Migration/rollback notes included.
- Observability and error handling considered.

---

## 7) Recommended Immediate Next 3 PRs
1. **PR-1: CI + governance + secret cleanup**
   - Adds workflows/templates/docs.
   - Externalizes DB configuration.
2. **PR-2: Boot 2.7 bridge + test modernization kickoff**
   - Minimal behavioral change.
3. **PR-3: Boot 3.3 + Java 21 + Jakarta migration**
   - Compile/runtime migration with focused risk window.

This sequence gives the fastest path to modernization while keeping the repo shippable at every step.

---

## 8) Immediate Next Five Tasks (Post Angular->React Merge)

These are the next five tasks to execute immediately after the frontend migration merge, in order.

### Task 1 — API Contract Freeze + React Compatibility Matrix
**Goal:** prevent backend modernization work from breaking the newly merged React client.

**Deliverables:**
- OpenAPI (or equivalent) snapshot of current API routes/payloads.
- Compatibility matrix mapping React pages/hooks to backend endpoints.
- A “breaking changes checklist” to gate backend PRs.

**Owner recommendation:**
- **Manual/local (you):** confirm intended product behavior and prioritize which React flows are business-critical.
- **Coding agent (cloud):** generate API inventory docs, route-to-component mapping template, and PR checklist.

### Task 2 — Repo Governance Baseline (CI + Branch Protections + PR Template)
**Goal:** create guardrails before code migration begins.

**Deliverables:**
- `.github/workflows/ci.yml` for backend (and React app if present in repo after merge).
- PR template requiring: rollback plan, API impact, DB impact, and test evidence.
- Branch protection recommendations documented in `README` or `CONTRIBUTING`.

**Owner recommendation:**
- **Manual/local (you):** enable branch protection rules and required checks in GitHub settings (cannot be fully done from agent unless token/permissions exist).
- **Coding agent (cloud):** create workflow files/templates/docs in PR-ready form.

### Task 3 — Secrets/Configuration Cleanup + Credential Rotation
**Goal:** remove immediate security debt before modernization touches runtime.

**Deliverables:**
- Remove hardcoded datasource credentials from repo configs.
- Add environment-based config pattern (`SPRING_DATASOURCE_*`) and example env file.
- Rotate exposed DB credentials and document rotation date + owner.

**Owner recommendation:**
- **Manual/local (you):** rotate real credentials/secrets in database and secret manager; update deployment environment variables.
- **Coding agent (cloud):** patch config files, add `.env.example`, and add docs for local/dev/CI setup.

### Task 4 — Java 21 Migration Bridge PR (Boot 2.7 First, then Boot 3.x)
**Goal:** reduce migration risk by splitting into bridge and final upgrade.

**Deliverables:**
- PR A: Boot 2.7.latest + plugin updates + test fixes.
- PR B: Boot 3.3.x + `jakarta.*` migration + Java 21 toolchain.
- Migration notes for each PR (known breakages and rollback instructions).

**Owner recommendation:**
- **Coding agent (cloud):** implement code/package changes, dependency updates, and compile/test remediation.
- **Manual/local (you):** validate runtime behavior against production-like data and approve rollout windows.

### Task 5 — Data/Time + Query Correctness Refactor (blocking feature velocity)
**Goal:** remove hidden correctness/performance issues that React users will feel quickly.

**Deliverables:**
- Replace `Date`/`fixDate()` approach with `java.time` + explicit UTC semantics.
- Move in-memory search filtering to repository-level query methods.
- Add pagination/sorting contracts consumed by React list views.

**Owner recommendation:**
- **Coding agent (cloud):** perform refactors, add tests, and provide API change notes.
- **Manual/local (you):** verify UX expectations in React (filters, paging behavior, timezone display) and sign off on edge-case behavior.

### Manual vs Agent Summary
- **Must be manual/local by you:** GitHub branch protection toggles, secret rotation in actual infra, production rollout scheduling/approval, and product-behavior sign-off.
- **Best done by coding agent:** repetitive repo edits, migration code changes, workflow/template scaffolding, test scaffolding, and compatibility documentation.
- **Hybrid tasks (recommended):** API contract governance and Java migration (agent proposes/implements, you validate behavior and operational constraints).
