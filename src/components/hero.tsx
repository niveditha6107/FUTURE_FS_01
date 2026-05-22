import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Blobs } from "./blobs";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      <Blobs />
      <div className="mx-auto max-w-4xl px-5 w-full">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for internships & freelance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Niveditha Arige</span>.<br />
            I build modern <span className="text-gradient">web experiences</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Full Stack Web Developer passionate about creating responsive, user-friendly,
            and scalable web applications using React, Node.js, MongoDB, and modern frontend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:shadow-elegant transition-shadow"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: "https://github.com/niveditha6107", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/niveditha-arige-77a059328/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:niveditha6107@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
