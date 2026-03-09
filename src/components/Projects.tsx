import { projects } from "../data"
import "../styles/Projects.css"

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.title} className="project-card">

            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-card__thumbnail"
            />

            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="project-card__link"
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noopener noreferrer"}
                    download={link.download ? true : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}