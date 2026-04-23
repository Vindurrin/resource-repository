#!/usr/bin/env bash
set -euo pipefail

# Run from a cloned repository.
# Creates long-lived migration branches if they do not already exist.

branches=(
  "migration/java21-springboot3"
  "migration/react-frontend"
)

for branch in "${branches[@]}"; do
  if git show-ref --verify --quiet "refs/heads/${branch}"; then
    echo "exists: ${branch}"
  else
    git branch "${branch}"
    echo "created: ${branch}"
  fi
done
