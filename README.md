# FOR EMILY. — A Private Consultation

A five-act, Slovak-language, mobile-first romantic invitation with dark editorial styling, a private consultation dossier, three interactive compliments, a playful cost–benefit analysis, and an animated unfolding-letter reveal.

**This is a private project. Nothing has been published or sent to Emily.** The app does not track visitors, submit answers to a server, or bundle Emily's photos.

## Two ways to experience it

**A. Offline interactive preview (no installation):** open `preview/index.html` in a modern browser. The standalone preview reproduces the visual system, five scenes, sound toggle, skip controls, response branches and copy-message fallback. It is a preview implementation; it does not run React/Motion or prove a Next.js production build.

**B. Main production Next.js app:** follow the steps below. The main React application uses Motion for React, SVG art, custom CSS and Tailwind's base layer. It is designed for Vercel.

## Requirements

- Node.js 20.9+ (Node 22 recommended)
- npm 10+
- VS Code or any editor
- Internet access **for the first npm install** (dependencies are not bundled)

## Getting started on Windows (PowerShell)

```powershell
Expand-Archive -Path "$HOME\Downloads\FOR_EMILY_EXPERIENCE_V1.1.zip" -DestinationPath "$HOME\Desktop\for-emily" -Force
cd "$HOME\Desktop\for-emily\for-emily"
npm install
npm run dev
```

If the archive was extracted directly without its enclosing folder, `cd` into the folder containing `package.json` instead.

Open `http://localhost:3000` on your computer. For mobile testing on the same Wi-Fi, run `npm run dev -- --hostname 0.0.0.0` and browse to your PC's LAN IP and port 3000. Only do this on a trusted network.

**Important lockfile note:** dependency installation was blocked in the authoring environment (`EAI_AGAIN` accessing npm registry). The included `package-lock.json` is a *bootstrap manifest* with root constraints only; it is **not yet a resolved dependency lock**. Your first `npm install` will populate it. Commit the resolved lockfile before relying on `npm ci` or deploying. Do not claim the Next build was already verified.

## Commands

```bash
npm run dev          # development server
npm run typecheck    # TypeScript semantic check (after npm install)
npm run lint         # ESLint (after npm install)
npm run build        # Next.js production build (after npm install)
npm run start        # serve production build
npm run test:static  # source/preview checks, requires Node only
```

## How to customize

Edit **`content/config.ts`**:

- `recipient`: Emily.
- `accountingQuestion`: replace empty text with one real economic/accounting question when you know what to ask.
- `contactUrl`: Instagram profile, other HTTPS URL, or `mailto:` URL. Leave empty to display only the working copy-message option.
- `contactLabel`: contact button label.
- `suggestedMessage`: text offered for copying.
- `audioFile`: optional **locally hosted, legally licensed** file, e.g. `/audio/ambient.mp3` saved under `public/audio/` (create directory). Empty means a soft synthesized Web Audio drone that starts only after a click.

Change on-screen copy in `content/copy.ts`. The remaining paper-style fields and post-response thank-you text are in the appropriate scene components. **Do not add Emily's personal photos without her consent.**

The app is intentionally without a backend. Selecting "Napíšem ti" displays contact/copy options: it does **not** record an acceptance or send a message. Negative or undecided responses stay in the current browser only.

## Structure

```text
app/                  Next App Router pages, metadata, global styles
components/Experience.tsx  five-act controller, navigation, WOW reveal
components/scenes/    Arrival, Dossier, Details, Analysis, Invitation
components/visuals/   SVG and CSS artwork
components/ui/        reusable buttons and opt-in audio
content/              content and personalization settings
lib/                  scene types and constants
public/               favicon and generic Open Graph art
preview/              offline interactive reference build
 tests/               static source integrity tests
DEPLOYMENT.md         safe deployment walkthrough
QA_REPORT.md          exact verification status
RELEASE_CHECKLIST.md  before-sharing checklist
```

## Accessibility & behavior

- All buttons are actual buttons or anchors, with visible focus outlines.
- Voice/audio off by default; no forced autoplay or streaming.
- Users can skip to the invitation at any stage.
- `prefers-reduced-motion` simplifies or removes transitions.
- No cookies, fingerprinting, analytics or backend storage.
- The page is marked `noindex`, but **that is not access control**.

## Caveats

- The project has not been built against installed dependencies in this environment due to npm registry DNS failure. Verify `npm install`, `typecheck`, `lint`, and `build` locally before sending.
- iPhone Safari and actual mobile devices were not available for hands-on testing here.
- Visual QA of the Next React app was not verified; the included offline preview lets you review appearance and interaction independently.
- Font families are specified with local fallbacks; fonts are not embedded or distributed. This avoids exposing font files and external font requests. You may license/self-host your preferred typefaces separately.
