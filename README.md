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

```bash
npm run build
npx wrangler pages deploy dist --project-name baradaran-portfolio
```

Pages will pick up `functions/api/contact.js` automatically as `/api/contact`.

Standalone worker (optional):

```bash
npm run deploy:worker
```

## Content

All FA/EN copy, projects, and resume data live in `src/data/content.js`.
