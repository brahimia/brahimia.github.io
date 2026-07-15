# Personal website — Babak Rahimi Ardabili (iPortfolio-style)

A note on scope: this site is built with original HTML/CSS/JS in the same
*genre* as the reference site you shared (photo header, rotating role text,
resume timeline, skill bars, filterable publication grid, achievements
cards, contact grid). It does not reuse that site's actual code or image
assets — those belong to someone else — but the layout pattern, section
order, and interaction style closely match it, filled entirely with your
own content.

## Files (all needed — keep folder structure intact)

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/profile.jpg`
- `assets/CV.pdf`

## Deploying on GitHub Pages

1. Upload all files above to your repo, preserving the folder structure
   (`assets/css/`, `assets/js/`, `assets/img/` as subfolders).
2. Repo → **Settings → Pages**.
3. **Source**: Deploy from a branch → branch `main` → folder `/ (root)`.
4. Save, wait 1–2 minutes, then use the URL shown at the top of that page.

## Before publishing

Open `index.html` and replace the placeholder links:
- `https://linkedin.com` → your real LinkedIn URL
- `https://scholar.google.com` → your real Google Scholar URL
- `https://github.com` → your real GitHub URL (in the header)

## What's interactive on this version

- Rotating "I'm a ___" role text in the hero (cycles through your four
  tracks: postdoctoral researcher, data scientist, policy analyst, UX
  researcher).
- Skill bars animate in as you scroll to them.
- Publications grid is filterable by Policy / ML / UX.
- Nav highlights the section you're currently viewing.

## Editing later

All content is in `index.html`. Colors, fonts, and spacing are in
`assets/css/style.css` under the `:root` block. Interactive behavior is in
`assets/js/main.js`.
