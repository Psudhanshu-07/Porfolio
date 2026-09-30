"use client";

import { useEffect, useRef, useState } from "react";
import { profile, socials } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

type Line = { text: string; kind: "cmd" | "out" | "blank" | "accent" };

const HELP = [
  "available commands:",
  "  whoami     — who is sudhanshu",
  "  focus      — current technical focus",
  "  projects   — list of products",
  "  skills     — skill summary",
  "  status     — what's happening now",
  "  contact    — how to reach me",
  "  clear      — clear the terminal",
];

function buildResponse(cmd: string): Line[] {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "whoami":
      return [
        { text: profile.name.display, kind: "out" },
        { text: "Software Engineer — student building real products.", kind: "out" },
        { text: profile.mission, kind: "accent" },
      ];
    case "focus":
      return [
        { text: "AI", kind: "out" },
        { text: "Cloud", kind: "out" },
        { text: "DevOps", kind: "out" },
        { text: "Software Engineering", kind: "out" },
      ];
    case "projects":
      return [
        { text: projects.map((p) => p.name).join("   "), kind: "out" },
        { text: "→ scroll to #projects for case studies", kind: "accent" },
      ];
    case "skills":
      return skillGroups.map((g) => ({
        text: `${g.title.toLowerCase()}: ${g.skills.map((s) => s.name.toLowerCase()).join(", ")}`,
        kind: "out" as const,
      }));
    case "status":
      return [
        { text: "LIVE...... KisanKart · Atmosyn", kind: "out" },
        { text: "BUILDING... Autoploy · WeatherGPT", kind: "out" },
        { text: "RANK 1 · CGPA 8.71 — Google Gemini Student Ambassador '26", kind: "accent" },
        { text: profile.availability.replace("🚀 ", ""), kind: "accent" },
      ];
    case "contact":
      return [
        ...(socials.email.endsWith("@example.com")
          ? []
          : [{ text: `email    → ${socials.email}`, kind: "out" as const }]),
        { text: `github   → ${socials.github.replace("https://", "")}`, kind: "out" },
        { text: `linkedin → ${socials.linkedin.replace("https://", "")}`, kind: "out" },
      ];
    case "clear":
      return [];
    case "":
      return [];
    default:
      return [
        { text: `command not found: ${c} — try 'help'`, kind: "accent" },
      ];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { text: "welcome to sudhanshu.dev — type 'help' to get started", kind: "accent" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Animate the welcome line on first view
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cmd: Line = { text: "boot --portfolio", kind: "cmd" };
          const out: Line = {
            text: "sudhanshu.dev v1.0 — systems nominal",
            kind: "out",
          };
          setLines((l) => [...l, cmd, out]);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;
    const echo: Line = { text: cmd, kind: "cmd" };
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([{ text: "cleared. type 'help' for commands", kind: "accent" }]);
    } else {
      setLines((l) => [...l, echo, ...buildResponse(cmd)]);
    }
    if (cmd.trim()) {
      setHistory((h) => [cmd, ...h].slice(0, 30));
    }
    setHistIdx(-1);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      if (next >= 0) {
        setHistIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = histIdx - 1;
      setHistIdx(next);
      setInput(next >= 0 ? history[next] : "");
    }
  };

  return (
    <section
      id="terminal"
      aria-label="Interactive terminal"
      className="px-3 py-10 sm:px-5"
    >
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[28px] border-[4px] border-ink bg-ink shadow-hard-lg">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b-[3px] border-ink bg-purple px-4 py-2.5">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-pink" />
            <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-yellow" />
            <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-green" />
            <span className="font-mono-ui mx-auto pr-10 text-xs font-semibold tracking-widest text-ink sm:text-sm">
              sudhanshu@dev:~
            </span>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            className="font-mono-ui h-72 overflow-y-auto p-4 text-sm text-paper sm:p-6 sm:text-base"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((l, i) => (
              <p
                key={i}
                className={
                  l.kind === "cmd"
                    ? "text-yellow"
                    : l.kind === "accent"
                      ? "text-green"
                      : "text-paper/90"
                }
                aria-hidden={l.kind === "cmd" ? undefined : undefined}
              >
                {l.kind === "cmd" ? `$ ${l.text}` : l.text || "\u00A0"}
              </p>
            ))}

            <form onSubmit={submit} className="mt-1 flex items-center gap-2">
              <label htmlFor="terminal-input" className="sr-only">
                Terminal command
              </label>
              <span className="text-green">$</span>
              <input
                id="terminal-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Type a terminal command"
                className="w-full bg-transparent text-paper caret-yellow outline-none placeholder:text-paper/30"
                placeholder="type a command… (help)"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
