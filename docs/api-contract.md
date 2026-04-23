# API Contract (React Integration)

Base URL: `/api/v1`

## Resources

### GET `/resources`
Returns a filtered list of resources.

Supported query params:
- `role` (optional): case-insensitive contains match against `role`
- `project` (optional): case-insensitive contains match against `project`
- `status` (optional): case-insensitive contains match against `status`
- `term` (optional): case-insensitive contains match against `role`, `project`, or `sudorole`

Response:
- `200 OK` with JSON array of `Resource`

### GET `/resources/{id}`
Returns one resource by numeric id.

Response:
- `200 OK` with `Resource`
- `404 Not Found` when id does not exist

### GET `/resources/search?term=...`
Dedicated free-text search endpoint.

Response:
- `200 OK` with JSON array of matching `Resource`

### Deprecated (temporary compatibility)
#### GET `/resources/{role}`
Legacy path-based search endpoint retained temporarily.

Deprecation response headers:
- `Deprecation: true`
- `Sunset: Wed, 31 Dec 2026 23:59:59 GMT`
- `Link: </docs/api-contract.md>; rel="deprecation"`

## Teams

### GET `/teams`
Returns a filtered list of teams.

Supported query params:
- `name` (optional): case-insensitive contains match against `name`
- `project` (optional): case-insensitive contains match against `project`
- `status` (optional): case-insensitive contains match against `status`
- `term` (optional): case-insensitive contains match against `name` or `project`

Response:
- `200 OK` with JSON array of `Team`

### GET `/teams/{id}`
Returns one team by numeric id.

Response:
- `200 OK` with `Team`
- `404 Not Found` when id does not exist

### GET `/teams/search?term=...`
Dedicated free-text search endpoint.

Response:
- `200 OK` with JSON array of matching `Team`

### Deprecated (temporary compatibility)
#### GET `/teams/{name}`
Legacy path-based search endpoint retained temporarily.

Deprecation response headers:
- `Deprecation: true`
- `Sunset: Wed, 31 Dec 2026 23:59:59 GMT`
- `Link: </docs/api-contract.md>; rel="deprecation"`

## Existing write endpoints (unchanged)
- `POST /resources`
- `PUT /resources/edit/{id}`
- `DELETE /resources/{id}`
- `POST /teams`
- `PUT /teams/edit/{id}`
- `DELETE /teams/{id}`
