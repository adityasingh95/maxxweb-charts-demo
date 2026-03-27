# GitHub Pages deployment

This repository is configured for GitHub Pages deployment using a GitHub Actions workflow at:

- `.github/workflows/deploy-pages.yml`

## One-time setup in GitHub

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Save the setting.

After that, every push to `main` will deploy the site automatically.

## Expected site URL

For this repository, the site URL should be:

- `https://adityasingh95.github.io/maxxweb-charts-demo/`

## Notes

- The site is a static deployment of the repo root.
- The logo path remains `/assets/images/logo.png`.
- Add the real logo file at that path for a closer visual match.
