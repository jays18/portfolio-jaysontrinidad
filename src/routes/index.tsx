import { createFileRoute } from "@tanstack/react-router";
import { Nav, Hero, About, Skills, Projects, Experience, Education, Contact, Intro, Footer } from "@/components/portfolio/sections";

const title = "Jayson R. Trinidad — Full-Stack Developer | Computer Engineer";
const description =
  "Jayson R. Trinidad — Full-Stack Developer and Computer Engineering graduate Developer from the Philippines building web apps, backend systems, and IoT solutions.";

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
      <Intro />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
