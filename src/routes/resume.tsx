import { createFileRoute } from "@tanstack/react-router";
import { Download, Award, BookOpen, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Alex Carter" },
      { name: "description", content: "Resume: education, certifications, experience, and skills." },
      { property: "og:title", content: "Resume — Alex Carter" },
      { property: "og:description", content: "Education, certifications, experience, and skills." },
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
      { h: "B.Tech, Computer Science", s: "University · 2022 — 2026", t: "Coursework: DSA, Web Dev, DBMS, OS, SE." },
      { h: "Higher Secondary", s: "Science Stream · 2020 — 2022", t: "Top of class in CS & Mathematics." },
    ],
  },
  {
    Icon: Award,
    title: "Certifications",
    items: [
      { h: "Meta Front-End Developer", s: "Coursera · 2024", t: "React, responsive design, accessibility." },
      { h: "MongoDB Developer Path", s: "MongoDB University · 2024", t: "Modeling, aggregation, performance." },
      { h: "Full Stack JavaScript", s: "freeCodeCamp · 2023", t: "Node.js, Express, MongoDB, REST." },
    ],
  },
  {
    Icon: Briefcase,
    title: "Experience",
    items: [
      { h: "Full Stack Developer Intern", s: "Future Interns · 2024 — Present", t: "Shipping production features across the stack." },
      { h: "Freelance Web Developer", s: "Independent · 2023 — 2024", t: "Sites & tools for small businesses." },
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
              "React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion",
              "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL",
              "Git & GitHub", "Postman", "VS Code", "Responsive Design", "Accessibility",
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
