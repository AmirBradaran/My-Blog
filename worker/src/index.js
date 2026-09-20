import { handleContact, json } from "../../shared/contactHandler.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" || url.pathname === "/contact") {
      return handleContact(request, env);
    }
    return json({ ok: false, error: "Not found" }, 404, "*");
  },
};
