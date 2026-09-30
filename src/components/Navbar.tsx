"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const LINKS = [
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
] as const;

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function formatClock(d: Date) {
  const day = d.toLocaleDateString("en-US", { weekday: "long" });
  const date = d.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${day}, ${date} · ${time}`;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const now = useClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center gap-3 rounded-[32px] border-[3px] border-ink bg-purple px-4 py-3 shadow-hard transition-all duration-300 sm:gap-4 sm:px-6 ${
          scrolled ? "py-2 shadow-hard-sm" : "py-3 shadow-hard"
        }`}
      >
        <a
          href="#top"
          className="whitespace-nowrap font-serif text-xl font-black italic tracking-tight text-ink hover:opacity-80 sm:text-2xl"
        >
          PORTFOLIO <span className="hidden 2xl:inline">/ SUDHANSHU</span>
        </a>

        <ul className="ml-auto hidden items-center gap-2 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`inline-block rounded-full border-[3px] border-ink px-4 py-1.5 text-sm font-bold tracking-wide transition-transform duration-100 hover:-translate-y-0.5 ${
                  active === l.href ? "bg-pink text-ink" : "bg-paper hover:bg-yellow"
                }`}
                aria-current={active === l.href ? "true" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          aria-live="polite"
          className="font-mono-ui ml-auto hidden rounded-full border-[3px] border-ink bg-yellow px-3 py-1.5 text-xs font-semibold whitespace-nowrap 2xl:block"
        >
          {now ? formatClock(now) : "\u00A0"}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border-[3px] border-ink bg-paper shadow-hard-xs lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-ink ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-7xl rounded-3xl border-[3px] border-ink bg-purple p-4 shadow-hard lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full border-[3px] border-ink px-4 py-2 text-center text-sm font-bold ${
                    active === l.href ? "bg-pink" : "bg-paper"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono-ui mt-3 text-center text-xs font-semibold text-ink/70">
            {now ? formatClock(now) : ""}
          </p>
          <p className="font-mono-ui mt-1 text-center text-xs text-ink/60">
            {profile.tagline}
          </p>
        </div>
      )}
    </header>
  );
}
