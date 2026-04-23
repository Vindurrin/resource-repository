# Dependency Matrix

This matrix tracks **current** vs **target** versions and status for runtime, test, and build plugin/tooling dependencies across the backend and frontend.

## Backend (`spring-app`)

| Category | Dependency | Current | Target | Notes |
|---|---|---:|---:|---|
| Runtime | Spring Boot BOM (`org.springframework.boot:spring-boot-dependencies`) | `2.1.4.RELEASE` (via parent) | `2.7.18` (imported BOM) | Migrated to explicit BOM import for centrally managed versions. |
| Runtime | `spring-boot-starter-web` | Boot-managed | Boot-managed | Managed through BOM. |
| Runtime | `spring-boot-starter-data-jpa` | Boot-managed | Boot-managed | Managed through BOM. |
| Runtime | MySQL JDBC driver | `mysql:mysql-connector-java` | `com.mysql:mysql-connector-j` | Updated to current artifact naming. |
| Runtime | `spring-boot-devtools` | Boot-managed | Boot-managed | Runtime scope retained. |
| Test | `spring-boot-starter-test` | Boot-managed | Boot-managed | Test scope retained. |
| Build Plugin | `spring-boot-maven-plugin` | Parent-managed | BOM-compatible (explicit plugin in build) | Continues packaging and Spring Boot lifecycle integration. |
| Build Plugin | `jacoco-maven-plugin` | Unpinned | Keep current; review quarterly | Coverage plugin retained; can be pinned later if required by policy. |

## Frontend (`angular-client` and `react-client`)

| Category | Dependency | Current | Target | Notes |
|---|---|---:|---:|---|
| Runtime | Angular core framework packages | Mixed majors (`@angular/core` 11, others 8) | Align to major 8 during freeze | Adjusted to avoid mixed major framework core packages. |
| Runtime | Angular app lifecycle | Active feature development | Security-only maintenance | Angular app is now frozen while React rollout starts. |
| Runtime | React app | Not present | Introduced (`react`/`react-dom` 18) | New `react-client` workspace added as migration landing zone. |
| Test | Angular Karma/Jasmine toolchain | Existing | Security updates only | No feature-driven upgrades while frozen. |
| Build Tool | Angular CLI/Devkit | 8.x | Security updates only | Update policy enforced by Dependabot + freeze policy. |
| Build Tool | React build tooling (`vite`) | N/A | `vite` 5.x | Baseline for new React app scaffold. |
| Update Automation | Dependabot | Not configured | Enabled with grouped rules | Backend and frontend ecosystems grouped for controlled update flow. |

## Guardrails and governance

- No mixed major versions are allowed within core framework dependency families (Angular core packages, React core packages).
- CI includes software composition analysis (SCA) and vulnerability checks for backend and frontend.
- Angular remains in security-only mode; feature work should target `react-client`.
