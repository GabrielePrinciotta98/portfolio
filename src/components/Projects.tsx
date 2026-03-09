import { projects } from "../data"
import { FaDownload, FaPlay, FaExternalLinkAlt, FaUniversity, FaBriefcase, FaUser } from "react-icons/fa"
import { type ProjectType } from "../data"
import "../styles/Projects.css"
import type { JSX } from "react"

const typeConfig: Record<ProjectType, { icon: JSX.Element; tooltip: string }> = {
    uni: { icon: <FaUniversity />, tooltip: "Academic / Thesis" },
    work: { icon: <FaBriefcase />, tooltip: "Work Project" },
    personal: { icon: <FaUser />, tooltip: "Personal Project" },
}

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
                            <div className="project-card__type-badges">
                                {project.types.map((type) => (
                                    <span
                                        key={type}
                                        className="project-card__type-badge"
                                        title={typeConfig[type].tooltip}
                                    >
                                        {typeConfig[type].icon}
                                    </span>
                                ))}
                            </div>
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__description">{project.description}</p>

                            <div className="project-card__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-card__tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-card__links">
                                {project.links.map((link) => {
                                    const icon = link.download
                                        ? <FaDownload />
                                        : link.label.toLowerCase().includes("play")
                                            ? <FaPlay />
                                            : <FaExternalLinkAlt />

                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="project-card__link"
                                            target={link.download ? undefined : "_blank"}
                                            rel={link.download ? undefined : "noopener noreferrer"}
                                            download={link.download ? true : undefined}
                                        >
                                            {icon}
                                            {link.label}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}