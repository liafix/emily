# Deploy to Vercel — after final review

## 1. Local verification

1. Unzip the project into a new folder and open it in VS Code.
2. Run `npm install` while connected to the internet. This generates a fully resolved lockfile; the supplied lockfile is only a root-level bootstrap manifest because the authoring environment had no npm access.
3. Run `npm run typecheck`, `npm run lint`, `npm run test:static`, `npm run build`.
4. Fix any reported errors. Run `npm run dev` and open `http://localhost:3000`.
5. In `content/config.ts`, set a **real** contact URL if you want a contact button, and verify that the suggested message is okay to share. Leave `accountingQuestion` blank until you have a genuine one.
6. On an actual iPhone, test Safari in normal and Reduced Motion settings. Test audio off/on, all chapters, skip, all three answers, and clipboard fallback.
7. Verify there are no personal photos in the output or metadata.

## 2. Private GitHub repository

1. Create a new **private** repository on GitHub (e.g. `for-emily-private`).
2. From the project directory: `git init`, `git add .`, `git commit -m "Initial private experience"`, `git branch -M main`.
3. Add your own private remote: `git remote add origin <YOUR_PRIVATE_REPOSITORY_URL>`; then `git push -u origin main`.
4. Confirm `.gitignore` excludes `.env*`, `node_modules/`, `.next/`, `.vercel/`.
5. Do not push the photos shared in the chat. They are not in the project ZIP.

## 3. Vercel preview deployment

1. Vercel → Add New → Project → Import Git Repository.
2. Choose the private repository. Framework: Next.js; root: repository root.
3. Install command: `npm install` if the root-level bootstrap lock has not been resolved. After committing a fully resolved lockfile, Vercel may use `npm ci` as appropriate.
4. Build command: `npm run build`; output directory: leave the Next.js default.
5. Deploy a preview, open it on desktop and iPhone Safari.
6. Confirm `/icon.svg` loads, the console contains no errors, and navigation/reactions work.

## 4. Real access protection

**Private GitHub does not mean private Vercel website.** A random URL and `robots.noindex` do not prevent anyone with the URL from viewing it. For actual restricted access, use Vercel's supported deployment protection/password features subject to your account settings, or implement proper server-side authentication. Verify that the final production URL is protected if that is required before sharing the link.

If production protection is not available, publish only if you accept that anyone with the URL can view harmless copy with Emily's first name. No private photographs or specific private school information should be posted. Avoid treating guessable URLs as access control.

## 5. Optional domain & preview card

`public/og.png` is the generic 1200×630 social preview and is referenced by Next metadata; `public/og.svg` is its editable source. Before sending, verify social preview behavior on the actual platform you use, and if needed add a compatible raster Open Graph image without personal photos.

## 6. Final sharing

- Do not deploy automatically or message Emily as part of the coding task.
- After QA, send the link yourself with a normal, low-pressure message.
- Respect either answer. The website does not record or transmit her reaction.
