import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import {
  abilities,
  assetPath,
  contacts,
  education,
  others,
  profile,
  projects,
  workExperience
} from "./data";

const navItems = [
  ["Resume", "resume"],
  ["Project", "project"],
  ["Ability", "ability"],
  ["Experience", "experience"],
  ["Others", "others"],
  ["Contact", "contact"]
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProject),
    [activeProject]
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-mist selection:bg-magenta selection:text-white">
      <div className="grain" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(118,33,176,0.2),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(45,156,255,0.12),transparent_20%),#0C0C0C]" />
      <Nav />
      <Hero />
      <section id="project" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
          {selectedProject ? (
            <ProjectDetail project={selectedProject} onBack={() => setActiveProject(null)} />
          ) : (
            <Projects onSelect={setActiveProject} />
          )}
        </div>
      </section>
      <Ability />
      <Experience />
      <Others />
      <Contact />
      <BackToTop />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-5 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border border-mist/10 bg-ink/72 px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="#resume" className="font-display text-sm font-black uppercase tracking-normal text-mist">
          Zou Jiawen
        </a>
        <div className="hidden items-center gap-6 text-xs uppercase text-mist/55 md:flex">
          {navItems.map(([label, id]) => (
            <a key={id} className="nav-link" href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <a className="focus-ring inline-flex items-center gap-2 border border-magenta/70 px-3 py-2 text-xs font-semibold text-mist shadow-glow" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="resume" className="section-pad flex min-h-screen items-center pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1fr_360px]">
        <div className="animate-rise">
          <p className="mb-4 flex items-center gap-2 text-sm uppercase text-ice/70">
            <Sparkles className="h-4 w-4 text-magenta" />
            Resume / Hero
          </p>
          <h1 className="hero-title font-display font-black uppercase leading-[0.95] text-mist">
            {profile.englishName}
          </h1>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.03] text-ice">
            {profile.role}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-[1.9] text-mist/70">
            {profile.slogan}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span key={tag} className="border border-mist/12 bg-mist/[0.04] px-3 py-2 text-sm text-mist/72">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            <InfoTile label="City" value={profile.city} />
            <InfoTile label="Experience" value={profile.experience} />
            <InfoTile label="Birthday" value={profile.birthday} />
          </div>
          <a className="focus-ring mt-9 inline-flex items-center gap-2 bg-magenta px-6 py-4 text-sm font-bold text-white shadow-glow" href="#contact">
            Contact Me
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-[360px] animate-rise delay-100 lg:mx-0">
          <div className="absolute -inset-5 border border-violet/30" />
          <img
            src={profile.avatar}
            alt={`${profile.name} portrait`}
            className="relative aspect-square w-full object-cover object-top grayscale-[0.12]"
          />
          <div className="absolute -bottom-5 -left-5 bg-ink px-5 py-4 text-sm text-mist/75 shadow-ice">
            <span className="block text-2xl font-black text-ice">{profile.name}</span>
            Product Designer
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ label, value }) {
  return (
    <div className="border border-mist/10 bg-mist/[0.035] p-4">
      <p className="text-xs uppercase text-mist/42">{label}</p>
      <p className="mt-2 text-lg font-bold text-ice">{value}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm uppercase text-mist/45">{eyebrow}</p>
      <h2 className="mt-2 font-display text-[clamp(3rem,9vw,130px)] font-black uppercase leading-[0.92] text-ice">
        {title}
      </h2>
    </div>
  );
}

function Projects({ onSelect }) {
  return (
    <div className="animate-rise">
      <SectionTitle eyebrow="My Latest Projects" title="Project" />
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card group">
            <div className="grid gap-5 lg:grid-cols-[90px_1fr_auto] lg:items-start">
              <p className="font-display text-5xl font-black text-mist/22">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="text-sm text-mist/50">{project.type} / {project.time}</p>
                <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] text-mist">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-[1.8] text-mist/62">{project.summary}</p>
              </div>
              <button className="focus-ring inline-flex h-12 items-center justify-center border border-ice/25 px-5 text-sm font-semibold text-ice transition hover:border-magenta hover:text-white" onClick={() => onSelect(project.id)}>
                View Project
              </button>
            </div>
            <button className="mt-6 block w-full overflow-hidden text-left" onClick={() => onSelect(project.id)} aria-label={`View ${project.name}`}>
              <img src={project.cover} alt={`${project.name} cover`} className="aspect-[16/9] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <article className="animate-rise">
      <button className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-semibold text-mist/72 transition hover:text-ice" onClick={onBack}>
        <ChevronLeft className="h-4 w-4" />
        Back To Projects
      </button>
      <div className="overflow-hidden border border-mist/12 bg-mist/[0.035]">
        <img src={project.cover} alt={`${project.name} cover`} className="aspect-[16/9] w-full object-cover object-top" />
        <div className="grid gap-6 border-t border-mist/10 p-5 sm:p-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm text-mist/52">{project.type} / {project.time}</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] text-ice">
              {project.name}
            </h2>
          </div>
          <p className="text-base leading-[1.8] text-mist/68">{project.summary}</p>
        </div>
      </div>
      <div className="mt-6 border border-mist/12 bg-ink/80">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-mist/10 p-4">
          <p className="text-sm text-mist/60">PDF 页面预览 / 项目详情内容纵向排列</p>
          <a className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-ice hover:text-white" href={project.pdf} target="_blank" rel="noreferrer">
            Open PDF
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <iframe className="h-[78vh] min-h-[560px] w-full bg-ink" src={`${project.pdf}#toolbar=1&navpanes=0`} title={`${project.name} PDF`} />
      </div>
    </article>
  );
}

function Ability() {
  return (
    <section id="ability" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionTitle eyebrow="My Ability" title="Ability" />
        <div className="grid gap-5 md:grid-cols-2">
          <SkillPanel title="专业能力" items={abilities.professional} />
          <SkillPanel title="软件能力" items={abilities.software} />
        </div>
      </div>
    </section>
  );
}

function SkillPanel({ title, items }) {
  return (
    <div className="border border-mist/12 bg-mist/[0.035] p-5 sm:p-7">
      <h3 className="mb-6 text-2xl font-bold text-ice">{title}</h3>
      <div className="space-y-5">
        {items.map(([name, value]) => (
          <SkillMeter key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
}

function SkillMeter({ name, value }) {
  const meterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = meterRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={meterRef} className="skill-meter group" style={{ "--skill-value": `${value}%` }}>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="text-mist/78 transition group-hover:text-ice">{name}</span>
        <span className="font-bold text-ice">{value}%</span>
      </div>
      <div className="skill-track" aria-label={`${name} ${value}%`}>
        <div className={`skill-fill ${isVisible ? "is-visible" : ""}`}>
          <span className="skill-shine" />
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
        <SectionTitle eyebrow="My Education & Work Experience" title="Experience" />
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="border border-mist/12 bg-mist/[0.035] p-5 sm:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ice">
              <BriefcaseBusiness className="h-5 w-5 text-magenta" />
              工作经历
            </h3>
            <div className="space-y-7">
              {workExperience.map((item) => (
                <TimelineItem key={`${item.company}-${item.time}`} item={item} />
              ))}
            </div>
          </div>
          <div className="border border-mist/12 bg-mist/[0.035] p-5 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold text-ice">Education</h3>
            {education.map((item) => (
              <div key={item.school} className="border-t border-mist/12 pt-5">
                <p className="text-sm text-mist/50">{item.time}</p>
                <p className="mt-3 text-xl font-bold text-ice">{item.school}</p>
                <p className="mt-2 text-mist/65">{item.major} / {item.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  return (
    <article className="border-t border-mist/12 pt-6">
      <p className="text-sm text-mist/50">{item.time}</p>
      <h4 className="mt-3 text-xl font-bold text-ice">{item.title}</h4>
      <p className="mt-1 text-sm font-semibold text-magenta">{item.company}</p>
      <p className="mt-4 text-base leading-[1.8] text-mist/66">{item.description}</p>
    </article>
  );
}

function Others() {
  return (
    <section id="others" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
        <SectionTitle eyebrow="Design Notes" title="Others" />
        <div className="grid gap-5 md:grid-cols-2">
          {others.map((item) => (
            <article key={item.title} className="border border-mist/12 bg-mist/[0.035] p-5 sm:p-7">
              <p className="text-sm text-mist/50">{item.tag}</p>
              <h3 className="mt-3 text-2xl font-bold leading-[1.2] text-ice">{item.title}</h3>
              <p className="mt-6 border-l border-magenta/70 pl-4 text-base leading-[1.75] text-mist/78">
                {item.feedback}
              </p>
              <p className="mt-6 text-base leading-[1.85] text-mist/62">{item.thinking}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copiedKey, setCopiedKey] = useState("");
  const cards = [
    [Phone, "电话", contacts.phone, true],
    [Mail, "邮箱", contacts.email, true],
    [MapPin, "城市", profile.city, false]
  ];

  const handleCopy = async (label, value) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedKey(label);
      window.setTimeout(() => setCopiedKey(""), 1600);
    } catch {
      setCopiedKey("");
    }
  };

  return (
    <section id="contact" className="section-pad pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <SectionTitle eyebrow="Contact Me" title="Contact" />
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map(([Icon, label, value, copyable]) => (
            <ContactCard
              key={label}
              icon={Icon}
              label={label}
              value={value}
              copyable={copyable}
              copied={copiedKey === label}
              onCopy={() => handleCopy(label, value)}
            />
          ))}
          <button
            type="button"
            className="focus-ring group border border-mist/12 bg-mist/[0.035] p-5 text-left transition hover:border-magenta/60 hover:bg-mist/[0.055] md:col-span-3"
            onClick={() => handleCopy("微信", contacts.wechat)}
            aria-label={`复制微信号 ${contacts.wechat}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm text-mist/45">
                  <span>微信</span>
                  <CopyState copied={copiedKey === "微信"} />
                </div>
                <p className="mt-2 text-lg font-bold text-ice transition group-hover:text-white">{contacts.wechat}</p>
              </div>
              <img className="h-12 w-12 opacity-90" src={assetPath("assets/wx.svg")} alt="" aria-hidden="true" />
            </div>
          </button>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-mist/12 pt-6 text-sm text-mist/42 sm:flex-row">
          <span>© 2026 Zou Jiawen. Portfolio Website.</span>
          <span>{profile.city}</span>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, copyable, copied, onCopy }) {
  if (!copyable) {
    return (
      <div className="border border-mist/12 bg-mist/[0.035] p-5">
        <Icon className="h-6 w-6 text-ice" />
        <p className="mt-7 text-sm text-mist/45">{label}</p>
        <p className="mt-2 break-words text-lg font-bold text-ice">{value}</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="focus-ring group border border-mist/12 bg-mist/[0.035] p-5 text-left transition hover:border-magenta/60 hover:bg-mist/[0.055]"
      onClick={onCopy}
      aria-label={`复制${label} ${value}`}
    >
      <div className="flex items-start justify-between gap-4">
        <Icon className="h-6 w-6 text-ice" />
        <CopyState copied={copied} />
      </div>
      <p className="mt-7 text-sm text-mist/45">{label}</p>
      <p className="mt-2 break-words text-lg font-bold text-ice transition group-hover:text-white">{value}</p>
    </button>
  );
}

function CopyState({ copied }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold transition ${copied ? "text-electricBlue" : "text-mist/42"}`}>
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "已复制" : "复制"}
    </span>
  );
}

function BackToTop() {
  return (
    <a className="focus-ring fixed bottom-6 right-6 z-30 hidden h-12 w-12 items-center justify-center border border-mist/20 bg-ink/80 text-ice backdrop-blur-xl transition hover:border-magenta hover:text-white md:flex" href="#resume" aria-label="Back to top">
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}

export default App;
