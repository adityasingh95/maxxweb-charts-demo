# MaxxWeb Charts Demo

A lightweight static demo page that keeps the MaxxWeb-style header and renders a standard TradingView chart beneath it.

## Files

- `index.html` — page structure and header markup
- `styles.css` — header and layout styling
- `app.js` — TradingView widget initialization

## Run locally

Because this is a static site, you can open `index.html` directly in a browser, but serving it from a local HTTP server is recommended.

### Python

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`

## Notes

- The header logo points to `/assets/images/logo.png`.
- Add your real `logo.png` file at that path for a complete visual match.
- The current implementation uses the public TradingView widget and defaults to `FX:EURUSD`.
