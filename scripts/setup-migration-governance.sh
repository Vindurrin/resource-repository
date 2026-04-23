#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required." >&2
  exit 1
fi

REPO="${1:-$(gh repo view --json nameWithOwner -q .nameWithOwner)}"

echo "Configuring labels for ${REPO}..."

ensure_label() {
  local name="$1"
  local color="$2"
  local description="$3"

  if gh label list --repo "$REPO" --search "$name" --json name -q '.[].name' | grep -Fxq "$name"; then
    gh label edit "$name" --repo "$REPO" --color "$color" --description "$description" >/dev/null
    echo "updated label: $name"
  else
    gh label create "$name" --repo "$REPO" --color "$color" --description "$description" >/dev/null
    echo "created label: $name"
  fi
}

ensure_milestone() {
  local title="$1"
  local description="$2"

  if gh api "repos/$REPO/milestones" --paginate --jq '.[].title' | grep -Fxq "$title"; then
    echo "milestone exists: $title"
  else
    gh api "repos/$REPO/milestones" --method POST -f title="$title" -f description="$description" >/dev/null
    echo "created milestone: $title"
  fi
}

ensure_label "backend-migration" "0e8a16" "Work item in Java 21 / Spring Boot 3 migration"
ensure_label "frontend-migration" "1d76db" "Work item in frontend migration stream"
ensure_label "risk-high" "d93f0b" "High-risk change requiring extra review/care"
ensure_label "data-model-change" "b60205" "Touches persistence schema or domain model"

ensure_milestone "Backend Migration" "Tracking Java 21 and Spring Boot 3 migration deliverables"
ensure_milestone "Frontend Migration" "Tracking frontend migration deliverables"

echo "Done."
