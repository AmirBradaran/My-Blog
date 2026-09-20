import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useLanguage } from "../../Utils/LanguageContext";
import { hero } from "../../data/content";
import "./Hero.css";
import "../HeroScene/HeroScene.css";

const HeroScene = lazy(() => import("../HeroScene/HeroScene"));

export default function Hero() {
  const { language } = useLanguage();
  const t = hero[language];

  return (
    <section id="home" className="hero">
      <Suspense fallback={<div className="hero-scene hero-scene--fallback" aria-hidden />}>
        <HeroScene />
      </Suspense>
      <div className="hero__veil" />
      <div className="container hero__content">
        <motion.div
          className="hero__brand"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-label={t.brand}
        >
          <svg
            className="hero__brand-svg"
            viewBox="0 0 980 160"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="42%" stopColor="#e8fff8" />
                <stop offset="78%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <filter id="brandGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#2dd4bf" floodOpacity="0.35" />
                <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000" floodOpacity="0.45" />
              </filter>
            </defs>
            <text
              x="24"
              y="112"
              fill="url(#brandGrad)"
              filter="url(#brandGlow)"
              fontFamily="Syne, IranYekan, sans-serif"
              fontWeight="800"
              fontSize="118"
              letterSpacing="-1.5"
            >
              {t.brand}
            </text>
          </svg>
          <span className="sr-only">{t.brand}</span>
        </motion.div>
        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.headline}
        </motion.h1>
        <motion.p
          className="hero__support"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.support}
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="work" smooth duration={800} offset={-70} className="btn btn-primary">
            {t.ctaPrimary}
          </Link>
          <Link to="contact" smooth duration={800} offset={-70} className="btn btn-ghost">
            {t.ctaSecondary}
          </Link>
        </motion.div>
      </div>
      <div className="hero__scroll" aria-hidden>
        <span />
      </div>
    </section>
  );
}
