// "use client";

// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import {
//   Mail,
//   ExternalLink,
//   Code2,
//   Palette,
//   Smartphone,
//   Globe,
//   Database,
//   Figma,
//   Cpu,
//   Sparkles,
//   ArrowRight
// } from 'lucide-react';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// // Utility for cleaner tailwind classes
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // Custom Brand Icon Components
// const GithubIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//   </svg>
// );

// const TwitterIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//   </svg>
// );

// const InstagramIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//   </svg>
// );

// const LinkedinIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//   </svg>
// );

// // --- Components ---

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={cn(
//       "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
//       scrolled ? "bg-[#0f0c29]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
//     )}>
//       <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
//         <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
//           <span className="text-white font-serif italic">Z</span>
//         </div>
//       </div>

//       <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
//         {['Home', 'About', 'Lab', 'Contact'].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="hover:text-purple-400 transition-colors"
//           >
//             {item}
//           </a>
//         ))}
//       </div>

//       <div className="md:hidden text-white">
//         <div className="space-y-1.5 cursor-pointer">
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden">
//       {/* Background Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="order-2 md:order-1"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300 mb-6">
//             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
//             Available for hire
//           </div>

//           <h2 className="text-purple-400 font-medium mb-2 tracking-wide text-sm uppercase">
//             Hello! I Am <span className="text-white">Ibrahim Memon</span>
//           </h2>

//           <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
//             A Designer who <br />
//             <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//               Judges a book
//             </span> <br />
//             by its <span className="relative inline-block">
//               cover...
//               <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-500" viewBox="0 0 100 10" preserveAspectRatio="none">
//                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
//               </svg>
//             </span>
//           </h1>

//           <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
//             Because if the cover does not impress you what else can?
//           </p>

//           <div className="flex flex-col gap-6">
//             <div>
//               <h3 className="text-2xl text-white font-light flex items-center gap-2">
//                 I'm a Software Engineer.
//                 <span className="w-0.5 h-6 bg-purple-500 animate-pulse inline-block" />
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 Currently, I'm a Software Engineer at <span className="text-blue-400 font-medium">Facebook</span>,
//               </p>
//             </div>

//             <p className="text-gray-400 max-w-lg leading-relaxed">
//               A self-taught UI/UX designer, functioning in the industry for 3+ years now.
//               I make meaningful and delightful digital products that create an equilibrium
//               between user needs and business goals.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
//                 View Work <ArrowRight size={16} />
//               </button>
//               <button className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Avatar/Visual */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 md:order-2 flex justify-center relative"
//         >
//           <div className="relative w-64 h-64 md:w-80 md:h-80">
//             {/* Abstract Avatar Representation */}
//             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-2xl" />
//             <div className="relative w-full h-full bg-[#1a1635] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
//                {/* Placeholder for 3D Avatar */}
//                <div className="text-center">
//                   <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-gray-700 to-gray-600 rounded-full mb-4 border-4 border-[#1a1635] shadow-xl overflow-hidden relative">
//                      <img
//                         src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4"
//                         alt="Avatar"
//                         className="w-full h-full object-cover"
//                      />
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl inline-block">
//                     <span className="text-white font-medium">Ibrahim Memon</span>
//                   </div>
//                </div>
//             </div>

//             {/* Floating Elements */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//               className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
//             >
//               <Palette className="text-purple-400" size={24} />
//             </motion.div>

//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
//               className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
//             >
//               <Code2 className="text-pink-400" size={24} />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const ExperienceCard = ({ title, subtitle, icon: Icon, delay }: { title: string, subtitle: string, icon: any, delay: number }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay, duration: 0.5 }}
//     className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
//   >
//     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//     <div className="relative z-10 flex flex-col h-full">
//       <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
//         <Icon className="text-white" size={24} />
//       </div>

//       <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//       <p className="text-gray-400 text-sm mb-6">{subtitle}</p>

//       <div className="mt-auto">
//         <button className="text-xs font-medium text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-colors">
//           LEARN MORE
//         </button>
//       </div>
//     </div>
//   </motion.div>
// );

// const WorkExperience = () => {
//   const experiences = [
//     { title: "CIB on the Mobile", subtitle: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: Smartphone },
//     { title: "CIB on the Mobile", subtitle: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: Globe },
//     { title: "CIB on the Mobile", subtitle: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: Database },
//     { title: "CIB on the Mobile", subtitle: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", icon: Cpu },
//   ];

//   return (
//     <section className="py-20 px-6 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-serif text-white mb-12"
//         >
//           Work Experience
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {experiences.map((exp, idx) => (
//             <ExperienceCard key={idx} {...exp} delay={idx * 0.1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const OrbitSection = () => {
//   // Icons to orbit
//   const icons = [Figma, Code2, Database, Globe, Smartphone, Palette, Cpu, Sparkles];

//   return (
//     <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
//       <div className="text-center mb-16 relative z-10 max-w-2xl">
//         <p className="text-gray-300 text-lg mb-2">
//           I'm currently looking to join a <span className="text-purple-400 font-bold">cross-functional</span> team
//         </p>
//         <p className="text-gray-500 text-sm">
//           that values improving people's lives through accessible design
//         </p>
//       </div>

//       {/* Orbital Animation Container */}
//       <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">

//         {/* Center Logo */}
//         <motion.div
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ repeat: Infinity, duration: 4 }}
//           className="absolute z-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.5)] border border-white/20"
//         >
//           <span className="text-4xl md:text-5xl font-serif text-white font-bold">Z</span>
//         </motion.div>

//         {/* Inner Orbit Ring */}
//         <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />

//         {/* Outer Orbit Ring */}
//         <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

//         {/* Orbiting Icons - Inner */}
//         {icons.slice(0, 4).map((Icon, i) => (
//           <motion.div
//             key={`inner-${i}`}
//             className="absolute"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//             }}
//           >
//             <div
//               className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a1635] border border-white/20 rounded-full flex items-center justify-center text-purple-400 shadow-lg"
//               style={{ transform: `rotate(${i * 90}deg) translate(125px) rotate(-${i * 90}deg)` }}
//             >
//               <Icon size={20} />
//             </div>
//           </motion.div>
//         ))}

//         {/* Orbiting Icons - Outer */}
//         {icons.slice(4, 8).map((Icon, i) => (
//           <motion.div
//             key={`outer-${i}`}
//             className="absolute"
//             animate={{ rotate: -360 }}
//             transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//             }}
//           >
//             <div
//               className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1635] border border-white/20 rounded-full flex items-center justify-center text-pink-400 shadow-lg"
//               style={{ transform: `rotate(${i * 90}deg) translate(200px) rotate(-${i * 90}deg)` }}
//             >
//               <Icon size={24} />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ reverse = false }: { reverse?: boolean }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.6 }}
//     className={cn(
//       "flex flex-col md:flex-row gap-8 items-center mb-24",
//       reverse ? "md:flex-row-reverse" : ""
//     )}
//   >
//     {/* Text Content */}
//     <div className="flex-1 space-y-6">
//       <div className="space-y-2">
//         <span className="text-purple-400 text-xs font-bold tracking-wider uppercase">Featured Project</span>
//         <h3 className="text-3xl md:text-4xl font-serif text-white">Example Project</h3>
//       </div>

//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative">
//         <p className="text-gray-300 leading-relaxed">
//           A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
//         </p>
//         {/* Decorative corner accents */}
//         <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
//         <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg" />
//       </div>

//       <div className="flex gap-4 text-gray-400">
//         <Sparkles size={20} />
//         <Sparkles size={20} />
//       </div>
//     </div>

//     {/* Image/Visual */}
//     <div className="flex-1 w-full">
//       <div className="relative group">
//         <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
//         <div className="relative bg-[#131026] border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
//            {/* Mock UI Content */}
//            <div className="absolute inset-0 bg-[#1a1635]">
//               <div className="h-8 bg-[#0f0c29] flex items-center px-4 gap-2 border-b border-white/5">
//                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
//                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
//                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
//               </div>
//               <div className="p-6 grid grid-cols-2 gap-4 opacity-50">
//                  <div className="h-32 bg-white/5 rounded-lg" />
//                  <div className="h-32 bg-white/5 rounded-lg" />
//                  <div className="h-32 bg-white/5 rounded-lg col-span-2" />
//               </div>
//            </div>

//            {/* Overlay Content */}
//            <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center max-w-xs">
//                  <h4 className="text-white font-bold mb-2">This headline reflects my personality (56px)</h4>
//                  <div className="h-px w-full bg-white/20 my-2" />
//                  <p className="text-xs text-gray-300">WHO AM I?</p>
//               </div>
//            </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const Projects = () => {
//   return (
//     <section className="py-20 px-6 max-w-6xl mx-auto">
//       <ProjectCard />
//       <ProjectCard reverse />
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-6 border-t border-white/5">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-2xl"
//         >
//           <h2 className="text-3xl font-serif text-white mb-8">Contact</h2>

//           <p className="text-gray-400 mb-8 leading-relaxed">
//             I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.
//           </p>

//           <div className="flex flex-col gap-6">
//             <a href="mailto:ibrahimmemon930@gmail.com" className="text-white hover:text-purple-400 transition-colors text-lg">
//               ibrahimmemon930@gmail.com
//             </a>

//             <div className="flex gap-6 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <InstagramIcon size={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <TwitterIcon size={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <GithubIcon size={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <LinkedinIcon size={24} />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => (
//   <footer className="py-8 px-6 text-center text-gray-600 text-sm">
//     <p>© {new Date().getFullYear()} Ibrahim Memon. All rights reserved.</p>
//   </footer>
// );

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-[#0f0c29] text-slate-50 selection:bg-purple-500/30 font-sans">
//       <Head>
//         <title>Ibrahim Memon | Software Engineer</title>
//         <meta name="description" content="Portfolio of Ibrahim Memon, Software Engineer and UI/UX Designer." />
//       </Head>

//       <Navbar />

//       <main>
//         <Hero />
//         <WorkExperience />
//         <OrbitSection />
//         <Projects />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Code2,
//   Server,
//   Database,
//   Cloud,
//   Layers,
//   Shield,
//   Zap,
//   Terminal,
//   Cpu,
//   Globe,
//   ArrowRight,
//   ExternalLink,
//   ChevronRight,
//   Briefcase,
//   GraduationCap,
//   Award
// } from 'lucide-react';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// // Utility for cleaner tailwind classes
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // Custom Brand Icon Components
// const LinkedinIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//   </svg>
// );

// const GithubIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//   </svg>
// );

// // --- Components ---

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={cn(
//       "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
//       scrolled ? "bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
//     )}>
//       <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
//         <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//           <span className="text-white font-bold">A</span>
//         </div>
//         <span className="text-white font-semibold text-lg hidden sm:block">Augustine</span>
//       </div>

//       <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
//         {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((item) => (
//           <a
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="hover:text-cyan-400 transition-colors"
//           >
//             {item}
//           </a>
//         ))}
//       </div>

//       <div className="md:hidden text-white">
//         <div className="space-y-1.5 cursor-pointer">
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 overflow-hidden">
//       {/* Background Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="order-2 md:order-1"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 mb-6">
//             <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
//             Available for opportunities
//           </div>

//           <h2 className="text-cyan-400 font-medium mb-2 tracking-wide text-sm uppercase">
//             Hello! I Am <span className="text-white">Augustine Paul Samraj V</span>
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
//             Backend Engineer <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//               Node.js | TypeScript
//             </span> <br />
//             <span className="text-2xl md:text-3xl font-light text-gray-400">
//               BFF | Microservices
//             </span>
//           </h1>

//           <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
//             3.5+ years of experience building scalable backend systems,
//             RESTful APIs, and microservices architecture.
//             Specialized in performance optimization and secure authentication systems.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-8">
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <MapPin size={16} className="text-cyan-400" />
//               Chennai, India
//             </div>
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <Phone size={16} className="text-cyan-400" />
//               +91-7358683636
//             </div>
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <Mail size={16} className="text-cyan-400" />
//               augustine.v.dev@gmail.com
//             </div>
//           </div>

//           <div className="flex gap-4 pt-4">
//             <a
//               href="#contact"
//               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center gap-2"
//             >
//               Get In Touch <ArrowRight size={16} />
//             </a>
//             <a
//               href="https://linkedin.com/in/augustinev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
//             >
//               <LinkedinIcon size={18} /> LinkedIn
//             </a>
//           </div>
//         </motion.div>

//         {/* Avatar/Visual */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 md:order-2 flex justify-center relative"
//         >
//           <div className="relative w-64 h-64 md:w-80 md:h-80">
//             {/* Abstract Avatar Representation */}
//             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-2xl" />
//             <div className="relative w-full h-full bg-[#1e293b] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
//                <div className="text-center">
//                   <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-600 to-cyan-600 rounded-full mb-4 border-4 border-[#1e293b] shadow-xl flex items-center justify-center">
//                      <span className="text-5xl font-bold text-white">A</span>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl inline-block">
//                     <span className="text-white font-medium">Augustine Paul Samraj V</span>
//                   </div>
//                   <div className="mt-2 text-cyan-400 text-sm">Backend Engineer</div>
//                </div>
//             </div>

//             {/* Floating Elements */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//               className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
//             >
//               <Server className="text-blue-400" size={24} />
//             </motion.div>

//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
//               className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
//             >
//               <Code2 className="text-cyan-400" size={24} />
//             </motion.div>

//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
//               className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-xl"
//             >
//               <Database className="text-purple-400" size={20} />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const SkillCard = ({ title, skills, icon: Icon, delay }: { title: string, skills: string[], icon: any, delay: number }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay, duration: 0.5 }}
//     className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
//   >
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

//     <div className="relative z-10">
//       <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
//         <Icon className="text-white" size={24} />
//       </div>

//       <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
//       <div className="flex flex-wrap gap-2">
//         {skills.map((skill, idx) => (
//           <span
//             key={idx}
//             className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Languages & Backend",
//       skills: ["Node.js", "TypeScript", "JavaScript", "Python (Basic)"],
//       icon: Terminal
//     },
//     {
//       title: "Frameworks & APIs",
//       skills: ["Express.js", "REST APIs", "Swagger/OpenAPI", "GraphQL (Basic)", "NestJS (Basic)"],
//       icon: Layers
//     },
//     {
//       title: "Architecture",
//       skills: ["Microservices", "API Design", "Backend for Frontend (BFF)", "API Gateway Concepts"],
//       icon: Cpu
//     },
//     {
//       title: "Databases & Caching",
//       skills: ["PostgreSQL", "MongoDB", "Redis"],
//       icon: Database
//     },
//     {
//       title: "Messaging & Realtime",
//       skills: ["Bull Queue", "WebSocket (Socket.io)"],
//       icon: Zap
//     },
//     {
//       title: "Authentication & Security",
//       skills: ["JWT", "OAuth2", "Role-Based Access Control (RBAC)"],
//       icon: Shield
//     },
//     {
//       title: "Cloud & DevOps",
//       skills: ["AWS", "Docker", "Kubernetes (Basic)"],
//       icon: Cloud
//     },
//     {
//       title: "Observability & Tools",
//       skills: ["Logging", "Monitoring", "Git", "Postman"],
//       icon: Globe
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 px-6 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-white mb-4"
//         >
//           Technical Skills
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-gray-400 mb-12 max-w-2xl"
//         >
//           My expertise spans across backend development, system architecture, and cloud technologies.
//         </motion.p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {skillCategories.map((category, idx) => (
//             <SkillCard key={idx} {...category} delay={idx * 0.05} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ExperienceCard = ({ title, company, period, achievements, icon: Icon, delay }: {
//   title: string,
//   company: string,
//   period: string,
//   achievements: string[],
//   icon: any,
//   delay: number
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay, duration: 0.5 }}
//     className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
//   >
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//     <div className="relative z-10 flex flex-col h-full">
//       <div className="flex items-start justify-between mb-4">
//         <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
//           <Icon className="text-white" size={24} />
//         </div>
//         <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
//           {period}
//         </span>
//       </div>

//       <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
//       <p className="text-cyan-400 text-sm mb-4">{company}</p>

//       <ul className="space-y-2">
//         {achievements.map((achievement, idx) => (
//           <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
//             <ChevronRight size={16} className="text-cyan-500 mt-0.5 flex-shrink-0" />
//             <span>{achievement}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </motion.div>
// );

// const WorkExperience = () => {
//   const experiences = [
//     {
//       title: "Digi Portfolio – Assessment Platform",
//       company: "DigivalIT Solutions, Chennai",
//       period: "Apr 2025 – Present",
//       achievements: [
//         "Designed and developed scalable REST APIs using Node.js and Express",
//         "Built optimized backend endpoints to support frontend applications (BFF pattern)",
//         "Improved performance of complex MongoDB queries for reporting systems",
//         "Implemented request validation and structured error handling",
//         "Added logging for better observability and debugging"
//       ],
//       icon: Briefcase
//     },
//     {
//       title: "Infinity – Stock Market Analysis",
//       company: "DigivalIT Solutions, Chennai",
//       period: "Jan 2025 – Apr 2025",
//       achievements: [
//         "Developed backend services using Python and PostgreSQL for real-time data processing",
//         "Designed relational schema and optimized SQL queries for performance",
//         "Integrated third-party financial APIs",
//         "Implemented WebSocket-based live updates",
//         "Optimized data pipelines to handle concurrent users with low latency"
//       ],
//       icon: Zap
//     },
//     {
//       title: "Digi Assess & Digi Exam Platforms",
//       company: "DigivalIT Solutions, Chennai",
//       period: "Sep 2022 – Jan 2025",
//       achievements: [
//         "Built scalable REST APIs using Node.js, TypeScript, and MongoDB",
//         "Implemented Redis caching, improving API response times by ~30%",
//         "Designed authentication and authorization using JWT and RBAC",
//         "Worked closely with frontend teams to deliver aggregated APIs (BFF)",
//         "Built resilient APIs with proper error handling and retry mechanisms"
//       ],
//       icon: Award
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 px-6 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-white mb-4"
//         >
//           Work Experience
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-gray-400 mb-12"
//         >
//           Software Engineer (Backend) at DigivalIT Solutions, Chennai
//           <span className="text-cyan-400 ml-2">Sep 2022 – Present</span>
//         </motion.p>

//         <div className="grid md:grid-cols-1 gap-6">
//           {experiences.map((exp, idx) => (
//             <ExperienceCard key={idx} {...exp} delay={idx * 0.1} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Education = () => {
//   return (
//     <section className="py-20 px-6 relative">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-white mb-12"
//         >
//           Education
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
//         >
//           <div className="flex items-start gap-6">
//             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
//               <GraduationCap className="text-white" size={32} />
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
//               <p className="text-cyan-400 text-lg mb-2">VELS Institute of Science, Technology and Advanced Studies (VISTAS)</p>
//               <p className="text-gray-400">CGPA: 7.9 / 10</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-6 border-t border-white/5">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-2xl"
//         >
//           <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>

//           <p className="text-gray-400 mb-8 leading-relaxed">
//             I'm currently looking for new opportunities to work on challenging backend systems.
//             Whether you have a question or just want to say hi, I'll try my best to get back to you!
//           </p>

//           <div className="flex flex-col gap-6">
//             <a href="mailto:augustine.v.dev@gmail.com" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors text-lg group">
//               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
//                 <Mail size={24} />
//               </div>
//               augustine.v.dev@gmail.com
//             </a>

//             <a href="tel:+917358683636" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors text-lg group">
//               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
//                 <Phone size={24} />
//               </div>
//               +91-7358683636
//             </a>

//             <div className="flex items-center gap-4 text-white text-lg">
//               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
//                 <MapPin size={24} />
//               </div>
//               Chennai, India
//             </div>

//             <div className="flex gap-6 mt-4">
//               <a
//                 href="https://linkedin.com/in/augustinev"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition-all"
//               >
//                 <LinkedinIcon size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition-all"
//               >
//                 <GithubIcon size={24} />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => (
//   <footer className="py-8 px-6 text-center text-gray-600 text-sm border-t border-white/5">
//     <p>© {new Date().getFullYear()} Augustine Paul Samraj V. All rights reserved.</p>
//   </footer>
// );

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-cyan-500/30 font-sans">
//       <Head>
//         <title>Augustine Paul Samraj V | Backend Engineer</title>
//         <meta name="description" content="Backend Engineer with 3.5+ years of experience in Node.js, TypeScript, and Microservices. Based in Chennai, India." />
//       </Head>

//       <Navbar />

//       <main>
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <Education />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// }