const PROFILE = {
  name: "Carolina Guinart Boguslawski",
  email: "carolina@guinart.com.ar",
  linkedin: "https://www.linkedin.com/in/carolina-guinart-boguslawski/",
  github: "https://github.com/Karolkalex",
};

const PROJECTS = [
  {
    title: "Fetal monitoring digitization system",
    description:
      "Developed a system to digitize fetal monitoring studies, display fetal heart rate and uterine contractions in real time, and generate clinical reports.",
    tags: ["C#", ".NET", "Medical devices", "Real-time data"],
  },
  {
    title: "Multiparametric monitor integration",
    description:
      "Worked on improving the communication between multiparametric monitors and the anesthesia electronic record, supporting more reliable intraoperative data capture.",
    tags: ["Medical device integration", "EHR", "XML", "Clinical workflows"],
  },
  {
    title: "Healthcare interoperability work",
    description:
      "Experience with clinical systems integration, data flow analysis, and interoperability challenges in hospital environments.",
    tags: ["HL7", "Healthcare IT", "Interoperability", "Systems analysis"],
  },
  {
    title: "Student leadership in bioengineering",
    description:
      "Participation in IEEE EMBS and SABI student initiatives, helping organize educational and networking activities for biomedical engineering students.",
    tags: ["IEEE EMBS", "SABI", "Events", "Leadership"],
  },
];

const TOPICS = [
  "Medical device integration in real clinical workflows",
  "Interoperability beyond connecting systems",
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
        Array.isArray(project.tags)
    ),
    "Each project must include title, description, and tags."
  );
  console.assert(Array.isArray(TOPICS) && TOPICS.length > 0, "TOPICS must contain at least one item.");
}

runDataChecks();

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Stats />
      <Experience />
      <Projects />
      <Topics />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-300">
        Biomedical Engineering · Healthcare IT · Medical Device Integration
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
        Hi, I’m {PROFILE.name}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        I work at the intersection of biomedical engineering, clinical systems, and medical device integration. My experience includes hospital environments, real-time patient data, electronic health records, and interoperability between medical devices and clinical workflows.
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

function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/60">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-12 md:grid-cols-3">
        <Stat value="8+" label="years of hospital bioengineering experience" />
        <Stat value="Real-time" label="clinical data acquisition and device integration" />
        <Stat value="Healthcare IT" label="EHR integration, interoperability, and clinical workflows" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="experience">
      <h2 className="text-4xl font-semibold">Experience</h2>

      <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
        <h3 className="text-3xl font-medium">Bioengineering and Healthcare IT experience</h3>
        <p className="mt-2 text-sm text-slate-400">Hospital Italiano de Buenos Aires</p>

        <p className="mt-4 leading-7 text-slate-300">
          Worked with medical devices, clinical systems, and hospital workflows. Participated in projects involving multiparametric monitors, anesthesia records, fetal monitoring systems, and the integration of real-time clinical data into electronic health records.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
          <li>Integrated medical device data with clinical systems and electronic records.</li>
          <li>Worked with real-time patient data in hospital environments.</li>
          <li>Supported clinical users and technical teams during implementation and troubleshooting.</li>
          <li>Combined software development, workflow analysis, and end-user support.</li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="projects">
      <h2 className="text-4xl font-semibold">Selected projects</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Topics() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id="topics">
      <h2 className="text-4xl font-semibold">Topics I care about</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
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
        <h2 className="text-4xl font-semibold">Contact</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          I’m interested in healthcare IT, medical device integration, interoperability, digital health, and software roles connected to clinical environments.
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

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-cyan-300">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span aria-hidden="true" className="mt-1 text-slate-500">
          ↗
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

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
