import { profile, stats, socials } from '../data/content'
import Arrow from './Arrow'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__main">
          {profile.available && (
            <p className="hero__status">
              <span className="hero__dot" aria-hidden="true" />
              {profile.availableLabel}
            </p>
          )}

          <h1 className="hero__title">
            {profile.headline.map((line, i) => (
              <span className="hero__line" key={line}>
                <span style={{ animationDelay: `${0.1 + i * 0.09}s` }}>{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View my work
              <Arrow />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <ul className="hero__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__side">
          <div className="hero__card">
            <div className="hero__portrait">
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} />
              ) : (
                <span className="hero__initials">{profile.initials}</span>
              )}
            </div>
            <div className="hero__meta">
              <p className="hero__role">{profile.role}</p>
              <p className="hero__location">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M6 11s4-3.5 4-6.2A4 4 0 0 0 2 4.8C2 7.5 6 11 6 11Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="6" cy="4.8" r="1.3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {profile.location}
              </p>
            </div>
          </div>

          <dl className="hero__stats">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <a className="hero__scroll" href="#work" aria-label="Scroll to work">
        <span>Scroll</span>
        <span className="hero__scrollLine" aria-hidden="true" />
      </a>
    </section>
  )
}
