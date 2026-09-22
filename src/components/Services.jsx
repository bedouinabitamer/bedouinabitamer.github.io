import { services } from '../data/content'
import './Services.css'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <header className="section-head" data-reveal>
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="section-title">
              Services
              <br />
              <span className="accent">on offer</span>
            </h2>
          </div>
        </header>

        <ul className="services__list">
          {services.map((service, i) => (
            <li
              className="service"
              key={service.id}
              data-reveal
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="service__num">{service.id}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__body">{service.body}</p>
              <ul className="service__tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
