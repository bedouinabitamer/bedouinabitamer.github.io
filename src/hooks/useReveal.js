import { useEffect } from 'react'

// Adds .is-visible to every [data-reveal] element as it scrolls into view.
// One observer for the whole page, set up once.
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default useReveal
