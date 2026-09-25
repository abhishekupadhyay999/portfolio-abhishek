
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function SkillIcon({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      title={name}
      className="group flex h-[68px] w-[68px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-lime-400/40 hover:bg-white/[0.06] hover:text-lime-400"
    >
      <div className="text-[27px] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span className="mt-1 text-[9px] font-medium text-white/40 transition-colors group-hover:text-lime-400">
        {name}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-lime-400/5 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
            </span>
            Available for opportunities
          </div>

          <p className="mb-3 text-lg text-white/50 md:text-xl">
            Hey, I&apos;m
          </p>

          <h1 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.85] tracking-[-0.075em]">
            ABHISHEK<span className="text-lime-400">.</span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            I build responsive, production-ready web experiences using
            React, Next.js, TypeScript and modern web technologies.
          </p>

          {/* Tech stack */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/30">
              My Core Stack
            </p>

            <div className="flex flex-wrap gap-3">
              <SkillIcon icon={<SiReact />} name="React" />
              <SkillIcon icon={<SiNextdotjs />} name="Next.js" />
              <SkillIcon icon={<SiTypescript />} name="TypeScript" />
              <SkillIcon icon={<SiJavascript />} name="JavaScript" />
              <SkillIcon icon={<SiTailwindcss />} name="Tailwind" />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
            >
              View My Work
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex gap-3">
            <a
              href="https://github.com/abhishekupadhyay999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-lime-400/50 hover:text-lime-400"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/abhishek-upadhyay-bba936249/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-lime-400/50 hover:text-lime-400"
            >
              in
            </a>
          </div>
        </motion.div>

        {/* RIGHT: ANIMATED PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Portrait frame */}
          <div className="group relative aspect-square overflow-hidden rounded-[40px] border border-white/10 bg-[#0b0d11]">
            {/* Lime ambient glow */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#080a0d]/70 via-transparent to-transparent" />

            <div className="pointer-events-none absolute -inset-10 z-10 rounded-full bg-lime-400/10 blur-[90px]" />

            {/* Profile image */}
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/profile.png"
                alt="Abhishek Upadhyay — Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Animated orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-[8%] top-[8%] z-20 h-[84%] w-[84%] rounded-full border border-lime-400/30"
            />

            {/* Corner accents */}
            <div className="pointer-events-none absolute left-6 top-6 z-20 h-12 w-12 border-l border-t border-lime-400/60" />

            <div className="pointer-events-none absolute bottom-6 right-6 z-20 h-12 w-12 border-b border-r border-lime-400/60" />

            {/* Currently building card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-4 top-5 z-30 rounded-2xl border border-white/10 bg-[#171a20]/90 px-4 py-3 text-xs shadow-xl backdrop-blur-md sm:right-5 sm:top-8"
            >
              <span className="text-white/40">Currently</span>
              <br />
              <strong className="text-white">
                Building <span className="text-lime-400">🚀</span>
              </strong>
            </motion.div>

            {/* Tech stack card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 left-4 z-30 rounded-2xl border border-white/10 bg-[#171a20]/90 px-4 py-3 text-xs shadow-xl backdrop-blur-md sm:bottom-8 sm:left-5"
            >
              <span className="text-white/40">Stack</span>
              <br />
              <strong className="text-white">React × Next.js</strong>
            </motion.div>

            {/* Name label */}
            <div className="absolute bottom-5 right-5 z-20 hidden text-right sm:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Developer
              </p>
              <p className="mt-1 text-sm font-bold text-lime-400">
                Abhishek.
              </p>
            </div>
          </div>

          {/* Rotating CODE / CREATE / REPEAT badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-7 -right-3 z-30 flex h-20 w-20 items-center justify-center rounded-full border border-lime-400/40 bg-[#0b0d11] text-center text-[9px] font-bold uppercase tracking-[0.15em] text-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.08)] sm:-right-7 sm:h-24 sm:w-24"
          >
            <span>
              CODE
              <br />
              CREATE
              <br />
              REPEAT
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        aria-label="Scroll to projects"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-2xl text-white/30 transition-colors hover:text-white"
      >
        ↓
      </motion.a>
    </section>
  );
}