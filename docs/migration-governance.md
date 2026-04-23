# Migration Governance Plan

This document defines branching, PR sequencing, labels/milestones, and a migration board for the platform upgrade.

## 1) Branching model

### Long-lived integration branches

Create and keep these branches open for the duration of the migration:

- `migration/java21-springboot3`
- `migration/react-frontend`

### Short-lived feature branches

Create feature branches off the relevant integration branch and merge **integration first**, then to `main`.

Naming convention:

- Backend: `feature/backend/<ticket>-<short-name>` (base: `migration/java21-springboot3`)
- Frontend: `feature/frontend/<ticket>-<short-name>` (base: `migration/react-frontend`)

Merge flow:

1. `feature/*` → corresponding `migration/*` branch (required).
2. Periodic stabilization/release PR from `migration/*` → `main`.

## 2) PR size and sequencing rules

### PR size limits

- **Target:** <= 400 changed lines (excluding lock files / generated files).
- **Hard cap:** 800 changed lines unless explicitly marked `risk-high` and reviewed by two maintainers.
- Prefer single-purpose PRs with clear rollback paths.

### Sequencing rules

1. **Infra/build-system first** (JDK/toolchain updates, CI config, package managers, compiler settings).
2. **Mechanical refactors next** in dedicated PRs (e.g., `javax` → `jakarta`, import/package-only updates).
3. **Behavior changes last** in separate PRs (logic, endpoints, UX, persistence behavior).

Do not mix mechanical refactors with behavior changes in the same PR.

## 3) Labels and milestones

### Labels

Create and use these labels:

- `backend-migration`
- `frontend-migration`
- `risk-high`
- `data-model-change`

Recommended additions for triage quality:

- `phase:foundation`
- `phase:mechanical`
- `phase:behavior`
- `blocked`

### Milestones

Create these milestones:

- `Backend Migration`
- `Frontend Migration`

Optional milestone due dates should follow your target release calendar.

## 4) Migration board

Create a dedicated board named **Migration Program Board** (GitHub Project or equivalent) with these phases and explicit gates.

### Phase 0 — Discovery

**Entry criteria**

- Baseline architecture and dependency inventory complete.
- Migration risks captured.

**Exit criteria**

- Scope, milestones, and ownership approved.
- Branch strategy and label taxonomy active.

### Phase 1 — Foundation/Infra

**Entry criteria**

- Discovery complete.
- CI visibility and test baseline available.

**Exit criteria**

- Build pipeline supports Java 21 / Spring Boot 3 prep work.
- Frontend toolchain migration plan approved.
- No blocker in dependency resolution.

### Phase 2 — Mechanical Refactors

**Entry criteria**

- Foundation phase complete.
- Refactor plan broken into small PR batches.

**Exit criteria**

- Mechanical updates merged (e.g., namespace/package migrations).
- Tests green with no intentional behavior change.

### Phase 3 — Behavior & Compatibility

**Entry criteria**

- Mechanical phase complete.
- Compatibility test plan approved.

**Exit criteria**

- Functional behavior verified and regressions addressed.
- Data migrations (if any) validated and rollback tested.

### Phase 4 — Stabilization & Cutover

**Entry criteria**

- Behavior updates complete.
- Integration branches are stable.

**Exit criteria**

- `migration/*` branches merged into `main`.
- Post-cutover monitoring in place and migration closed.

## 5) Operating rules

- Every migration PR must include: objective, risk level, rollback plan, and test evidence.
- Any PR with schema/entity changes must include `data-model-change`.
- Any large or cross-cutting PR must include `risk-high`.
