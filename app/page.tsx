"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  Shield,
  Zap,
  Terminal,
  Cpu,
  Globe,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award,
  X,
  Menu,
  Send,
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
        scrolled
          ? "bg-[#0f0c29]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
          <span className="text-white font-serif italic text-xl">A</span>
        </div>
        <span className="text-white font-semibold text-lg hidden sm:block tracking-wide">
          Augustine
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-purple-400 transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0f0c29]/95 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition-colors py-2 border-b border-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 text-sm text-purple-300 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6"
          >
            Augustine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Paul Samraj
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 font-light mb-6"
          >
            Backend Engineer <span className="text-purple-400">|</span> Node.js{" "}
            <span className="text-purple-400">|</span> TypeScript{" "}
            <span className="text-purple-400">|</span> Microservices
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
          >
            3.5+ years of experience building scalable backend systems, RESTful
            APIs, and microservices architecture. Specialized in BFF patterns,
            performance optimization, and secure authentication systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={16} className="text-purple-400" />
              Chennai, India
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Phone size={16} className="text-purple-400" />
              +91-7358683636
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Mail size={16} className="text-purple-400" />
              augustine.v.dev@gmail.com
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Let's Connect <ArrowRight size={18} />
            </a>
            <a
              href="/Augustine_Paul_Samraj_Software_Engineer_Backend.pdf"
              download
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-[3rem] blur-2xl animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-[#1a1635] to-[#0f0c29] rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-40 h-40 mx-auto bg-gradient-to-tr from-purple-600 via-pink-600 to-purple-600 rounded-full mb-6 border-4 border-[#1a1635] shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl font-serif text-white font-bold">
                    A
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl inline-block border border-white/20">
                  <span className="text-white font-semibold text-lg">
                    Augustine Paul Samraj V
                  </span>
                </div>
                <div className="mt-3 text-purple-400 font-medium">
                  Backend Engineer
                </div>
                <div className="mt-4 flex justify-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-[#1a1635] border border-purple-500/30 p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <Server className="text-purple-400" size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-[#1a1635] border border-pink-500/30 p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <Code2 className="text-pink-400" size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 -right-12 bg-[#1a1635] border border-cyan-500/30 p-3 rounded-xl shadow-xl backdrop-blur-md"
            >
              <Database className="text-cyan-400" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight size={20} className="rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({
  title,
  skills,
  icon: Icon,
  color,
  delay,
}: {
  title: string;
  skills: string[];
  icon: any;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
    />

    <div className="relative z-10">
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
      >
        <Icon className="text-white" size={28} />
      </div>

      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 text-xs bg-white/10 text-gray-300 rounded-lg border border-white/10 hover:bg-white/20 hover:border-purple-500/30 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Backend",
      skills: ["Node.js", "TypeScript", "JavaScript", "Python (Basic)"],
      icon: Terminal,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & APIs",
      skills: [
        "Express.js",
        "REST APIs",
        "Swagger/OpenAPI",
        "GraphQL (Basic)",
        "NestJS (Basic)",
      ],
      icon: Layers,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Architecture",
      skills: [
        "Microservices",
        "API Design",
        "Backend for Frontend (BFF)",
        "API Gateway Concepts",
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Databases & Caching",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Messaging & Realtime",
      skills: ["Bull Queue", "WebSocket (Socket.io)"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Authentication & Security",
      skills: ["JWT", "OAuth2", "Role-Based Access Control (RBAC)"],
      icon: Shield,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes (Basic)"],
      icon: Cloud,
      color: "from-sky-500 to-blue-500",
    },
    {
      title: "Observability & Tools",
      skills: ["Logging", "Monitoring", "Error Handling", "Git", "Postman"],
      icon: Globe,
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My expertise spans across backend development, system architecture,
            cloud technologies, and DevOps practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} {...category} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  title,
  company,
  period,
  achievements,
  icon: Icon,
  color,
  delay,
}: {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  icon: any;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden backdrop-blur-sm"
  >
    <div
      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
    />
    <div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
    />

    <div className="relative z-10">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0`}
          >
            <Icon className="text-white" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {title}
            </h3>
            <p className="text-purple-400 font-medium text-lg">{company}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} bg-opacity-10 text-sm text-white border border-white/20 backdrop-blur-sm whitespace-nowrap`}
        >
          <Calendar size={14} />
          {period}
        </span>
      </div>

      <ul className="space-y-3">
        {achievements.map((achievement, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + idx * 0.1 }}
            className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors"
          >
            <div
              className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${color} flex-shrink-0`}
            />
            <span className="leading-relaxed">{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const WorkExperience = () => {
  const experiences = [
    {
      title: "Digi Portfolio – Assessment Platform",
      company: "DigivalIT Solutions, Chennai",
      period: "Apr 2025 – Present",
      achievements: [
        "Designed and developed scalable REST APIs using Node.js and Express",
        "Built optimized backend endpoints to support frontend applications (BFF pattern)",
        "Improved performance of complex MongoDB queries for reporting systems",
        "Implemented request validation and structured error handling",
        "Added logging for better observability and debugging",
      ],
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Infinity – Stock Market Analysis",
      company: "DigivalIT Solutions, Chennai",
      period: "Jan 2025 – Apr 2025",
      achievements: [
        "Developed backend services using Python and PostgreSQL for real-time data processing",
        "Designed relational schema and optimized SQL queries for performance",
        "Integrated third-party financial APIs",
        "Implemented WebSocket-based live updates",
        "Optimized data pipelines to handle concurrent users with low latency",
      ],
      icon: Zap,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Digi Assess & Digi Exam Platforms",
      company: "DigivalIT Solutions, Chennai",
      period: "Sep 2022 – Jan 2025",
      achievements: [
        "Built scalable REST APIs using Node.js, TypeScript, and MongoDB",
        "Implemented Redis caching, improving API response times by ~30%",
        "Designed authentication and authorization using JWT and RBAC",
        "Worked closely with frontend teams to deliver aggregated APIs (BFF)",
        "Built resilient APIs with proper error handling and retry mechanisms",
      ],
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Career
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Work Experience
          </h2>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-300">
              Software Engineer (Backend) at DigivalIT Solutions
            </span>
            <span className="text-purple-400">|</span>
            <span className="text-cyan-400">Sep 2022 – Present</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Academics
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-md group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
              <GraduationCap className="text-white" size={48} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-purple-400 text-lg mb-2">
                VELS Institute of Science, Technology and Advanced Studies
                (VISTAS)
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 text-cyan-400 font-semibold border border-white/10">
                  CGPA: 7.9 / 10
                </span>
                <span className="text-gray-500 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />{" "}
                  Completed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Spentrax – AI Model Tracker",
    category: "React",
    description:
      "Spentrax is a web application for tracking and managing AI model usage and tokens. It provides real-time analytics, performance insights, and an intuitive interface for monitoring different AI models like GPT and Gemini efficiently.",
    tech: [
      "React",
      "Nest.js",
      "PostgreSQL",
      "TailwindCSS",
      "TypeORM",
      "Node.js",
      "Vercel",
      "Render",
      "Neon",
    ],
    image: "spentrax",
    demoLink: "https://spentrax.vercel.app/",
    githubLink: "https://github.com/spentrax",
    featured: true,
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Microservices",
  //   category: "MERN",
  //   description:
  //     "Scalable e-commerce backend built with microservices architecture, featuring user service, product catalog, order management, and payment processing.",
  //   tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
  //   image: "ecommerce",
  //   demoLink: "#",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "Real-time Chat Application",
  //   category: "MERN",
  //   description:
  //     "Feature-rich chat application with WebSocket support, group chats, file sharing, and end-to-end encryption for secure messaging.",
  //   tech: ["Socket.io", "Node.js", "MongoDB", "React", "WebRTC"],
  //   image: "chat-app",
  //   demoLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   category: "React",
  //   description:
  //     "Modern, animated portfolio website built with Next.js, Framer Motion, and Tailwind CSS featuring dark theme and responsive design.",
  //   tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  //   image: "portfolio",
  //   demoLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "API Gateway Service",
  //   category: "Node.js",
  //   description:
  //     "Custom API Gateway built from scratch with rate limiting, authentication, load balancing, and request/response transformation capabilities.",
  //   tech: ["Node.js", "Express", "Redis", "JWT", "Docker"],
  //   image: "gateway",
  //   demoLink: "#",
  //   featured: true,
  // },
  // {
  //   id: 6,
  //   title: "Task Management Dashboard",
  //   category: "HTML/CSS/JavaScript",
  //   description:
  //     "Interactive task management interface with drag-and-drop functionality, local storage persistence, and responsive grid layout.",
  //   tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
  //   image: "task-dashboard",
  //   demoLink: "#",
  //   featured: false,
  // },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) => {
  const colors = [
    "from-purple-500 to-pink-500",
    "from-cyan-500 to-blue-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-violet-500 to-purple-500",
    "from-yellow-500 to-orange-500",
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
    >
      {/* Project Image Placeholder */}
      <div
        className={`relative h-48 bg-gradient-to-br ${color} p-6 flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 border border-white/30">
            <Code2 className="text-white" size={40} />
          </div>
          <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold flex items-center gap-1">
            <Award size={12} /> Featured
          </div>
        )}
      </div>

      <div className="p-6">
  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
    {project.title}
  </h3>

  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-2 mb-6">
    {project.tech.map((tech, idx) => (
      <span
        key={idx}
        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex gap-4">
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group/link"
    >
      View Demo
      <ExternalLink
        size={16}
        className="group-hover/link:translate-x-1 transition-transform"
      />
    </a>

    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group/link"
    >
      GitHub
      <ExternalLink
        size={16}
        className="group-hover/link:translate-x-1 transition-transform"
      />
    </a>
  </div>
</div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "Nest.js"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === filter || p.tech.some((t) => t.includes(filter))
        );

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Recent Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my backend engineering work and full-stack applications
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                filter === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {category === "All" && <Filter size={14} />}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Projects Coming CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-400">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            More projects coming soon...
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Have a project in mind?
              </h3>
              <p className="text-gray-300 text-lg">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl whitespace-nowrap"
            >
              Let's Talk <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   // e.preventDefault();
  //   // setIsSubmitting(true);
  //   // // Simulate form submission
  //   // setTimeout(() => {
  //   //   setIsSubmitting(false);
  //   //   setSubmitted(true);
  //   //   setFormData({ name: "", email: "", phone: "", message: "" });
  //   //   setTimeout(() => setSubmitted(false), 3000);
  //   // }, 1500);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new URLSearchParams();
    formBody.append("entry.1783928471", formData.name);
    formBody.append("entry.8392019283", formData.email);
    formBody.append("entry.4920183920", formData.phone);
    formBody.append("entry.1029384756", formData.message);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSe2u7hqky00j3P72XYU-4b2BnA3tK-WFserSMcreJJKVsLtRw/formResponse",
      {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      }
    );

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:augustine.v.dev@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Mail size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-white font-medium">
                      augustine.v.dev@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917358683636"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                    <Phone size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-white font-medium">+91-7358683636</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <MapPin size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-white font-medium">Chennai, India</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/augustinev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                    <p className="text-white font-medium">
                      linkedin.com/in/augustinev
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/augustine01dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                    <Github size={24} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">GitHub</p>
                    <p className="text-white font-medium">
                      github.com/augustinev
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/Augustine_Paul_Samraj_Software_Engineer_Backend.pdf"
              download
              className="w-full"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-6 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/25"
              >
                <FileText size={24} />
                Download CV / Resume
              </motion.button>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
              method="POST"
              id="mG61Hd"
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  Message / Project Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={cn(
                  "w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all",
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                )}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : submitted ? (
                  <>
                    <CheckCircle2 size={20} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10 bg-[#0a081f]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-serif italic text-lg">A</span>
        </div>
        <div>
          <p className="text-white font-semibold">Augustine Paul Samraj V</p>
          <p className="text-gray-500 text-sm">Backend Engineer</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Augustine Paul Samraj V. All rights
        reserved.
      </p>

      <div className="flex gap-4">
        <a
          href="https://linkedin.com/in/augustinev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/augustine01dev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:augustine.v.dev@gmail.com"
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f0c29] text-slate-50 selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <Head>
        <title>Augustine Paul Samraj V | Backend Engineer</title>
        <meta
          name="description"
          content="Backend Engineer with 3.5+ years of experience in Node.js, TypeScript, and Microservices. Based in Chennai, India."
        />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
