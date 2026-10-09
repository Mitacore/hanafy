# Handoff

## Status
Shared AI-collaboration setup is being added on branch `ai-collab-setup`.

## Verified project facts
- `index.html` is the complete static page currently being treated as the provisional canonical source.
- `assets/css/style.css` exists and includes existing focus/mobile behavior.
- `assets/js/app.js` initializes the storyboard carousels and can replace some Google Drive links with locally mirrored files.
- `.github/workflows/import-portfolio-assets.yml` mirrors Drive-linked project files into `assets/projects/` and commits them; it does not run a Vite site build or deploy the site.
- The local-project mapping in `app.js` currently supports the same Hungary and China Drive IDs used by `index.html`.
- The Qatar National Day mismatch between `index.html` and `vercel-cdn-index.html` is still unresolved.

## Known caution areas
- `vercel-cdn-index.html` appears to be a derived/static-CDN variant, but do not delete it yet.
- Old Vite/React/Gemini files are present but should not be removed until deployment/config usage is explicitly verified.
- Do not treat the inline AI-storyboard pixel transform as a fatal bug without considering `app.js`, which re-renders carousel transforms at runtime.

## For the next AI
Read `TASK.md`, `DECISIONS.md`, and the relevant source files before editing. Do not rely on old chat history as the source of truth.
