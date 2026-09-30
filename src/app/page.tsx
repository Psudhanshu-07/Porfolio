import Link from "next/link";
import About from "@/components/About";
import BootGate from "@/components/BootGate";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionHeading, { Reveal } from "@/components/SectionHeading";
import Terminal from "@/components/Terminal";
import { blogPosts } from "@/data/blog";
import { academics } from "@/data/academics";
import { achievements } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { profile, socials } from "@/data/profile";
import { skillGroups } from "@/data/skills";

const COLORS: Record<string, string> = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  pink: "bg-pink",
  green: "bg-green",
  paper: "bg-paper",
  blue: "bg-blue",
};

export default function Home() {
  const hasRealEmail = !socials.email.endsWith("@example.com");
  const achievementGroups = [
    {
      title: "Recognition & milestones",
      items: achievements.filter((item) => item.group === "RECOGNITION"),
    },
    {
      title: "Volunteering",
      items: achievements.filter((item) => item.group === "VOLUNTEERING"),
    },
  ];

  return (
    <BootGate>
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* ACADEMICS — on home page as requested */}
        <section id="academics" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// ACADEMICS"
              title="Numbers I don't have to exaggerate"
              sub="First year, done properly — while shipping products."
            />
            <Reveal>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border-[5px] border-ink bg-paper shadow-hard-lg">
                {/* ID-card header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-[4px] border-ink bg-purple px-6 py-4">
                  <p className="font-mono-ui text-sm font-bold tracking-[0.25em]">
                    ACADEMIC_ID :: SUDHANSHU_PANDEY
                  </p>
                  <span className="font-mono-ui rounded-full border-[3px] border-ink bg-yellow px-3 py-1 text-xs font-black">
                    {academics.rank}
                  </span>
                </div>

                <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_1.2fr]">
                  <div>
                    <p className="font-mono-ui text-xs font-bold tracking-widest text-ink/60">
                      {academics.year.toUpperCase()} — VERIFIED PERFORMANCE
                    </p>
                    <p className="font-serif-display mt-4 text-6xl font-black italic leading-none sm:text-7xl">
                      {academics.cgpa}
                      <span className="text-3xl text-ink/60">{academics.cgpaScale}</span>
                    </p>
                    <p className="font-mono-ui mt-2 text-sm font-bold">
                      CGPA — FIRST YEAR
                    </p>
                    <p className="mt-4 text-base font-semibold leading-relaxed">
                      {academics.rankDetail}
                    </p>
                    <p className="mt-2 text-sm text-ink/70">{academics.note}</p>
                  </div>

                  <div className="flex flex-col justify-center gap-5">
                    {academics.semesters.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-2xl border-[3px] border-ink bg-paper p-5 shadow-hard-sm"
                      >
                        <div className="flex items-baseline justify-between">
                          <p className="font-mono-ui text-sm font-black tracking-widest">
                            {s.name}
                          </p>
                          <p className="font-serif-display text-4xl font-black italic">
                            {s.sgpa}
                          </p>
                        </div>
                        <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-ink bg-paper">
                          <div
                            className="h-full bg-green"
                            style={{ width: `${parseFloat(s.sgpa) * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <p className="font-mono-ui text-xs leading-relaxed text-ink/60">
                      SGPA 8.47 + 8.95 → CGPA 8.71/10 · verified
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// EXPERIENCE"
              title="What I've been building"
              sub="Roles, programs and independent work — all real, all current."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {experiences.map((item) => (
                <Reveal key={`${item.org}-${item.period}`}>
                  <article
                    className={`nb-card h-full ${COLORS[item.color]} p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8`}
                  >
                    <p className="font-mono-ui text-xs font-bold tracking-widest text-ink/70">
                      {item.period} / {item.org}
                    </p>
                    <h3 className="font-serif-display mt-3 text-2xl font-bold italic sm:text-3xl">
                      {item.title}
                    </h3>
                    <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t-2 border-ink/20 pt-4 font-semibold">
                      {item.outcome}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span className="nb-chip border-ink bg-paper" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// SELECTED_PROJECTS"
              title="Ideas made tangible"
              sub="Live products and active builds — repos and demos linked where they exist."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Reveal key={project.id}>
                  <article
                    className={`nb-card group h-full ${COLORS[project.color]} p-6 transition-transform duration-200 hover:-translate-y-1.5 sm:p-8`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono-ui text-xs font-bold tracking-widest text-ink/65">
                          PROJECT_{project.number}
                        </p>
                        <h3 className="font-serif-display mt-2 text-3xl font-black italic">
                          {project.name}
                        </h3>
                      </div>
                      <span className="font-mono-ui rounded-full border-[3px] border-ink bg-paper px-3 py-1 text-xs font-black">
                        {project.status === "LIVE"
                          ? "● LIVE"
                          : project.status === "BUILDING"
                            ? "◐ BUILDING"
                            : "○ PLANNED"}
                      </span>
                    </div>
                    <p className="mt-3 text-lg font-semibold">{project.tagline}</p>
                    <p className="mt-5 leading-relaxed">
                      <strong>Problem:</strong> {project.problem}
                    </p>
                    <p className="mt-3 leading-relaxed">
                      <strong>Approach:</strong> {project.solution}
                    </p>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="nb-chip border-ink bg-paper">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t-2 border-ink/20 pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="nb-btn bg-ink text-sm text-paper"
                      >
                        GITHUB <span aria-hidden>↗</span>
                      </a>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="nb-btn bg-paper text-sm"
                        >
                          LIVE DEMO <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        <span className="nb-chip border-ink bg-paper text-ink/60">
                          DEMO SOON
                        </span>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// TOOLKIT"
              title="Skills, in context"
              sub="No invented percentages — an honest snapshot of what I use and what I'm learning."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <Reveal key={group.title}>
                  <article
                    className={`nb-card h-full ${COLORS[group.accent]} p-6 transition-transform duration-200 hover:-translate-y-1`}
                  >
                    <p className="font-mono-ui text-xs font-bold tracking-widest">
                      {group.title}
                    </p>
                    <p className="mt-2 text-sm text-ink/70">{group.blurb}</p>
                    <ul className="mt-5 space-y-3">
                      {group.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/20 pb-2"
                        >
                          <span className="font-semibold">{skill.name}</span>
                          <span className="font-mono-ui text-[0.65rem] font-bold tracking-wide">
                            {skill.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// ACHIEVEMENTS"
              title="Collected so far"
              sub="Only what's real and verifiable."
            />
            <div className="space-y-10">
              {achievementGroups.map((group) => (
                <section key={group.title} aria-label={group.title}>
                  <h3 className="font-serif-display mb-5 text-2xl font-bold italic sm:text-3xl">
                    {group.title}
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    {group.items.map((a) => (
                      <Reveal key={a.title}>
                        <article
                          className={`nb-card h-full ${COLORS[a.color]} p-6 transition-transform duration-200 hover:-translate-y-1 hover:rotate-[-0.5deg] sm:p-8`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="font-mono-ui rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-black">
                              {a.tag}
                            </span>
                            {a.date && (
                              <span className="font-mono-ui text-xs font-bold text-ink/60">
                                {a.date}
                              </span>
                            )}
                          </div>
                          <h4 className="font-serif-display mt-4 text-2xl font-bold italic">
                            {a.title}
                          </h4>
                          <p className="mt-3 leading-relaxed">{a.detail}</p>
                          <p className="font-mono-ui mt-4 text-xs font-bold tracking-widest text-ink/60">
                            {a.org}
                          </p>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              kicker="// NOTES_FROM_THE_BUILD"
              title="Writing & milestones"
              sub="Real posts and work-in-progress drafts from the build log."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {blogPosts.map((post) => {
                const readable = !post.draft && !!post.content;
                const Card = (
                  <article
                    className={`nb-card h-full ${COLORS[post.color]} p-6 transition-transform duration-200 ${readable ? "group-hover:-translate-y-1.5" : ""}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono-ui rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 text-xs font-black">
                        {post.category}
                      </span>
                      {post.highlight && (
                        <span className="font-mono-ui rounded-full border-2 border-ink bg-ink px-2.5 py-0.5 text-xs font-black text-yellow">
                          {post.highlight}
                        </span>
                      )}
                      <span className="font-mono-ui ml-auto text-xs text-ink/60">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif-display mt-4 text-2xl font-bold italic">
                      {post.title}
                    </h3>
                    <p className="mt-3 leading-relaxed">{post.excerpt}</p>
                    <p className="font-mono-ui mt-5 border-t-2 border-ink/15 pt-3 text-xs text-ink/60">
                      {post.date} ·{" "}
                      {readable ? (
                        <span className="font-bold text-ink group-hover:underline">
                          READ_FULL_POST →
                        </span>
                      ) : (
                        <span className="font-bold text-ink/70">DRAFT — COMING SOON</span>
                      )}
                    </p>
                  </article>
                );
                return (
                  <Reveal key={post.slug}>
                    {readable ? (
                      <Link href={`/blog/${post.slug}`} className="group block">
                        {Card}
                      </Link>
                    ) : (
                      Card
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TERMINAL */}
        <div className="px-3 pb-4 pt-14 sm:px-5 sm:pt-20">
          <SectionHeading
            kicker="// INTERACTIVE"
            title="A little command line"
            sub="Try 'help' — the site answers back."
          />
          <Terminal />
        </div>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28 px-3 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              kicker="// CONTACT"
              title="Let's build something useful"
              sub="Open to opportunities, internships and thoughtful collaborations."
            />
            <Reveal>
              <div className="nb-panel bg-pink p-6 text-center sm:p-10">
                <p className="font-serif-display text-2xl font-bold italic sm:text-4xl">
                  Have a project, opportunity or idea?
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Let's talk. I reply fast.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-4">
                  {hasRealEmail && (
                    <a className="nb-btn bg-paper" href={`mailto:${socials.email}`}>
                      EMAIL <span aria-hidden>↗</span>
                    </a>
                  )}
                  <a
                    className="nb-btn bg-ink text-paper"
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB <span aria-hidden>↗</span>
                  </a>
                  <a
                    className="nb-btn bg-yellow"
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LINKEDIN <span aria-hidden>↗</span>
                  </a>
                </div>
                <p className="font-mono-ui mt-6 text-xs text-ink/60">
                  typically replies within 24 hours
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-ink bg-paper px-5 py-8 text-center">
        <p className="font-serif-display text-xl font-black italic">
          {profile.name.display}
        </p>
        <p className="font-mono-ui mt-2 text-xs font-semibold tracking-wide text-ink/70">
          {profile.tagline}
        </p>
        <p className="font-mono-ui mt-4 text-xs text-ink/50">
          © {new Date().getFullYear()} · BUILT WITH CODE + CURIOSITY
        </p>
      </footer>
    </BootGate>
  );
}
