import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/contact";
import { Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Niveditha Arige" },
      { name: "description", content: "Get in touch with Niveditha Arige for roles, freelance work, or collaboration." },
      { property: "og:title", content: "Contact — Niveditha Arige" },
      { property: "og:description", content: "Get in touch for roles, freelance work, or collaboration." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
      <div className="mx-auto max-w-3xl px-5 pb-12 grid sm:grid-cols-3 gap-4">
        {[
          { Icon: Mail, label: "Email", value: "niveditha6107@gmail.com" },
          { Icon: MapPin, label: "Location", value: "Remote · Worldwide" },
          { Icon: Clock, label: "Response", value: "Within 24 hours" },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="rounded-2xl glass p-4 flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-hero text-white">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
