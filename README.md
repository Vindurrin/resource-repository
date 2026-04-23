# resource-repository

Resource Management System using Java, Spring, Spring Boot, and Angular.

This is a resource management application that implements CRUD operations and basic search functionality for `Resource` and `Team` model classes.

## CI/CD and repository governance

The repository uses GitHub Actions pipelines for:

- Backend (`spring-app`): compile, unit tests, integration tests, lint/static checks, and dependency vulnerability scanning.
- Frontend (`angular-client`): install, lint, typecheck, unit tests, and production build.

Branch protections for `main` and `develop` are declared in `.github/settings.yml` and are designed to enforce:

- Pull-request based changes (no direct pushes)
- Required code reviews
- Required successful status checks

Ownership and pull request standards are defined in:

- `.github/CODEOWNERS`
- `.github/pull_request_template.md`

## Release versioning and tagging

This project follows Semantic Versioning (`MAJOR.MINOR.PATCH`) and git tags using the format `vMAJOR.MINOR.PATCH`.

Detailed release instructions (including pre-releases and hotfixes) are documented in [`docs/release-process.md`](docs/release-process.md).
