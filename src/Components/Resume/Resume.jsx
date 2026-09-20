import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { resume } from "../../data/content";
import "./Resume.css";

export default function Resume() {
  const { language, toLocalDigits } = useLanguage();
  const t = resume[language];

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
        </Reveal>

        <div className="resume__stats">
          {t.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="resume__stat glass">
              <strong>{toLocalDigits(stat.value)}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="resume__grid">
          <Reveal className="resume__experience glass" delay={0.1}>
            <h3>{t.experienceTitle}</h3>
            {t.experience.map((job) => (
              <article key={job.role} className="resume__job">
                <div className="resume__job-head">
                  <div>
                    <h4>{job.role}</h4>
                    <p>{job.company}</p>
                  </div>
                  <span>{toLocalDigits(job.period)}</span>
                </div>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>

          <Reveal className="resume__skills glass" delay={0.18}>
            <h3>{t.skillsTitle}</h3>
            <div className="resume__tags">
              {t.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
