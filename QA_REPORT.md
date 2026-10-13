# QA Report — Project Emily V1.1

## Scope

Created a five-scene Next.js/TypeScript web application, CSS/SVG art, React Motion animations, opt-in audio, a reversible and skippable unfolding-letter transition, complete invitation branches, and a dependency-free offline interactive preview. No data analytics or backend endpoints; no private photographs.

## What was verified in the authoring environment

- Node.js 22.16.0 and npm 10.9.2 are available.
- `tests/static-check.mjs` verifies source structure, five scene branches, opt-in sound logic, contact sanitization, no personal photos in the public folder, reduced-motion media query, and JavaScript syntax of the offline preview.
- Offline preview can be served as regular HTTP files from the project folder via Python's `http.server`; local HTTP response was successful.
- TypeScript/TSX **syntax-only** transpilation is attempted using globally available TypeScript tooling; no React/Next dependency types are installed.

## Blockers / NOT verified

- `npm install`: **BLOCKED**. DNS/network request to `https://registry.npmjs.org/next` failed with `EAI_AGAIN` from this environment. This also means the included `package-lock.json` has the root manifest only (bootstrap), not a resolved dependency graph.
- `npm run typecheck`: **NOT RUN** against installed dependencies. Needs a successful install.
- `npm run lint`: **NOT RUN** against installed dependencies. Needs a successful install.
- `npm run build`: **NOT RUN**. Do not infer production correctness from syntax checks.
- Real React/Next render and mobile interaction tests: **NOT VERIFIED**.
- Chromium headless rendering: **BLOCKED**. Browser process did not finish, including a trivial `data:` page, despite `--no-sandbox` and GPU-disabled retries. No credible screenshots from a real browser are attached.
- iPhone Safari tests: **NOT AVAILABLE** here.

## Behavior specification

The Next frontend explicitly displays an invitation rather than recording an acceptance. Contact URL defaults to empty; on a positive choice, users can copy an optional prewritten message. Rejection or uncertainty are local-only states. Audio starts only on direct button interaction. Both source implementations provide a Skip to Invitation control. Source code includes Reduced Motion handling.

## Remaining release gates

1. Install dependencies on a machine with npm access; regenerate and commit a fully resolved lockfile.
2. Run TypeScript, ESLint, build and review all errors.
3. Render and visually inspect the **Next.js version** on actual browsers.
4. Test all scenes on iPhone Safari; verify clip/copy actions and opt-in sound.
5. Configure real contact details and a genuine consultation topic if desired.
6. Verify Vercel preview and chosen access protection before sending.

**Release decision: Source delivery ready for local QA; not yet certified as production-verified.**
