const PROFILE = {
  name: "Carolina Guinart Boguslawski",
  shortName: "Carolina Guinart",
  email: "carolina@guinart.com.ar",
  linkedin: "https://www.linkedin.com/in/carolina-guinart-boguslawski",
  github: "https://github.com/Karolkalex",
};

const TECH_STACK = [
  "C#",
  ".NET",
  "SQL",
  "HL7",
  "XML",
  "JSON",
  "SOAP / ASMX",
  "REST APIs",
  "Medical devices",
  "EHR integration",
  "Clinical workflows",
  "Real-time data",
];

const PROJECTS = [
  {
    title: "Fetal monitoring digitization system",
    eyebrow: "Medical devices · Real-time clinical data",
    description:
      "Developed a system to digitize fetal monitoring studies, display fetal heart rate and uterine contractions in real time, and generate clinical reports for later review.",
    impact:
      "Helped move fetal monitoring traces from paper-based workflows toward a digital format that can be connected with electronic medical records.",
    tags: ["C#", ".NET", "Medical devices", "Real-time data", "Clinical reports"],
  },
  {
    title: "Multiparametric monitor integration",
    eyebrow: "Healthcare IT · Device integration",
    description:
      "Worked on improving communication between multiparametric monitors and the electronic anesthesia record in a hospital environment.",
    impact:
      "Supported more reliable intraoperative data capture and helped reduce gaps between bedside monitoring and clinical documentation.",
    tags: ["Medical device integration", "EHR", "XML", "Clinical workflows", "Hospital IT"],
  },
  {
    title: "Healthcare interoperability work",
    eyebrow: "Systems analysis · Clinical workflows",
    description:
      "Worked with clinical systems integration, data flow analysis, and interoperability challenges involving medical devices, hospital systems, and end users.",
    impact:
      "Combined technical work with clinical context, translating real workflow needs into practical integration and support tasks.",
    tags: ["HL7", "Healthcare IT", "Interoperability", "Systems analysis"],
  },
  {
    title: "Student leadership in bioengineering",
    eyebrow: "IEEE EMBS · SABI",
    description:
      "Participated in IEEE EMBS and SABI student initiatives, helping organize educational, technical, and networking activities for biomedical engineering students.",
    impact:
      "Contributed to events that connected students, professionals, and institutions across biomedical engineering and health technology.",
    tags: ["IEEE EMBS", "SABI", "Events", "Leadership", "Student community"],
  },
];

const HIGHLIGHTS = [
  {
    value: "8+",
    label: "years working in hospital bioengineering and healthcare IT environments",
  },
  {
    value: "Real-time",
    label: "clinical data acquisition from medical devices and bedside systems",
  },
  {
    value: "Hybrid",
    label: "technical, clinical workflow, and end-user support experience",
  },
];

const EXPERIENCE_BULLETS = [
  "Integrated medical device data with clinical systems and electronic records.",
  "Worked with real-time patient data from multiparametric monitors and fetal monitoring systems.",
  "Supported clinical users and technical teams during implementation, testing, and troubleshooting.",
  "Combined software development, workflow analysis, documentation, and end-user support.",
];

const PUBLICATIONS_AND_TALKS = [
  {
    title: "Prototype for Digitization of Fetal Monitoring, Integrable with Electronic Medical Records",
    detail: "Revista Argentina de Bioingeniería, 2020 | Also presented as poster in Bioengineering Congress SABI 2020",
  },
  {
    title: "Bioengineering Congress Student Day Organization (SABI 2023 & SABI 2025)",
    detail: "Student activities, technical visits, networking events, and educational initiatives",
  },
  {
    title: "Panelist - Bioengineering Congress (SABI 2023)",
    detail: "Participated in a panel on career opportunities for biomedical engineering students and recent graduates, organized by CESABI and IFMBE",
  },
];

const TOPICS = [
  "Medical device integration in real clinical workflows",
  "Interoperability beyond simply connecting systems",
  "Real-time clinical data and electronic health records",
  "The role of biomedical engineers in healthcare IT",
];

function runDataChecks() {
  console.assert(typeof PROFILE.name === "string" && PROFILE.name.length > 0, "PROFILE.name must be a non-empty string.");
  console.assert(typeof PROFILE.email === "string" && PROFILE.email.includes("@"), "PROFILE.email should be a valid email-like string.");
  console.assert(Array.isArray(PROJECTS) && PROJECTS.length > 0, "PROJECTS must contain at least one project.");
  console.assert(
    PROJECTS.every(
      (project) =>
        typeof project.title === "string" &&
        project.title.length > 0 &&
        typeof project.description === "string" &&
        project.description.length > 0 &&
        typeof project.impact === "string" &&
        project.impact.length > 0 &&
        Array.isArray(project.tags)
    ),
    "Each project must include title, description, impact, and tags."
  );
  console.assert(Array.isArray(TOPICS) && TOPICS.length > 0, "TOPICS must contain at least one item.");
}

runDataChecks();

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <PublicationsAndTalks />
      <Topics />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
        Biomedical Engineering · Healthcare IT · Medical Device Integration
      </p>

      <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
        Bridging medical devices, clinical workflows, and healthcare IT
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I’m {PROFILE.shortName}, a biomedical engineering student with hands-on experience in hospital environments, real-time patient data, electronic health records, and medical device integration.
      </p>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        I like working where technology meets real clinical practice: understanding how devices communicate, how data moves through hospital systems, and how technical decisions affect daily workflows for healthcare teams.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-cyan-200">
          View projects
        </a>
        <a href="#contact" className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:border-cyan-300">
          Contact me
        </a>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/60">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-12 md:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <Highlight key={item.value} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="about">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">About</p>
          <h2 className="mt-3 text-4xl font-semibold">A biomedical engineering profile with hospital IT experience</h2>
        </div>

        <div className="space-y-5 leading-7 text-slate-300">
          <p>
            My background sits between biomedical engineering, software, and clinical systems. I’ve worked with medical devices, real-time clinical data, and electronic health records inside hospital environments.
          </p>
          <p>
            That experience shaped the way I think about healthcare technology. A system is not useful only because it works technically. It also needs to fit the clinical workflow, be understandable for users, and produce data that can actually support care.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="experience">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Experience</p>
      <h2 className="mt-3 text-4xl font-semibold">Hospital bioengineering and healthcare IT</h2>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-medium">Bioengineering and clinical systems work</h3>
            <p className="mt-2 text-sm text-slate-400">Hospital Italiano de Buenos Aires</p>
          </div>
          <p className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 md:mt-1">Healthcare IT · Devices · Support</p>
        </div>

        <p className="mt-5 leading-7 text-slate-300">
          Worked with medical devices, clinical systems, and hospital workflows in projects involving multiparametric monitors, anesthesia records, fetal monitoring systems, and the integration of real-time clinical data into electronic health records.
        </p>

        <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
          {EXPERIENCE_BULLETS.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 leading-7">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TechStack() {
  const leftColumn = TECH_STACK.slice(0, Math.ceil(TECH_STACK.length / 2));
  const rightColumn = TECH_STACK.slice(Math.ceil(TECH_STACK.length / 2));

  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="skills">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Skills</p>
      <h2 className="mt-3 text-4xl font-semibold">Technologies and areas I work with</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          {leftColumn.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-center text-slate-300"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {rightColumn.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-center text-slate-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="projects">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projects</p>
      <h2 className="mt-3 text-4xl font-semibold">Selected work</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function PublicationsAndTalks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="publications">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Publications & talks</p>
      <h2 className="mt-3 text-4xl font-semibold">Academic and community work</h2>

      <div className="mt-8 grid gap-4">
        {PUBLICATIONS_AND_TALKS.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="mt-2 text-slate-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Topics() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="topics">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Interests</p>
      <h2 className="mt-3 text-4xl font-semibold">Topics I care about</h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {TOPICS.map((topic) => (
          <div key={topic} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300">
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="contact">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold">Let’s connect</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          I’m open to roles and projects related to healthcare IT, medical device integration, interoperability, digital health, clinical systems, and software connected to healthcare environments.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ContactLink href={`mailto:${PROFILE.email}`} label="Email" symbol="@" />
          <ContactLink href={PROFILE.linkedin} label="LinkedIn" symbol="in" />
          <ContactLink href={PROFILE.github} label="GitHub" symbol="GH" />
        </div>
      </div>
    </section>
  );
}

function Highlight({ value, label }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-5">
      <p className="text-3xl font-semibold text-cyan-300">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{project.eyebrow}</p>

      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span aria-hidden="true" className="mt-1 text-slate-500">
          ↗
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Why it matters</p>
        <p className="mt-2 leading-7 text-slate-300">{project.impact}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function ContactLink({ href, label, symbol }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-cyan-300">
      <span aria-hidden="true" className="text-xs font-semibold text-cyan-300">
        {symbol}
      </span>
      {label}
    </a>
  );
}
