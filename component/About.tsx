"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Users,
  ArrowUpRight,
} from "lucide-react";

const journey = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Computer Science",
    text: "B.Tech in Computer Science & Engineering from Parul University.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Frontend Development",
    text: "Building responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Real Projects",
    text: "Designed and developed production websites for finance, real estate and automotive businesses.",
  },
  {
    number: "04",
    icon: Users,
    title: "Client Collaboration",
    text: "Working directly with clients to turn requirements and feedback into polished web experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-32 overflow-hidden px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-lime-400">
            03 — About Me
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            More than
            <br />
            <span className="text-white/20">
              just code.
            </span>
          </h2>
        </motion.div>


        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="sticky top-32">

              <p className="text-lg leading-8 text-white/50 md:text-xl">
                I'm Abhishek, a Frontend Developer focused on
                building modern, responsive and production-ready
                web experiences.
              </p>

              <p className="mt-6 text-lg leading-8 text-white/30 md:text-xl">
                I enjoy taking an idea from the first design
                concept all the way to a deployed product.
                Along the way, I care about clean interfaces,
                usability, performance and writing maintainable
                code.
              </p>

              {/* Quote */}

              <div className="mt-10 border-l-2 border-lime-400 pl-5">
                <p className="text-xl font-semibold leading-8 text-white/70">
                  Build it.
                  <br />
                  Learn from it.
                  <br />
                  Make it better.
                </p>
              </div>

            </div>
          </motion.div>


          {/* RIGHT — JOURNEY */}

          <div className="space-y-4">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
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
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.04] md:p-7"
                >

                  {/* Hover Glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-lime-400/0 blur-3xl transition-all duration-500 group-hover:bg-lime-400/10" />

                  <div className="relative flex gap-5">

                    {/* Number */}

                    <span className="pt-1 text-xs text-white/20">
                      {item.number}
                    </span>

                    {/* Icon */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-lime-400/30 group-hover:text-lime-400">
                      <Icon size={21} />
                    </div>

                    {/* Content */}

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/40">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =========================
            STATS
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid border-y border-white/10 md:grid-cols-3"
        >

          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-4xl font-black text-lime-400">
              3+
            </p>

            <p className="mt-2 text-sm text-white/40">
              Client Projects
            </p>
          </div>


          <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r">
            <p className="text-4xl font-black">
              3
            </p>

            <p className="mt-2 text-sm text-white/40">
              Business Industries
            </p>
          </div>


          <div className="px-6 py-8">
            <p className="text-4xl font-black">
              2025
            </p>

            <p className="mt-2 text-sm text-white/40">
              B.Tech Graduate
            </p>
          </div>

        </motion.div>


        {/* =========================
            RESUME CTA
        ========================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:flex-row md:items-center md:p-10"
        >

          <div>

            <p className="text-xl font-semibold">
              Want to know more?
            </p>

            <p className="mt-2 text-sm text-white/40">
              Take a look at my complete resume.
            </p>

          </div>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Download Resume

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}