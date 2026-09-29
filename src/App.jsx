import { useState } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  ChevronRight,
  Download,
  Globe,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiSupabase,
  SiFramer,
  SiVite,
} from "react-icons/si";
import "./index.css";

function App() {
  const [lang, setLang] = useState("es");

  const content = {
    es: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        exp: "Experiencia",
        skills: "Habilidades",
        cv: "Descargar CV",
      },
      hero: {
        greeting: "Hola, soy Gonzalo Vallejos Tipo crack master e idolo",
        title1: "Construyendo el build",
        title2: "Cambiaso cada 5 segundos",
        desc: "ultimo",
        btnProjects: "Ver mis proyectos",
        btnContact: "Contactarme",
      },
      titles: {
        projects: "Mis Proyectos",
        exp: "Trayectoria y Títulos",
        skills: "Habilidades y Tecnologías",
        contact: "¿Trabajamos juntos?",
      },
      links: { demo: "Demo", code: "Código" },
      footer: "Construido con React.",
      projects: [
        {
          title: "Gestión Personal",
          desc: "App de gestión personal y finanzas, integrada con un Bot de Telegram para registrar gastos y consultar tareas diarias.",
          tags: [
            { name: "React", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Framer", icon: <SiFramer /> },
            { name: "Telegram Bot", icon: <FaTelegramPlane /> },
          ],
          link: "https://mi-gestion-personal.vercel.app/login",
          github: "https://github.com/Gonza-Vallejos/dashboard",
        },
        {
          title: "Tienda Joyería",
          desc: "Plataforma E-commerce para venta de joyería con panel de administración.",
          tags: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Framer", icon: <SiFramer /> },
          ],
          link: "https://luxesaas.com.ar/",
          github: "https://github.com/Gonza-Vallejos/LuxeSass",
        },
        {
          title: "Serprove Vet",
          desc: "Sistema integral para la gestión de clínicas veterinarias e historias clínicas.",
          tags: [
            { name: "React", icon: <FaReact /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "JSON-Server", icon: <FaDatabase /> },
          ],
          link: "#",
          github: "#",
        },
        {
          title: "V&V Reservas",
          desc: "App móvil para reserva de viajes en minibuses con backend en Node.js y MySQL.",
          tags: [
            { name: "React Native", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MySQL", icon: <FaDatabase /> },
          ],
          link: "#",
          github: "#",
        },
        {
          title: "Sistemas de Ventas(SaaS)",
          desc: "SaaS multitenant para gestión de ventas con pagos, webhooks y métricas en tiempo real.",
          tags: [
            { name: "NestJS", icon: <FaNodeJs /> },
            { name: "React", icon: <FaReact /> },
            { name: "Prisma", icon: <FaDatabase /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
          ],
          link: "https://proyecto-saas-gules.vercel.app/login",
          github: "#",
        },
      ],
      experience: [
        {
          date: "Actualidad",
          title: "Desarrollador de Software",
          subtitle: "Gestión de Sistemas Tributarios",
          desc: "Desarrollo y mantenimiento de aplicaciones críticas orientadas a la gestión integral y procesamiento de sistemas tributarios.",
        },
        {
          date: "2019 - 2025",
          title: "Licenciado en Sistemas de Información",
          subtitle: "Educación Universitaria",
          desc: "Graduado de la Licenciatura (Nov 2025). Durante la carrera obtuve el título intermedio de Analista Programador (2024).",
        },
      ],
    },
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        exp: "Experience",
        skills: "Skills",
        cv: "Download CV",
      },
      hero: {
        greeting: "Hi, I'm Gonzalo Vallejos",
        title1: "Building",
        title2: "incredible",
        title3: "digital experiences.",
        desc: "I am a passionate developer focused on creating dynamic, fast, and accessible web applications. I transform complex ideas into simple and beautiful interfaces.",
        btnProjects: "View my projects",
        btnContact: "Contact me",
      },
      titles: {
        projects: "My Projects",
        exp: "Experience & Education",
        skills: "Skills & Technologies",
        contact: "Let's work together",
      },
      links: { demo: "Demo", code: "Code" },
      footer: "Built with React.",
      projects: [
        {
          title: "Personal Management",
          desc: "Personal finance and management app, integrated with a Telegram Bot to log expenses and check daily tasks.",
          tags: [
            { name: "React", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Framer", icon: <SiFramer /> },
            { name: "Telegram Bot", icon: <FaTelegramPlane /> },
          ],
          link: "https://mi-gestion-personal.vercel.app/login",
          github: "https://github.com/Gonza-Vallejos/dashboard",
        },
        {
          title: "Jewelry Store",
          desc: "E-commerce platform for jewelry sales with a full administration panel.",
          tags: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Framer", icon: <SiFramer /> },
          ],
          link: "https://luxesaas.com.ar/",
          github: "https://github.com/Gonza-Vallejos/LuxeSass",
        },
        {
          title: "Serprove Vet",
          desc: "Comprehensive system for veterinary clinic management and medical records.",
          tags: [
            { name: "React", icon: <FaReact /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "JSON-Server", icon: <FaDatabase /> },
          ],
          link: "#",
          github: "#",
        },
        {
          title: "V&V Bookings",
          desc: "Mobile app for booking minibus trips with a Node.js and MySQL backend.",
          tags: [
            { name: "React Native", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MySQL", icon: <FaDatabase /> },
          ],
          link: "#",
          github: "#",
        },
        {
          title: "SIT API (Sales SaaS)",
          desc: "Multitenant SaaS for sales management with payments, webhooks, and real-time metrics.",
          tags: [
            { name: "NestJS", icon: <FaNodeJs /> },
            { name: "React", icon: <FaReact /> },
            { name: "Prisma", icon: <FaDatabase /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
          ],
          link: "#",
          github: "#",
        },
      ],
      experience: [
        {
          date: "Present",
          title: "Software Developer",
          subtitle: "Tax Systems Management",
          desc: "Development and maintenance of critical applications oriented towards comprehensive tax systems processing and management.",
        },
        {
          date: "2019 - 2025",
          title: "B.S. in Information Systems",
          subtitle: "University Education",
          desc: "Graduated with a Bachelor's Degree (Nov 2025). Previously obtained an intermediate degree as a Systems Analyst (2024).",
        },
      ],
    },
  };

  const t = content[lang];

  const skills = [
    { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "SQL", icon: <FaDatabase color="#f97316" /> },
    { name: "Oracle APEX", icon: <GrOracle color="#C74634" /> },
  ];

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <>
      <div className="bg-gradient"></div>

      <header>
        <div className="container">
          <div className="logo">GV.</div>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <ul>
              <li>
                <a href="#inicio">{t.nav.home}</a>
              </li>
              <li>
                <a href="#proyectos">{t.nav.projects}</a>
              </li>
              <li>
                <a href="#experiencia">{t.nav.exp}</a>
              </li>
              <li>
                <a href="#habilidades">{t.nav.skills}</a>
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <a
                href="/cv.pdf"
                target="_blank"
                className="btn btn-primary"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
              >
                <Download size={16} /> {t.nav.cv}
              </a>
              <button
                onClick={toggleLanguage}
                className="btn btn-secondary"
                style={{
                  padding: "0.4rem 0.8rem",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                aria-label="Toggle Language"
              >
                <Globe size={16} /> {lang === "es" ? "EN" : "ES"}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero container">
          <div className="hero-content">
            <span className="hero-greeting">{t.hero.greeting}</span>
            <h1>
              {t.hero.title1}{" "}
              <span style={{ color: "var(--accent-1)" }}>{t.hero.title2}</span>
              {lang === "en" ? t.hero.title3 : "."}
            </h1>
            <p>{t.hero.desc}</p>
            <div className="hero-buttons">
              <a href="#proyectos" className="btn btn-primary">
                {t.hero.btnProjects} <ChevronRight size={18} />
              </a>
              <a href="#contacto" className="btn btn-secondary">
                {t.hero.btnContact}
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="container">
          <h2 className="section-title">{t.titles.projects}</h2>
          <div className="projects-grid">
            {t.projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-icon">
                  <Code2 size={24} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "99px",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {tag.icon} {tag.name}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> {t.links.demo}
                  </a>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={16} /> {t.links.code}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experiencia"
          className="container"
          style={{ marginTop: "6rem" }}
        >
          <h2 className="section-title">{t.titles.exp}</h2>
          <div className="timeline">
            {t.experience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <span className="timeline-date">{item.date}</span>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-subtitle">{item.subtitle}</h4>
                  <p className="project-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="container">
          <h2 className="section-title">{t.titles.skills}</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {skill.icon}
                </span>
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            {t.titles.contact}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:gonza18av@gmail.com"
              className="contact-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              <Mail size={32} color="var(--accent-1)" />
              <span>gonza18av@gmail.com</span>
            </a>

            <a
              href="https://wa.me/377238159"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              <FaWhatsapp size={32} color="#25D366" />
              <span>377238159</span>
            </a>

            <a
              href="https://www.instagram.com/gonzavallejos18?igsh=dG55NGhnNG9xemd5"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              <FaInstagram size={32} color="#E1306C" />
              <span>@gonzavallejos18</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              <FaLinkedin size={32} color="#0A66C2" />
              <span>/in/gonza-vallejos</span>
            </a>

            <a
              href="https://github.com/Gonza-Vallejos"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
            >
              <FaGithub size={32} />
              <span>/Gonza-Vallejos</span>
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Gonzalo Vallejos. {t.footer}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
