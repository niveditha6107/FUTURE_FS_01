import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Selected full-stack, frontend, and internship projects." },
      { property: "og:title", content: "Projects — Alex Carter" },
      { property: "og:description", content: "Selected full-stack and frontend projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-24">
      <Projects />
    </div>
  );
}
