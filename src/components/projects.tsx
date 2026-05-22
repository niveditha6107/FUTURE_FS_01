import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio with smooth motion, glassmorphism, and dark mode toggle.",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    repo: "https://github.com/niveditha6107",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-transparent",
  },
  {
    title: "Task Management App",
    description:
      "Kanban-style task tracker with realtime updates and secure authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "https://github.com/niveditha6107",
    gradient: "from-sky-500/30 via-cyan-500/20 to-transparent",
  },
  {
    title: "Weather App",
    description:
      "7-day forecasts powered by REST APIs with clean UI and geolocation support.",
    tech: ["React", "REST APIs", "Tailwind"],
    demo: "#",
    repo: "https://github.com/niveditha6107",
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
  },
  {
    title: "E-commerce Website",
    description:
      "Storefront with cart, checkout flow, and a full admin dashboard for orders.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    repo: "https://github.com/niveditha6107",
    gradient: "from-orange-500/30 via-rose-500/20 to-transparent",
  },
  {
    title: "Future Interns Tasks",
    description:
      "Collection of internship task solutions and mini-projects shipped during the program.",
    tech: ["React", "Node.js", "Tailwind"],
    demo: "#",
    repo: "https://github.com/niveditha6107",
    gradient: "from-indigo-500/30 via-blue-500/20 to-transparent",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

export function Projects({ heading = true }: { heading?: boolean }) {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        {heading && (
          <SectionHeading
            eyebrow="Selected work"
            title="Featured Projects"
            subtitle="A mix of full-stack apps, UI experiments, and internship challenges."
          />
        )}

        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                filter === tag
                  ? "bg-gradient-hero text-white border-transparent shadow-glow"
                  : "glass border-border hover:border-primary/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative flex flex-col h-full p-7 min-h-[260px]">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-background/60 border border-border text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 flex gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
