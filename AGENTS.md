# Repository Guidelines

## Project Structure & Module Organization
- `index.tsx` is the app entry; `App.tsx` defines the route layout and global shell.
- `pages/` contains route-level screens (grammar, culture, exercises, AI tutor).
- `components/` holds shared UI pieces; `hooks/` and `utils/` contain reusable logic.
- `data/` stores static learning content, with culture content grouped under `data/culture/`.
- `services/` is for external integrations like the Gemini API client.
- Config lives in `vite.config.ts`, `tsconfig.json`, `index.html`, and `metadata.json`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server for local development.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- The AI Tutor requires `API_KEY` in the environment, for example:
  `export API_KEY="your_google_gemini_api_key"`.

## Coding Style & Naming Conventions
- TypeScript + React with `.tsx` components and Tailwind utility classes in `className`.
- Use 2-space indentation, single quotes, and semicolons as seen in existing files.
- Components use `PascalCase` (e.g., `SearchModal.tsx`); hooks use `use*` naming.
- Prefer local relative imports or the `@/` alias defined in `tsconfig.json`.

## Testing Guidelines
- No automated test framework or coverage requirements are configured yet.
- If you add tests, introduce a `npm run test` script and name files `*.test.ts` or
  `*.test.tsx` so they are easy to discover.

## Commit & Pull Request Guidelines
- Git history shows Conventional Commit style like `feat: ...` and `docs: ...`.
  Keep subjects short and imperative; one-off bootstrap commits like
  `Initial commit` are acceptable.
- PRs should describe the change, note any affected routes or data files, and
  include screenshots for UI changes. Link related issues when applicable.

## Configuration & Security
- Do not commit real API keys. Use environment variables for Gemini access.
- When touching content data in `data/`, keep existing naming and structure so
  routes and search remain stable.
