import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item whose section is currently in the upper viewport.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">{profile.initials}</span>
          <span className="nav__brandText">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav__link ${active === item.href ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary nav__cta">
          Let's talk
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`nav__bar ${open ? 'is-open' : ''}`} />
          <span className={`nav__bar ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      <div className={`nav__sheet ${open ? 'is-open' : ''}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn--primary"
          onClick={() => setOpen(false)}
        >
          Let's talk
        </a>
      </div>
    </header>
  )
}
