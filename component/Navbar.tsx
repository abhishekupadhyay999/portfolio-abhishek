"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0d11]/80 px-5 py-4 backdrop-blur-xl">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight"
        >
          ABHISHEK<span className="text-[#b7ff32]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#b7ff32] px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#0b0d11] p-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#b7ff32] px-5 py-3 text-center font-bold text-black"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}