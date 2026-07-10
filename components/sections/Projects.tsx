import SafeImage from "@/components/SafeImage";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="container section-padding">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div
              className="project-image"
              style={{
                height: "180px",
                overflow: "hidden",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <SafeImage
                src={project.image}
                alt={project.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.techStack}</p>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <i className={project.linkIcon} /> {project.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
