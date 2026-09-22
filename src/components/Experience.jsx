import { experience, education, certificates, profile } from '../data/content'
import Arrow from './Arrow'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <header className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="section-title">
              Where I have
              <br />
              <span className="accent">worked</span>
            </h2>
          </div>
          <a href={profile.resumeUrl} className="btn btn--ghost">
            Download CV
            <Arrow />
          </a>
        </header>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li
              className="job"
              key={`${job.company}-${job.period}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="job__period">{job.period}</div>
              <div className="job__marker" aria-hidden="true">
                <span />
              </div>
              <div className="job__content">
                <h3 className="job__role">
                  {job.role}
                  {job.kind && <span className="job__kind">{job.kind}</span>}
                </h3>
                <p className="job__company">{job.company}</p>
                <p className="job__body">{job.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="credentials" data-reveal>
          <section className="credential">
            <h3 className="credential__title">Education</h3>
            <ul className="credential__list">
              {education.map((item) => (
                <li key={item.title}>
                  <span className="credential__period">{item.period}</span>
                  <p className="credential__name">{item.title}</p>
                  <p className="credential__place">{item.place}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="credential">
            <h3 className="credential__title">Certificates & activities</h3>
            <ul className="credential__list">
              {certificates.map((item) => (
                <li key={item.title}>
                  <span className="credential__period">{item.year}</span>
                  <p className="credential__name">{item.title}</p>
                  <p className="credential__place">{item.place}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
