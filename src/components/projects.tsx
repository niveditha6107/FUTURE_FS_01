import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";
import portfolioImg from "@/assets/project-portfolio.jpg";
import tasksImg from "@/assets/project-tasks.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import ecomImg from "@/assets/project-ecommerce.jpg";
import internsImg from "@/assets/project-interns.jpg";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern portfolio with smooth motion, glassmorphism, and dark mode.",
    image: portfolioImg,
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    repo: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Kanban-style task tracker with realtime updates and auth.",
    image: tasksImg,
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "https://github.com",
  },
  {
    title: "Weather App",
    description: "7-day forecasts with elegant glass UI and geolocation.",
    image: weatherImg,
    tech: ["React", "REST APIs", "Tailwind"],
    demo: "#",
    repo: "https://github.com",
  },
  {
    title: "E-commerce Website",
    description: "Storefront with cart, checkout, and admin dashboard.",
    image: ecomImg,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    repo: "https://github.com",
  },
  {
    title: "Future Interns Tasks",
    description: "A collection of internship task solutions and mini-projects.",
    image: internsImg,
    tech: ["React", "Node.js", "Tailwind"],
    demo: "#",
    repo: "https://github.com",
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
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative rounded-3xl glass overflow-hidden hover:shadow-glow transition-all"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-gradient-hero text-white hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
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
