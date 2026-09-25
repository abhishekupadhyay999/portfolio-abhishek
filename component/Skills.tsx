"use client";

import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
  },
  {
    name: "SQL",
    icon: SiMysql,
    category: "Database",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Tools",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Deployment",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Deployment",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-32 overflow-hidden px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
            02 — My Stack
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Tools I
              <br />
              <span className="text-white/20">
                work with.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/40 md:text-right">
              Technologies I use to turn ideas into responsive,
              scalable and production-ready experiences.
            </p>

          </div>
        </motion.div>


        {/* Skills Grid */}

        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.05]"
              >

                {/* Background glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-lime-400/0 blur-3xl transition-all duration-500 group-hover:bg-lime-400/10" />


                {/* Icon */}

                <Icon
                  className="relative text-4xl text-white/50 transition-all duration-300 group-hover:scale-110 group-hover:text-lime-400"
                />


                {/* Info */}

                <div className="relative">

                  <p className="font-semibold text-white">
                    {skill.name}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/25">
                    {skill.category}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-8"
        >

          <p className="max-w-3xl text-2xl font-medium leading-relaxed text-white/60 md:text-4xl">
            Always learning.
            <span className="text-white/20">
              {" "}Always building.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
}