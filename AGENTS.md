# Hanafy Portfolio — AI Working Instructions

## Start here
1. Read `TASK.md`.
2. Read `HANDOFF.md`.
3. Read `DECISIONS.md`.
4. Read `lessons.md`.
5. Inspect only the project files needed for the current task before proposing edits.

## Project goal
Maintain and improve Mohamed Hanafy's visual-artist / 2D-artist portfolio without losing its existing visual identity, artwork, structure, or authorship/provenance labels.

## Current technical baseline
- Treat `index.html` as the provisional canonical page source.
- Main site assets are under `assets/`.
- `assets/js/app.js` controls interactions and some Drive-to-local project link replacement.
- `.github/workflows/import-portfolio-assets.yml` mirrors linked Google Drive files into `assets/projects/`; it is not a site-deploy workflow.
- Do not assume Vercel, Vite, GitHub Pages, or old preview files are unused until verified.

## Safety rules
- Do not delete, rename, move, or rewrite deployment/config files unless `TASK.md` explicitly asks for it.
- Do not touch `vercel-cdn-index.html`, `vercel-preview-index.html`, `package.json`, `vite.config.ts`, `tsconfig.json`, or workflow files unless the task specifically requires them.
- Do not redesign the portfolio unless explicitly requested.
- Preserve existing colors, typography, spacing logic, artwork crops, and motion style unless the task says otherwise.
- Preserve authorship/provenance wording. Do not turn human-made work into AI-assisted work or vice versa.
- Never invent missing links, project names, credits, dates, or file relationships.
- If evidence is incomplete, state what is known vs inferred.

## Editing rules
- Prefer the smallest safe change that solves the task.
- Before changing HTML, check whether CSS or JS already handles the behavior.
- Before changing asset paths, confirm the target file exists.
- For link changes, preserve accessibility attributes and external-link safety.
- Keep mobile behavior in mind.
- Avoid adding frameworks or dependencies for simple static-site fixes.

## Review workflow
- One AI may implement; the other should review.
- The implementing AI must update `HANDOFF.md` with:
  - goal
  - files changed
  - what changed
  - anything uncertain
  - what the reviewer should inspect
- The reviewer should read the changed files and report issues before rewriting anything.

## Communication
- Be concise and practical.
- Prioritize recruiter-facing impact and reliability.
- Separate: confirmed facts / inference / recommendation.
