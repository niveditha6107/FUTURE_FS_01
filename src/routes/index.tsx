import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Carter — full stack developer building modern, fast, accessible web apps with React, Node.js, and MongoDB.",
      },
      { property: "og:title", content: "Alex Carter — Full Stack Web Developer" },
      {
        property: "og:description",
        content: "Modern, fast, accessible web experiences built with React, Node.js, and MongoDB.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
