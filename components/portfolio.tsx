'use client';

import type { ComponentType, FormEvent } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import { FaAws, FaLinkedinIn } from 'react-icons/fa6';
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiK6,
  SiKubernetes,
  SiLivekit,
  SiMocha,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPino,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiRender,
  SiRust,
  SiShadcnui,
  SiSqlite,
  SiSwagger,
  SiTailwindcss,
  SiTauri,
  SiTypeorm,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbBrandAws, TbBrandCss3, TbPackages, TbPlugConnected } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { projects, type Project, type ProjectType } from '@/data/projects';
import { siteConfig } from '@/lib/site';

type TechIcon = ComponentType<{ className?: string }>;
type SkillCategory = 'Frontend' | 'Backend' | 'DevOps' | 'Cloud' | 'Database' | 'Other';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Stack', id: 'stack' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

const rotatingLines = [
  'I ship systems.',
  'I build real-time pipelines.',
  'I ship reliable APIs.',
  "I automate what shouldn't be manual.",
];

const skillGroups: Record<SkillCategory, Array<{ name: string; icon: TechIcon }>> = {
  Frontend: [
    { name: 'React.js', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: TbBrandCss3 },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Python', icon: SiPython },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Microservices', icon: Network },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'CI/CD', icon: SiGithubactions },
    { name: 'Git & GitHub', icon: SiGithub },
  ],
  Cloud: [
    { name: 'AWS', icon: FaAws },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Render', icon: SiRender },
    { name: 'Firebase', icon: SiFirebase },
  ],
  Database: [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'Bull Queue', icon: TbPackages },
  ],
  Other: [
    { name: 'REST APIs', icon: SiOpenapiinitiative },
    { name: 'WebSockets', icon: TbPlugConnected },
    { name: 'Swagger/OpenAPI', icon: SiSwagger },
    { name: 'JWT', icon: SiJsonwebtokens },
    { name: 'RBAC', icon: KeyRound },
    { name: 'Rate Limiting', icon: ShieldCheck },
    { name: 'Jest', icon: SiJest },
    { name: 'Mocha', icon: SiMocha },
    { name: 'k6 Load Testing', icon: SiK6 },
    { name: 'Pino', icon: SiPino },
    { name: 'Postman', icon: SiPostman },
    { name: 'LiveKit', icon: SiLivekit },
  ],
};

const experience = [
  {
    title: 'Live Proctoring Platform (Digi Exam)',
    period: 'Feb 2026 — Present',
    bullets: [
      'Architected a real-time pipeline that converts third-party AI face-detection and head-pose outputs into structured anomaly events for backend processing and reporting.',
      'Designed a Firebase RTDB and WebSocket signaling layer as a low-latency alternative to continuous video streaming while preserving live monitoring.',
      'Built REST APIs for live sessions, recording, and proctor events, using Redis-cached session and presence state for concurrent monitoring windows.',
      'Standardized face-not-detected, multiple-face, and gaze-deviation schemas for consistent violation tracking.',
    ],
  },
  {
    title: 'Infinity — Stock Market Analysis Platform',
    period: 'Jan 2025 — Feb 2026',
    bullets: [
      'Designed Python microservices to ingest and process real-time market data under concurrent, low-latency conditions.',
      'Built configurable price-target alerts and WebSocket live-price broadcasting backed by Redis Pub/Sub.',
      'Modeled PostgreSQL schemas and optimized ingestion pipelines for consistent low-latency delivery under user load.',
    ],
  },
  {
    title: 'Digi Assess & Digi Exam',
    period: 'Sep 2022 — Jan 2025',
    bullets: [
      'Built Node.js, TypeScript, and MongoDB APIs supporting complete online examination workflows for more than two years.',
      'Improved response times by roughly 30% on high-traffic endpoints through Redis caching and fewer database reads.',
      'Secured APIs with JWT, RBAC, validation, rate limiting, and IP/server allow-listing for institution-restricted access.',
      'Moved report generation and email delivery into Bull Queue workers to improve responsiveness and reliability.',
    ],
  },
];

const techIconMap: Record<string, TechIcon> = {
  NestJS: SiNestjs,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  React: SiReact,
  Vite: SiVite,
  TypeScript: SiTypescript,
  LiveKit: SiLivekit,
  Python: SiPython,
  'Material UI': SiMui,
  TypeORM: SiTypeorm,
  'Node.js': SiNodedotjs,
  'Tailwind CSS': SiTailwindcss,
  TailwindCSS: SiTailwindcss,
  'shadcn/ui': SiShadcnui,
  Razorpay: SiRazorpay,
  Rust: SiRust,
  Tauri: SiTauri,
  SQLite: SiSqlite,
  Express: SiExpress,
  MongoDB: SiMongodb,
  'Bull Queue': TbPackages,
  JWT: SiJsonwebtokens,
};

function SectionHeading({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[.85fr_1.15fr] md:items-end">
      <div>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[.22em] text-primary">{number} / {eyebrow}</p>
        <h2 className="text-4xl font-semibold tracking-[-.055em] text-foreground sm:text-5xl">{title}</h2>
      </div>
      {copy && <p className="max-w-xl text-sm leading-7 text-muted-foreground md:justify-self-end md:text-base">{copy}</p>}
    </div>
  );
}

function TerminalWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateX = useTransform(scrollYProgress, [0, .55, 1], [8, 0, -6]);
  const rotateY = useTransform(scrollYProgress, [0, .55, 1], [-5, 0, 4]);
  const y = useTransform(scrollYProgress, [0, 1], [24, -28]);

  return (
    <motion.aside ref={ref} style={{ rotateX, rotateY, y, transformPerspective: 1200 }} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, delay: .18 }} className="terminal-shell relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
      <div className="absolute -inset-px rounded-[1.55rem] bg-gradient-to-br from-primary/55 via-foreground/10 to-transparent blur-[1px]" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-2xl shadow-black/20">
        <div className="flex h-12 items-center gap-2 border-b border-border px-5">
          <i className="size-2 rounded-full bg-[#ef4444]" /><i className="size-2 rounded-full bg-[#eab308]" /><i className="size-2 rounded-full bg-[#22c55e]" />
          <span className="ml-auto font-mono text-[9px] tracking-[.14em] text-muted-foreground">~/augustine — zsh</span>
        </div>
        <div className="space-y-5 overflow-x-auto p-5 font-mono text-[10px] leading-5 text-muted-foreground sm:p-7 sm:text-[11px] sm:leading-6">
          <div><p><span className="text-primary">→ ~</span> <span className="text-foreground">whoami</span></p><p>backend engineer · real-time systems · ai-integrated</p></div>
          <div>
            <p><span className="text-primary">→ ~</span> <span className="text-foreground">cat stack.json</span></p>
            <p>{'{'}</p>
            <div className="min-w-[440px] pl-4">
              <p>&quot;runtime&quot;: [&quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;Python&quot;],</p>
              <p>&quot;db&quot;: [&quot;PostgreSQL&quot;, &quot;MongoDB&quot;, &quot;Redis&quot;],</p>
              <p>&quot;realtime&quot;: [&quot;WebSockets&quot;, &quot;Redis Pub/Sub&quot;, &quot;Firebase RTDB&quot;],</p>
              <p>&quot;security&quot;: [&quot;JWT&quot;, &quot;RBAC&quot;, &quot;Rate Limiting&quot;],</p>
              <p>&quot;cloud&quot;: [&quot;AWS&quot;, &quot;GCP&quot;, &quot;Docker&quot;, &quot;Kubernetes&quot;]</p>
            </div>
            <p>{'}'}</p>
          </div>
          <div><p><span className="text-primary">→ ~</span> <span className="text-foreground">./impact --summary</span></p><p>30%+ faster APIs · 40% faster proctor response · 4+ platforms shipped<span className="cursor-blink text-primary">_</span></p></div>
        </div>
      </div>
    </motion.aside>
  );
}

function SkillItem({ name, icon: Icon, index }: { name: string; icon: TechIcon; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateX = useTransform(scrollYProgress, [0, .5, 1], [7, 0, -7]);
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <motion.div ref={ref} style={{ rotateX, y, transformPerspective: 800 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .035 }} className="skill-pill flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
      <span className="skill-icon-shell grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground transition-all duration-300"><Icon className="size-4" /></span>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateY = useTransform(scrollYProgress, [0, .5, 1], [project.type === 'Personal' ? -3 : -1.5, 0, project.type === 'Personal' ? 3 : 1.5]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 52, rotateY: index % 2 === 0 ? -12 : 12 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: .12 }}
      transition={{ type: 'spring', stiffness: 85, damping: 18, delay: index * .06 }}
      style={{ rotateY, y: scrollY, transformPerspective: 1100 }}
      className={`project-card group relative overflow-hidden rounded-2xl bg-card p-6 sm:p-8 ${project.type === 'Personal' ? 'project-personal' : 'project-professional'} ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      {project.featured && <div className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-primary/25 bg-primary/8 px-4 py-2 font-mono text-[9px] uppercase tracking-[.16em] text-primary"><Sparkles className="mr-1.5 inline size-3" /> Featured</div>}
      <div className={`grid gap-8 ${project.featured ? 'lg:grid-cols-[1.08fr_.72fr]' : ''}`}>
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.14em] ${project.type === 'Personal' ? 'border-primary/35 text-primary' : 'border-foreground/25 text-foreground'}`}>{project.type}</span>
            <span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">{project.status}</span>
          </div>
          <h3 className={`font-semibold tracking-[-.04em] text-foreground ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
          <p className="mt-3 text-sm font-medium text-foreground/80">{project.tagline}</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
        </div>
        <div className={project.featured ? 'flex flex-col justify-between lg:border-l lg:border-border lg:pl-8' : ''}>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const Icon = techIconMap[tech] ?? Code2;
              return <span key={tech} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-[9px] text-muted-foreground"><Icon className="size-3 text-foreground/70" />{tech}</span>;
            })}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline">Live demo <ExternalLink className="size-3.5" /></a>}
            {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary">GitHub <SiGithub className="size-3.5" /></a>}
            {project.links.apk && <a href={project.links.apk} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline">Download APK <Download className="size-3.5" /></a>}
            {Object.keys(project.links).length === 0 && <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground"><BriefcaseBusiness className="size-3.5" /> Proprietary work</span>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lineIndex, setLineIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Backend');
  const [projectFilter, setProjectFilter] = useState<'All' | ProjectType>('All');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setLineIndex((index) => (index + 1) % rotatingLines.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setActiveSection(current.target.id);
    }, { rootMargin: '-30% 0px -58% 0px' });
    navItems.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const visibleProjects = useMemo(() => projects.filter((project) => projectFilter === 'All' || project.type === projectFilter), [projectFilter]);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem('portfolio-theme', nextTheme);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const phone = String(form.get('phone') ?? 'Not provided');
    const message = String(form.get('message') ?? '');
    setFormSent(true);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone}`)}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-end gap-2 px-5 sm:px-8">
          <nav aria-label="Primary navigation" className="mr-auto hidden items-center gap-7 lg:flex">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={`relative py-2 font-mono text-[10px] uppercase tracking-[.16em] transition-colors ${activeSection === item.id ? 'text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-primary after:shadow-[0_0_8px_var(--primary)]' : 'text-muted-foreground hover:text-foreground'}`}>{item.label}</a>)}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="theme-toggle grid size-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:border-primary/45 hover:text-primary">{theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>
            <a href="#contact" className="inline-flex h-9 items-center gap-2 rounded-full border border-foreground/20 bg-foreground px-4 font-mono text-[10px] font-medium uppercase tracking-[.12em] text-background transition-transform hover:-translate-y-0.5"><span className="size-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgb(239_68_68/.8)]" /> Let&apos;s talk</a>
          </div>
          <button type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden" onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}</button>
        </div>
        {mobileOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-4 lg:hidden"><button type="button" onClick={toggleTheme} className="mb-2 flex w-full items-center justify-between rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs uppercase tracking-[.12em] text-foreground"><span>{theme} theme</span>{theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>{navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)} className="block border-b border-border py-3 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground last:border-0">{item.label}</a>)}</nav>}
      </header>

      <section id="home" className="relative isolate scroll-mt-20 border-b border-border px-5 pb-0 pt-28 sm:px-8 lg:pt-32">
        <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
        <div className="absolute left-[15%] top-28 -z-10 size-80 rounded-full bg-primary/7 blur-[120px]" />
        <div className="mx-auto grid min-h-[calc(100svh-9rem)] w-full max-w-7xl items-center gap-16 pb-16 lg:grid-cols-[1.04fr_.96fr]">
          <motion.div initial={{ opacity: 0, y: 30, rotateX: 4 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .7, ease: 'easeOut' }} style={{ transformPerspective: 1000 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.15em] text-muted-foreground shadow-sm"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-55" /><span className="relative inline-flex size-2 rounded-full bg-red-500" /></span>Available for backend &amp; AI opportunities</div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.24em] text-muted-foreground">Backend Software Engineer</p>
            <h1 className="max-w-4xl text-[clamp(3.2rem,7.4vw,7rem)] font-semibold leading-[.85] tracking-[-.077em] text-foreground">Augustine<span className="block text-muted-foreground">Paul Samraj V.</span></h1>
            <div className="mt-8 h-10 overflow-hidden text-xl font-medium tracking-[-.025em] text-foreground sm:text-2xl">
              <AnimatePresence mode="wait"><motion.p key={lineIndex} initial={{ opacity: 0, rotateX: -80, y: 20 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} exit={{ opacity: 0, rotateX: 80, y: -18 }} transition={{ duration: .45 }} style={{ transformOrigin: '50% 50%', transformPerspective: 800 }}>{rotatingLines[lineIndex]}</motion.p></AnimatePresence>
            </div>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-[15px]">Backend Software Engineer with nearly 4 years of experience building Node.js, TypeScript, and Python services for assessment, live-proctoring, and fintech platforms. Skilled in REST APIs, microservices, WebSocket pipelines, Redis caching and Pub/Sub, asynchronous jobs, database design, and API security.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5">Get in touch <ArrowDownRight className="size-4" /></a>
              <a href={siteConfig.resumeUrl} download className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition-all hover:border-primary/45 hover:shadow-[0_0_22px_rgb(34_211_238/.1)]"><Download className="size-4" /> Resume</a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-all hover:border-primary/45 hover:text-primary"><SiGithub className="size-4" /></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-2"><MapPin className="size-3.5 text-primary" />{siteConfig.location}</span><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-primary"><Phone className="size-3.5 text-primary" />{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="size-3.5 text-primary" />{siteConfig.email}</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hover:text-primary"><FaLinkedinIn className="size-3.5" /></a></div>
          </motion.div>
          <TerminalWindow />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 border-x border-t border-border bg-card/80 backdrop-blur md:grid-cols-4">
          {[["4", 'Years of experience'], ['30%+', 'API latency reduction'], ['40%', 'Faster proctor response'], ['4+', 'Platforms in production']].map(([value, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="border-b border-r border-border p-5 last:border-r-0 md:border-b-0 sm:p-7"><strong className="block text-3xl font-semibold tracking-[-.055em] text-foreground sm:text-4xl">{value}</strong><span className="mt-2 block font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">{label}</span></motion.div>)}
        </div>
      </section>

      <motion.section id="stack" initial={{ opacity: 0, y: 38, rotateX: 4 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .65, ease: 'easeOut' }} style={{ transformPerspective: 1200 }} className="scroll-mt-20 border-b border-border px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="01" eyebrow="Technical stack" title="Tools I trust in production." copy="A focused stack for secure backends, real-time data flow, operational clarity, and reliable product delivery." />
          <div className="mb-8 flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-border bg-muted p-1.5" role="tablist" aria-label="Skill categories">
            {(Object.keys(skillGroups) as SkillCategory[]).map((category) => <button key={category} type="button" role="tab" aria-selected={activeSkill === category} onClick={() => setActiveSkill(category)} className={`min-w-max flex-1 rounded-xl px-4 py-2.5 font-mono text-[10px] uppercase tracking-[.12em] transition-all duration-300 ${activeSkill === category ? 'bg-foreground text-background shadow-md' : 'text-muted-foreground hover:text-foreground'}`}>{category}</button>)}
          </div>
          <AnimatePresence mode="wait"><motion.div key={activeSkill} initial={{ opacity: 0, y: 20, rotateX: 5 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -12, rotateX: -4 }} transition={{ duration: .35 }} style={{ transformPerspective: 1000 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skillGroups[activeSkill].map((skill, index) => <SkillItem key={skill.name} {...skill} index={index} />)}</motion.div></AnimatePresence>
        </div>
      </motion.section>

      <motion.section id="experience" initial={{ opacity: 0, y: 38, rotateX: 4 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .04 }} transition={{ duration: .65, ease: 'easeOut' }} style={{ transformPerspective: 1200 }} className="scroll-mt-20 border-b border-border px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="02" eyebrow="Experience" title="Systems shipped at scale." />
          <div className="mb-14 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:p-8"><div><p className="font-mono text-[9px] uppercase tracking-[.18em] text-primary">Current role</p><h3 className="mt-2 text-xl font-semibold text-foreground">Software Engineer (Backend)</h3><p className="mt-1 text-sm text-muted-foreground">Digival IT Solutions · Chennai, India</p></div><p className="mt-4 font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground sm:mt-0">Sep 2022 — Present</p></div>
          <div className="relative space-y-8 lg:space-y-12">
            <div className="absolute inset-y-0 left-5 w-px bg-border lg:left-1/2" />
            {experience.map((role, index) => {
              const left = index % 2 === 0;
              return <motion.article key={role.title} initial={{ opacity: 0, x: left ? -55 : 55, rotateY: left ? -8 : 8 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} viewport={{ once: true, amount: .18 }} transition={{ type: 'spring', stiffness: 70, damping: 18 }} style={{ transformPerspective: 1100 }} className={`timeline-card relative ml-12 rounded-2xl border border-border bg-card p-6 shadow-sm lg:ml-0 lg:w-[calc(50%-3rem)] ${left ? '' : 'lg:ml-auto'}`}>
                <span className={`absolute top-6 grid size-10 place-items-center rounded-full border border-foreground bg-background text-foreground shadow-md lg:top-1/2 lg:-translate-y-1/2 ${left ? '-left-[3.25rem] lg:-right-[5.5rem] lg:left-auto' : '-left-[3.25rem] lg:-left-[5.5rem]'}`}><BriefcaseBusiness className="size-4" /></span>
                <p className="font-mono text-[9px] uppercase tracking-[.14em] text-primary">{role.period}</p><h3 className="mt-3 text-xl font-semibold tracking-[-.03em] text-foreground">{role.title}</h3>
                <ul className="mt-5 space-y-3">{role.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground"><ArrowUpRight className="mt-1.5 size-3.5 shrink-0 text-primary" />{bullet}</li>)}</ul>
              </motion.article>;
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 25, rotateX: 5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} className="mt-16 grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"><span className="grid size-12 place-items-center rounded-xl border border-border bg-background text-foreground"><GraduationCap className="size-5" /></span><div><p className="font-mono text-[9px] uppercase tracking-[.14em] text-primary">Education</p><h3 className="mt-2 text-lg font-semibold text-foreground">Bachelor of Computer Applications (BCA)</h3><p className="mt-1 text-sm text-muted-foreground">VELS Institute of Science, Technology and Advanced Studies (VISTAS)</p></div><p className="font-mono text-xs text-foreground sm:text-right">CGPA 7.9 / 10<br /><span className="text-muted-foreground">Completed</span></p></motion.div>
        </div>
      </motion.section>

      <motion.section id="projects" initial={{ opacity: 0, y: 38, rotateX: 4 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .03 }} transition={{ duration: .65, ease: 'easeOut' }} style={{ transformPerspective: 1200 }} className="scroll-mt-20 border-b border-border px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionHeading number="03" eyebrow="Selected work" title="Built to solve real problems." copy="Personal products carry a subtle electric glow; proprietary systems use a precise solid frame. Everything is driven from one project config." />
          <div className="mb-8 inline-flex gap-1 rounded-full border border-border bg-muted p-1" role="group" aria-label="Filter projects">{(['All', 'Personal', 'Professional'] as const).map((filter) => <button key={filter} type="button" aria-pressed={projectFilter === filter} onClick={() => setProjectFilter(filter)} className={`rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-[.14em] transition-all ${projectFilter === filter ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>{filter}</button>)}</div>
          <AnimatePresence mode="popLayout"><motion.div layout className="grid gap-5 lg:grid-cols-2">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</motion.div></AnimatePresence>
        </div>
      </motion.section>

      <motion.section id="contact" initial={{ opacity: 0, y: 38, rotateX: 4 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .65, ease: 'easeOut' }} style={{ transformPerspective: 1200 }} className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><SectionHeading number="04" eyebrow="Contact" title="Let’s build something useful." copy="Have a project in mind or want to discuss opportunities? I’d love to hear from you." />
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5 lg:grid-cols-[.8fr_1.2fr]">
            <div className="relative overflow-hidden border-b border-border p-7 sm:p-10 lg:border-b-0 lg:border-r"><div className="absolute -left-28 -top-28 size-72 rounded-full bg-primary/8 blur-[100px]" /><h3 className="relative text-2xl font-semibold tracking-[-.04em] text-foreground">Start a conversation.</h3><p className="relative mt-3 max-w-sm text-sm leading-7 text-muted-foreground">Tell me what you&apos;re building, what needs untangling, or where your team needs extra backend depth.</p>
              <div className="relative mt-10 space-y-5"><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-sm text-foreground hover:text-primary"><span className="grid size-10 place-items-center rounded-xl border border-border bg-background"><Mail className="size-4" /></span>{siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-sm text-foreground hover:text-primary"><span className="grid size-10 place-items-center rounded-xl border border-border bg-background"><Phone className="size-4" /></span>{siteConfig.phone}</a><span className="flex items-center gap-4 text-sm text-foreground"><span className="grid size-10 place-items-center rounded-xl border border-border bg-background"><MapPin className="size-4" /></span>{siteConfig.location}</span></div>
              <div className="relative mt-10 flex gap-3"><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground hover:border-primary/35 hover:text-primary"><FaLinkedinIn className="size-3.5" />LinkedIn</a><a href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground hover:border-primary/35 hover:text-primary"><SiGithub className="size-3.5" />GitHub</a></div>
              <a href={siteConfig.resumeUrl} download className="relative mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"><Download className="size-4" /> Download CV / Resume</a>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-5 p-7 sm:grid-cols-2 sm:p-10"><label className="space-y-2"><span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">Name *</span><Input name="name" required placeholder="Your name" className="h-11 border-border bg-background px-3 text-foreground focus-visible:border-primary/50" /></label><label className="space-y-2"><span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">Email *</span><Input name="email" type="email" required placeholder="you@company.com" className="h-11 border-border bg-background px-3 text-foreground focus-visible:border-primary/50" /></label><label className="space-y-2 sm:col-span-2"><span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">Phone <i className="not-italic opacity-60">(optional)</i></span><Input name="phone" type="tel" placeholder="Your phone number" className="h-11 border-border bg-background px-3 text-foreground focus-visible:border-primary/50" /></label><label className="space-y-2 sm:col-span-2"><span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">Message / Project details *</span><Textarea name="message" required placeholder="A few details about the opportunity or project..." className="min-h-36 resize-y border-border bg-background px-3 py-3 text-foreground focus-visible:border-primary/50" /></label><div className="flex flex-wrap items-center gap-4 sm:col-span-2"><Button type="submit" size="lg" className="h-11 bg-foreground px-5 text-background hover:bg-foreground/85">Send Message <Send className="size-4" /></Button>{formSent && <p aria-live="polite" className="text-xs text-primary">Your email app should open with the details filled in.</p>}</div></form>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-border px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold text-foreground">Augustine Paul Samraj V</p><p className="mt-1 text-xs text-muted-foreground">Backend Software Engineer</p></div><p className="font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground">© 2026 Augustine Paul Samraj V. All rights reserved.</p><div className="flex gap-4 font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground"><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a><a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a><a href="#home" className="inline-flex items-center gap-1 hover:text-primary">Top <ArrowUpRight className="size-3" /></a></div></div></footer>
    </main>
  );
}
