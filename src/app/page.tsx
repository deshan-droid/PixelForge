"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Ignition from "@/components/experience/Ignition";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import About from "@/components/sections/About";
import Technology from "@/components/sections/Technology";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/experience/CustomCursor";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const heroRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const field = fieldRef.current;
    const core = coreRef.current;

    if (!hero || !field || !core) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!hasFinePointer) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = heroRect.current;

      if (!rect || rect.width === 0 || rect.height === 0) {
        return;
      }

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;

      const fieldX = normalizedX * 16;
      const fieldY = normalizedY * 16;

      const coreX = normalizedX * 8;
      const coreY = normalizedY * 8;

      field.style.transform = `translate3d(${fieldX}px, ${fieldY}px, 0)`;
      core.style.transform = `translate3d(${coreX}px, ${coreY}px, 0)`;
    };

    const handlePointerLeave = () => {
      field.style.transform = "translate3d(0, 0, 0)";
      core.style.transform = "translate3d(0, 0, 0)";
    };

    const updateHeroRect = () => {
      heroRect.current = hero.getBoundingClientRect();
    };

    updateHeroRect();

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", updateHeroRect, { passive: true });

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", updateHeroRect);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* =========================================================
            PIXELFORGE CINEMATIC PRELOADER
            The homepage renders underneath immediately.
            Ignition only controls the visual introduction.
        ========================================================= */}
        <Ignition />

        {/* =========================================================
            GLOBAL NAVIGATION
        ========================================================= */}
        <Navbar />

        {/* =========================================================
            GLOBAL DESKTOP CURSOR
        ========================================================= */}
        <CustomCursor />

        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          ref={heroRef}
          className="relative flex min-h-dvh items-center overflow-hidden px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-12"
          aria-label="PixelForge hero"
        >
          {/* Atmospheric background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-32 top-[12%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.11)_0%,transparent_68%)] blur-3xl" />

            <div className="absolute -right-32 bottom-[4%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.10)_0%,transparent_68%)] blur-3xl" />

            <div className="absolute left-[45%] top-[45%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(82,229,211,0.035)_0%,transparent_70%)] blur-3xl" />
          </div>

          {/* Digital field */}
          <div
            ref={fieldRef}
            aria-hidden="true"
            className="pf-m-hero-drift pointer-events-none absolute inset-[-24px] transition-transform duration-1000 ease-[var(--ease-standard)] will-change-transform"
          >
            {/* Architectural grid */}
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    rgba(244,241,234,0.55) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(244,241,234,0.55) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "80px 80px",
                maskImage:
                  "radial-gradient(ellipse at center, black 10%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 10%, transparent 72%)",
              }}
            />

            {/* Secondary fine grid */}
            <div
              className="absolute inset-0 opacity-[0.018]"
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
                backgroundSize: "20px 20px",
                maskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 62%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 62%)",
              }}
            />

            {/* Main horizontal construction line */}
            <div className="absolute left-0 top-[51%] h-px w-full bg-gradient-to-r from-transparent via-[rgba(255,122,24,0.22)] to-transparent" />

            {/* Secondary horizontal line */}
            <div className="absolute left-0 top-[51.5%] h-px w-full bg-gradient-to-r from-transparent via-[rgba(244,241,234,0.04)] to-transparent" />

            {/* Main vertical construction line */}
            <div className="absolute left-[61%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(124,92,255,0.18)] to-transparent" />

            {/* Secondary vertical line */}
            <div className="absolute left-[61.2%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(244,241,234,0.035)] to-transparent" />

            {/* Technical corner markers */}
            <span className="absolute left-[8%] top-[24%] h-3 w-3 border-l border-t border-[rgba(244,241,234,0.12)]" />

            <span className="absolute right-[10%] top-[19%] h-3 w-3 border-r border-t border-[rgba(244,241,234,0.10)]" />

            <span className="absolute bottom-[17%] left-[20%] h-3 w-3 border-b border-l border-[rgba(244,241,234,0.08)]" />

            <span className="absolute bottom-[14%] right-[22%] h-3 w-3 border-b border-r border-[rgba(244,241,234,0.08)]" />

            {/* Signal nodes */}
            <span className="absolute left-[14%] top-[30%] h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] shadow-[0_0_18px_rgba(255,122,24,0.85)]" />

            <span className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-[var(--accent-violet)] shadow-[0_0_18px_rgba(124,92,255,0.8)]" />

            <span className="absolute bottom-[23%] left-[29%] h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_18px_rgba(82,229,211,0.8)]" />

            <span className="absolute bottom-[17%] right-[30%] h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] shadow-[0_0_18px_rgba(255,122,24,0.75)]" />

            {/* Small data labels */}
            <span className="absolute left-[9%] top-[27%] hidden text-[8px] uppercase tracking-[0.25em] text-[rgba(244,241,234,0.18)] lg:block">
              FIELD_01
            </span>

            <span className="absolute right-[11%] top-[22%] hidden text-[8px] uppercase tracking-[0.25em] text-[rgba(244,241,234,0.16)] lg:block">
              SIGNAL_02
            </span>

            <span className="absolute bottom-[20%] right-[17%] hidden text-[8px] uppercase tracking-[0.25em] text-[rgba(244,241,234,0.14)] lg:block">
              SYSTEM_READY
            </span>
          </div>

          {/* Central visual Forge core */}
          <div
            ref={coreRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-[61%] top-1/2 hidden h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-[var(--ease-standard)] lg:block"
          >
            <div className="absolute inset-[18%] rounded-full border border-[rgba(244,241,234,0.055)]" />

            <div className="absolute inset-[28%] rounded-full border border-[rgba(255,122,24,0.08)]" />

            <div className="absolute inset-[38%] rounded-full border border-[rgba(124,92,255,0.12)]" />

            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-amber)] shadow-[0_0_24px_rgba(255,122,24,0.9)]" />

            <div className="absolute left-1/2 top-[18%] h-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(255,122,24,0.4)] to-transparent" />

            <div className="absolute bottom-[18%] left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-t from-transparent via-[rgba(124,92,255,0.35)] to-transparent" />

            <div className="absolute left-[18%] top-1/2 h-px w-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(82,229,211,0.35)] to-transparent" />

            <div className="absolute right-[18%] top-1/2 h-px w-8 -translate-y-1/2 bg-gradient-to-l from-transparent via-[rgba(255,122,24,0.35)] to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col">
            {/* Eyebrow */}
            <div
              className="pf-m-hero-rise mb-8 flex items-center gap-3 sm:mb-10"
              style={{ animationDelay: "4.65s" }}
            >
              <span className="h-px w-8 bg-[var(--accent-amber)]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)] sm:text-xs">
                Digital Studio / Sri Lanka / Worldwide
              </p>
            </div>

            {/* Main heading */}
            <h1
              className="pf-m-hero-rise max-w-7xl font-[var(--font-display)] text-[clamp(3rem,9vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.065em]"
              style={{ animationDelay: "4.72s" }}
            >
              WE BUILD
              <br />
              <span className="text-[var(--muted)]">DIGITAL</span>
              <br />
              EXPERIENCES
              <span className="text-[var(--accent-amber)]">.</span>
            </h1>

            {/* Supporting content */}
            <div
              className="pf-m-hero-rise mt-10 max-w-2xl sm:mt-12"
              style={{ animationDelay: "4.85s" }}
            >
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                PixelForge creates websites, web applications, and digital
                solutions designed around your business, your audience, and
                what you want to achieve.
              </p>

              <div className="mt-8">
                <a
                  href="#work"
                  data-cursor="view"
                  className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-500 hover:border-[var(--accent-violet)] hover:text-[var(--accent-violet)] hover:shadow-[0_0_35px_rgba(124,92,255,0.12)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(124,92,255,0.08),transparent)] transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">View Our Work</span>

                  <span
                    aria-hidden="true"
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom metadata */}
            <div
              className="pf-m-hero-rise mt-16 flex items-center justify-between border-t border-[var(--border)] pt-5 text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)] sm:mt-20"
              style={{ animationDelay: "4.98s" }}
            >
              <span>01 / Experience</span>

              <span className="hidden sm:block">
                Design × Engineering × Motion
              </span>

              <span>Scroll to explore ↓</span>
            </div>
          </div>

          {/* Bottom edge fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[var(--background)] to-transparent"
          />
        </section>

        {/* =========================================================
            SELECTED WORK
        ========================================================= */}
        <SelectedWork />

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <Services />

        {/* =========================================================
            PACKAGES
        ========================================================= */}
        <Packages />

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <About />

        {/* =========================================================
            TECHNOLOGY
        ========================================================= */}
        <Technology />

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <Contact />
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </>
  );
}