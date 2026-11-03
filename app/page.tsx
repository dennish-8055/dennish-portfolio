"use client";

import { useState } from "react";

const skills = [
  {
    title: "Programming",
    icon: "</>",
    color: "blue",
    items: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    icon: "◈",
    color: "purple",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases",
    icon: "◉",
    color: "cyan",
    items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Testing & QA",
    icon: "✓",
    color: "green",
    items: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "Test Cases",
      "Test Scenarios",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
    ],
  },
  {
    title: "Cybersecurity & Networking",
    icon: "⌁",
    color: "pink",
    items: [
      "Wazuh",
      "SIEM Fundamentals",
      "Wireshark",
      "Network Traffic Analysis",
      "Phishing Email Analysis",
      "Computer Networks",
      "Ethical Hacking Fundamentals",
    ],
  },
  {
    title: "APIs & Tools",
    icon: "↗",
    color: "orange",
    items: ["REST APIs", "Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Cloud & Core Concepts",
    icon: "☁",
    color: "pink",
    items: [
      "AWS Basics",
      "OOP",
      "DBMS",
      "SDLC",
      "STLC",
      "Application Deployment",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Wazuh SOC Home Lab",
    category: "Cybersecurity / SIEM",
    description:
      "A hands-on SOC home lab using Wazuh to monitor a Windows endpoint, collect security events, and explore endpoint activity through the SIEM dashboard.",
    technologies: [
      "Wazuh",
      "SIEM",
      "Windows 11",
      "Docker",
      "Endpoint Monitoring",
    ],
    color: "blue",
    github: "https://github.com/dennish-8055/Wazuh-SOC-Home-Lab",
  },
  {
    number: "02",
    title: "AI Data Dashboard",
    category: "AI / Web",
    description:
      "An AI-powered dashboard that allows users to upload CSV files and ask questions about their data using natural language, with visual results displayed through interactive charts.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Gemini API",
      "Recharts",
    ],
    color: "purple",
    github: "https://github.com/dennish-8055/ai-dashboard",
  },
  {
    number: "03",
    title: "Phishing Email Investigation Tool",
    category: "Cybersecurity / Python",
    description:
      "A Python-based email triage tool that analyzes .eml files, examines email headers, extracts URLs, checks sender and Reply-To details, and produces structured JSON reports.",
    technologies: [
      "Python",
      "Email Analysis",
      "URL Extraction",
      "Regex",
      "JSON",
      "Unit Testing",
    ],
    color: "cyan",
    github: "https://github.com/dennish-8055/Phishing-Email-Investigation",
  },
  {
    number: "04",
    title: "Wireshark Network Investigation",
    category: "Networking",
    description:
      "A beginner network traffic investigation project using Wireshark to examine DNS, TCP, and TLS traffic and understand packet-level network communication.",
    technologies: [
      "Wireshark",
      "DNS",
      "TCP",
      "TLS",
      "Packet Analysis",
      "Networking",
    ],
    color: "blue",
    github: "https://github.com/dennish-8055/Wireshark-Network-Investigation",
  },
  {
    number: "05",
    title: "REST API Testing with Postman",
    category: "Software Testing / API",
    description:
      "An API testing project covering GET, POST, PUT, PATCH, and DELETE requests, with Postman test scripts used to validate API responses and behavior.",
    technologies: [
      "Postman",
      "REST APIs",
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
    ],
    color: "purple",
    github: "https://github.com/dennish-8055/REST-API-Testing-Postman",
  },
  {
    number: "06",
    title: "Reddit Clone",
    category: "Full Stack",
    description:
      "A full-stack Reddit-style community platform with community creation, posting, commenting, voting, image uploads, and protected user workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Clerk",
      "UploadThing",
      "Tailwind CSS",
    ],
    color: "cyan",
    github: "https://github.com/dennish-8055/Reddit-Clone",
  },
  {
    number: "07",
    title: "Heart Disease Prediction System",
    category: "Machine Learning",
    description:
      "A machine learning project focused on predicting heart disease using a Python-based application and machine learning techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "Django",
      "Scikit-learn",
      "SQLite",
    ],
    color: "blue",
    github: "https://github.com/dennish-8055/Heart-Disease-Prediction-System",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070b14] text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="#"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
          >
            Dennish Yadav<span className="text-blue-400"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm text-gray-300 lg:flex">
            <a href="#about" className="nav-link">
              About
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>

            <a href="#experience" className="nav-link">
              Experience
            </a>

            <a href="#projects" className="nav-link">
              Projects
            </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-blue-400/40 px-5 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-400/10 sm:block"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 lg:hidden"
            >
              <span className="text-xl">
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070b14]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-6">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20">
          {/* Hero Content */}
          <div className="animate-fade-up">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-blue-400 sm:text-sm">
              MCA Graduate • IT & Technology
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Dennish.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              I enjoy solving technical problems and exploring how applications,
              systems, networks, and security technologies work together.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              MCA graduate with hands-on project experience across software
              development, application testing, databases, networking,
              cybersecurity fundamentals, and REST APIs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400 sm:px-7"
              >
                View Projects →
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-medium text-gray-200 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10 sm:px-7"
              >
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <p className="text-2xl font-bold">7+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">MCA</p>
                <p className="mt-1 text-sm text-gray-500">
                  Computer Applications
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">2026</p>
                <p className="mt-1 text-sm text-gray-500">
                  Graduation
                </p>
              </div>
            </div>
          </div>

          {/* Developer Card */}
          <div className="animate-fade-up-delay relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />

            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0c1220] p-6 sm:p-7">
                <div className="mb-7 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="space-y-4 font-mono text-xs leading-6 sm:text-sm">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span> = {"{"}
                  </p>

                  <p className="pl-4 sm:pl-5">
                    name: <span className="text-green-300">&quot;Dennish&quot;</span>,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    degree: <span className="text-green-300">&quot;MCA&quot;</span>,
                  </p>

                  <p className="pl-4 sm:pl-5">areas: [</p>

                  <p className="pl-8 text-blue-300">
                    &quot;IT Support&quot;,
                  </p>

                  <p className="pl-8 text-blue-300">
                    &quot;Cybersecurity&quot;,
                  </p>

                  <p className="pl-8 text-blue-300">
                    &quot;Networking&quot;,
                  </p>

                  <p className="pl-8 text-blue-300">
                    &quot;Software Testing&quot;,
                  </p>

                  <p className="pl-8 text-blue-300">
                    &quot;Development&quot;
                  </p>

                  <p className="pl-4 sm:pl-5">],</p>

                  <p className="pl-4 sm:pl-5">
                    learning: <span className="text-green-300">true</span>
                  </p>

                  <p>{"}"}</p>
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-xs text-gray-400">
                    Always learning & building
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative px-5 py-28 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="section-label">About Me</p>

            <h2 className="section-title">
              Turning ideas into{" "}
              <span className="text-blue-400">working software.</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 lg:col-span-2">
              <p className="text-base leading-8 text-gray-300 sm:text-lg">
                I am an MCA graduate from M.S. Ramaiah Institute of
                Technology with a foundation in computer science and
                practical exposure to different areas of IT through
                academic work, an internship, and hands-on projects.
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                My technical exposure includes programming, web technologies,
                databases, REST APIs, application testing, networking,
                and cybersecurity fundamentals. I have used tools and
                technologies such as Python, JavaScript, SQL, Postman,
                Wazuh, and Wireshark in my projects.
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                My projects include a Wazuh security monitoring lab, a phishing
                email investigation tool, network traffic analysis with
                Wireshark, REST API testing with Postman, and web
                application development. These projects have helped me
                practice technical investigation, validation, problem
                solving, and documenting my work.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30">
                <p className="text-sm text-gray-500">Education</p>
                <p className="mt-2 text-xl font-semibold">MCA</p>
                <p className="mt-1 text-sm text-gray-400">
                  M.S. Ramaiah Institute of Technology
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/30">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="mt-2 text-xl font-semibold">
                  Web Development Intern
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Labmentix · 2026
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="mt-2 text-xl font-semibold">
                  IT & Technology
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Exploring, troubleshooting & learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="relative border-t border-white/5 px-5 py-28 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="section-label">Technical Skills</p>

            <h2 className="section-title">
              Tools I work with.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A broad foundation across programming, software development,
              testing, cybersecurity, networking, databases, APIs,
              and common technical tools.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={`skill-card skill-${skill.color}`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-lg">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {skill.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="relative border-t border-white/5 px-5 py-28 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="section-label">Experience</p>

            <h2 className="section-title">
              Where I gained practical experience.
            </h2>
          </div>

          <div className="relative md:pl-12">
            <div className="absolute left-[11px] top-2 hidden h-full w-px bg-gradient-to-b from-blue-400/70 via-purple-400/30 to-transparent md:block" />

            <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-[#070b14] bg-blue-400 md:flex" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.045] sm:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Apr 2026 — May 2026
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Web Development Intern
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Labmentix
                  </p>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                  Internship
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    Projects
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Worked on three web development projects involving
                    application interfaces and backend APIs.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    Development
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Built frontend interfaces and backend functionality
                    across multiple application workflows.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-200">
                    Deployment
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Gained practical exposure to deploying web
                    applications using Vercel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative border-t border-white/5 px-5 py-28 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="section-label">Featured Projects</p>

            <h2 className="section-title">
              Things I&apos;ve built.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A selection of hands-on projects covering IT operations,
              cybersecurity, networking, software testing, APIs,
              and application development.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {projects.map((project, index) => {
              const isThird = index === 2;

              return (
                <article
                  key={project.title}
                  className={`project-card project-${project.color} ${
                    isThird ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`project-visual ${
                      isThird ? "lg:min-h-72" : "h-56"
                    }`}
                  >
                    <div className="relative z-10 text-center">
                      <div className="text-5xl">
                        {index === 0
                          ? "◉"
                          : index === 1
                            ? "✦"
                            : "⌁"}
                      </div>

                      <p className="mt-3 text-xs tracking-[0.25em]">
                        {project.category.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-sm">{project.number}</p>

                        <h3 className="mt-2 text-2xl font-bold">
                          {project.title}
                        </h3>
                      </div>

                      <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10"
                        >
                          View on GitHub ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION + CERTIFICATIONS ================= */}
      <section className="relative border-t border-white/5 px-5 py-28 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Education */}
            <div>
              <p className="section-label">Education</p>

              <h2 className="section-title">
                Academic background.
              </h2>

              <div className="mt-10 space-y-5">
                <div className="min-h-[144px] rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="text-xl font-semibold">
                        Master of Computer Applications
                      </p>

                      <p className="mt-2 text-gray-400">
                        M.S. Ramaiah Institute of Technology
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      2024 — 2026
                    </span>
                  </div>
                </div>

                <div className="min-h-[144px] rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="text-xl font-semibold">
                        Bachelor of Computer Applications
                      </p>

                      <p className="mt-2 text-gray-400">
                        Ramaiah Institute of Business Studies
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      2018 — 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="section-label text-purple-400">
                Certifications
              </p>

              <h2 className="section-title">
                Continuous learning.
              </h2>

              <div className="mt-10 space-y-5">
                <div className="group min-h-[144px] rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-purple-400/30">
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-xl">
                      ✓
                    </div>

                    <div>
                      <p className="text-xl font-semibold">
                        Ethical Hacking
                      </p>

                      <p className="mt-2 text-gray-400">
                        NPTEL
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Jul 2025 — Oct 2025
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group min-h-[144px] rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                      ✦
                    </div>

                    <div>
                      <p className="text-xl font-semibold">
                        AI for Management
                      </p>

                      <p className="mt-2 text-gray-400">
                        NPTEL
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Jan 2026 — Apr 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/5 px-5 py-28 sm:px-6 sm:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="section-label">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Whether it&apos;s discussing a project, technology, or simply
            connecting, feel free to reach out.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dennish8055@gmail.com"
              className="rounded-full bg-blue-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/dennish-8055"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-medium text-gray-200 transition hover:-translate-y-1 hover:bg-white/10"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/dennish-yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-medium text-gray-200 transition hover:-translate-y-1 hover:bg-white/10"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Dennish Yadav. All rights reserved.
          </p>

          <p>
            Made with love & code 💻
          </p>
        </div>
      </footer>
    </main>
  );
}