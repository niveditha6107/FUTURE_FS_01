import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML & CSS", level: 96 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 },
      { name: "Authentication", level: 78 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 74 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Responsive Design", level: 94 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Toolkit"
          subtitle="A modern stack focused on speed, accessibility, and developer experience."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="relative rounded-3xl glass p-6 hover:shadow-glow transition-shadow"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-card opacity-60 -z-10" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
                {String(gi + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-bold mb-5">{group.title}</h3>
              <ul className="space-y-4">
                {group.skills.map((s, i) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
