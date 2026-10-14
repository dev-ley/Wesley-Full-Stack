import Image from "next/image";
import type { Project } from "./projects.data";

type Language = "pt" | "en";

type ProjectCardProps = {
  project: Project;
  language: Language;
};

const labels = {
  pt: {
    live: "Publicado",
    planned: "Planejado",
    viewApp: "Ver aplicação",
    code: "Código",
    technologies: "Tecnologias do projeto",
    imageAlt: "Captura de ecrã do projeto",
  },
  en: {
    live: "Live",
    planned: "Planned",
    viewApp: "Live demo",
    code: "Code",
    technologies: "Project technologies",
    imageAlt: "Project screenshot",
  },
};

export default function ProjectCard({
  project,
  language,
}: ProjectCardProps) {
  const t = labels[language];

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>

        <span className="project-status">
          {project.status === "live" ? t.live : t.planned}
        </span>
      </div>

      <div className="project-image">
        <Image
          src={project.image}
          alt={`${t.imageAlt}: ${project.title}`}
          width={1200}
          height={750}
          className="project-image-content"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="project-category">{project.category}</p>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description[language]}
      </p>

      {project.technologies &&
        project.technologies.length > 0 && (
          <div
            className="project-tags"
            aria-label={t.technologies}
          >
            {project.technologies.map((technology) => (
              <span className="project-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

      <div className="project-links">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.viewApp} ↗
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.code} ↗
          </a>
        )}

        {!project.liveUrl && !project.repoUrl && (
          <>
            <span>
              {t.code} — {t.planned}
            </span>
            <span aria-hidden="true">↗</span>
          </>
        )}
      </div>
    </article>
  );
}
