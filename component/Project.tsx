"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "CarMotive India",
    category: "Automotive",
    description:
      "A multi-brand automotive platform featuring vehicle listings, brand catalogs, car detail pages, finance, exchange and EMI functionality.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/carmotive-hero.png",
    liveUrl: "https://carmotiveindia.com/",
  },
  {
    number: "02",
    title: "MAGVEL Capital",
    category: "Financial Services",
    description:
      "A financial services website featuring loan information, enquiry forms and an interactive EMI calculator to help users explore loan options.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/magvel-hero.png",
    liveUrl: "https://magvelcapital.in/",
  },
  {
    number: "03",
    title: "Verkoper",
    category: "Real Estate",
    description:
      "A modern real estate website focused on project sales, marketing solutions, service offerings and lead generation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/verkoper-hero.png",
    liveUrl: "https://verkoper.co.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] px-6 py-24 md:px-12 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-lime-400/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-lime-400">
              <span className="h-px w-8 bg-lime-400" />
              <span>01 — Selected Work</span>
            </div>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Things I’ve{" "}
              <span className="text-white/25">built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45 md:text-right">
            Real websites I’ve designed, developed and deployed for businesses
            across different industries.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/[0.10] bg-[#0b0e12] transition-colors duration-300 hover:border-lime-400/30"
            >
              {/* Screenshot */}
              <div className="relative aspect-[1.65/1] overflow-hidden border-b border-white/[0.08] bg-[#12161c]">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Project number */}
                <span className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-black/60 px-2 text-xs font-medium text-lime-300 backdrop-blur-md">
                  {project.number}
                </span>

                {/* Category */}
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] text-white/75 backdrop-blur-md">
                  {project.category}
                </span>

                {/* Hover overlay */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live website`}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
                >
                  <span className="translate-y-2 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore Website ↗
                  </span>
                </a>
              </div>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-lime-400">
                    {project.category}
                  </span>

                  <span className="text-xs text-white/25">
                    2026
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-lime-300">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/65 transition-colors duration-300 group-hover:border-white/[0.14]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Live website link */}
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-lime-400 transition-colors duration-300 hover:text-lime-300"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lime-400/25 bg-lime-400/[0.07] text-base">
                      ↗
                    </span>

                    <span>Visit Live Website</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/60 transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-400 hover:text-black"
                  >
                    →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-white/30"
        >
          <span>Selected client projects</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            Designed · Developed · Deployed
          </span>
        </motion.div>
      </div>
    </section>
  );
}