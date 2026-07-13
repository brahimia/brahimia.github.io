# Personal website — Babak Rahimi Ardabili (simple version)

Plain HTML/CSS/JS, no build step. Ready for GitHub Pages.

## Files to upload to your repo (all at the root, keep folder structure)

- `index.html`
- `styles.css`
- `script.js`
- `assets/img/profile.jpg`
- `assets/CV.pdf`

## Deploying / re-deploying on GitHub Pages

1. In your repo, upload these files — if `index.html` already exists, you can just replace it (and the same for `styles.css`, `script.js`), and add the `assets` folder.
2. Go to **Settings → Pages** in your repo.
3. Under **Source**, confirm **Deploy from a branch** is selected, branch `main`, folder `/ (root)`.
4. Save if you changed anything. Wait 1–2 minutes.
5. Your site is live at the URL shown at the top of that Pages settings page.

## Before publishing — update these placeholder links

Open `index.html` and search for:
- `https://linkedin.com` → replace with your real LinkedIn profile URL (appears twice)
- `https://scholar.google.com` → replace with your real Google Scholar profile URL (appears three times)

## Editing later

All content lives in `index.html`, split into commented sections (`<!-- ABOUT -->`, `<!-- RESUME -->`, etc). Colors and spacing are in `styles.css` under `:root` at the top.
