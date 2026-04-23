# Release Process

This repository follows [Semantic Versioning 2.0.0](https://semver.org/):

- **MAJOR** (`X.0.0`): incompatible API or behavior changes.
- **MINOR** (`0.X.0`): backward-compatible functionality additions.
- **PATCH** (`0.0.X`): backward-compatible bug fixes and small internal improvements.

## Branching and release flow

1. Merge approved work into `main` through pull requests only.
2. Ensure all required CI checks are green (`backend-pipeline`, `frontend-pipeline`).
3. Update version numbers where needed and summarize user-facing changes.
4. Create a signed annotated git tag using `vMAJOR.MINOR.PATCH`.
5. Push the tag to trigger downstream packaging/deployment workflows.
6. Publish release notes with migration notes for backend, frontend, and database impacts.

## Tagging convention

- Stable releases: `v1.4.2`
- Pre-releases: `v1.5.0-rc.1`, `v2.0.0-beta.2`

## Version bump guidelines

- Bump **MAJOR** when public API contracts are broken.
- Bump **MINOR** when new features are added without breaking compatibility.
- Bump **PATCH** for fixes that preserve compatibility.

## Hotfix process

1. Branch from the latest release tag.
2. Apply and validate the fix.
3. Open a pull request targeting `main`.
4. Tag and release using the next patch version.
