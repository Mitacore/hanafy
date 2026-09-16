# Hanafy Artfolio — Standalone Static Build

This package is an independent static copy of the exported ChatGPT Site.

## What is included
- Rendered portfolio HTML
- Original CSS snapshot
- Local image assets
- Standalone JavaScript recreating the interactive motion streams, pause/play controls, concept-art album, storyboard carousels, drag/swipe behavior, and internal navigation
- Original Google Drive artwork links
- Vercel and Netlify deployment config

## Local preview
Run a local static server from this folder, e.g. `python -m http.server 8000`, then open `http://localhost:8000`.

## Deployment
Upload the folder to Vercel/Netlify or connect it to a GitHub repository. The site itself does not require ChatGPT Plus or ChatGPT credits once hosted externally.

## Note
The original ChatGPT Sites framework runtime was intentionally removed. The site uses the saved rendered DOM and its original CSS, with a small standalone runtime for interactions.
