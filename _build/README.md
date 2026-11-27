# Build

The live pages (`index.html`, `uz/index.html`, `sitemap.xml`, `robots.txt`) are generated — do not edit them by hand.

| Change | Where |
|---|---|
| Layout / markup | `_build/template.html` |
| Texts (RU, UZ), case details, meta tags | `assets/js/i18n.js` |
| Contacts (Telegram, phone, e-mail) | `CONTACTS` at the top of `assets/js/main.js` |
| Styles / behaviour | `assets/css/style.css`, `assets/js/main.js` |
| Site URL (custom domain) | `SITE` in `_build/build.js` |

```bash
node _build/build.js   # pages + sitemap.xml + robots.txt
node _build/og.js      # social preview assets/img/og.jpg (needs Playwright)
```

Folders starting with `_` are not published by GitHub Pages.
