"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll-reveal wrapper for arbitrary children. */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <p className="font-mono-ui mx-auto w-fit rounded-full border-[3px] border-ink bg-purple px-4 py-1 text-xs font-bold tracking-[0.2em] shadow-hard-xs sm:text-sm">
          {kicker}
        </p>
        <h2 className="font-serif-display mt-4 text-4xl font-black italic sm:text-5xl">
          {title}
        </h2>
        {sub && <p className="mt-3 text-base text-ink/75 sm:text-lg">{sub}</p>}
      </div>
    </Reveal>
  );
}
