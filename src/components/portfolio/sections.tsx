import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, X, FileText, Phone, CheckCircle2, GraduationCap, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, navLinks, skillGroups, projects, experience, education } from "@/lib/portfolio-data";
import { Reveal, Section, Tag, GithubIcon, LinkedinIcon } from "./ui";
import profilePhoto from "@/assets/profile.jpg.asset.json";
import { sendContactMessage } from "@/lib/contact";

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: ({ className }: { className?: string }) => <Mail className={className} /> },
];

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: ({ className }: { className?: string }) => <Mail className={className} />, external: false },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: ({ className }: { className?: string }) => <Phone className={className} />, external: false },
  { label: "LinkedIn", value: profile.name, href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, Icon: GithubIcon, external: true },
];

export function Intro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) { setShow(false); return; }
    sessionStorage.setItem("intro-seen", "1");
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div aria-hidden className="intro-overlay pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-background px-5 text-center">
      <span className="overflow-hidden"><span className="intro-line block font-mono text-xs tracking-[0.35em] text-muted-foreground md:text-sm">JAYSON R. TRINIDAD</span></span>
      <span className="overflow-hidden"><span className="intro-line block text-3xl font-semibold tracking-tight md:text-6xl" style={{ animationDelay: "250ms" }}>BUILDING DIGITAL <span className="text-primary">EXPERIENCES.</span></span></span>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          {profile.name}<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> Resume</a>
          </Button>
        </div>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-lg hover:bg-muted">
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> View Resume</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <section id="top" ref={ref} onMouseMove={onMove} className="relative -mt-16 flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: "radial-gradient(420px circle at var(--mx, 70%) var(--my, 40%), color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" /> Open to junior roles only
          </p>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{profile.title}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-5xl text-[2.6rem] font-semibold leading-[0.98] sm:text-6xl md:text-[5.5rem]">
            I turn ideas into functional <span className="text-primary">digital experiences.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Computer Engineering graduate focused on building thoughtful web applications, backend systems, and practical technology solutions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full"><a href="#projects">Explore My Work <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><a href="#contact">Let's Connect</a></Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full"><a href={profile.resume} target="_blank" rel="noreferrer"><FileText /> View Resume</a></Button>
            <span className="mx-2 hidden h-6 w-px bg-border sm:block" />
            {socials.filter((s) => s.label !== "Email").map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground">
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border pt-2"><span className="scroll-dot h-1.5 w-1 rounded-full bg-primary" /></span>
      </a>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A little about how I build.">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border bg-card">
              <img src={profilePhoto.url} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> {profile.location}</span>
              <span>CpE / 2026</span>
            </div>
          </div>
        </Reveal>
        <div className="space-y-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
          <Reveal delay={100}>
            <p><span className="text-foreground">I'm a Computer Engineering graduate who enjoys turning real-world requirements into practical software solutions.</span> My experience spans full-stack web development, backend systems, database integration, cybersecurity exposure, and IoT projects.</p>
          </Reveal>
          <Reveal delay={200}>
            <p>I enjoy solving problems, learning new technologies, and building applications that are functional, reliable, and easy to use.</p>
          </Reveal>
          <Reveal delay={300}>
            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border bg-border text-base">
              {[["Focus", "Full-Stack"], ["Also", "IoT & Security"], ["Status", "Graduate"]].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm text-foreground md:text-base">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Toolkit" title="Tools I use to bring ideas to life.">
      <div className="border-t">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 60}>
            <div className="group grid gap-4 border-b py-7 transition-colors md:grid-cols-[60px_240px_1fr] md:items-center">
              <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">0{i + 1}</span>
              <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">{g.name}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />;
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Selected Work" title="Some things I've built.">
      <div className="space-y-10 md:space-y-16">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <article className={`group grid gap-8 rounded-3xl border bg-card p-5 transition-colors duration-500 hover:border-primary/40 md:grid-cols-2 md:gap-12 md:p-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-background">
                <div className="relative h-full transition-transform duration-700 group-hover:scale-[1.04]">
                  <ProjectVisual src={p.image} alt={`${p.name} screenshot`} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{p.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.tagline}</p>
                <p className="mt-5 text-muted-foreground">{p.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><span className="mt-2 h-px w-3 shrink-0 bg-primary" />{f}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={p.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
                  </Button>
                  {p.demo && (
                    <Button asChild size="sm" className="rounded-full">
                      <a href={p.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight /></a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="ghost" className="rounded-full">
          <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a>
        </Button>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 / Experience" title="Where I've contributed.">
      <ol className="relative border-l md:ml-[180px]">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 100} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            <p className="font-mono text-xs uppercase tracking-wider text-primary md:absolute md:-left-[180px] md:top-1.5 md:w-[150px] md:text-right md:text-muted-foreground">{e.period}</p>
            <h3 className="mt-2 text-2xl font-semibold md:mt-0">{e.org}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
            <ul className="mt-5 max-w-2xl space-y-2.5">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2.5 h-px w-3 shrink-0 bg-primary/70" />{b}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="05 / Education" title="Where I learned the fundamentals.">
      <Reveal>
        <div className="grid gap-6 border-y py-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-2xl font-semibold md:text-4xl">{education.degree}</h3>
            <p className="mt-2 text-muted-foreground">{education.school}</p>
          </div>
          <p className="font-mono text-sm text-primary">{education.graduation}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">{education.areas.map((a) => <Tag key={a}>{a}</Tag>)}</div>
      </Reveal>
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
    <section id="contact" className="border-t py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-primary">06 / Contact</p>
            <span className="draw-line h-px flex-1 bg-border" />
          </div>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl">
            Have something in mind? <span className="text-primary">Let's build it.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm open to junior-level opportunities and conversations about software development and technology.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t">
            {contactItems.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={i * 80}>
                <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className="group flex items-center gap-4 border-b py-5 transition-colors hover:text-primary">
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="min-w-0 flex-1 truncate">{value}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border bg-card p-6 md:p-8">
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
              {status === "sent" && <p className="text-sm text-primary">Your email app should open with your message ready to send.</p>}
              <Button type="submit" className="w-full rounded-full" disabled={status === "sending"}>
                {status === "sending" ? "Opening…" : <>Send Message <Send /></>}
              </Button>
              <p className="text-center text-xs text-muted-foreground">Opens your email app with the message prefilled.</p>
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
        <p className="text-sm text-muted-foreground">Designed and built by <span className="text-foreground">{profile.name}</span>.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} {...(href.startsWith("mailto") ? {} : { target: "_blank", rel: "noreferrer" })} className="nav-link hover:text-foreground">{label}</a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">© 2026</p>
      </div>
    </footer>
  );
}
