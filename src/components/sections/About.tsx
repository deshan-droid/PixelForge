"use client";

import { useState } from "react";
import Reveal from "@/components/experience/Reveal";

type Accent = "amber" | "violet" | "cyan";

interface Principle {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  accent: Accent;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Client-Focused",
    shortTitle: "Client",
    description:
      "We listen, understand, and build around what you actually need — not what a template says you need.",
    accent: "amber",
  },
  {
    number: "02",
    title: "Design-Driven",
    shortTitle: "Design",
    description:
      "Clean, modern interfaces and thoughtful interactions that make the product feel intentional.",
    accent: "violet",
  },
  {
    number: "03",
    title: "Engineering-Led",
    shortTitle: "Engineering",
    description:
      "Reliable technology, clean development, and a foundation designed with room to grow.",
    accent: "cyan",
  },
];

const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    background: string;
    dot: string;
    glow: string;
  }
> = {
  amber: {
    text: "text-[var(--accent-amber)]",
    border: "border-[rgba(255,122,24,0.38)]",
    background: "bg-[rgba(255,122,24,0.045)]",
    dot: "bg-[var(--accent-amber)]",
    glow: "shadow-[0_0_70px_rgba(255,122,24,0.08)]",
  },
  violet: {
    text: "text-[var(--accent-violet)]",
    border: "border-[rgba(124,92,255,0.38)]",
    background: "bg-[rgba(124,92,255,0.045)]",
    dot: "bg-[var(--accent-violet)]",
    glow: "shadow-[0_0_70px_rgba(124,92,255,0.08)]",
  },
  cyan: {
    text: "text-[var(--accent-cyan)]",
    border: "border-[rgba(82,229,211,0.38)]",
    background: "bg-[rgba(82,229,211,0.045)]",
    dot: "bg-[var(--accent-cyan)]",
    glow: "shadow-[0_0_70px_rgba(82,229,211,0.08)]",
  },
};

export default function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const active = principles[activePrinciple];
  const accent = accentStyles[active.accent];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      aria-labelledby="about-heading"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-[12%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.05)_0%,transparent_70%)] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -right-48 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.055)_0%,transparent_70%)] blur-[120px]"
      />

      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(244,241,234,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244,241,234,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end lg:gap-16">
          <Reveal duration={0.8}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-cyan)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--muted)]">
                  05 / About
                </span>
              </div>

              <p className="max-w-xs text-[10px] uppercase leading-7 tracking-[0.22em] text-[var(--muted-dark)]">
                Ideas / Design / Technology / Impact
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} duration={1} y={55}>
            <h2
              id="about-heading"
              className="max-w-6xl font-[var(--font-display)] text-[clamp(3.2rem,6.8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.065em]"
            >
              PURPOSE.
              <br />
              <span className="text-[var(--foreground)]">
                ENGINEERED WITH
              </span>
              <br />
              <span className="text-[var(--accent-cyan)]">INTENT.</span>
            </h2>
          </Reveal>
        </div>

        {/* Divider */}
        <Reveal delay={0.18} duration={0.8} y={20}>
          <div className="mt-16 h-px w-full bg-[var(--border)] lg:mt-20" />
        </Reveal>

        {/* Studio statement */}
        <div className="grid lg:grid-cols-[0.55fr_1.45fr]">
          {/* Editorial side */}
          <Reveal duration={0.9} y={45}>
            <div className="border-b border-[var(--border)] py-10 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-amber)]" />

                <span className="text-[9px] uppercase tracking-[0.26em] text-[var(--muted)]">
                  The Studio
                </span>
              </div>

              <div className="mt-12">
                <p className="max-w-sm font-[var(--font-display)] text-3xl font-medium leading-[0.94] tracking-[-0.05em] sm:text-4xl">
                  MORE THAN
                  <br />
                  <span className="text-[var(--muted)]">WEBSITES.</span>
                  <br />
                  <span className="text-[var(--muted-dark)]">
                    REAL DIGITAL
                  </span>
                  <br />
                  <span className="text-[var(--muted-dark)]">
                    SOLUTIONS.
                  </span>
                </p>
              </div>

              <div className="mt-14 border-l border-[var(--border-strong)] pl-5">
                <p className="text-[9px] uppercase leading-6 tracking-[0.22em] text-[var(--muted-dark)]">
                  Design.
                  <br />
                  Technology.
                  <br />
                  Business.
                  <br />
                  People.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Main statement */}
          <Reveal delay={0.14} duration={1} y={45}>
            <div className="py-10 lg:py-16 lg:pl-14">
              <p className="mb-7 text-[9px] uppercase tracking-[0.26em] text-[var(--muted-dark)]">
                What PixelForge is about
              </p>

              <p className="max-w-5xl font-[var(--font-display)] text-[clamp(2rem,3.6vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.045em]">
                We turn ideas into{" "}
                <span className="text-[var(--foreground)]">
                  real digital products
                </span>{" "}
                that look exceptional, work reliably, and are built around{" "}
                <span className="text-[var(--accent-amber)]">
                  real business goals.
                </span>
              </p>

              <p className="mt-8 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                From focused websites to complete web applications, we combine
                visual thinking with practical engineering to create digital
                experiences that have a purpose beyond simply looking good.
              </p>

              {/* Service spectrum */}
              <div className="mt-10 grid grid-cols-3 border-t border-[var(--border)]">
                <div className="py-5 pr-4">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    01
                  </span>

                  <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Websites
                  </span>
                </div>

                <div className="border-l border-[var(--border)] px-4 py-5">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    02
                  </span>

                  <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Applications
                  </span>
                </div>

                <div className="border-l border-[var(--border)] pl-4 py-5">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    03
                  </span>

                  <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Digital Solutions
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <Reveal delay={0.1} duration={0.9} y={45}>
          <div className="mt-20 border-t border-[var(--border)] pt-10 lg:mt-28 lg:pt-14">
            {/* Heading */}
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                  How we work
                </p>

                <p className="mt-3 font-[var(--font-display)] text-2xl tracking-[-0.04em] sm:text-3xl">
                  Three things matter.
                </p>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)] sm:block">
                PixelForge / Approach
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
              {/* Principle list */}
              <div className="border-t border-[var(--border)]">
                {principles.map((principle, index) => {
                  const isActive = index === activePrinciple;
                  const principleAccent = accentStyles[principle.accent];

                  return (
                    <button
                      key={principle.number}
                      type="button"
                      onMouseEnter={() => setActivePrinciple(index)}
                      onFocus={() => setActivePrinciple(index)}
                      onClick={() => setActivePrinciple(index)}
                      className={`group relative flex w-full items-center gap-5 border-b border-[var(--border)] py-7 text-left transition-all duration-500 sm:gap-8 sm:py-9 ${
                        isActive ? principleAccent.background : ""
                      }`}
                    >
                      {/* Active edge */}
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-0 h-full w-px origin-top transition-transform duration-500 ${
                          isActive
                            ? `scale-y-100 ${principleAccent.dot}`
                            : "scale-y-0"
                        }`}
                      />

                      {/* Number */}
                      <span
                        className={`w-8 shrink-0 text-[9px] tracking-[0.2em] transition-colors duration-300 sm:w-10 ${
                          isActive
                            ? principleAccent.text
                            : "text-[var(--muted-dark)]"
                        }`}
                      >
                        {principle.number}
                      </span>

                      {/* Title */}
                      <span
                        className={`font-[var(--font-display)] text-[clamp(1.7rem,3.5vw,3.2rem)] font-medium leading-none tracking-[-0.05em] transition-all duration-500 ${
                          isActive
                            ? "translate-x-2 text-[var(--foreground)]"
                            : "text-[var(--muted)] group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
                        }`}
                      >
                        {principle.title}
                      </span>

                      {/* Arrow */}
                      <span
                        className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-11 sm:w-11 ${
                          isActive
                            ? `${principleAccent.border} ${principleAccent.text}`
                            : "border-[var(--border)] text-[var(--muted-dark)] group-hover:border-[var(--border-strong)]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`transition-transform duration-500 ${
                            isActive
                              ? "-translate-y-0.5 translate-x-0.5"
                              : "group-hover:translate-x-0.5"
                          }`}
                        >
                          ↗
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active principle */}
              <div
                className={`relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border p-7 transition-all duration-700 sm:min-h-[29rem] sm:p-10 lg:min-h-[30rem] lg:p-12 ${accent.border} ${accent.background} ${accent.glow}`}
              >
                {/* Technical grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(244,241,234,0.5) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(244,241,234,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "55px 55px",
                  }}
                />

                {/* Large number */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-6 -top-8 select-none font-[var(--font-display)] text-[13rem] font-medium leading-none tracking-[-0.1em] opacity-[0.025] sm:text-[17rem] ${accent.text}`}
                >
                  {active.number}
                </div>

                {/* Signal */}
                <div
                  aria-hidden="true"
                  className={`absolute right-9 top-9 h-1.5 w-1.5 rounded-full shadow-[0_0_20px_currentColor] ${accent.text}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[9px] uppercase tracking-[0.25em] ${accent.text}`}
                    >
                      {active.number} / {active.shortTitle}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                      PixelForge
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-[var(--font-display)] text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                      {active.title}
                      <span className={accent.text}>.</span>
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
                      {active.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                        PixelForge principle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing statement */}
        <Reveal delay={0.14} duration={1} y={40}>
          <div className="mt-20 border-t border-[var(--border)] pt-10 lg:mt-28 lg:pt-14">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                The PixelForge mindset
              </p>

              <p className="max-w-5xl font-[var(--font-display)] text-3xl leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Good ideas deserve
                <span className="text-[var(--muted)]">
                  {" "}
                  good digital experiences.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}