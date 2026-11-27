#!/usr/bin/env node
// Renders _build/og.html into assets/img/og.jpg (1200x630) with Playwright.
"use strict";
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto("file://" + path.join(__dirname, "og.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(__dirname, "..", "assets/img/og.jpg"), type: "jpeg", quality: 88 });
  await browser.close();
  console.log("built assets/img/og.jpg");
})();
