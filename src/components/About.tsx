import SectionHeading, { Reveal } from "./SectionHeading";
import { aboutBlocks } from "@/data/about";
import { philosophy } from "@/data/profile";

const BG: Record<string, string> = {
  purple: "bg-purple",
  yellow: "bg-yellow",
  pink: "bg-pink",
  green: "bg-green",
  paper: "bg-paper",
};

export default function About() {
  return (
    <section id="about" className="px-3 py-14 sm:px-5 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="// ABOUT_ME"
          title="Who I am, what I build"
          sub="Not a mission statement — a working description."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {aboutBlocks.map((b) => (
            <Reveal key={b.label}>
              <article
                className={`nb-card h-full ${BG[b.color]} p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8`}
              >
                <p className="font-mono-ui text-xs font-bold tracking-[0.2em] text-ink/70">
                  [{b.label}]
                </p>
                <h3 className="font-serif-display mt-2 text-2xl font-bold italic sm:text-3xl">
                  {b.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/90">{b.body}</p>
                {b.chips && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.chips.map((c) => (
                      <span
                        key={c}
                        className="nb-chip border-ink bg-paper"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {/* BUILD → SOLVE → DEPLOY → LEARN */}
        <Reveal className="mt-10">
          <div className="nb-panel bg-ink p-6 sm:p-8">
            <ul className="grid gap-4 text-center sm:grid-cols-4">
              {philosophy.map((p, i) => (
                <li key={p.step} className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
                  <span className="font-serif-display text-3xl font-black italic text-yellow sm:text-4xl">
                    {p.step}
                  </span>
                  <span className="font-mono-ui text-xs text-paper/80 sm:text-sm">
                    {p.note}
                  </span>
                  {i < philosophy.length - 1 && (
                    <span aria-hidden className="hidden text-yellow sm:inline">→</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
