"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 text-xs text-white/30 sm:flex-row sm:items-center">
          {/* Copyright */}
          <p>
            © {currentYear} Abhishek Upadhyay. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="w-fit transition-colors duration-300 hover:text-lime-400"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}