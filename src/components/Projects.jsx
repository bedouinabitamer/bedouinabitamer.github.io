import { projects } from '../data/content'
import Arrow from './Arrow'
import './Projects.css'

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project ${project.featured ? 'project--featured' : ''}`}
      data-reveal
      style={{ transitionDelay: `${(index % 2) * 0.08}s` }}
    >
      <a className="project__link" href={project.link} aria-label={project.title}>
        <div className="project__thumb">
          <span className="project__wash" style={{ background: project.accent }} />
          <span className="project__glyph">{project.title.charAt(0)}</span>
          <span className="project__year">{project.year}</span>
        </div>

        <div className="project__body">
          <p className="project__category">{project.category}</p>
          <h3 className="project__title">
            {project.title}
            <Arrow size={16} className="project__arrow" />
          </h3>
          <p className="project__desc">{project.description}</p>

          <ul className="project__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <header className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">
              Things I have
              <br />
              <span className="accent">shipped</span>
            </h2>
          </div>
          <p className="lead">
            A few projects I am allowed to talk about. Each one shipped to real users,
            with real deadlines and real edge cases.
          </p>
        </header>

        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
