import { handleContact } from "../shared/contactHandler.js";

export const config = {
  runtime: "edge",
};

/**
 * Vercel Edge Function — POST /api/contact
 * Set in Vercel project env: RESEND_API_KEY, CONTACT_TO_EMAIL (optional)
 */
export default async function handler(request) {
  const env = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL:
      process.env.CONTACT_TO_EMAIL || "baradaran13085@gmail.com",
    CONTACT_FROM_EMAIL:
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "*",
  };

  return handleContact(request, env);
}
