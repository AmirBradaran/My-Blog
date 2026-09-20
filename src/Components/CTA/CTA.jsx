import { Link } from "react-scroll";
import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { cta } from "../../data/content";
import "./CTA.css";

export default function CTA() {
  const { language } = useLanguage();
  const t = cta[language];

  return (
    <section className="section cta">
      <div className="container">
        <Reveal className="cta__panel">
          <h2>{t.title}</h2>
          <p>{t.body}</p>
          <Link to="contact" smooth duration={800} offset={-70} className="btn btn-primary">
            {t.button}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
