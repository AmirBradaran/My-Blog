import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useLanguage } from "../../Utils/LanguageContext";
import { brand, nav } from "../../data/content";
import "./Navbar.css";

export default function Navbar() {
  const { language, toggleLanguage, isFa } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const items = nav[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link
          to="home"
          smooth
          duration={700}
          offset={-70}
          className="nav__brand"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt=""
            className="nav__logo"
            width={36}
            height={36}
          />
          <span className="nav__brand-text">
            <strong>{brand.name}</strong>
            <small>{brand.fullName[language]}</small>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy
              smooth
              duration={700}
              offset={-70}
              activeClass="is-active"
              className="nav__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__lang"
            onClick={() => {
              toggleLanguage();
              setOpen(false);
            }}
            aria-label={isFa ? "Switch to English" : "تغییر به فارسی"}
          >
            {isFa ? "EN" : "فا"}
          </button>
          <button
            type="button"
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={700}
                offset={-70}
                className="nav__mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
