export const SITE_CONFIG = {
  name: "Brett Scarlett",
  title: "Full Stack Engineer",
  tagline: "Building accessible, performant web applications with modern tools.",
  email: "brett@scarletttech.com", // Update with real email
  github: "https://github.com/13011brett",

  location: "Michigan, US",
} as const;

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  images?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "LostBoy",
    description:
      "A retro console RPG built in C# / .NET 8. Explore dungeon maps, fight monsters, loot gear, and level up.",
    longDescription:
      "A fully-featured console RPG featuring procedurally generated dungeons, turn-based combat with status effects, an inventory and equipment system, character progression with stat allocation, and save/load functionality. Built with clean architecture patterns and comprehensive unit tests.",
    tags: ["C#", ".NET 8", "OOP", "Game Dev"],
    github: "https://github.com/13011brett/LostBoy",
    featured: true,
    images: ["/images/lostboy-1.png"],
  },
  {
    title: "Calorie Tracker",
    description:
      "Full-stack calorie tracking app with ASP.NET Core 8 and React/TypeScript. JWT auth, role-based access, responsive design.",
    longDescription:
      "A production-grade health tracking application featuring JWT authentication with refresh tokens, role-based authorization, a responsive React frontend with TypeScript, RESTful API design with Entity Framework Core, and Docker containerization for deployment.",
    tags: ["ASP.NET Core", "React", "TypeScript", "Docker", "JWT"],
    github: "https://github.com/13011brett/calorie-tracker",
    featured: true,
    images: ["/images/calorie-tracker-1.png", "/images/calorie-tracker-2.png"],
  },
  // {
  //   title: "Accessible Component Library",
  //   description:
  //     "A collection of WCAG 2.1 AA compliant React components with full keyboard navigation and screen reader support.",
  //   longDescription:
  //     "Reusable UI primitives built with accessibility as a first-class requirement. Includes modal dialogs with focus trapping, dropdown menus with arrow key navigation, toast notifications with ARIA live regions, form inputs with proper labeling and error announcements, and tab panels. Each component includes Storybook documentation and automated a11y tests with axe-core.",
  //   tags: ["React", "TypeScript", "WCAG", "ARIA", "Testing"],
  //   github: "https://github.com/13011brett/a11y-components",
  //   featured: true,
  // },
  // {
  //   title: "Task Automation CLI",
  //   description:
  //     "Python CLI tool for automating repetitive business workflows — file processing, API integrations, and report generation.",
  //   longDescription:
  //     "A command-line toolkit for business process automation. Features include CSV/Excel batch processing with pandas, REST API integrations with retry logic and rate limiting, templated report generation, scheduled task execution, and structured logging. Built with Click for the CLI interface and fully type-hinted.",
  //   tags: ["Python", "CLI", "Automation", "Pandas"],
  //   github: "https://github.com/13011brett/task-auto",
  //   featured: false,
  // },
];

export type Skill = {
  category: string;
  items: string[];
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Accessibility (WCAG 2.1)",
    ],
  },
  {
    category: "Backend",
    items: [
      "C# / .NET",
      "ASP.NET Core",
      "Node.js",
      "Python",
      "REST APIs",
      "Entity Framework",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: ["SQL Server", "PostgreSQL", "Docker", "CI/CD", "Git", "Azure"],
  },
  {
    category: "Practices",
    items: [
      "Unit Testing",
      "Agile / Scrum",
      "Code Review",
      "Section 508",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Government Technology Solutions",
    description:
      "Leading frontend development on a Next.js/TypeScript PWA for a federal agency.",
    highlights: [
      "Achieved WCAG 2.1 AA / Section 508 compliance across entire application",
      "Implemented 80%+ unit test coverage with Jest and React Testing Library",
      "Built responsive layouts across mobile, tablet, kiosk, and widescreen breakpoints",
      "Engineered PWA with service workers, offline support, and session management",
    ],
  },
  {
    role: "Software Engineer",
    company: "Enterprise Financial Services",
    description:
      "Built and maintained enterprise policy management systems in C#/.NET.",
    highlights: [
      "Developed policy management interfaces with role-based field security",
      "Implemented SQL injection prevention and input sanitization across legacy codebase",
      "Created batch processing programs for automated policy lifecycle management",
      "Designed shared NuGet library architecture for cross-team reuse",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Technology Consultancy",
    description:
      "Delivered full-stack web applications and automation solutions for clients.",
    highlights: [
      "Built end-to-end web applications with React frontends and .NET backends",
      "Automated business workflows reducing manual processing time by 60%+",
      "Integrated third-party APIs and built custom middleware solutions",
    ],
  },
];