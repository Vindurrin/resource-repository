# resource-repository
Resource Management System using Java, Spring, Spring Boot, Angular 7.

This is a resource management application that implements CRUD operations as well as basic search functionality for the model classes of a Resource and a Team, on which a Resource may belong.

There is the potential to update this application with some of the new innovations in this tech stack. However, this is not something I will be working on going forward.

## Database migration strategy

The Spring application now uses Flyway as the single source of truth for schema evolution:

- `spring.jpa.hibernate.ddl-auto=validate` in the default (non-local) configuration prevents destructive schema mutations.
- `local` profile keeps legacy rapid bootstrap behavior (`create-drop`) for local-only iterations.
- Versioned SQL migrations live in `spring-app/src/main/resources/db/migration`.

## Local bootstrap flow

1. Start MySQL and create `resource_db`.
2. Run local profile for quick bootstrap (legacy create/drop behavior):

   ```bash
   cd spring-app
   ./mvnw spring-boot:run -Dspring-boot.run.profiles=local
   ```

3. To exercise migrations explicitly against local MySQL:

   ```bash
   cd spring-app
   ./mvnw -Dflyway.url=jdbc:mysql://localhost:3306/resource_db \
     -Dflyway.user=root \
     -Dflyway.password=Monday12 \
     flyway:migrate
   ```

## Production migration runbook

1. Configure environment variables for target database credentials:

   - `FLYWAY_URL`
   - `FLYWAY_USER`
   - `FLYWAY_PASSWORD`

2. Run deployment preflight before application rollout:

   ```bash
   cd spring-app
   ./scripts/deployment-preflight.sh
   ```

3. If onboarding an existing production schema that predates Flyway tracking, baseline once:

   ```bash
   cd spring-app
   ./mvnw -Dflyway.url="$FLYWAY_URL" \
     -Dflyway.user="$FLYWAY_USER" \
     -Dflyway.password="$FLYWAY_PASSWORD" \
     -Dflyway.baselineOnMigrate=true \
     flyway:baseline
   ```

4. Apply migrations:

   ```bash
   cd spring-app
   ./mvnw -Dflyway.url="$FLYWAY_URL" \
     -Dflyway.user="$FLYWAY_USER" \
     -Dflyway.password="$FLYWAY_PASSWORD" \
     flyway:migrate
   ```

5. Deploy the application with a non-local profile (default config already validates schema).

## CI migration checks

- GitHub Actions workflow: `.github/workflows/migration-checks.yml`
- Runs `spring-app/scripts/deployment-preflight.sh` on every push to `main` and on pull requests touching Spring app or workflow files.
- Uses an in-memory H2 database in MySQL compatibility mode to validate Flyway migration chain quickly.
