
"use client";

import { useState } from "react";

type Language = "pt" | "en";
type Theme = "dark" | "light";

const WHATSAPP_URL =
  "https://wa.me/5521971620952";

const content = {
  pt: {
    role: "Desenvolvedor Web Full Stack",
    greeting: "Olá, eu sou",
    description:
      "Desenvolvo aplicações web modernas, combinando interfaces intuitivas, APIs robustas e código organizado.",
    projects: "Projetos",
    about: "Sobre mim",
    contact: "Contato",
    viewProjects: "Explorar projetos",
    available: "Construindo soluções web",
    sectionLabel: "PORTFÓLIO",
    featuredTitle: "Projetos em destaque",
    featuredDescription:
      "Aplicações que demonstram minhas habilidades em desenvolvimento frontend e backend.",
    aboutTitle: "Desenvolvimento com propósito.",
    aboutDescription:
      "Sou desenvolvedor web Full Stack, com experiência profissional em interfaces responsivas e experiência prática na construção de APIs REST, autenticação, bancos de dados relacionais e aplicações escaláveis.",
    stackTitle: "Tecnologias",
    experienceTitle: "Experiência profissional",
    job: "Junior Web Developer",
    company: "Refs Tecnologia",
    period: "Março 2023 — Janeiro 2025",
    jobDescription:
      "Desenvolvimento de interfaces responsivas com React, JavaScript, HTML e CSS, integração com APIs, otimização de desempenho e manutenção de aplicações em produção.",
    educationTitle: "Formação",
    education: "Análise e Desenvolvimento de Sistemas",
    university: "Universidade Estácio de Sá · 2025",
    bootcamp:
      "42 Porto · Bootcamp Intensivo de Programação · 2025–2026",
    contactTitle: "Vamos construir algo juntos?",
    contactDescription:
      "Estou aberto a oportunidades profissionais, projetos interessantes e conexões na área de tecnologia.",
    contactButton: "Falar pelo WhatsApp",
    footer: "Desenvolvido com Next.js e TypeScript.",
    code: "Código",
    planned: "Planejado",
    projectsData: [
      {
        number: "01",
        title: "FinanceFlow",
        category: "FULL STACK · FINTECH",
        description:
          "Aplicação de controle financeiro com transações, categorias e dashboard analítico.",
        symbol: "↗",
      },
      {
        number: "02",
        title: "TaskFlow",
        category: "FULL STACK · PRODUCTIVITY",
        description:
          "Gerenciamento de projetos e tarefas com autenticação e controle de permissões.",
        symbol: "▦",
      },
      {
        number: "03",
        title: "WorkoutHub",
        category: "FULL STACK · FITNESS",
        description:
          "Biblioteca de exercícios e criação de treinos personalizados.",
        symbol: "◈",
      },
      {
        number: "04",
        title: "ClientDesk",
        category: "FULL STACK · CRM",
        description:
          "Gestão de clientes, empresas, contatos e oportunidades comerciais.",
        symbol: "◎",
      },
      {
        number: "05",
        title: "API Lab",
        category: "BACKEND · REST API",
        description:
          "API REST com validação, autenticação, documentação e testes.",
        symbol: "{ }",
      },
    ],
  },
  en: {
    role: "Full Stack Web Developer",
    greeting: "Hello, I'm",
    description:
      "I build modern web applications, combining intuitive interfaces, robust APIs, and clean, maintainable code.",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    viewProjects: "Explore projects",
    available: "Building web solutions",
    sectionLabel: "PORTFOLIO",
    featuredTitle: "Featured projects",
    featuredDescription:
      "Applications showcasing my frontend and backend development skills.",
    aboutTitle: "Development with purpose.",
    aboutDescription:
      "I'm a Full Stack Web Developer with professional experience building responsive interfaces and hands-on experience developing REST APIs, authentication systems, relational databases, and scalable applications.",
    stackTitle: "Technologies",
    experienceTitle: "Professional experience",
    job: "Junior Web Developer",
    company: "Refs Tecnologia",
    period: "March 2023 — January 2025",
    jobDescription:
      "Built responsive interfaces with React, JavaScript, HTML, and CSS, integrated APIs, optimized performance, and maintained production applications.",
    educationTitle: "Education",
    education: "Systems Analysis and Development",
    university: "Universidade Estácio de Sá · 2025",
    bootcamp: "42 Porto · Intensive Programming Bootcamp · 2025–2026",
    contactTitle: "Let's build something together.",
    contactDescription:
      "I'm open to professional opportunities, interesting projects, and connections in the tech industry.",
    contactButton: "Chat on WhatsApp",
    footer: "Built with Next.js and TypeScript.",
    code: "Code",
    planned: "Planned",
    projectsData: [
      {
        number: "01",
        title: "FinanceFlow",
        category: "FULL STACK · FINTECH",
        description:
          "Personal finance application featuring transactions, categories, and analytics.",
        symbol: "↗",
      },
      {
        number: "02",
        title: "TaskFlow",
        category: "FULL STACK · PRODUCTIVITY",
        description:
          "Project and task management with authentication and access control.",
        symbol: "▦",
      },
      {
        number: "03",
        title: "WorkoutHub",
        category: "FULL STACK · FITNESS",
        description:
          "Exercise library and personalized workout planning.",
        symbol: "◈",
      },
      {
        number: "04",
        title: "ClientDesk",
        category: "FULL STACK · CRM",
        description:
          "Management of clients, companies, contacts, and sales opportunities.",
        symbol: "◎",
      },
      {
        number: "05",
        title: "API Lab",
        category: "BACKEND · REST API",
        description:
          "REST API featuring validation, authentication, documentation, and tests.",
        symbol: "{ }",
      },
    ],
  },
};

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("dark");

  const t = content[language];

  return (
    <main className={`site theme-${theme}`}>
      <header className="header">
        <a className="brand" href="#home" aria-label="Wesley Rodrigues">
          <span className="brand-mark">W.</span>
          <span>Wesley Rodrigues</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#projects">{t.projects}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() =>
              setTheme((current) =>
                current === "dark" ? "light" : "dark",
              )
            }
            aria-label={
              theme === "dark"
                ? "Ativar tema claro"
                : "Ativar tema escuro"
            }
            title="Alternar tema"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

          <button
            className="language-button"
            type="button"
            onClick={() =>
              setLanguage((current) => (current === "pt" ? "en" : "pt"))
            }
            aria-label="Alterar idioma"
          >
            {language === "pt" ? "EN ↗" : "PT ↗"}
          </button>
        </div>
      </header>

      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            {t.available}
          </div>

          <p className="eyebrow">{t.greeting}</p>

          <h1>
            Wesley
            <br />
            <span>Rodrigues.</span>
          </h1>

          <h2>{t.role}</h2>

          <p className="hero-description">{t.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.viewProjects} <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact}
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/dev-ley"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/wr-dev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Apresentação do desenvolvedor"
        >
          <div className="visual-glow" />

          <div className="code-window">
            <div className="window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>developer.ts</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">&quot;Wesley&quot;</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">&quot;Full Stack&quot;</span>,
              </p>

              <p className="code-indent">
                frontend: <span className="code-blue">&quot;React&quot;</span>,
              </p>

              <p className="code-indent">
                backend: <span className="code-blue">&quot;NestJS&quot;</span>,
              </p>

              <p className="code-indent">
                database: <span className="code-blue">&quot;PostgreSQL&quot;</span>,
              </p>

              <p className="code-indent">
                learning: <span className="code-purple">true</span>,
              </p>

              <p>{"};"}</p>
            </div>

            <div className="code-footer">
              <span className="status-dot" />
              <span>Always learning, always building.</span>
            </div>
          </div>

          <div className="floating-badge badge-top">{"</>"}</div>
          <div className="floating-badge badge-bottom">TS · JS · SQL</div>
        </div>

        <a className="scroll-indicator" href="#projects">
          <span className="scroll-line" />
          Scroll to explore
        </a>
      </section>

      <section className="projects-section section container" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.sectionLabel} / 01</p>
            <h2>{t.featuredTitle}</h2>
            <p className="section-description">{t.featuredDescription}</p>
          </div>

          <span className="section-count">05 PROJECTS</span>
        </div>

        <div className="projects-grid">
          {t.projectsData.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{t.planned}</span>
              </div>

              <div className="project-graphic" aria-hidden="true">
                <span className="graphic-symbol">{project.symbol}</span>
                <span className="graphic-lines" />
              </div>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-links">
                <span>
                  {t.code} — {t.planned}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT / 02</p>

            <h2>{t.aboutTitle}</h2>

            <p className="about-description">{t.aboutDescription}</p>

            <div className="experience-block">
              <p className="eyebrow">{t.experienceTitle}</p>

              <h3>{t.job}</h3>

              <p className="experience-company">{t.company}</p>

              <p className="experience-period">{t.period}</p>

              <p className="experience-description">{t.jobDescription}</p>
            </div>

            <div className="experience-block education-block">
              <p className="eyebrow">{t.educationTitle}</p>

              <h3>{t.education}</h3>

              <p className="experience-company">{t.university}</p>

              <p className="experience-description">{t.bootcamp}</p>
            </div>
          </div>

          <div className="skills-panel">
            <p className="eyebrow">{t.stackTitle}</p>

            <div className="skills-grid">
              {technologies.map((technology) => (
                <span className="skill-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="skills-note">
              <span className="status-dot" />

              <p>
                {language === "pt"
                  ? "Foco em código limpo, segurança e aprendizado contínuo."
                  : "Focused on clean code, security, and continuous learning."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section container" id="contact">
        <p className="eyebrow">CONTACT / 03</p>

        <h2>{t.contactTitle}</h2>

        <p className="contact-description">{t.contactDescription}</p>

        <a
          className="button button-primary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          {t.contactButton} <span aria-hidden="true">↗</span>
        </a>

        <div className="contact-links">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>

          <a
            href="https://github.com/dev-ley"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/wr-dev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#home">
          <span className="brand-mark">W.</span>
          <span>Wesley Rodrigues</span>
        </a>

        <p>© 2026 · {t.footer}</p>

        <a href="#home" className="back-to-top">
          ↑ Top
        </a>
      </footer>
    </main>
  );
}