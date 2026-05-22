import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";

const timeline = [
  {
    Icon: Briefcase,
    period: "2024 — Present",
    title: "Full Stack Developer Intern",
    org: "Future Interns",
    text: "Building production-ready features across the stack — React, Node.js, MongoDB. Shipping reusable components and improving DX.",
  },
  {
    Icon: Rocket,
    period: "2023 — 2024",
    title: "Freelance Web Developer",
    org: "Independent",
    text: "Designed and built websites and small SaaS tools for clients. Focus on performance and accessibility.",
  },
  {
    Icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech, Computer Science",
    org: "University",
    text: "Coursework in data structures, web technologies, databases, and software engineering.",
  },
];

export function About({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        {heading && (
          <SectionHeading
            eyebrow="About me"
            title="Curious builder, lifelong learner"
            subtitle="I love turning ideas into intuitive, performant products. Outside of code, I explore design, write about engineering, and contribute to open source."
          />
        )}

        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <div className="space-y-8">
            {timeline.map(({ Icon, ...item }, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[1.65rem] sm:-left-[2.4rem] top-1 h-9 w-9 grid place-items-center rounded-full glass shadow-elegant">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl glass p-5">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-bold text-lg">
                    {item.title} <span className="text-muted-foreground font-medium">· {item.org}</span>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
