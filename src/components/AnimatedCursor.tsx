"use client";

import { useEffect, useRef } from "react";

const CURSOR_HOTSPOT = 1;
const TEXT_ENTRY_SELECTOR =
  "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='reset']):not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color'])";

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    document.body.classList.add("has-animated-sword-cursor");

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX - CURSOR_HOTSPOT}px`;
      cursor.style.top = `${event.clientY - CURSOR_HOTSPOT}px`;

      const target = event.target;
      const element = target instanceof Element ? target : null;
      const useNativeCursor = element?.closest(
        `${TEXT_ENTRY_SELECTOR}, :disabled, [aria-disabled='true']`
      );
      cursor.classList.toggle("is-visible", !useNativeCursor);
    };

    const hideCursor = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.body.classList.remove("has-animated-sword-cursor");
    };
  }, []);

  return (
    <div ref={cursorRef} className="animated-sword-cursor" aria-hidden="true">
      <img
        src="/minecraft-enchanted-diamond-sword.webp"
        width={48}
        height={48}
        alt=""
        draggable={false}
      />
    </div>
  );
}