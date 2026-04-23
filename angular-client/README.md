# React Client

This frontend has been migrated from Angular to React.

## Stack

- React 18
- TypeScript
- Vite
- Vitest + Testing Library

## Node/npm support

- Node.js: 20.x LTS
- npm: 10.x

## Development

```bash
npm install
npm start
```

By default, the app calls `http://localhost:4444/api/v1`. You can override this with:

```bash
VITE_API_BASE_URL=http://localhost:4444/api/v1 npm start
```

## Scripts

- `npm start` - start the Vite dev server
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript type checking
- `npm test` - run unit tests with Vitest
- `npm run build` - production build

## Migration note

If additional modernization is desired, open dedicated follow-up PRs (routing/state/library upgrades) so runtime changes remain isolated from application feature changes.
