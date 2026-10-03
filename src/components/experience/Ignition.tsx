"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Ignition() {
  const ignitionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ignitionRef.current;

    if (!section) {
      return;
    }

    const safetyTimer = window.setTimeout(() => {
      section.style.pointerEvents = "none";
      section.style.visibility = "hidden";
    }, 5200);

    return () => {
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <section
      ref={ignitionRef}
      className="pixelforge-ignition fixed inset-0 z-[var(--z-overlay)] flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
      aria-label="PixelForge introduction"
    >
      {/* Amber atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.075)_0%,rgba(255,122,24,0.025)_32%,transparent_70%)]"
      />

      {/* Violet atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.065)_0%,transparent_70%)]"
      />

      {/* Digital grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(244,241,234,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(244,241,234,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Cinematic vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(7,8,12,0.78)_100%)]"
      />

      {/* PixelForge identity */}
      <div className="pixelforge-identity relative z-10 flex w-full flex-col items-center justify-center gap-6 px-6 text-center">
        {/* PixelForge logo */}
        <div className="pixelforge-logo flex items-center justify-center">
          <Image
            src="/pixelforge-mark.png"
            alt="PixelForge"
            width={150}
            height={150}
            priority
            className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
          />
        </div>

        {/* Wordmark */}
        <h1 className="pixelforge-brand font-[var(--font-display)] text-5xl font-medium leading-none tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
          PixelForge
        </h1>

        {/* Tagline */}
        <p className="pixelforge-tagline text-[9px] uppercase tracking-[0.34em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.4em]">
  Where Design Meets Technology
</p>
      </div>
    </section>
  );
}