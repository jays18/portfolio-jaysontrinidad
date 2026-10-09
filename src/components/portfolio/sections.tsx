import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, X, FileText, CheckCircle2, GraduationCap, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, navLinks, skillGroups, projects, experience, education, process } from "@/lib/portfolio-data";
import { Reveal, Section, Tag, GithubIcon, LinkedinIcon } from "./ui";
import { sendContactMessage } from "@/lib/contact";

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: ({ className }: { className?: string }) => <Mail className={className} /> },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.name}<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" variant="outline">
            <a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> View Resume</a>
          </Button>
        </div>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-sm hover:bg-muted">
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> View Resume</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:px-8 md:py-32">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Open to internships & junior roles
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">
            Building Practical Software & Technology Solutions.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm a Computer Engineering student and aspiring Full-Stack Developer focused on building responsive web applications, backend systems, and innovative technology solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">View My Projects <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">Contact Me</a></Button>
          </div>
          <div className="mt-10 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150} className="hidden md:block">
          <div className="rounded-xl border bg-card shadow-sm">
            <div className="flex items-center gap-1.5 border-b px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
{`const developer = {
  `}<span className="text-foreground">role</span>{`: `}<span className="text-primary">"Full-Stack Developer"</span>{`,
  `}<span className="text-foreground">based</span>{`: `}<span className="text-primary">"Philippines"</span>{`,
  `}<span className="text-foreground">stack</span>{`: [
    `}<span className="text-primary">"React"</span>{`, `}<span className="text-primary">"TypeScript"</span>{`,
    `}<span className="text-primary">"Django"</span>{`, `}<span className="text-primary">"PostgreSQL"</span>{`,
  ],
  `}<span className="text-foreground">alsoBuilds</span>{`: `}<span className="text-primary">"IoT systems"</span>{`,
};`}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Turning real problems into working software.">
      <div className="grid gap-12 md:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border bg-accent">
            <span className="font-display text-6xl font-semibold text-accent-foreground">{profile.initials}</span>
          </div>
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-lg text-muted-foreground">
          <p>
            I'm a Computer Engineering student with hands-on experience in software development, backend engineering, web technologies, IoT, and technical systems.
          </p>
          <p>
            I enjoy taking ideas and real-world problems and turning them into functional, reliable software — from clean, responsive interfaces to well-structured APIs and databases, and the hardware that sometimes sits behind them.
          </p>
          <p className="flex items-center gap-2 text-base"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</p>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with." className="bg-surface">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 60}>
            <div className="h-full rounded-xl border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="text-base font-semibold">{g.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work.">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="group grid gap-8 rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[1fr_1.2fr] md:p-10">
              <div>
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{p.name}</h3>
                <p className="mt-1 text-muted-foreground">{p.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={p.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
                  </Button>
                  {p.demo && (
                    <Button asChild size="sm">
                      <a href={p.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight /></a>
                    </Button>
                  )}
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">{p.description}</p>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="ghost">
          <a href={profile.github} target="_blank" rel="noreferrer">View All Projects <ArrowRight /></a>
        </Button>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & Education" title="Where I've been learning." className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative border-l pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 80} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono text-xs text-primary">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
              <p className="text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-3 text-muted-foreground">{e.description}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120}>
          <div className="rounded-2xl border bg-card p-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-primary">{education.graduation}</p>
            <div className="mt-5 flex flex-wrap gap-2">{education.areas.map((a) => <Tag key={a}>{a}</Tag>)}</div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Approach() {
  return (
    <Section id="approach" eyebrow="Process" title="How I Build">
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {process.map((s, i) => (
          <Reveal key={s.n} delay={i * 70} className="bg-card p-6">
            <span className="font-mono text-sm text-primary">{s.n}</span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    if (!payload.name || !payload.message || !/^\S+@\S+\.\S+$/.test(payload.email)) {
      setStatus("error");
      setError("Please fill in your name, a valid email, and a message.");
      return;
    }
    setStatus("sending");
    try {
      await sendContactMessage(payload);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly.");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 rounded-3xl bg-ink p-8 text-ink-foreground md:grid-cols-2 md:p-14">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Let's Build Something.</h2>
            <p className="mt-5 max-w-md opacity-70">
              Have a project, opportunity, or idea you'd like to discuss? I'd love to hear from you.
            </p>
            <div className="mt-8 space-y-3">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 opacity-80 transition-opacity hover:opacity-100">
                  <Icon className="h-4 w-4" /> {label === "Email" ? profile.email : label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl bg-card p-6 text-card-foreground">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" placeholder="Your name" maxLength={100} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity…" maxLength={2000} />
              </div>
              {status === "error" && <p className="text-sm text-destructive">{error}</p>}
              {status === "sent" && <p className="text-sm text-primary">Thanks! Your message has been sent.</p>}
              <Button type="submit" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : <>Send Message <Send /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">Computer Engineering Student & Full-Stack Developer</p>
        </div>
        <div className="flex gap-5 text-sm text-muted-foreground">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="hover:text-foreground">{label}</a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
