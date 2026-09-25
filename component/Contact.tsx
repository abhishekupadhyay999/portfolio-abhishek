"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-32 overflow-hidden px-6 py-32 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================
            SECTION LABEL
        ================================= */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-lime-400"
        >
          04 — Let's Connect
        </motion.p>


        {/* ================================
            MAIN CONTACT CARD
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1015] px-6 py-16 md:px-12 md:py-20 lg:px-16"
        >

          {/* Green Glow */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-lime-400/10 blur-[120px]" />

          {/* Purple Glow */}

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />


          {/* Decorative Circle */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-dashed border-white/10 md:block"
          />


          {/* Content */}

          <div className="relative">

            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Have an idea?
              <br />

              <span className="text-white/20">
                Let's build it.
              </span>
            </h2>


            <p className="mt-8 max-w-xl text-base leading-7 text-white/40 md:text-lg">
              I'm open to frontend development opportunities,
              freelance projects and interesting collaborations.
              If you have something in mind, let's talk.
            </p>


            {/* ================================
                BUTTONS
            ================================= */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* Email */}

              <a
                href="mailto:updhyayabhishek669@gmail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
              >
                <span>
                  ✉
                </span>

                Get In Touch

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>


              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Download Resume
              </a>

            </div>

          </div>

        </motion.div>


        {/* ================================
            CONTACT INFORMATION
        ================================= */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">


          {/* EMAIL */}

          <a
            href="mailto:updhyayabhishek669@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.04]"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-lg text-white/40 transition-colors duration-300 group-hover:border-lime-400/30 group-hover:text-lime-400">
              @
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/25">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-medium text-white/70 transition-colors group-hover:text-lime-400">
              updhyayabhishek669@gmail.com
            </p>

          </a>


          {/* LOCATION */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-lg text-white/40 transition-colors duration-300 group-hover:text-lime-400">
              +
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/25">
              Based In
            </p>

            <p className="mt-2 text-sm font-medium text-white/70">
              India
            </p>

          </div>


          {/* AVAILABILITY */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">

            <div className="flex items-center gap-3">

              <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

              <span className="text-sm font-medium text-white/70">
                Available
              </span>

            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/25">
              Open To
            </p>

            <p className="mt-2 text-sm font-medium text-white/70">
              Frontend · Freelance · Full-time
            </p>

          </div>

        </div>


        {/* ================================
            SOCIAL LINKS
        ================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8"
        >

          <p className="text-sm text-white/30">
            Find me around the web
          </p>


          <div className="flex gap-3">

            {/* GitHub */}

            <a
              href="https://github.com/abhishekupadhyay999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-lime-400/40 hover:text-lime-400"
            >
              GH
            </a>


            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/abhishek-upadhyay-bba936249/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/40 transition-all duration-300 hover:border-lime-400/40 hover:text-lime-400"
            >
              in
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}