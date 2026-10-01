"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    document.body.classList.add("has-custom-cursor");
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let angle = 0;
    let hasMoved = false;
    let animationFrame = 0;

    const animate = () => {
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;
      currentX += deltaX * 0.28;
      currentY += deltaY * 0.28;

      if (Math.abs(deltaX) + Math.abs(deltaY) > 0.5) {
        angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;
      }

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${angle}deg)`;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        hasMoved = true;
      }

      const target = event.target;
      const element = target instanceof Element ? target : null;
      const textEntry = element?.closest(
        "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='reset']):not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color'])"
      );
      const interactive = element?.closest(
        "a, button, select, [role='button'], input[type='button'], input[type='submit'], label"
      );

      cursor.classList.toggle("is-visible", !textEntry);
      cursor.classList.toggle("is-interactive", Boolean(interactive) && !textEntry);
    };

    const handlePointerDown = () => cursor.classList.add("is-pressed");
    const handlePointerUp = () => cursor.classList.remove("is-pressed");
    const handleLeave = () => cursor.classList.remove("is-visible");

    animationFrame = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("blur", handleLeave);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", handleLeave);
      document.removeEventListener("mouseleave", handleLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={cursorRef} className="portfolio-cursor" aria-hidden="true">
      <svg viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="portfolio-cursor-shape"
          d="M36 4 29.4 17.9c-2 4.3-4.7 5.5-9 2.9L7 13.6l7.1 14.8c2.3 4.6 1.9 7.4-1.8 11L5 46l17.1-2.4c4.9-.7 7.5.9 10.3 5.2L36 55l3.6-6.2c2.8-4.3 5.4-5.9 10.3-5.2L67 46l-7.3-6.6c-3.7-3.6-4.1-6.4-1.8-11L65 13.6l-13.4 7.2c-4.3 2.6-7 1.4-9-2.9L36 4Z"
          fill="#17191D"
          stroke="#FFFDF7"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="m36 10-1.2 31M13 19l13 7m33-7-13 7M17 40l12-1m26 1-12-1"
          stroke="#8F969E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity=".8"
        />
      </svg>
    </div>
  );
}