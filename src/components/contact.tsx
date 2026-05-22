import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./section-heading";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export function Contact({ heading = true }: { heading?: boolean }) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    try {
      // Simulated submission. Wire to a server function or email service when ready.
      await new Promise((r) => setTimeout(r, 900));
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        {heading && (
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build something great"
            subtitle="Have a role, project, or idea? Drop a message — I usually reply within a day."
          />
        )}

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass p-6 sm:p-8 shadow-elegant space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Jane Doe" required />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              placeholder="Tell me a bit about your project..."
              className="w-full rounded-xl bg-background/60 border border-input px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            disabled={loading}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl bg-background/60 border border-input px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
