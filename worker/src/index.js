import { handleContact } from "../../shared/contactHandler.js";

/**
 * Worker entry for Cloudflare Workers Builds:
 * - /api/contact → lightweight email forwarder
 * - everything else → static assets from Vite dist
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" || url.pathname === "/contact") {
      return handleContact(request, env);
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Assets binding missing", { status: 500 });
  },
};
