"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import { heroIntro, profile } from "@/data/profile";

const BG: Record<string, string> = {
  purple: "bg-purple",
  pink: "bg-pink",
  green: "bg-green",
  paper: "bg-paper",
  yellow: "bg-yellow",
};

/** Decorative stars that shift slightly with the mouse. */
function useMouseShift() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return ref;
}

export default function Hero() {
  const decor = useMouseShift();
  const [highlightIdx, setHighlightIdx] = useState(0);

  // Gentle cycling emphasis on the highlight pills
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(
      () => setHighlightIdx((i) => (i + 1) % heroIntro.highlights.length),
      2200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative px-3 pb-10 pt-6 sm:px-5 sm:pt-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[380px_1fr] lg:gap-10">
        <ProfileCard />

        <div className="relative">
          {/* Decorative stars */}
          <div
            ref={decor}
            aria-hidden
            className="pointer-events-none absolute -top-8 right-6 z-10 text-4xl transition-transform duration-300 ease-out"
          >
            ✦ <span className="ml-6 text-2xl">✦</span>
          </div>

          <div className="nb-panel relative flex h-full flex-col bg-yellow p-6 sm:p-10">
            <h2 className="font-serif-display text-4xl font-black italic sm:text-5xl lg:text-6xl">
              {heroIntro.greeting}
            </h2>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              {heroIntro.lines[0]}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
              {heroIntro.lines[1]}
            </p>

            {/* Highlight pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {heroIntro.highlights.map((h, i) => (
                <span
                  key={h.text}
                  className={`rounded-xl border-[3px] border-ink ${BG[h.bg]} px-4 py-2 text-sm font-black tracking-wide shadow-hard-xs transition-transform duration-200 sm:text-base ${
                    highlightIdx === i ? "-translate-y-1 rotate-[-1deg]" : ""
                  }`}
                >
                  {h.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="nb-btn bg-ink text-paper">
                VIEW_PROJECTS <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="nb-btn bg-pink">
                CONTACT_ME <span aria-hidden>✉</span>
              </a>
            </div>

            {/* Status card */}
            <div className="mt-8 w-fit rounded-2xl border-[3px] border-ink bg-paper px-5 py-3 shadow-hard-sm">
              <p className="flex items-center gap-2 text-base font-bold">
                <span
                  className="inline-block h-3 w-3 rounded-full border-2 border-ink bg-green"
                  aria-hidden
                />
                {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
