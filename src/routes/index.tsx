import { createFileRoute } from "@tanstack/react-router";
import { Nav, Hero, About, Skills, Projects, Experience, Approach, Contact, Footer } from "@/components/portfolio/sections";

const title = "Portfolio — Computer Engineering Student & Full-Stack Developer";
const description =
  "Computer Engineering student and Full-Stack Developer from the Philippines building web apps, backend systems, and IoT solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
