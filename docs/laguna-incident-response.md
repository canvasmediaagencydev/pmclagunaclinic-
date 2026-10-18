# PMC Laguna Incident & Recovery Runbook

## Scope

- Production domain: `https://pmclagunaclinic.net`
- Application: static Next.js site on Vercel
- Repository: `canvasmediaagencydev/pmclagunaclinic-`
- Production branch: `main`
- Deployment path: GitHub `main` push → Vercel production deployment
- Current production security baseline: commit `5cf4af9` (Next.js security patch) following `b1f0f5f` (browser security headers)

## Monitoring

Hermes health guard: `PMC Laguna production health guard` (`a6ce1a510af0`), every 5 minutes.

It checks these routes:

- `/`
- `/hotel-doctor-phuket`

It alerts only when a route:

- is not HTTP 200;
- responds in more than 3 seconds; or
- loses any expected baseline header:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`

## Triage order

1. Confirm the alert by checking both production routes once; do not reload repeatedly.
2. Check current Vercel production deployment status and GitHub deployment status for `main`.
3. Identify the affected layer:
   - Vercel/site response failure
   - recent deployment regression
   - Cloudflare/edge block or routing issue
   - Google Ads destination/conversion anomaly
4. Preserve the alert text, affected URL, response status, and Vercel deployment URL before changing anything.

## Safe rollback for a deployment regression

Use the proven GitHub-to-Vercel deployment path. Do **not** alter DNS, Vercel aliases, or Cloudflare routing as a first response.

1. Identify the bad commit and the last known-good commit.
2. Create a revert commit on `main`:

   ```bash
   git revert <bad-commit>
   git push origin main
   ```

3. Wait for the GitHub deployment status to report `success` and Vercel production to report `Ready`.
4. Read back both production routes, health headers, and critical phone/WhatsApp CTA destinations.
5. Record the incident and leave the revert in history; do not force-push.

### Known recent rollback points

- `5cf4af9` — Next.js security patch
- `b1f0f5f` — baseline security headers
- `25c7d3c` — Hotel Doctor navigation hardening
- `2a991e2` — Hotel Doctor image cards

## Cloudflare/edge incident procedure

Cloudflare zone configuration must be inspected before use. Once dashboard access is available, document the exact zone, current WAF rules, bot settings, rate-limit rules, and named approvers here.

During a verified traffic attack, the intended order is:

1. Enable/raise managed challenge for abusive traffic.
2. Tighten the pre-approved rate-limit rule for expensive endpoints only.
3. Temporarily block confirmed abusive IP/ASN patterns with expiry.
4. Preserve normal public static landing pages and phone/WhatsApp contact paths where possible.
5. Do not apply broad geo blocks or block paid-media markets without the incident owner approving it.

## Ads/conversion incident procedure

1. Confirm the exact Google Ads account/customer ID before inspecting or changing conversion settings.
2. Treat phone/WhatsApp/LINE clicks as contact-intent signals until validated/qualified lead workflow is verified.
3. If a conversion spike or suspected spam occurs, preserve the date range, campaign, landing page, event name, and lead evidence.
4. Do not switch a conversion action to primary/secondary, pause campaigns, or change bidding goals without media-owner approval.

## Change controls

- `main` branch disallows force-push and deletion.
- GitHub Dependabot vulnerability alerts and automated security updates are enabled.
- All production changes require local test/build validation and production read-back.
- Avoid a Content Security Policy enforcement rollout until Google Tag and ClickCease compatibility has been explicitly tested.

## Open P0 evidence gaps

- Cloudflare zone/WAF/bot/rate-limit configuration has not yet been audited.
- Cloudflare/registrar/Vercel/GitHub/Google Ads/GA4 account 2FA and access review has not yet been evidenced.
- Restore has a proven rollback path but no formal non-production restore drill yet.
- Google Ads primary/secondary conversion configuration has not yet been re-audited in this Phase 0 cycle.
