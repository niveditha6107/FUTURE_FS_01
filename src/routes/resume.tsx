import { createFileRoute } from "@tanstack/react-router";
import { Download, Award, BookOpen, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Niveditha Arige" },
      { name: "description", content: "Resume of Niveditha Arige — education, certifications, internship experience, and skills." },
      { property: "og:title", content: "Resume — Niveditha Arige" },
      { property: "og:description", content: "Education, certifications, internship experience, and skills." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

const blocks = [
  {
    Icon: BookOpen,
    title: "Education",
    items: [
      { h: "B.Tech, Computer Science", s: "Undergraduate · Current", t: "Coursework: DSA, Web Development, DBMS, OS, Software Engineering." },
      { h: "Higher Secondary", s: "Science Stream", t: "Strong foundation in Mathematics and Computer Science." },
    ],
  },
  {
    Icon: Award,
    title: "Certifications",
    items: [
      { h: "Full Stack Web Development", s: "Self-paced learning", t: "React, Node.js, Express, MongoDB, REST APIs." },
      { h: "Frontend Development", s: "Online coursework", t: "HTML5, CSS3, JavaScript, React, responsive design." },
      { h: "Future Interns Program", s: "Internship track", t: "Hands-on full stack tasks and project assignments." },
    ],
  },
  {
    Icon: Briefcase,
    title: "Experience",
    items: [
      { h: "Full Stack Developer Intern", s: "Future Interns · 2024 — Present", t: "Building responsive React UIs, Node.js APIs, and MongoDB-backed features." },
      { h: "Personal Projects", s: "Ongoing", t: "Portfolio, Task Manager, Weather App, E-commerce — shipping real-world apps." },
    ],
  },
];

function ResumePage() {
  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Curriculum vitae" title="Resume Overview" />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map(({ Icon, title, items }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="rounded-3xl glass p-6"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-hero text-white mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-5">
                {items.map((it) => (
                  <li key={it.h}>
                    <p className="font-semibold text-sm">{it.h}</p>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                      {it.s}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1.5">{it.t}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl glass p-6 sm:p-8">
          <h3 className="font-bold text-lg mb-4">Skills Summary</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
              "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL",
              "Git & GitHub", "Postman", "VS Code", "Responsive Design", "API Integration", "Problem Solving",
            ].map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-secondary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
