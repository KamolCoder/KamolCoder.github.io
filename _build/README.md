# Build

All live HTML (`index.html`, `uz/`, `services/`, `projects/`), `sitemap.xml` and `robots.txt`
are generated — do not edit them by hand.

| Change | Where |
|---|---|
| Home page markup | `_build/template.html` |
| Shared blocks (head, menu, contact form) | `_build/partials/` |
| Footer, service and case page layout | `_build/build.js` |
| Home texts (RU, UZ), case task/solution/stack | `assets/js/i18n.js` |
| Service pages, case pages (meta, texts, FAQ) | `_build/content.js` |
| Contacts (Telegram, phone, e-mail) | `CONTACTS` at the top of `assets/js/main.js` |
| Your photo | put `assets/img/me.webp` (or `me.jpg`), 4:5, ~800×1000 |
| Site URL (custom domain) | `SITE` in `_build/build.js` |

```bash
node _build/build.js   # all pages + sitemap.xml + robots.txt
node _build/og.js      # social preview assets/img/og.jpg (needs Playwright)
```

Folders starting with `_` are not published by GitHub Pages.
