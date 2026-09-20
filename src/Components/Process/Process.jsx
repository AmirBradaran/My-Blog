import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { process } from "../../data/content";
import "./Process.css";

export default function Process() {
  const { language } = useLanguage();
  const t = process[language];

  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </Reveal>
        <div className="process__list">
          {t.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08} className="process__step">
              <span className="process__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
