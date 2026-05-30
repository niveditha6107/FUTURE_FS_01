import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen grid place-items-center px-4 overflow-hidden">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">404</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-display font-bold text-gradient">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          The page you're looking for has wandered off into the void.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-white shadow-glow"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the page.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Niveditha Arige | Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Niveditha Arige showcasing full stack web development projects, React applications, backend systems, and internship work.",
      },
      {
        name: "keywords",
        content:
          "Full Stack Developer, React Developer, Node.js, MongoDB, Portfolio, Web Developer, Future Interns, Niveditha Arige",
      },
      { name: "author", content: "Niveditha Arige" },
      { name: "theme-color", content: "#7c3aed" },
      { property: "og:title", content: "Niveditha Arige | Full Stack Web Developer" },
      {
        property: "og:description",
        content: "Modern, responsive web experiences built with React, Node.js, and MongoDB.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Niveditha Arige | Full Stack Web Developer" },
      { name: "description", content: "A modern, responsive full-stack developer portfolio website showcasing projects, skills, and contact information." },
      { property: "og:description", content: "A modern, responsive full-stack developer portfolio website showcasing projects, skills, and contact information." },
      { name: "twitter:description", content: "A modern, responsive full-stack developer portfolio website showcasing projects, skills, and contact information." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7a7f2b8e-3d3f-4b89-b58e-92bb9c6e8eb9/id-preview-619a192c--af156202-afac-4546-8afd-86031deefbb3.lovable.app-1780142915711.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7a7f2b8e-3d3f-4b89-b58e-92bb9c6e8eb9/id-preview-619a192c--af156202-afac-4546-8afd-86031deefbb3.lovable.app-1780142915711.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Niveditha Arige",
          jobTitle: "Full Stack Web Developer",
          email: "mailto:niveditha6107@gmail.com",
          url: "/",
          sameAs: [
            "https://github.com/niveditha6107",
            "https://www.linkedin.com/in/niveditha-arige-77a059328/",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
