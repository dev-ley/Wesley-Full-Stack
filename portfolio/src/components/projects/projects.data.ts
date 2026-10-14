export type Project = {
  number: string;
  title: string;
  category: string;
  description: {
    pt: string;
    en: string;
  };
  symbol: string;
  image: string;
  technologies?: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: "live" | "planned";
};

export const projects: Project[] = [
  {
    number: "01",
    title: "FinanceFlow",
    category: "FULL STACK · FINTECH",
    description: {
      pt: "Aplicação de gestão financeira pessoal com autenticação JWT, operações CRUD de receitas e despesas, dashboard com resumo financeiro e isolamento dos dados por utilizador. Desenvolvida com frontend em Next.js e backend em NestJS, com API REST e PostgreSQL.",
      en: "Personal finance management application featuring JWT authentication, income and expense CRUD operations, a financial overview dashboard, and per-user data isolation. Built with a Next.js frontend and a NestJS backend, using a REST API and PostgreSQL.",
    },
    symbol: "↗",
    image: "/images/projects/financeflow.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Passport.js",
      "JWT",
      "bcrypt",
      "Docker",
      "Jest",
      "ESLint",
      "Vercel",
      "Render",
      "Neon",
      "Git",
      "GitHub",
    ],
    liveUrl: "https://financeflow-nu-pearl.vercel.app/",
    repoUrl: "https://github.com/dev-ley/FinanceFlow",
    status: "live",
  },
];
