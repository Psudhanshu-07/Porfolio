"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "SUDHANSHU.DEV", style: "title" },
  { text: "INITIALIZING PORTFOLIO...", style: "muted" },
  { text: "", style: "gap" },
  { text: "AI .............. OK", style: "line" },
  { text: "CLOUD ........... OK", style: "line" },
  { text: "DEVOPS .......... OK", style: "line" },
  { text: "PROJECTS ........ OK", style: "line" },
  { text: "PORTFOLIO ....... OK", style: "line" },
] as const;

/**
 * Terminal-style boot loading screen.
 * ~1.6s total, skippable (click / keypress), honours reduced motion.
 */
export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onDone();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const total = 1500;
    const tick = 50;
    const steps = total / tick;

    for (let i = 1; i <= steps; i++) {
      timers.push(
        setTimeout(() => setProgress(Math.round((i / steps) * 100)), i * tick)
      );
    }
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), 120 + i * 180));
    });
    timers.push(setTimeout(() => setReady(true), total + 150));
    timers.push(setTimeout(() => setLeaving(true), total + 550));
    timers.push(setTimeout(onDone, total + 1000));

    const skip = () => {
      timers.forEach(clearTimeout);
      setLeaving(true);
      setTimeout(onDone, 250);
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, [onDone]);

  const blocks = Math.round((progress / 100) * 16);
  const bar = "█".repeat(blocks) + "░".repeat(16 - blocks);

  return (
    <div
      aria-hidden={leaving}
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-400 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-[min(560px,92vw)] rounded-3xl border-[3px] border-ink bg-paper p-6 shadow-hard-lg sm:p-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full border-2 border-ink bg-pink" />
          <span className="h-4 w-4 rounded-full border-2 border-ink bg-yellow" />
          <span className="h-4 w-4 rounded-full border-2 border-ink bg-green" />
          <span className="font-mono-ui ml-auto text-xs font-semibold tracking-wider text-ink/70">
            sudhanshu@dev:~
          </span>
        </div>

        <div className="font-mono-ui min-h-[210px] text-sm sm:text-base">
          {BOOT_LINES.slice(0, ready ? BOOT_LINES.length : visibleLines).map(
            (l, i) => (
              <p
                key={i}
                className={
                  l.style === "title"
                    ? "text-xl font-bold tracking-tight sm:text-2xl"
                    : l.style === "muted"
                      ? "text-ink/60"
                      : ""
                }
              >
                {l.text || "\u00A0"}
              </p>
            )
          )}
          <p className="mt-2 text-ink/80">
            [{bar}] {progress}%
          </p>
          {ready && (
            <p className="mt-2 font-bold">
              &gt; SYSTEM READY
              <span className="cursor-blink">_</span>
            </p>
          )}
        </div>

        <div className="mt-5 h-4 overflow-hidden rounded-full border-[3px] border-ink bg-paper">
          <div
            className="h-full bg-green transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono-ui mt-3 text-center text-xs text-ink/50">
          click anywhere to skip
        </p>
      </div>
    </div>
  );
}
