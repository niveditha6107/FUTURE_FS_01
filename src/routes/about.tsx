import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niveditha Arige" },
      { name: "description", content: "About Niveditha Arige: developer bio, career goals, education, and experience." },
      { property: "og:title", content: "About — Niveditha Arige" },
      { property: "og:description", content: "Developer bio, education, and experience." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <Skills />
    </div>
  );
}
