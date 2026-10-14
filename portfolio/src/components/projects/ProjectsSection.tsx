
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

type Language = "pt" | "en";

type ProjectsSectionProps = {
  language: Language;
};

const content = {
  pt: {
    sectionLabel: "PORTFÓLIO",
    title: "Projetos em destaque",
    description:
      "Aplicações que demonstram minhas habilidades em desenvolvimento frontend e backend.",
  },
  en: {
    sectionLabel: "PORTFOLIO",
    title: "Featured projects",
    description:
      "Applications showcasing my frontend and backend development skills.",
  },
};

export default function ProjectsSection({
  language,
}: ProjectsSectionProps) {
  const t = content[language];

  return (
    <section
      className="projects-section section container"
      id="projects"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.sectionLabel} / 01</p>

          <h2>{t.title}</h2>

          <p className="section-description">
            {t.description}
          </p>
        </div>

        <span className="section-count">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}
