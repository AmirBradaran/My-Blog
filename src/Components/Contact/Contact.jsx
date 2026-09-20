import { useState } from "react";
import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { contact, footer } from "../../data/content";
import "./Contact.css";

const API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

export default function Contact() {
  const { language, isFa } = useLanguage();
  const t = contact[language];
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-sub">{t.body}</p>

          <div className="contact__details">
            <div>
              <span>{t.addressLabel}</span>
              <strong>{contact.info.location[language]}</strong>
            </div>
            <div>
              <span>{t.emailLabel}</span>
              <a href={`mailto:${contact.info.email}`}>
                <strong>{contact.info.email}</strong>
              </a>
            </div>
            <div>
              <span>{t.phoneLabel}</span>
              <a href={`tel:${contact.info.phone.replace(/\s/g, "")}`}>
                <strong dir="ltr">{contact.info.phone}</strong>
              </a>
            </div>
          </div>

          <div className="contact__socials">
            {contact.socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="contact__form-wrap glass">
          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <label>
              <span>{t.fields.name}</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
              />
            </label>
            <label>
              <span>{t.fields.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                dir="ltr"
              />
            </label>
            <label>
              <span>{t.fields.subject}</span>
              <input name="subject" value={form.subject} onChange={onChange} />
            </label>
            <label>
              <span>{t.fields.message}</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
              />
            </label>
            <label className="sr-only" aria-hidden>
              website
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                value={form.website}
                onChange={onChange}
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.fields.sending : t.fields.submit}
            </button>
            {status === "success" && (
              <p className="contact__status contact__status--ok" role="status">
                {t.fields.success}
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--err" role="alert">
                {t.fields.error}
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <footer className="site-footer container">
        <p>
          © {new Date().getFullYear()} Baradaran — {footer[language].rights}
        </p>
        <p dir="ltr" className="site-footer__meta">
          {isFa ? "FA / EN" : "EN / FA"}
        </p>
      </footer>
    </section>
  );
}
