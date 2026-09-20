import { handleContact } from "../shared/contactHandler.js";

/**
 * Vercel Serverless Function — POST /api/contact
 * Env: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (optional)
 */
export default {
  async fetch(request) {
    const env = {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_TO_EMAIL:
        process.env.CONTACT_TO_EMAIL || "baradaran13085@gmail.com",
      CONTACT_FROM_EMAIL:
        process.env.CONTACT_FROM_EMAIL ||
        "Portfolio <onboarding@resend.dev>",
      ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "*",
    };
    return handleContact(request, env);
  },
};
