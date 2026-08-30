export type ProjectType = 'Personal' | 'Professional';

export type Project = {
  title: string;
  tagline: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
    apk?: string;
  };
  featured: boolean;
  status: string;
};

export const projects: Project[] = [
  {
    title: 'Vantly — AI Interview Practice Platform',
    tagline: 'B2C mock interviews with real-time, interruption-aware voice conversation',
    description:
      'A monorepo AI interview platform spanning a NestJS backend for auth, profiles, resume parsing, and session generation; a React interview experience for text, audio, and real-time voice; and a LiveKit agent pipeline using Silero VAD, Groq Whisper, Llama 3.3 70B, and self-hosted Kokoro TTS with natural barge-in support.',
    type: 'Personal',
    techStack: [
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'React',
      'TypeScript',
      'LiveKit',
      'Python',
      'Groq',
      'Kokoro TTS',
      'Silero VAD',
    ],
    links: { demo: 'https://vantly-ai.vercel.app/' },
    featured: true,
    status: 'In Development',
  },
  {
    title: 'Spentrax — AI API Cost & Usage Tracker',
    tagline: 'Tracks LLM API spend and token budgets across providers',
    description:
      'A three-part LLM spend monitoring system: a NestJS backend with JWT-secured batch ingestion and budget alerts, a lightweight TypeScript SDK that asynchronously batches usage metrics without blocking client apps, and a React dashboard that surfaces monthly spend, peak usage hours, and projects nearing their limits.',
    type: 'Personal',
    techStack: [
      'React',
      'NestJS',
      'PostgreSQL',
      'Tailwind CSS',
      'TypeORM',
      'Node.js',
      'TypeScript SDK',
      'Material UI',
    ],
    links: {
      demo: 'https://spentrax.vercel.app/',
      github: 'https://github.com/spentrax',
    },
    featured: true,
    status: 'Live',
  },
  {
    title: 'Briefloop — Client Reporting SaaS',
    tagline: 'Multi-tenant project tracking and AI-generated client reports',
    description:
      'A project management platform where work is organized into nested Modules and Stacks, developer daily logs roll into overall completion, and clients get secure portal access. Multi-tenant organization and role management sit alongside AI progress reports sent automatically by email or WhatsApp.',
    type: 'Personal',
    techStack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Tailwind CSS', 'shadcn/ui', 'Razorpay'],
    links: { demo: 'https://briefloophq.vercel.app/' },
    featured: false,
    status: 'In Development',
  },
  {
    title: 'Bytewhir (Scanbit) — Tech News Aggregator',
    tagline: 'AI and tech news, releases, and trending repos in one feed',
    description:
      'A cross-platform desktop and mobile app with a Rust/Tauri backend that aggregates and de-duplicates Hacker News, GitHub, arXiv, RSS, and TechCrunch stories. It supports category filters, offline SQLite bookmarks and read state, plus native mobile sharing and clipboard integration.',
    type: 'Personal',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Rust', 'Tauri', 'SQLite'],
    links: {
      apk: 'https://drive.google.com/file/d/1bac1UpCDGHhlPk2i9JQqg3kJBt9e44NL/view?usp=sharing',
    },
    featured: false,
    status: 'Live · Android APK',
  },
  {
    title: 'Digi Portfolio — Assessment Platform',
    tagline: 'Backend-for-Frontend layer for an enterprise assessment platform',
    description:
      'Designed scalable Node.js and Express APIs with optimized BFF endpoints for frontend applications. Improved complex MongoDB reporting queries and introduced consistent request validation, structured error handling, and logging for observability.',
    type: 'Professional',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    links: {},
    featured: false,
    status: 'Live · Internal',
  },
  {
    title: 'Digi Assess & Digi Exam',
    tagline: 'Institution-scale backend for complete online examination workflows',
    description:
      'Built and maintained exam APIs for 2+ years, adding Redis caching for roughly 30% faster responses, JWT and RBAC controls for secure access, and Bull Queue workers for reliable asynchronous report generation and email delivery.',
    type: 'Professional',
    techStack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Bull Queue', 'JWT'],
    links: {},
    featured: false,
    status: 'Live · Internal',
  },
];
