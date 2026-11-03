# Mechanical Engineering Portfolio — Starter Website

A minimal responsive React/Vite portfolio with interactive category filters, accessible project pop-ups, and five starter project summaries.

## Preview on your computer

1. Install Node.js LTS from https://nodejs.org/ if needed.
2. Unzip the project, open the `mech-portfolio` folder in VS Code.
3. Open Terminal inside that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the **Local** URL printed in the terminal (typically `http://localhost:5173`).
5. Edits to `src/data.js` or `src/styles.css` update the page automatically.

## What to edit first

- `src/data.js`: headline, biography, university details, project descriptions and your real email/LinkedIn/GitHub/resume URLs.
- `public/*.svg`: illustrative placeholder artwork. Replace with your own CAD renders, prototypes, or demonstrations and update `image` in `src/data.js`.
- `src/styles.css`: colors, typography, sizes and spacing.
- `src/main.jsx`: React components and interactions.

**Note:** Current images are intentionally schematic illustrations, **not** photographs or CAD from your projects. The contact area only displays links once you add real URLs.

## Publish

Use `npm run build` to compile to the `dist/` folder. Deploy to Vercel (import a GitHub repository and choose Vite defaults), or use GitHub Pages with an appropriate deployment workflow/base path.

## Technical notes

- No tracking/analytics included.
- The font is loaded from Google Fonts and falls back to system fonts when offline.
- The project contains public-facing descriptions based on information provided; review every claim and confirm lab/company confidentiality requirements before publishing.
