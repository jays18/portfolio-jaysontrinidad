// Edit this file to customize all portfolio content.
export const profile = {
  name: "[YOUR NAME]",
  initials: "YN",
  title: "Computer Engineering Student | Full-Stack Developer",
  email: "you@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "#", // replace with a link to your resume PDF
  location: "Manila, Philippines",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  { name: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Backend", items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Authentication"] },
  { name: "Database", items: ["PostgreSQL", "Supabase"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { name: "Engineering / Other", items: ["IoT", "Embedded Systems", "Networking", "System Security"] },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "AirAware",
    tagline: "IoT Air Quality Monitoring & Forecasting Network",
    description:
      "An IoT-based indoor air quality monitoring system that tracks particulate matter, carbon monoxide, carbon dioxide, temperature, and humidity, with machine-learning air-quality forecasting.",
    tech: ["Raspberry Pi", "Python", "Flask", "Random Forest", "PMS7003", "MQ-7", "SCD41", "MCP3008", "Chart.js"],
    features: ["Real-time multi-sensor readings", "ML-based air quality forecasting", "Live dashboard with charts"],
    github: "https://github.com/",
  },
  {
    name: "CLAROED",
    tagline: "LMS with AI Grade Forecasting",
    description:
      "A learning management system for secondary education with student learning features, automated grading, academic monitoring, and machine-learning grade forecasting.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "JWT", "Random Forest"],
    features: ["Automated grading", "Academic progress monitoring", "Grade forecasting with Random Forest"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    name: "Job Management App",
    tagline: "Full-Stack Operations Dashboard",
    description:
      "A full-stack application to manage employees, jobs, priorities, statuses, and job progress through a centralized dashboard.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    features: ["Employee & job assignment", "Priority and status tracking", "Centralized progress dashboard"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

export const experience = [
  {
    role: "Product Marketing Engineer Intern",
    org: "Dahua Technology Philippines",
    period: "2026",
    description:
      "Supported product marketing and technical activities involving security and surveillance technology, including CCTV, intelligent security solutions, technical documentation, and system requirements.",
  },
  {
    role: "Freelance / Personal Development Projects",
    org: "Independent",
    period: "Ongoing",
    description:
      "Designing and building software, full-stack web applications, backend systems, and IoT solutions — from requirements and architecture to deployment.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "National University – Manila",
  graduation: "Expected Graduation: 2027",
  areas: ["Software Development", "Networking", "Cybersecurity", "Embedded Systems", "Database Systems", "IoT"],
};

export const process = [
  { n: "01", title: "Understand", text: "Understand the problem and requirements." },
  { n: "02", title: "Design", text: "Plan the user experience, architecture, and system flow." },
  { n: "03", title: "Build", text: "Develop the frontend, backend, database, and integrations." },
  { n: "04", title: "Test & Improve", text: "Test functionality, fix issues, optimize performance, and continuously improve." },
];
