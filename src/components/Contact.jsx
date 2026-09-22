import { profile, socials, contact } from '../data/content'
import Arrow from './Arrow'
import './Contact.css'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer className="contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="shell contact__inner">
        <p className="eyebrow" data-reveal>
          Contact
        </p>

        <h2 className="contact__title" data-reveal>
          {contact.title.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>

        <p className="contact__lead" data-reveal>
          {contact.lead}
        </p>

        <a className="contact__mail" href={`mailto:${profile.email}`} data-reveal>
          <span className="contact__mailText">{profile.email}</span>
          <Arrow size={22} className="contact__mailArrow" />
        </a>

        <div className="contact__details" data-reveal>
          <a href={`tel:${profile.phoneHref}`} className="contact__detail">
            <span className="contact__detailLabel">Phone</span>
            {profile.phone}
          </a>
          <p className="contact__detail">
            <span className="contact__detailLabel">Based in</span>
            {profile.location}
          </p>
        </div>

        <div className="contact__bottom">
          <ul className="contact__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                  <Arrow size={11} />
                </a>
              </li>
            ))}
          </ul>

          <p className="contact__copy">
            © {year} {profile.name}. Built with React.
          </p>

          <a href="#top" className="contact__top">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
