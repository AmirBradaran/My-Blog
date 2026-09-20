import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { useLanguage } from "../../Utils/LanguageContext";
import { projects } from "../../data/content";
import "./Projects.css";

export default function Projects() {
  const { language } = useLanguage();
  const t = projects[language];

  return (
    <section id="work" className="section projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-sub">{t.subtitle}</p>
        </Reveal>

        <div className="projects__grid">
          {projects.items.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08} className="project-card">
              <motion.article
                className="project-card__inner"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="project-card__media">
                  <img src={item.image} alt={item.title[language]} loading="lazy" />
                  <div className="project-card__shade" />
                </div>
                <div className="project-card__body">
                  <h3>{item.title[language]}</h3>
                  <p>{item.description[language]}</p>
                  <div className="project-card__stack">
                    {item.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noreferrer">
                        {t.viewGithub}
                      </a>
                    )}
                    {item.live && (
                      <a href={item.live} target="_blank" rel="noreferrer">
                        {t.viewLive}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
