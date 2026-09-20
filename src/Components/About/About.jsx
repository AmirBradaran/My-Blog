import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { about, brand } from "../../data/content";
import portrait from "../../assets/Me-(2).png";
import "./About.css";

export default function About() {
  const { language } = useLanguage();
  const t = about[language];

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__frame">
            <img src={portrait} alt={brand.fullName[language]} />
            <div className="about__glow" />
          </div>
          <p className="about__role">{brand.role[language]}</p>
          <p className="about__loc">{brand.location[language]}</p>
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="section-title">{t.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__body">{t.body}</p>
          </Reveal>
          <ul className="about__points">
            {t.points.map((point, i) => (
              <Reveal key={point} delay={0.12 + i * 0.08} className="about__point">
                <li>{point}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
