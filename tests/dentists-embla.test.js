/**
 * Verifies the dentists Embla carousel loops without large backward jumps.
 * Run: npm test (starts a local server automatically)
 */
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const http = require("http");

const PORT = 8765;
const BASE = `http://127.0.0.1:${PORT}`;

function waitForServer(url, timeoutMs = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(url, (res) => {
          res.resume();
          resolve();
        })
        .on("error", () => {
          if (Date.now() - start > timeoutMs) reject(new Error("Server did not start"));
          else setTimeout(tick, 100);
        });
    };
    tick();
  });
}

async function getSlideSnapshot(page) {
  return page.evaluate(() => {
    const viewport = document.querySelector("[data-dentists-viewport]");
    const track = document.querySelector("[data-dentists-track], [data-dentists-grid]");
    if (!viewport || !track) return null;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const cards = [...track.querySelectorAll(".dentist-card")];

    const visible = cards
      .map((card) => {
        const rect = card.getBoundingClientRect();
        const overlap = Math.max(
          0,
          Math.min(rect.right, viewportRect.right) - Math.max(rect.left, viewportRect.left)
        );
        return {
          name: card.querySelector("h3")?.textContent?.trim() || "",
          overlap,
          centerDist: Math.abs(rect.left + rect.width / 2 - viewportCenter),
        };
      })
      .filter((entry) => entry.overlap > 40)
      .sort((a, b) => a.centerDist - b.centerDist);

    return {
      centered: visible[0]?.name || "",
      neighbors: visible.map((entry) => entry.name),
      neighborCount: visible.length,
      scrollLeft: track.parentElement?.scrollLeft ?? track.scrollLeft,
    };
  });
}

async function run() {
  const server = spawn("python3", ["-m", "http.server", String(PORT)], {
    cwd: process.cwd(),
    stdio: "ignore",
  });

  try {
    await waitForServer(BASE);

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    await page.locator('[data-section="dentists"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);

    const initial = await getSlideSnapshot(page);
    if (!initial) throw new Error("Dentists carousel not found");
    if (initial.centered !== "Dr. Carlos Mendoza") {
      throw new Error(`Expected Carlos centered initially, got "${initial.centered}"`);
    }
    if (initial.neighborCount < 2) {
      throw new Error("Expected neighbors on both sides of the first slide");
    }

    const viewport = page.locator("[data-dentists-viewport]");
    const names = [];

    for (let i = 0; i < 5; i += 1) {
      await viewport.hover();
      await page.mouse.wheel(900, 0);
      await page.waitForTimeout(450);
      const snap = await getSlideSnapshot(page);
      if (!snap?.centered) throw new Error(`No centered slide after scroll #${i + 1}`);
      names.push(snap.centered);
    }

    const loopIndex = names.findIndex((name) => name === "Dr. Carlos Mendoza");
    if (loopIndex === -1) {
      throw new Error(`Forward loop did not return to Carlos. Saw: ${names.join(" -> ")}`);
    }

    for (let i = 0; i < 5; i += 1) {
      await viewport.hover();
      await page.mouse.wheel(-900, 0);
      await page.waitForTimeout(450);
      const snap = await getSlideSnapshot(page);
      if (!snap?.centered) throw new Error(`No centered slide after backward scroll #${i + 1}`);
      if (snap.neighborCount < 2) {
        throw new Error(`Slide "${snap.centered}" is missing a visible neighbor during backward loop`);
      }
    }

    await browser.close();
    console.log("PASS: dentists Embla carousel loops with neighbors visible on both sides.");
  } finally {
    server.kill("SIGTERM");
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
