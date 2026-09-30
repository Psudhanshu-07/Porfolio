"use client";

import { useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

const INFO = [
  { label: "[LOCATION]", value: profile.location, bg: "bg-yellow" },
  { label: "[STATUS]", value: profile.status, bg: "bg-green" },
  { label: "[FOCUS]", value: profile.focus, bg: "bg-blue" },
  { label: "[MISSION]", value: profile.mission, bg: "bg-purple" },
] as const;

/** Subtle pointer tilt — disabled for touch / reduced motion. */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };
  return { ref, onMove, onLeave };
}

export default function ProfileCard() {
  const tilt = useTilt();

  return (
    <div
      ref={tilt.ref}
      onPointerMove={tilt.onMove}
      onPointerLeave={tilt.onLeave}
      className="nb-card animate-floaty bg-paper p-6 sm:p-8 will-change-transform"
    >
      {/* Photo */}
      <div className="relative mx-auto w-fit">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-[4px] border-ink bg-yellow sm:h-48 sm:w-48">
          {/* Replace public/profile-photo.jpeg to update — alt text included */}
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name.display}`}
            fill
            sizes="192px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h1 className="mt-5 text-center font-serif text-4xl font-black italic leading-none tracking-tight sm:text-5xl">
        {profile.name.first}
        <br />
        {profile.name.last}
      </h1>

      <p className="font-mono-ui mx-auto mt-4 w-fit rounded-lg border-[3px] border-ink bg-ink px-4 py-1.5 text-sm font-bold tracking-wider text-paper">
        {profile.role}
      </p>

      <hr className="my-6 border-t-[3px] border-ink/80" />

      <dl className="space-y-3">
        {INFO.map((item) => (
          <div key={item.label} className="flex flex-wrap items-center gap-2">
            <dt
              className={`font-mono-ui rounded-md border-2 border-ink ${item.bg} px-2 py-0.5 text-xs font-bold tracking-wide`}
            >
              {item.label}
            </dt>
            <dd className="font-mono-ui text-sm font-semibold tracking-wide">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="font-mono-ui mt-7 text-center text-xs font-semibold text-ink/60">
        Resume coming soon.
      </p>
    </div>
  );
}
