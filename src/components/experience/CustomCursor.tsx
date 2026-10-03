"use client";

import { useEffect, useRef } from "react";

type CursorMode = "default" | "view" | "open" | "start";

const cursorLabels: Record<CursorMode, string> = {
  default: "",
  view: "VIEW",
  open: "OPEN",
  start: "START",
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const targetX = useRef(0);
  const targetY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (isTouchDevice) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    if (!dot || !ring || !label) {
      return;
    }

    const setCursorMode = (mode: CursorMode) => {
      ring.dataset.mode = mode;
      label.textContent = cursorLabels[mode];

      if (mode === "default") {
        ring.classList.remove("cursor-active");
        return;
      }

      ring.classList.add("cursor-active");
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX.current = event.clientX;
      targetY.current = event.clientY;

      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handlePointerEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest<HTMLElement>(
        "[data-cursor], a, button",
      );

      if (!interactive) {
        setCursorMode("default");
        return;
      }

      const customMode = interactive.dataset.cursor as
        | CursorMode
        | undefined;

      if (customMode === "view") {
        setCursorMode("view");
        return;
      }

      if (customMode === "open") {
        setCursorMode("open");
        return;
      }

      if (customMode === "start") {
        setCursorMode("start");
        return;
      }

      setCursorMode("open");
    };

    const render = () => {
      currentX.current +=
        (targetX.current - currentX.current) * 0.16;

      currentY.current +=
        (targetY.current - currentY.current) * 0.16;

      dot.style.transform = `translate3d(${targetX.current}px, ${targetY.current}px, 0) translate(-50%, -50%)`;

      ring.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%)`;

      animationFrame.current = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerenter", handlePointerEnter);
    document.addEventListener("pointerleave", handlePointerLeave);

    render();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerenter", handlePointerEnter);
      document.removeEventListener("pointerleave", handlePointerLeave);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pixelforge-cursor-dot pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)] h-1.5 w-1.5 rounded-full bg-[var(--foreground)] opacity-0 mix-blend-difference transition-opacity duration-200"
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        data-mode="default"
        className="pixelforge-cursor-ring pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)] flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(244,241,234,0.32)] bg-transparent opacity-0 mix-blend-difference transition-[width,height,border-color,background-color,opacity] duration-300 ease-[var(--ease-standard)]"
      >
        <span
          ref={labelRef}
          className="font-[var(--font-body)] text-[7px] font-medium tracking-[0.12em] text-[var(--foreground)] opacity-0 transition-opacity duration-200"
        />
      </div>
    </>
  );
}