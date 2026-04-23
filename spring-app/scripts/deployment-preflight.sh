#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

: "${FLYWAY_URL:?FLYWAY_URL must be set for deployment preflight.}"
: "${FLYWAY_USER:?FLYWAY_USER must be set for deployment preflight.}"
if [ -z "${FLYWAY_PASSWORD+x}" ]; then
  echo "FLYWAY_PASSWORD must be set for deployment preflight." >&2
  exit 1
fi

./mvnw -q \
  -Dflyway.url="$FLYWAY_URL" \
  -Dflyway.user="$FLYWAY_USER" \
  -Dflyway.password="$FLYWAY_PASSWORD" \
  -Dflyway.locations=filesystem:src/main/resources/db/migration \
  flyway:validate

echo "Flyway preflight validation passed."
