# Dependency Policy

## 1) Framework core major version alignment

The repository must not contain mixed major versions inside a framework core family.

### Angular core family
- `@angular/animations`
- `@angular/common`
- `@angular/compiler`
- `@angular/core`
- `@angular/forms`
- `@angular/platform-browser`
- `@angular/platform-browser-dynamic`
- `@angular/router`

### React core family
- `react`
- `react-dom`

All packages in a given family must resolve to the same major version.

## 2) Frontend lifecycle

- `angular-client` is in **security-only** maintenance mode.
- New frontend features must be implemented in `react-client`.
- Angular dependency upgrades should be limited to security and critical stability fixes.

## 3) Automated updates

- Dependabot is enabled with grouped rules for Maven and npm.
- Grouped updates reduce PR noise and make coordinated upgrades easier.

## 4) SCA / vulnerability scanning

CI must run backend and frontend dependency vulnerability scans on pull requests and pushes to `main`.
