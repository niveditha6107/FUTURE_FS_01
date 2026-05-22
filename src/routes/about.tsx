import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Carter" },
      { name: "description", content: "About Alex Carter: developer bio, career goals, education, and experience." },
      { property: "og:title", content: "About — Alex Carter" },
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
