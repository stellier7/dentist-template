/**
 * Verifies the dentists Embla carousel loops with neighbors visible and forward motion.
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
    const track = document.querySelector("[data-dentists-grid]");
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
          left: rect.left,
        };
      })
      .filter((entry) => entry.overlap > 16)
      .sort((a, b) => a.centerDist - b.centerDist);

    const leftPeek = cards.some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.right > viewportRect.left + 8 && rect.left < viewportRect.left + 48;
    });

    const rightPeek = cards.some((card) => {
      const rect = card.getBoundingClientRect();
      return rect.left < viewportRect.right - 8 && rect.right > viewportRect.right - 48;
    });

    return {
      centered: visible[0]?.name || "",
      neighborCount: visible.length,
      leftPeek,
      rightPeek,
      loopActive: viewport.dataset.emblaLoop === "true",
      scrollLeft: viewport.scrollLeft,
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

    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1280, height: 800 },
    ]) {
      const page = await browser.newPage({ viewport });
      await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
      await page.locator('[data-section="dentists"]').scrollIntoViewIfNeeded();
      await page.waitForTimeout(1200);

      const initial = await getSlideSnapshot(page);
      if (!initial) throw new Error("Dentists carousel not found");
      if (!initial.loopActive) throw new Error(`Embla loop inactive at ${viewport.width}px`);
      if (initial.centered !== "Dr. Carlos Mendoza") {
        throw new Error(`Expected Carlos centered initially at ${viewport.width}px, got "${initial.centered}"`);
      }
      if (!initial.leftPeek || !initial.rightPeek) {
        throw new Error(
          `Expected neighbors on both sides at ${viewport.width}px (leftPeek=${initial.leftPeek}, rightPeek=${initial.rightPeek})`
        );
      }

      await page.evaluate(() => {
        document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
      });
      await page.waitForTimeout(700);
      const elenaSnap = await getSlideSnapshot(page);
      if (elenaSnap.centered !== "Dra. Elena Vasquez") {
        throw new Error(`Expected Elena after first advance at ${viewport.width}px`);
      }
      if (!elenaSnap.leftPeek || !elenaSnap.rightPeek) {
        throw new Error(
          `Expected neighbors on both sides at Elena slide (${viewport.width}px, leftPeek=${elenaSnap.leftPeek}, rightPeek=${elenaSnap.rightPeek})`
        );
      }

      const viewportEl = page.locator("[data-dentists-viewport]");
      const names = [];

      for (let i = 0; i < 6; i += 1) {
        await page.evaluate(() => {
          document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollNext();
        });
        await page.waitForTimeout(700);
        const snap = await getSlideSnapshot(page);
        if (!snap?.centered) throw new Error(`No centered slide after forward scroll #${i + 1}`);
        names.push(snap.centered);
      }

      if (!names.includes("Dr. Carlos Mendoza") || !names.includes("Dra. Elena Vasquez")) {
        throw new Error(`Forward scroll missing doctors at ${viewport.width}px: ${names.join(" -> ")}`);
      }

      for (let i = 0; i < 6; i += 1) {
        await page.evaluate(() => {
          document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.scrollPrev();
        });
        await page.waitForTimeout(700);
        const snap = await getSlideSnapshot(page);
        if (!snap?.centered) throw new Error(`No centered slide after backward scroll #${i + 1}`);
      }

      const beforeAutoplayIndex = await page.evaluate(
        () => document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.selectedScrollSnap() ?? -1
      );
      await page.waitForTimeout(5200);
      const afterAutoplayIndex = await page.evaluate(
        () => document.querySelector("[data-dentists-viewport]")?._dentistsEmblaApi?.selectedScrollSnap() ?? -1
      );
      if (beforeAutoplayIndex === afterAutoplayIndex) {
        throw new Error(`Autoplay did not advance slide index at ${viewport.width}px`);
      }

      await page.close();
    }

    await browser.close();
    console.log("PASS: dentists Embla carousel shows neighbors and loops forward.");
  } finally {
    server.kill("SIGTERM");
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
