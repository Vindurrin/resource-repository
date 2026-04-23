# Configuration

This service now reads all sensitive runtime configuration from environment variables (or a local `.env` loaded by your tooling), instead of hardcoding values in source files.

## Files and Profiles

- `spring-app/src/main/resources/application.properties`
  - Contains only non-secret shared settings and active profile selection.
- `spring-app/src/main/resources/application-dev.yml`
  - Development datasource and CORS settings, all sourced from environment variables.
- `spring-app/src/main/resources/application-prod.yml`
  - Production datasource and CORS settings, all sourced from environment variables.

## Required Environment Variables

### Development (`SPRING_PROFILES_ACTIVE=dev`)

- `DEV_DB_URL`
- `DEV_DB_USERNAME`
- `DEV_DB_PASSWORD`
- `DEV_CORS_ALLOWED_ORIGINS`

### Production (`SPRING_PROFILES_ACTIVE=prod`)

- `PROD_DB_URL`
- `PROD_DB_USERNAME`
- `PROD_DB_PASSWORD`
- `PROD_HIBERNATE_DDL_AUTO` (optional, defaults to `validate`)
- `PROD_CORS_ALLOWED_ORIGINS`

### Database test

- `TEST_DB_URL` (optional, defaults to local MySQL URL)
- `TEST_DB_USERNAME` (optional, defaults to `root`)
- `TEST_DB_PASSWORD` (optional, defaults to empty)

## CORS

CORS is configured centrally in `WebConfig` and applies to `/api/**`. Set allowed origins through:

- `DEV_CORS_ALLOWED_ORIGINS` for development
- `PROD_CORS_ALLOWED_ORIGINS` for production

Multiple origins can be supplied as a comma-separated value.

## Secret Rotation and Git History Cleanup

If previously committed credentials were real, rotate them immediately in your database/provider and then rewrite git history to remove leaked secrets from old commits before sharing the repository.
