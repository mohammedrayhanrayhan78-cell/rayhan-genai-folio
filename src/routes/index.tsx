import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroVisual from "@/assets/rayhan-abstract-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Rayhan — GenAI & Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mohammed Rayhan, a CSE student building GenAI, RAG, computer vision, and cloud applications.",
      },
      { property: "og:title", content: "Mohammed Rayhan — GenAI & Cloud Engineer" },
      {
        property: "og:description",
        content: "GenAI, RAG systems, computer vision, and cloud engineering projects by Mohammed Rayhan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    index: "01",
    title: "LexiRAG",
    description:
      "A secure legal document assistant pairing local Gemma inference with Groq and Gemini fallbacks, regional language support, and an Azure deployment.",
    tags: ["RAG", "Ollama", "Gemma 2B", "Azure"],
    href: "https://github.com/mohammedrayhanrayhan78-cell/LexiRAG_Project",
    icon: Database,
    feature: "Hybrid intelligence",
  },
  {
    index: "02",
    title: "Hand-Tracking Virtual Steering Wheel",
    description:
      "A real-time computer vision experience that translates hand-tracking gestures into intuitive virtual steering controls.",
    tags: ["MediaPipe", "OpenCV", "Python"],
    href: "https://github.com/mohammedrayhanrayhan78-cell/ComputerVision",
    icon: Code2,
    feature: "Computer vision",
  },
  {
    index: "03",
    title: "Legal RAG India",
    description:
      "A focused legal Q&A app built in one intensive session using Llama 3.3 70B and lightweight numpy similarity search.",
    tags: ["Groq", "Llama 3.3", "Streamlit", "NumPy"],
    href: "https://github.com/mohammedrayhanrayhan78-cell/legal-rag-india",
    icon: Braces,
    feature: "Rapid prototyping",
  },
  {
    index: "04",
    title: "LexAI",
    description:
      "A production-grade AI legal intelligence platform with durable workflows, vector search, containers, and multi-LLM support.",
    tags: ["FastAPI", "PostgreSQL", "LangGraph", "Docker"],
    icon: Sparkles,
    feature: "Built for production",
    inProgress: true,
  },
];

const skillGroups = [
  { label: "Languages", icon: Code2, skills: ["Python", "Java", "C", "C++"] },
  { label: "AI / GenAI", icon: Sparkles, skills: ["RAG", "LLM / GenAI", "Prompt Engineering"] },
  { label: "Cloud & DevOps", icon: Cloud, skills: ["Azure", "Cloud Computing", "Git", "GitHub"] },
  { label: "Web & Automation", icon: Braces, skills: ["REST APIs", "n8n", "HTML / CSS / JS", "Streamlit"] },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center rounded-full border border-glass-border bg-glass px-4 py-2.5 shadow-glass backdrop-blur-2xl sm:px-5">
          <a href="#about" onClick={closeMenu} className="flex min-w-0 items-center gap-3 font-semibold">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">MR</span>
            <span className="truncate">Mohammed Rayhan</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Button key={href} asChild variant="ghost" size="sm"><a href={href}>{label}</a></Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          {menuOpen && (
            <div className="absolute left-4 right-4 top-16 grid gap-1 rounded-2xl border border-glass-border bg-glass-strong p-3 shadow-glass backdrop-blur-2xl md:hidden">
              {[
                ["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"],
              ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent">{label}</a>)}
            </div>
          )}
        </nav>
      </header>

      <section id="about" className="relative flex min-h-[94vh] scroll-mt-24 items-center px-6 pb-16 pt-32 sm:px-8 lg:pt-28">
        <div className="hero-mesh absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-semibold uppercase text-muted-foreground shadow-glass backdrop-blur-xl">
              <span className="size-2 rounded-full bg-signal" />
              CSE student · Bengaluru
            </div>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-normal">
              Building useful
              <span className="block text-primary">intelligence.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I’m Mohammed Rayhan, a second-year Computer Science Engineering student focused on GenAI, RAG systems, and cloud deployment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild><a href="#projects">Explore my work <ArrowDownRight className="size-4" /></a></Button>
              <Button asChild variant="glass"><a href="mailto:mohammedrayhanrayhan78@gmail.com">Let’s connect <Mail className="size-4" /></a></Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-border pt-6 text-sm">
              <div><strong className="block text-xl">04</strong><span className="text-muted-foreground">Projects</span></div>
              <div><strong className="block text-xl">DSA</strong><span className="text-muted-foreground">Club member</span></div>
              <div><strong className="block text-xl">Azure</strong><span className="text-muted-foreground">Cloud focus</span></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-glass-border bg-glass shadow-glass backdrop-blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-glass-border bg-card/60 p-3 shadow-float">
              <img src={heroVisual} alt="Abstract glass rings orbiting a crystalline geometric core" width={1200} height={1200} className="aspect-square w-full rounded-[1.5rem] object-cover" />
              <div className="absolute bottom-7 left-7 right-7 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-glass-border bg-glass-strong p-4 shadow-glass backdrop-blur-2xl">
                <div className="min-w-0"><p className="truncate text-sm font-semibold">Currently exploring</p><p className="truncate text-xs text-muted-foreground">Responsible AI · LangGraph · Azure</p></div>
                <Sparkles className="size-5 shrink-0 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal border-y border-border bg-surface px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-kicker">About me</p><h2 className="section-title">Curiosity with a conscience.</h2></div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>I study at <strong className="font-medium text-foreground">REVA University, Bengaluru</strong>, where I’m also part of the department’s DSA Club. I build GenAI and RAG applications, then learn how to move them beyond a demo through secure cloud deployment.</p>
            <p>Technology ethics and responsible AI development shape how I think about every project. Long term, I’m working toward a software engineering role at a top-tier technology company—aspiring toward Google—and a life in a global city such as New York or London.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="section-kicker">Selected work</p><h2 className="section-title max-w-2xl">Ideas, engineered into systems.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Projects spanning legal intelligence, computer vision, rapid prototyping, and production-ready architecture.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, projectIndex) => {
              const Icon = project.icon;
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{project.index}</span>
                    <div className="grid size-11 shrink-0 place-items-center rounded-full border border-glass-border bg-glass shadow-glass"><Icon className="size-5 text-primary" /></div>
                  </div>
                  <div className="mt-16">
                    <p className="mb-3 text-xs font-semibold uppercase text-primary">{project.feature}</p>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-4 min-h-24 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">{tag}</span>)}</div>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-sm font-semibold">
                      <span>{project.inProgress ? "In Progress" : "View on GitHub"}</span>
                      {project.inProgress ? <span className="flex items-center gap-2 text-muted-foreground"><span className="size-2 rounded-full bg-signal" />Building</span> : <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />}
                    </div>
                  </div>
                </>
              );

              const classes = `reveal glass-card group flex min-h-[420px] flex-col p-7 sm:p-8 ${projectIndex === 0 ? "md:translate-y-8" : ""}`;
              return project.href ? <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={classes}>{content}</a> : <article key={project.title} className={classes}>{content}</article>;
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-y border-border bg-surface px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-14"><p className="section-kicker">Toolkit</p><h2 className="section-title">Tools I think and build with.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {skillGroups.map(({ label, icon: Icon, skills }) => (
              <div key={label} className="reveal bg-background p-7 sm:p-9">
                <div className="mb-8 flex items-center gap-3"><Icon className="size-5 text-primary" /><h3 className="font-semibold">{label}</h3></div>
                <div className="flex flex-wrap gap-2.5">{skills.map((skill) => <span key={skill} className="rounded-full border border-glass-border bg-glass px-4 py-2 text-sm shadow-glass backdrop-blur-xl">{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-24 px-6 py-28 sm:px-8">
        <div className="contact-mesh absolute inset-0" aria-hidden="true" />
        <div className="reveal relative mx-auto max-w-5xl text-center">
          <p className="section-kicker">Contact</p>
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.95] tracking-normal">Let’s build what comes next.</h2>
          <p className="mx-auto mt-7 max-w-xl leading-7 text-muted-foreground">I’m always open to discussing GenAI, cloud engineering, responsible technology, and opportunities to learn with ambitious teams.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild><a href="mailto:mohammedrayhanrayhan78@gmail.com"><Mail className="size-4" />Email me</a></Button>
            <Button asChild variant="glass" size="icon"><a href="https://github.com/mohammedrayhanrayhan78-cell" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-5" /></a></Button>
            <Button asChild variant="glass" size="icon"><a href="https://www.linkedin.com/in/mohammed-rayhan-94973a384/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="size-5" /></a></Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-7 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>Mohammed Rayhan · Bengaluru, India</p><p>Building thoughtfully, learning continuously.</p></div></footer>
    </main>
  );
}