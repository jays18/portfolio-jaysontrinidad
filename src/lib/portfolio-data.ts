// Edit this file to customize all portfolio content.
export const profile = {
  name: "Jayson R. Trinidad",
  initials: "JT",
  title: "Full-Stack Developer | Computer Engineer",
  email: "jaytrinidad60@gmail.com",
  phone: "+63 9260625914",
  phoneHref: "tel:+639260625914",
  github: "https://github.com/sonsontrinidad18",
  githubHandle: "sonsontrinidad18",
  linkedin: "https://ph.linkedin.com/in/jayson-trinidad-001611235",
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
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Backend", items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Authentication"] },
  { name: "Database", items: ["PostgreSQL", "Supabase"] },
  { name: "Tools & Deployment", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { name: "Engineering", items: ["Networking", "Cybersecurity", "IoT", "Embedded Systems", "System Troubleshooting"] },
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
      "An IoT-based indoor air quality monitoring system designed to collect and monitor air quality data and provide forecasting using machine learning.",
    tech: ["Raspberry Pi", "Python", "Flask", "Random Forest", "PMS7003", "MQ-7", "SCD41", "MCP3008", "Chart.js"],
    features: [
      "Real-time air quality monitoring",
      "Sensor data collection",
      "Local data storage",
      "Web dashboard",
      "Air quality visualization",
      "Machine learning forecasting",
    ],
    github: "https://github.com/sonsontrinidad18",
  },
  {
    name: "Job Management Web App",
    tagline: "Full-Stack Operations Dashboard",
    description:
      "A full-stack job management application designed to manage employees, jobs, priorities, statuses, and job progress through a centralized dashboard.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS"],
    features: [
      "Job management",
      "Employee management",
      "Status tracking",
      "Priority management",
      "Dashboard monitoring",
      "Authentication",
      "Supabase database integration",
      "Responsive interface",
    ],
    github: "https://github.com/sonsontrinidad18",
  },
];

export const experience = [
  {
    org: "JobsContaq Manpower Corp",
    role: "IT Department – Web Developer Intern",
    period: "April 2026 – June 2026",
    bullets: [
      "Developed a full-stack deployment monitoring system from scratch to track applicants, deployed employees, and processing status.",
      "Developed application features using Next.js, React, TypeScript, Supabase, and Vercel.",
      "Built and maintained a centralized database for employee and deployment information.",
      "Tested application functionality and troubleshot issues during development.",
      "Designed responsive user interfaces and monitored system performance.",
      "Worked with users and team members to understand requirements and improve system workflows.",
    ],
  },
  {
    org: "Quezon City Hall",
    role: "ITDD – Cybersecurity Intern",
    period: "January 2026 – March 2026",
    bullets: [
      "Assisted with the installation and deployment of security-related IT systems.",
      "Supported Security Operations Center (SecOps) monitoring and helped observe system activity for potential technical issues.",
      "Collaborated with IT team members to troubleshoot and investigate technical issues.",
      "Assisted in improving operational workflows through automation and technical documentation.",
      "Followed systematic troubleshooting procedures to identify and resolve issues.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "National University – Manila",
  graduation: "Graduated: September 2026",
  areas: [
    "Software Development",
    "Web Development",
    "Backend Development",
    "Database Systems",
    "Networking",
    "Cybersecurity",
    "Embedded Systems",
    "IoT",
  ],
};

export const process = [
  { n: "01", title: "Understand", text: "Understand the problem and requirements." },
  { n: "02", title: "Design", text: "Plan the user experience, architecture, and system flow." },
  { n: "03", title: "Build", text: "Develop the frontend, backend, database, and integrations." },
  { n: "04", title: "Test & Improve", text: "Test functionality, fix issues, optimize performance, and continuously improve." },
];
