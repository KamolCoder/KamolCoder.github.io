#!/usr/bin/env node
/*
 * Static build for kamolcoder.github.io.
 *
 *   node _build/build.js
 *
 * Renders, for every language (RU at /, UZ at /uz/):
 *   - the home page from _build/template.html
 *   - service pages  /services/<slug>/   (content: _build/content.js)
 *   - case pages     /projects/<slug>/   (content: _build/content.js + assets/js/i18n.js)
 * plus sitemap.xml and robots.txt.
 *
 * Shared blocks live in _build/partials/. Folders starting with "_" are not
 * published by GitHub Pages (Jekyll), so sources stay out of the live site.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { SERVICES, CASES, TEXT } = require("./content");

const SITE = "https://kamolcoder.github.io"; // change when a custom domain is connected
const ROOT = path.resolve(__dirname, "..");
const LANGS = {
  ru: { prefix: "/", ogLocale: "ru_RU", ogLocaleAlt: "uz_UZ", fontSubset: "cyrillic" },
  uz: { prefix: "/uz/", ogLocale: "uz_UZ", ogLocaleAlt: "ru_RU", fontSubset: "latin" }
};

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "assets/js/i18n.js"), "utf8"), sandbox);
const I18N = sandbox.window.I18N;
const read = (f) => fs.readFileSync(path.join(__dirname, f), "utf8");
const TEMPLATE = read("template.html");
const PARTIALS = { head: read("partials/head.html"), nav: read("partials/nav.html"), contact: read("partials/contact.html") };

// Optional personal photo: put assets/img/me.webp (or me.jpg), ~800x1000, and rebuild.
const PHOTO = ["me.webp", "me.jpg"].find((f) => fs.existsSync(path.join(ROOT, "assets/img", f)));

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const sitemapEntries = [];

/* ---------------- paths ---------------- */
const pagePath = (lang, slug) => LANGS[lang].prefix + (slug ? `${slug}/` : "");
const baseFor = (p) => "../".repeat(p.split("/").filter(Boolean).length);
const rel = (from, to) => (baseFor(from) + to.replace(/^\//, "")) || "./";

/* ---------------- helpers ---------------- */
function translator(lang) {
  return (k) => {
    const v = I18N[lang][k] ?? I18N.ru[k];
    if (v === undefined) throw new Error(`[${lang}] missing translation: ${k}`);
    return v;
  };
}

const PF_CLASS = { Web: "web", API: "web", "1С": "web", Mobile: "mobile", Android: "mobile", Desktop: "desktop", Telegram: "bot" };
const pfTags = (list) => list.map((p) => `<span class="pf pf--${PF_CLASS[p] || "web"}">${esc(p)}</span>`).join("");
const ART = { timkon: "timkon", delivery: "delivery", corpsite: "site", car: "car", finance: "finance", crm: "crm", loyalty: "bot" };

function caseShortName(lang, id) {
  const t = translator(lang);
  return { timkon: "Timkon", car: "Car Launcher" }[id] || t(`case.${id}.title`);
}
function caseShortText(lang, id) {
  return id === "timkon" ? translator(lang)("timkon.lead") : translator(lang)(`case.${id}.text`);
}

function caseCard(lang, from, id) {
  const c = CASES[id];
  const ui = TEXT[lang].ui;
  return `
          <article class="case glow-card reveal" data-tilt>
            <div class="case__art case__art--${ART[id]}"><span class="ico">${c.icon}</span></div>
            <div class="case__tags">${pfTags(c.platforms)}</div>
            <h3>${esc(caseShortName(lang, id))}</h3>
            <p>${esc(caseShortText(lang, id))}</p>
            <a href="${rel(from, pagePath(lang, c.slug))}" class="case__more case-link">${esc(ui.more)} →</a>
          </article>`;
}

function serviceCard(lang, from, id) {
  const s = TEXT[lang].services[id];
  const ui = TEXT[lang].ui;
  return `
          <a class="pill-card glow-card reveal link-card" href="${rel(from, pagePath(lang, SERVICES[id].slug))}">
            <b>${{ web: "🌐", mobile: "📱", desktop: "🖥️", integration: "🔗" }[id]}</b>
            <div><h4>${esc(s.name)}</h4><p>${esc(ui.more)} →</p></div>
          </a>`;
}

function breadcrumbs(lang, from, items) {
  // items: [[label, path]]
  const html = items.map(([label, p], i) => (i === items.length - 1
    ? `<span aria-current="page">${esc(label)}</span>`
    : `<a href="${p === from ? "#top" : rel(from, p)}">${esc(label)}</a>`)).join('<span class="crumbs__sep">/</span>');
  const ld = {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([label, p], i) => ({ "@type": "ListItem", position: i + 1, name: label, item: SITE + (p || from) }))
  };
  return { html: `<nav class="crumbs" aria-label="Breadcrumb">${html}</nav>`, ld };
}

const PERSON = {
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Kamol",
  url: SITE + "/",
  address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
  sameAs: ["https://github.com/KamolCoder", "https://timkon.uz"]
};

function footer(lang, from) {
  const t = translator(lang);
  const ui = TEXT[lang].ui;
  const home = pagePath(lang, "");
  const svc = Object.keys(SERVICES).map((id) => `<li><a href="${rel(from, pagePath(lang, SERVICES[id].slug))}">${esc(TEXT[lang].services[id].name)}</a></li>`).join("");
  const cs = Object.keys(CASES).map((id) => `<li><a href="${rel(from, pagePath(lang, CASES[id].slug))}">${esc(caseShortName(lang, id))}</a></li>`).join("");
  const base = baseFor(from);
  return `  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="${from === home ? "#top" : rel(from, home)}" class="logo" aria-label="Kamol"><span class="logo__mark">K</span><span class="logo__text">kamol<span class="accent">.</span>dev</span></a>
          <p>${esc(t("meta.jobTitle"))}</p>
          <p>${esc(t("footer.city"))}</p>
        </div>
        <div><h4>${esc(ui.footerServices)}</h4><ul>${svc}</ul></div>
        <div><h4>${esc(ui.footerProjects)}</h4><ul>${cs}</ul></div>
      </div>
      <div class="footer__inner">
        <span>© <span id="year">2026</span> Kamol · ${esc(t("footer.city"))}</span>
        <span class="footer__hint">${esc(t("footer.hint"))}</span>
      </div>
    </div>
  </footer>

  <script src="${base}assets/js/i18n.js"></script>
  <script src="${base}assets/js/main.js"></script>
</body>
</html>`;
}

/* ---------------- render core ---------------- */
function render(lang, slug, body, page) {
  const cfg = LANGS[lang];
  const t = translator(lang);
  const p = pagePath(lang, slug);
  const base = baseFor(p);
  const home = pagePath(lang, "");
  const isHome = p === home;
  const vars = {
    lang,
    site: SITE,
    url: SITE + p,
    urlRu: SITE + pagePath("ru", slug),
    urlUz: SITE + pagePath("uz", slug),
    base,
    home: isHome ? "" : rel(p, home),
    logoHref: isHome ? "#top" : rel(p, home),
    ruHref: lang === "ru" ? "#top" : rel(p, pagePath("ru", slug)),
    uzHref: lang === "uz" ? "#top" : rel(p, pagePath("uz", slug)),
    ogLocale: cfg.ogLocale,
    ogLocaleAlt: cfg.ogLocaleAlt,
    ogType: page.ogType || "website",
    ruActive: lang === "ru" ? " is-active" : "",
    uzActive: lang === "uz" ? " is-active" : "",
    rotator0: esc(t("hero.rotator")[0]),
    aboutPhoto: PHOTO
      ? `<figure class="about__photo reveal"><img src="${base}assets/img/${PHOTO}" alt="${esc(t("alt.me"))}" loading="lazy" width="800" height="1000"><figcaption><span class="badge__dot"></span>Kamol · ${esc(t("footer.city"))}</figcaption></figure>`
      : "",
    pageTitle: esc(page.title),
    pageDescription: esc(page.description),
    ogTitle: esc(page.ogTitle || page.title),
    preload: [`unbounded-${cfg.fontSubset}-800-normal.woff2`, `manrope-${cfg.fontSubset}-400-normal.woff2`]
      .map((f) => `  <link rel="preload" href="${base}assets/fonts/${f}" as="font" type="font/woff2" crossorigin>`).join("\n"),
    jsonld: JSON.stringify({ "@context": "https://schema.org", "@graph": page.jsonld }).replace(/</g, "\\u003c")
  };

  let html = body
    .replace(/\{\{partial:(\w+)\}\}/g, (_, n) => PARTIALS[n])
    .replace(/\{\{footer\}\}/g, footer(lang, p))
    .replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (_, open, _tag, key, _old, close) => open + esc(t(key)) + close)
    .replace(/\{\{caseUrl:(\w+)\}\}/g, (_, id) => rel(p, pagePath(lang, CASES[id].slug)))
    .replace(/\{\{serviceUrl:(\w+)\}\}/g, (_, id) => rel(p, pagePath(lang, SERVICES[id].slug)))
    .replace(/\{\{([\w.]+)\}\}/g, (_, k) => (k in vars ? vars[k] : esc(t(k))));

  const left = html.match(/\{\{[^}]*\}\}/);
  if (left) throw new Error(`[${lang} ${p}] unresolved placeholder ${left[0]}`);
  html = "<!DOCTYPE html>\n<!-- Generated by _build/build.js — edit _build/, not this file. -->\n" + html.replace(/^<!DOCTYPE html>\s*/i, "");

  const out = path.join(ROOT, p, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  if (lang === "ru") sitemapEntries.push({ slug, priority: page.priority });
  console.log(`built ${path.relative(ROOT, out)}`);
}

const shell = (main) => `{{partial:head}}\n{{partial:nav}}\n  <main id="top">\n${main}\n{{partial:contact}}\n  </main>\n{{footer}}\n`;

/* ---------------- home ---------------- */
function buildHome(lang) {
  const t = translator(lang);
  const url = SITE + pagePath(lang, "");
  const services = ["svc.web.title", "svc.mobile.title", "svc.desktop.title", "svc.int.title"];
  render(lang, "", TEMPLATE, {
    title: t("meta.title"),
    description: t("meta.description"),
    ogTitle: t("meta.ogTitle"),
    priority: "1.0",
    jsonld: [
      { ...PERSON, jobTitle: t("meta.jobTitle"), image: `${SITE}/assets/img/${PHOTO || "og.jpg"}`,
        knowsAbout: ["Django", "FastAPI", "Flutter", "FlutterFlow", "PySide6", "1C OData", "Telegram Bot API", "PostgreSQL", "Firebase"] },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#service`,
        name: "kamol.dev",
        description: t("meta.description"),
        url,
        inLanguage: lang,
        image: `${SITE}/assets/img/og.jpg`,
        founder: { "@id": `${SITE}/#person` },
        areaServed: [{ "@type": "City", name: "Tashkent" }, { "@type": "Country", name: "Uzbekistan" }],
        address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t("services.eyebrow"),
          itemListElement: services.map((k) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: t(k) } }))
        }
      },
      { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE + "/", name: "kamol.dev", inLanguage: ["ru", "uz"] }
    ]
  });
}

/* ---------------- service page ---------------- */
function buildService(lang, id) {
  const s = TEXT[lang].services[id];
  const ui = TEXT[lang].ui;
  const slug = SERVICES[id].slug;
  const p = pagePath(lang, slug);
  const home = pagePath(lang, "");
  const crumbs = breadcrumbs(lang, p, [[ui.home, home], [ui.services, home + "#services"], [s.name, p]]);

  const offer = s.offer.map(([h, d], i) => `
          <article class="feature glow-card reveal"><span class="feature__n">${String(i + 1).padStart(2, "0")}</span><h3>${esc(h)}</h3><p>${esc(d)}</p></article>`).join("");
  const why = s.why.map(([h, d]) => `
          <div class="pill-card glow-card reveal"><b>✦</b><div><h4>${esc(h)}</h4><p>${esc(d)}</p></div></div>`).join("");
  const faq = s.faq.map(([q, a]) => `
          <details class="faq__item reveal"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  const others = Object.keys(SERVICES).filter((k) => k !== id).map((k) => serviceCard(lang, p, k)).join("");

  const main = `
    <section class="page-hero">
      <div class="container">
        ${crumbs.html}
        <span class="eyebrow reveal">${esc(ui.serviceLabel)}</span>
        <h1 class="page-title reveal">${esc(s.h1)}</h1>
        <p class="page-lead reveal">${esc(s.lead)}</p>
        <div class="hero__cta reveal">
          <a href="#contact" class="btn btn--primary magnetic">${esc(ui.discuss)} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a href="#related" class="btn btn--ghost magnetic">${esc(ui.relatedCases)}</a>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.whatIBuild)}</h2></div>
        <div class="features">${offer}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container about">
        <div class="about__text reveal">
          <h2 class="section__title">${esc(ui.whyMe)}</h2>
          <h3 class="stack-title">${esc(ui.stack)}</h3>
          <ul class="chips">${s.stack.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="about__cards">${why}
        </div>
      </div>
    </section>

    <section class="section section--tight" id="related">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.relatedCases)}</h2></div>
        <div class="cases">${SERVICES[id].cases.map((c) => caseCard(lang, p, c)).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container faq-wrap">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.faq)}</h2></div>
        <div class="faq">${faq}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.relatedServices)}</h2></div>
        <div class="link-cards">${others}
        </div>
      </div>
    </section>`;

  render(lang, slug, shell(main), {
    title: s.title,
    description: s.description,
    ogType: "website",
    priority: "0.9",
    jsonld: [
      PERSON,
      crumbs.ld,
      {
        "@type": "Service",
        name: s.h1,
        serviceType: s.name,
        description: s.description,
        url: SITE + p,
        inLanguage: lang,
        provider: { "@id": `${SITE}/#person` },
        areaServed: [{ "@type": "City", name: "Tashkent" }, { "@type": "Country", name: "Uzbekistan" }]
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
      }
    ]
  });
}

/* ---------------- case page ---------------- */
function buildCase(lang, id) {
  const c = CASES[id];
  const ct = TEXT[lang].cases[id];
  const data = translator(lang)("cases")[id]; // task / solution / stack
  const t = translator(lang);
  const ui = TEXT[lang].ui;
  const p = pagePath(lang, c.slug);
  const home = pagePath(lang, "");
  const crumbs = breadcrumbs(lang, p, [[ui.home, home], [ui.projects, home + "#cases"], [caseShortName(lang, id), p]]);
  const base = baseFor(p);

  const gallery = c.gallery ? `
    <section class="section section--tight">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.screens)}</h2></div>
        <div class="gallery">${c.gallery.map(([g, h]) => `
          <figure class="phone phone--flat reveal"><img src="${base}assets/img/timkon/${g}.webp" alt="${esc(t(`alt.${g}`))}" loading="lazy" width="600" height="${h}"></figure>`).join("")}
        </div>
      </div>
    </section>` : "";

  const others = Object.keys(CASES).filter((k) => k !== id).slice(0, 3);
  const more = (id === "timkon" ? others : ["timkon", ...others.filter((k) => k !== "timkon")].slice(0, 3)).map((k) => caseCard(lang, p, k)).join("");

  const main = `
    <section class="page-hero">
      <div class="container">
        ${crumbs.html}
        <div class="case__tags reveal">${pfTags(c.platforms)}</div>
        <h1 class="page-title reveal">${esc(ct.h1)}</h1>
        <p class="page-lead reveal">${esc(ct.lead)}</p>
        <div class="hero__cta reveal">
          <a href="#contact" class="btn btn--primary magnetic">${esc(ui.discuss)} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          ${c.link ? `<a href="${c.link}" class="btn btn--ghost magnetic" target="_blank" rel="noopener">${esc(ui.visit)} ↗</a>` : ""}
        </div>
        ${c.link || id === "car" ? "" : `<p class="page-note reveal">${esc(ui.nda)}</p>`}
      </div>
    </section>
${gallery}
    <section class="section section--tight">
      <div class="container">
        <div class="case-study glow-card reveal">
          <div><h2>${esc(ui.task)}</h2><p>${esc(data.task)}</p></div>
          <div><h2>${esc(ui.solution)}</h2><ul class="ticks">${data.solution.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container about">
        <div class="about__text reveal">
          <h2 class="section__title">${esc(ui.value)}</h2>
          <h3 class="stack-title">${esc(ui.stack)}</h3>
          <ul class="chips">${data.stack.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="about__cards">${ct.value.map((v) => `
          <div class="pill-card glow-card reveal"><b>✓</b><div><p class="pill-card__strong">${esc(v)}</p></div></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.relatedServices)}</h2></div>
        <div class="link-cards">${c.services.map((k) => serviceCard(lang, p, k)).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="section__head reveal"><h2 class="section__title">${esc(ui.allProjects)}</h2></div>
        <div class="cases">${more}
        </div>
      </div>
    </section>`;

  render(lang, c.slug, shell(main), {
    title: ct.title,
    description: ct.description,
    ogType: "article",
    priority: "0.7",
    jsonld: [
      PERSON,
      crumbs.ld,
      {
        "@type": "CreativeWork",
        name: ct.h1,
        description: ct.description,
        url: SITE + p,
        inLanguage: lang,
        author: { "@id": `${SITE}/#person` },
        keywords: data.stack.join(", "),
        ...(c.link ? { sameAs: c.link } : {})
      }
    ]
  });
}

/* ---------------- sitemap ---------------- */
function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = sitemapEntries.flatMap(({ slug, priority }) => {
    const alts = Object.keys(LANGS).map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${pagePath(l, slug)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pagePath("ru", slug)}"/>`).join("\n");
    return Object.keys(LANGS).map((l) =>
      `  <url>\n    <loc>${SITE}${pagePath(l, slug)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n${alts}\n  </url>`);
  }).join("\n");
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
  fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  console.log(`built sitemap.xml (${sitemapEntries.length * 2} urls), robots.txt`);
}

for (const lang of Object.keys(LANGS)) {
  buildHome(lang);
  Object.keys(SERVICES).forEach((id) => buildService(lang, id));
  Object.keys(CASES).forEach((id) => buildCase(lang, id));
}
sitemap();
