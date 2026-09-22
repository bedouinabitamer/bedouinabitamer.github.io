import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Services />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
