import { handleContact } from "../../shared/contactHandler.js";

export async function onRequest(context) {
  return handleContact(context.request, context.env);
}
