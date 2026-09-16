import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const pagePath = path.resolve("app/hotel-doctor-phuket/page.tsx");

test("Hotel Doctor landing page has conversion-first, policy-safe essentials", () => {
  assert.equal(fs.existsSync(pagePath), true, "Hotel Doctor page route should exist");

  const page = fs.readFileSync(pagePath, "utf8");
  for (const requiredCopy of [
    "Doctor Visit to Your Hotel in Phuket",
    "WhatsApp Us Now",
    "How hotel on-call works",
    "For life-threatening emergencies, call 1669",
    "Hotel visits are subject to availability",
  ]) {
    assert.match(page, new RegExp(requiredCopy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(page, /data-conversion-location="hotel-hero-whatsapp"/);
  assert.match(page, /data-conversion-location="hotel-hero-call"/);
  assert.doesNotMatch(page, /guaranteed.{0,40}60 minutes/i);
  assert.doesNotMatch(page, /24\/7/i);
});
