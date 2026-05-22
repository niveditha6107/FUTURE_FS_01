import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-2xl"
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title.split(" ").map((w, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="text-gradient">{" "}{w}</span>
          ) : (
            <span key={i}>{i === 0 ? "" : " "}{w}</span>
          )
        )}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
