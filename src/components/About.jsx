import { about, skills, languages } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="about__grid">
          <div className="about__intro" data-reveal>
            <p className="eyebrow">{about.title}</p>
            <h2 className="section-title about__title">
              Code with
              <br />
              <span className="accent">intent</span>
            </h2>
          </div>

          <div className="about__copy" data-reveal>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <ul className="about__highlights">
              {about.highlights.map((item) => (
                <li key={item.title}>
                  <span className="about__bullet" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about__skills" data-reveal>
          {skills.map((group) => (
            <div className="skillGroup" key={group.group}>
              <h3 className="skillGroup__name">{group.group}</h3>
              <ul className="skillGroup__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="languages" data-reveal>
          <h3 className="languages__label">Languages</h3>
          <ul className="languages__list">
            {languages.map((language) => (
              <li key={language.name}>
                <span className="languages__name">{language.name}</span>
                <span className="languages__level">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
