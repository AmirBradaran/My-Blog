# Baradaran — Cinematic Portfolio

Personal portfolio for **AmirMohammad Baradaran Hosseini** (Mashhad) — React + Vite, cinematic 3D hero, bilingual FA/EN, and a lightweight Cloudflare contact API.

## Stack

- React 19 + Vite
- Framer Motion + React Three Fiber (hero only)
- Cloudflare Pages (static) + Pages Function / Worker (`POST /api/contact`)
- Resend for email delivery (no database — minimal data use)

## Develop

```bash
npm install
npm run dev
```

Cloudflare Pages uses `npm ci`. This repo includes `.npmrc` with `legacy-peer-deps=true` so peer conflicts do not fail the install.

Optional local API (second terminal):

```bash
cp worker/.dev.vars.example worker/.dev.vars
# put your RESEND_API_KEY in worker/.dev.vars
npm run dev:api
```

Vite proxies `/api/*` to `http://127.0.0.1:8787`.

## Contact email setup

1. Create a [Resend](https://resend.com) API key.
2. Set secrets for Pages / Worker:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (default: `baradaran13085@gmail.com`)
   - `CONTACT_FROM_EMAIL` (verified sender, or Resend onboarding address for tests)
   - `ALLOWED_ORIGINS` (comma-separated production domains)

Cloudflare dashboard → Pages project → Settings → Environment variables  
or:

```bash
cd worker
npx wrangler secret put RESEND_API_KEY
```

## Deploy to Cloudflare

This project deploys as a **Worker + static assets** (Vite `dist/`):

```bash
npm run build
npx wrangler deploy
# Cloudflare dashboard deploy command can stay:
# npx wrangler versions upload
```

`wrangler.toml` points assets at `./dist` and the Worker handles `POST /api/contact`.

Set secrets in the Cloudflare dashboard (or via CLI):

- `RESEND_API_KEY`
- optional overrides: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `ALLOWED_ORIGINS`

## Content

All FA/EN copy, projects, and resume data live in `src/data/content.js`.
