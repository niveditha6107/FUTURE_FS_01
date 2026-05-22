import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="text-gradient">Niveditha</span>.dev
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Full Stack Web Developer crafting responsive, user-friendly, and scalable web applications.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3">Navigate</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/resume" className="hover:text-foreground">Resume</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold mb-3">Connect</p>
          <div className="flex gap-3">
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
                className="h-10 w-10 grid place-items-center rounded-full glass hover:shadow-glow hover:scale-110 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Niveditha Arige. Crafted with care.</p>
          <p>Built with React, TanStack & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
