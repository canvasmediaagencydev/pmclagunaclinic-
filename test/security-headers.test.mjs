import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const configPath = path.resolve("next.config.ts");

test("all PMC Laguna routes declare baseline browser security headers", () => {
  const config = fs.readFileSync(configPath, "utf8");

  assert.match(config, /async headers\s*\(\)/, "Next config must declare response headers");
  assert.match(config, /source:\s*["']\/:path\*["']/, "headers must cover every route");
  assert.match(config, /key:\s*["']X-Content-Type-Options["'][\s\S]{0,100}value:\s*["']nosniff["']/, "responses must prevent MIME sniffing");
  assert.match(config, /key:\s*["']X-Frame-Options["'][\s\S]{0,100}value:\s*["']DENY["']/, "responses must prevent framing");
  assert.match(config, /key:\s*["']Referrer-Policy["'][\s\S]{0,140}value:\s*["']strict-origin-when-cross-origin["']/, "cross-origin referrers must be minimized");
  assert.match(config, /key:\s*["']Permissions-Policy["'][\s\S]{0,240}value:\s*["']camera=\(\), microphone=\(\), geolocation=\(\), payment=\(\), usb=\(\)["']/, "unused browser capabilities must be disabled");
});
