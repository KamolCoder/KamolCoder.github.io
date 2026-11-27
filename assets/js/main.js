/* kamol.dev — interactions. No dependencies. */
(() => {
  "use strict";

  // Fill these in to enable contacts and the Telegram form.
  const CONTACTS = {
    telegram: "",   // username without @, e.g. "kamol_dev"
    phone: "",      // e.g. "+998 90 123 45 67"
    email: "",      // e.g. "hello@example.com"
    github: "KamolCoder"
  };

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------------- i18n ---------------- */
  // Each language is a separate static page (/ and /uz/); JS only needs strings for dynamic UI.
  const dict = window.I18N;
  const lang = dict[document.documentElement.lang] ? document.documentElement.lang : "ru";
  const t = (key) => dict[lang][key] ?? dict.ru[key] ?? key;

  /* ---------------- Typing rotator ---------------- */
  const rotator = (() => {
    const el = $("#rotator");
    if (!el) return { reset() {} };
    let words = [], wi = 0, ci = 0, deleting = false, timer;
    function tick() {
      const w = words[wi];
      ci += deleting ? -1 : 1;
      el.textContent = w.slice(0, ci);
      let delay = deleting ? 45 : 85;
      if (!deleting && ci === w.length) { deleting = true; delay = 1900; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
      timer = setTimeout(tick, delay);
    }
    return {
      reset() {
        clearTimeout(timer);
        words = t("hero.rotator");
        wi = 0; ci = words[0].length; deleting = false;
        el.textContent = words[0];
        if (!reduced) timer = setTimeout(() => { deleting = true; tick(); }, 2200);
      }
    };
  })();

  /* ---------------- Nav ---------------- */
  const nav = $(".nav");
  const progress = $(".progress");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $(".burger").addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    $(".burger").setAttribute("aria-expanded", open);
  });
  $$(".nav__links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("is-open")));

  // Active section highlight
  const links = $$(".nav__links a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach((s) => spy.observe(s));

  /* ---------------- Reveal on scroll ---------------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      revealObs.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  // Stagger siblings inside the same parent
  const groups = new Map();
  $$(".reveal").forEach((el) => {
    const n = groups.get(el.parentElement) || 0;
    groups.set(el.parentElement, n + 1);
    el.style.setProperty("--d", `${Math.min(n, 6) * 0.08}s`);
    revealObs.observe(el);
  });
  const tl = $(".timeline");
  if (tl) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { tl.classList.add("is-visible"); o.disconnect(); } }, { threshold: 0.3 }).observe(tl);

  /* ---------------- Counters ---------------- */
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, to = +el.dataset.to, dur = 1600, t0 = performance.now();
      const step = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(step);
      };
      reduced ? (el.textContent = to) : requestAnimationFrame(step);
      countObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$(".counter").forEach((c) => countObs.observe(c));

  /* ---------------- Morphing device ---------------- */
  const device = $("#device");
  if (device) {
    const tabs = $$(".stage__tab");
    const ind = $(".stage__ind");
    const modes = ["web", "mobile", "desktop"];
    let modeIdx = 0, morphTimer, stageVisible = true, userPicked = false;

    function moveInd() {
      const a = tabs[modeIdx];
      ind.style.width = `${a.offsetWidth}px`;
      ind.style.transform = `translateX(${a.offsetLeft - 5}px)`;
    }
    function setMode(i) {
      modeIdx = i;
      device.classList.add("is-morphing");
      device.classList.remove(...modes.map((m) => `is-${m}`));
      device.classList.add(`is-${modes[i]}`);
      tabs.forEach((tb, k) => { tb.classList.toggle("is-active", k === i); tb.setAttribute("aria-selected", k === i); });
      moveInd();
      setTimeout(() => device.classList.remove("is-morphing"), 650);
    }
    function scheduleMorph() {
      clearTimeout(morphTimer);
      if (reduced || !stageVisible) return;
      morphTimer = setTimeout(() => { setMode((modeIdx + 1) % modes.length); scheduleMorph(); }, userPicked ? 7000 : 3600);
    }
    tabs.forEach((tb, i) => tb.addEventListener("click", () => { userPicked = true; setMode(i); scheduleMorph(); }));
    new IntersectionObserver(([e]) => { stageVisible = e.isIntersecting; scheduleMorph(); }).observe(device);
    addEventListener("resize", moveInd);
    document.fonts?.ready.then(moveInd);
    moveInd();

    // Live-ticking numbers inside the demo
    const lives = $$(".live");
    if (!reduced) setInterval(() => {
      if (!stageVisible) return;
      lives.forEach((el) => {
        const base = +el.dataset.base, step = +el.dataset.step;
        const v = base + step * (1 + Math.random() * 2);
        el.dataset.base = v;
        el.textContent = el.dataset.int ? Math.round(v).toLocaleString("ru-RU") : v.toFixed(1);
      });
    }, 1400);
  }

  /* ---------------- Timkon slideshow ---------------- */
  const slides = $$("#timkonSlides img");
  let si = 0;
  if (!reduced && slides.length) setInterval(() => {
    slides[si].classList.remove("is-on");
    si = (si + 1) % slides.length;
    slides[si].classList.add("is-on");
  }, 2800);

  /* ---------------- Case filter ---------------- */
  const cases = $$(".case");
  $$(".filter").forEach((f) => f.addEventListener("click", () => {
    $$(".filter").forEach((x) => x.classList.toggle("is-active", x === f));
    const v = f.dataset.filter;
    cases.forEach((c) => {
      const show = v === "all" || c.dataset.platforms.split(" ").includes(v);
      c.classList.toggle("is-hidden", !show);
      c.classList.remove("is-entering");
      if (show) { void c.offsetWidth; c.classList.add("is-entering", "is-visible"); }
    });
  }));

  /* ---------------- Whole card is clickable ---------------- */
  $$(".case, .flagship").forEach((card) => {
    const link = $(".case-link", card);
    if (!link) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest("a, button") || getSelection().toString()) return;
      link.click();
    });
  });

  /* ---------------- Pointer effects (desktop only) ---------------- */
  if (finePointer && !reduced) {
    const cursor = $(".cursor");
    let cx = -500, cy = -500, tx = -500, ty = -500;
    addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    })();

    $$(".glow-card").forEach((card) => card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }));

    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });

    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------------- Particles (hero background) ---------------- */
  (function particles() {
    const cv = $("#particles");
    if (reduced || !cv.getContext) return;
    const ctx = cv.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w, h, pts = [], mouse = { x: -1e4, y: -1e4 }, running = true;

    function resize() {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (w * h) / 22000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3
      }));
    }
    addEventListener("resize", resize);
    if (finePointer) addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) requestAnimationFrame(draw); });
    resize();

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      // Fade the field out as the user scrolls past the hero
      const fade = Math.max(0, 1 - scrollY / (innerHeight * 1.2));
      if (fade > 0) {
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 14400) { p.x += dx * 0.01; p.y += dy * 0.01; }
        }
        for (let i = 0; i < pts.length; i++) {
          const a = pts[i];
          for (let j = i + 1; j < pts.length; j++) {
            const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < 15000) {
              ctx.strokeStyle = `rgba(124,245,198,${(1 - d2 / 15000) * 0.18 * fade})`;
              ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
          ctx.fillStyle = `rgba(200,210,255,${0.5 * fade})`;
          ctx.beginPath(); ctx.arc(a.x, a.y, 1.3, 0, Math.PI * 2); ctx.fill();
        }
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  })();

  /* ---------------- Contacts + form ---------------- */
  function renderContacts() {
    const list = $("#contactLinks");
    if (!list) return;
    const items = [];
    if (CONTACTS.telegram) items.push(["✈️", `@${CONTACTS.telegram}`, `https://t.me/${CONTACTS.telegram}`]);
    if (CONTACTS.phone) items.push(["📞", CONTACTS.phone, `tel:${CONTACTS.phone.replace(/[^\d+]/g, "")}`]);
    if (CONTACTS.email) items.push(["✉️", CONTACTS.email, `mailto:${CONTACTS.email}`]);
    if (CONTACTS.github) items.push(["⌘", `github.com/${CONTACTS.github}`, `https://github.com/${CONTACTS.github}`]);
    list.replaceChildren(...items.map(([ico, label, href]) => {
      const li = document.createElement("li");
      const a = Object.assign(document.createElement("a"), { href, target: href.startsWith("http") ? "_blank" : "", rel: "noopener" });
      a.append(Object.assign(document.createElement("i"), { textContent: ico }), label);
      li.append(a);
      return li;
    }));
  }

  const form = $("#leadForm");
  const note = $("#formNote");
  if (form) form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    form.name.classList.toggle("is-invalid", !name);
    form.contact.classList.toggle("is-invalid", !contact);
    if (!name || !contact) {
      note.className = "form__note is-err";
      note.textContent = t("form.err");
      return;
    }
    const types = $$("input[name=type]:checked", form).map((i) => i.value).join(", ");
    const msg = [
      `${t("form.header")}`,
      `${t("form.lName")}: ${name}`,
      `${t("form.lContact")}: ${contact}`,
      types && `${t("form.lType")}: ${types}`,
      form.message.value.trim() && `${t("form.lMsg")}: ${form.message.value.trim()}`
    ].filter(Boolean).join("\n");

    if (CONTACTS.telegram) {
      window.open(`https://t.me/${CONTACTS.telegram}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      note.className = "form__note is-ok";
      note.textContent = t("form.ok");
      form.reset();
    } else {
      try { await navigator.clipboard.writeText(msg); } catch { /* clipboard may be blocked */ }
      note.className = "form__note is-ok";
      note.textContent = t("form.copied");
    }
  });

  $("#year").textContent = new Date().getFullYear();
  rotator.reset();
  renderContacts();
})();
