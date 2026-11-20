import React from "react";
import {
  Briefcase,
  Award,
  Code2,
  Globe2,
  Download,
  FolderOpen,
  Send,
  Database,
  Brain,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  CheckCircle,
  User,
  Rocket,
} from "lucide-react";

const skills = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "AWS",
  "Git",
  "Docker",
  "AI / ML",
];

const stats = [
  {
    icon: <Briefcase size={34} />,
    number: "2+",
    label: "Years Experience",
  },
  {
    icon: <Award size={34} />,
    number: "50+",
    label: "Certifications Earned",
  },
  {
    icon: <Code2 size={34} />,
    number: "5+",
    label: "Projects Delivered",
  },
  {
    icon: <Globe2 size={34} />,
    number: "Remote",
    label: "Available Worldwide",
  },
];

const projects = [
  {
    title: "LifeOS",
    type: "AI Productivity Assistant",
    description:
      "An AI-powered productivity system designed to manage tasks, priorities, and daily planning more efficiently.",
    tech: ["JavaScript", "AI", "Productivity"],
    link: "https://github.com/yousunlotif-bappy",
  },
  {
    title: "TruthLens",
    type: "Fake News Detection App",
    description:
      "A fake news analysis platform that uses AI and NLP concepts to evaluate credibility and provide reliability scoring.",
    tech: ["JavaScript", "Firebase", "NLP"],
    link: "https://github.com/yousunlotif-bappy",
  },
  {
    title: "Lifeline",
    type: "Emergency Application",
    description:
      "A real-time emergency response application focused on quick communication, safety, and accessibility.",
    tech: ["JavaScript", "Emergency Tech", "UI"],
    link: "https://github.com/yousunlotif-bappy",
  },
  {
    title: "ElectraMind",
    type: "AI Election Simulator",
    description:
      "An AI-powered election simulation project for understanding voting systems, results, and decision patterns.",
    tech: ["JavaScript", "AI", "Simulation"],
    link: "https://github.com/yousunlotif-bappy",
  },
  {
    title: "RocGenesis",
    type: "AI Developer Copilot",
    description:
      "An AI-based developer assistant concept for designing, debugging, securing, and optimizing applications.",
    tech: ["Python", "AI", "Developer Tools"],
    link: "https://github.com/yousunlotif-bappy",
  },
];

const certificates = [
  "Generative AI & Large Language Models",
  "Google Cloud AI, Security & Workspace",
  "AWS Cloud & Cost Management",
  "Azure Fundamentals",
  "Machine Learning & TensorFlow",
  "Cybersecurity Awareness",
  "Prompt Engineering",
  "GitHub Copilot & Developer Tools",
  "Data Analytics & Business Analytics",
  "UI/UX Design Process",
];

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111f] text-white">
      {/* Premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(217,164,65,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_25%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,164,65,0.05)_1px,transparent_1px)] bg-[length:80px_80px] opacity-20"></div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-6 md:px-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between rounded-2xl border border-[#26384d] bg-[#071625]/85 px-5 py-5 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-4">
            <div className="font-serif text-4xl font-bold text-[#d9a441]">
              YL
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-[0.18em] md:text-xl">
                YOUSUN LOTIF
              </h2>
              <p className="text-xs tracking-[0.25em] text-[#d9a441] md:text-sm">
                SOFTWARE ENGINEER
              </p>
            </div>
          </div>

          <div className="hidden gap-9 text-sm font-semibold tracking-wide lg:flex">
            <a href="#home" className="text-[#d9a441]">
              HOME
            </a>
            <a href="#about" className="hover:text-[#d9a441]">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-[#d9a441]">
              SKILLS
            </a>
            <a href="#projects" className="hover:text-[#d9a441]">
              PROJECTS
            </a>
            <a href="#experience" className="hover:text-[#d9a441]">
              EXPERIENCE
            </a>
            <a href="#certifications" className="hover:text-[#d9a441]">
              CERTIFICATIONS
            </a>
            <a href="#contact" className="hover:text-[#d9a441]">
              CONTACT
            </a>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#d9a441] px-5 py-2 text-[#d9a441] xl:flex">
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
            AVAILABLE FOR REMOTE
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="grid min-h-[720px] items-center gap-14 pt-16 lg:grid-cols-2 lg:pt-20"
        >
          {/* Left content */}
          <div>
            <h4 className="mb-8 tracking-[0.35em] text-[#d9a441]">
              HELLO, I'M
            </h4>

            <h1 className="mb-5 font-serif text-6xl leading-tight md:text-8xl">
              Yousun <span className="text-[#d9a441]">Lotif</span>
            </h1>

            <h2 className="mb-8 text-xl leading-relaxed text-[#d9a441] md:text-2xl">
              Software Engineer | AI Developer | IT & Software Support
              Professional
            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-300">
              Detail-oriented and results-driven Software Engineer with
              expertise in building scalable web applications, AI-powered
              solutions, and providing reliable IT support. Passionate about
              clean code, problem-solving, and delivering impactful digital
              experiences.
            </p>

            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#31445d] bg-[#081827]/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d9a441]"
                >
                  <div className="mb-3 text-[#d9a441]">{item.icon}</div>
                  <h3 className="text-3xl font-bold text-[#d9a441]">
                    {item.number}
                  </h3>
                  <p className="text-sm uppercase text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <a
                href="/Yousun Lotif Optimized.pdf"
                download
                className="flex items-center gap-3 rounded-lg bg-[#d9a441] px-7 py-4 font-bold text-black transition hover:bg-[#f0bd5a]"
              >
                <Download size={20} />
                DOWNLOAD RESUME
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-lg border border-[#d9a441] px-7 py-4 font-bold text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
              >
                <FolderOpen size={20} />
                EXPLORE PROJECTS
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-lg border border-[#d9a441] px-7 py-4 font-bold text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
              >
                <Send size={20} />
                CONTACT ME
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center">
            <div className="absolute h-[430px] w-[430px] rounded-full bg-[#d9a441]/20 blur-3xl md:h-[520px] md:w-[520px]"></div>

            <div className="relative rotate-2 rounded-[3rem] border-2 border-[#d9a441] bg-[#091727] p-3 shadow-2xl">
              <div className="absolute -inset-5 -z-10 rounded-[4rem] border border-[#d9a441]/25"></div>

              <img
                src="/profile.jpg"
                alt="Yousun Lotif"
                className="h-[480px] w-[360px] -rotate-2 rounded-[2.5rem] object-cover object-top md:h-[560px] md:w-[460px]"
              />

              <div className="absolute -right-8 bottom-10 hidden rounded-full border border-[#d9a441] bg-[#071625] p-6 text-center md:block">
                <p className="text-xs uppercase tracking-widest text-[#d9a441]">
                  Committed To
                </p>
                <h3 className="text-2xl font-bold text-[#d9a441]">Quality</h3>
                <p className="text-xs text-gray-300">Innovation • Impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Strip */}
        <section
          id="skills"
          className="mt-10 rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8"
        >
          <h3 className="mb-8 font-bold tracking-[0.25em] text-[#d9a441]">
            CORE SKILLS
          </h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-5 lg:grid-cols-9">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center lg:border-r lg:border-[#31445d] lg:last:border-r-0"
              >
                <div className="text-3xl text-[#d9a441]">
                  {skill.includes("SQL") ? (
                    <Database />
                  ) : skill.includes("AI") ? (
                    <Brain />
                  ) : (
                    <Code2 />
                  )}
                </div>
                <p className="text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About + Experience */}
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            id="about"
            className="rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-[#d9a441]/15 p-3 text-[#d9a441]">
                <User />
              </div>
              <h3 className="text-2xl font-bold text-[#d9a441]">About Me</h3>
            </div>

            <p className="leading-8 text-gray-300">
              I am a Computer Science graduate with practical experience in IT
              support, software development, automation, and AI-based project
              building. I enjoy turning complex problems into simple, scalable,
              and useful digital products.
            </p>

            <div className="mt-6 grid gap-3 text-gray-300">
              <p className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#d9a441]" />
                Strong foundation in software engineering and AI
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#d9a441]" />
                Experienced in IT support and technical troubleshooting
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#d9a441]" />
                Open to remote jobs and global opportunities
              </p>
            </div>
          </div>

          <div
            id="experience"
            className="rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-[#d9a441]/15 p-3 text-[#d9a441]">
                <Briefcase />
              </div>
              <h3 className="text-2xl font-bold text-[#d9a441]">
                Experience Timeline
              </h3>
            </div>

            <div className="space-y-8 border-l border-[#d9a441]/40 pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#d9a441]"></span>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#d9a441]">
                  <Calendar size={16} /> 2024 — Present
                </div>
                <h4 className="mt-2 text-xl font-bold">
                  IT & Software Support Executive
                </h4>
                <p className="text-[#d9a441]">City Link Communication</p>
                <p className="mt-3 leading-7 text-gray-300">
                  Provide IT support, troubleshoot software and system issues,
                  assist users, maintain documentation, and support operational
                  workflow improvements.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#d9a441]"></span>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#d9a441]">
                  <Calendar size={16} /> Feb 2024 — Jul 2024
                </div>
                <h4 className="mt-2 text-xl font-bold">
                  Administrative IT Intern
                </h4>
                <p className="text-[#d9a441]">City Link Communication</p>
                <p className="mt-3 leading-7 text-gray-300">
                  Assisted in system maintenance, troubleshooting,
                  documentation, reporting, task coordination, and basic
                  automation using office and productivity tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mt-10 rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl font-bold text-[#d9a441]">
                Featured Projects
              </h3>
              <p className="mt-2 text-gray-300">
                Selected AI, software, and web-based projects from my portfolio.
              </p>
            </div>

            <a
              href="https://github.com/yousunlotif-bappy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#d9a441] px-5 py-3 text-[#d9a441] hover:bg-[#d9a441] hover:text-black"
            >
              View GitHub <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#31445d] bg-[#081827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9a441]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d9a441]/15 text-[#d9a441]">
                  <Rocket />
                </div>

                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className="mt-1 text-[#d9a441]">{project.type}</p>

                <p className="mt-4 leading-7 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-[#31445d] px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[#d9a441] hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-[#d9a441]/15 p-3 text-[#d9a441]">
                <Award />
              </div>
              <h3 className="text-2xl font-bold text-[#d9a441]">
                Certifications
              </h3>
            </div>

            <h2 className="text-6xl font-bold text-[#d9a441]">50+</h2>
            <p className="mt-3 text-xl font-semibold">
              Professional Courses & Certifications
            </p>
            <p className="mt-4 leading-7 text-gray-300">
              Completed certifications across AI, cloud computing,
              cybersecurity, data analytics, prompt engineering, and developer
              tools.
            </p>
          </div>

          <div className="rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#d9a441]">
              Selected Certification Areas
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              {certificates.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#31445d] bg-[#081827] p-4 text-gray-300"
                >
                  <CheckCircle size={18} className="text-[#d9a441]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-10 rounded-2xl border border-[#26384d] bg-[#071625]/85 p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-[#d9a441]">
                Let’s Connect
              </h3>
              <p className="mt-4 max-w-2xl leading-8 text-gray-300">
                I am open to remote opportunities, software engineering roles,
                AI development roles, and IT/software support positions. Let’s
                build something meaningful together.
              </p>

              <div className="mt-8 space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <Mail className="text-[#d9a441]" />
                  yousunlotif@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <Code2 className="text-[#d9a441]" />
                  github.com/yousunlotif-bappy
                </p>
                <p className="flex items-center gap-3">
                  <Globe2 className="text-[#d9a441]" />
                  linkedin.com/in/yousun-lotif-7460a22bb
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="text-[#d9a441]" />
                  Bangladesh — Available for Remote Work
                </p>
              </div>
            </div>

            <form
              action="mailto:yousunlotif@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#31445d] bg-[#081827] px-5 py-4 text-white outline-none focus:border-[#d9a441]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-[#31445d] bg-[#081827] px-5 py-4 text-white outline-none focus:border-[#d9a441]"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-[#31445d] bg-[#081827] px-5 py-4 text-white outline-none focus:border-[#d9a441]"
              ></textarea>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#d9a441] px-6 py-4 font-bold text-black transition hover:bg-[#f0bd5a]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400">
          © 2025 Yousun Lotif. Building intelligent solutions. Solving real
          problems.
        </footer>
      </div>
    </main>
  );
}




