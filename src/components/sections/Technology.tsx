"use client";

import { useState } from "react";
import Reveal from "@/components/experience/Reveal";

type Accent = "amber" | "violet" | "cyan";

interface Technology {
  number: string;
  name: string;
  category: string;
  description: string;
  accent: Accent;
}

const technologies: Technology[] = [
  {
    number: "01",
    name: "React",
    category: "Interface",
    description:
      "Modern, responsive interfaces built as reusable components with a focus on clarity, interaction, and performance.",
    accent: "violet",
  },
  {
    number: "02",
    name: "REST APIs",
    category: "Communication",
    description:
      "Reliable API architecture that allows websites, applications, and external services to communicate cleanly.",
    accent: "cyan",
  },
  {
    number: "03",
    name: "Spring Boot",
    category: "Backend",
    description:
      "Robust Java backend systems for applications that require business logic, authentication, APIs, and structured architecture.",
    accent: "amber",
  },
  {
    number: "04",
    name: "PostgreSQL",
    category: "Data",
    description:
      "Structured relational data architecture for applications that require reliable, organized, and scalable data management.",
    accent: "violet",
  },
  {
    number: "05",
    name: "Docker",
    category: "Infrastructure",
    description:
      "Containerized applications that create consistent environments from development through production.",
    accent: "cyan",
  },
  {
    number: "06",
    name: "CI / CD",
    category: "Delivery",
    description:
      "Automated development and deployment workflows using tools such as Jenkins to move changes toward production efficiently.",
    accent: "amber",
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

const architectureLayers = [
  "Interface",
  "API",
  "Backend",
  "Database",
  "Container",
  "CI / CD",
  "Production",
];

export default function Technology() {
  const [activeTechnology, setActiveTechnology] = useState(0);

  const active = technologies[activeTechnology];
  const accent = accentStyles[active.accent];

  return (
    <section
      id="technology"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      aria-labelledby="technology-heading"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-56 top-[8%] h-[38rem] w-[38rem] rounded-full blur-[130px] transition-all duration-1000 ${accent.background}`}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
          <Reveal duration={0.8}>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-cyan)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--muted)]">
                  06 / Technology
                </span>
              </div>

              <p className="max-w-sm text-xs uppercase leading-6 tracking-[0.18em] text-[var(--muted-dark)]">
                Design is the surface.
                <br />
                Engineering is the foundation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} duration={1} y={55}>
            <h2
              id="technology-heading"
              className="max-w-5xl font-[var(--font-display)] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.06em]"
            >
              BUILT ON
              <br />
              <span className="text-[var(--muted)]">THE RIGHT</span>
              <br />
              TECHNOLOGY
              <span className="text-[var(--accent-cyan)]">.</span>
            </h2>
          </Reveal>
        </div>

        {/* Architecture */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Technology nodes */}
          <Reveal duration={1} y={45}>
            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-[var(--border)] sm:left-[1.35rem]"
              />

              <div className="relative space-y-3">
                {technologies.map((technology, index) => {
                  const isActive = index === activeTechnology;
                  const technologyAccent = accentStyles[technology.accent];

                  return (
                    <button
                      key={technology.number}
                      type="button"
                      onMouseEnter={() => setActiveTechnology(index)}
                      onFocus={() => setActiveTechnology(index)}
                      onClick={() => setActiveTechnology(index)}
                      className={`group relative flex w-full items-center gap-5 text-left transition-all duration-500 sm:gap-7 ${
                        isActive ? technologyAccent.background : ""
                      }`}
                    >
                      {/* Node */}
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-[var(--background)] text-[8px] transition-all duration-500 sm:h-11 sm:w-11 ${
                          isActive
                            ? `${technologyAccent.border} ${technologyAccent.text}`
                            : "border-[var(--border)] text-[var(--muted-dark)] group-hover:border-[var(--border-strong)]"
                        }`}
                      >
                        {technology.number}
                      </span>

                      {/* Content */}
                      <div
                        className={`flex min-w-0 flex-1 items-center justify-between rounded-2xl border px-5 py-5 transition-all duration-500 sm:px-7 sm:py-6 ${
                          isActive
                            ? `border-[var(--border-strong)] bg-[var(--surface)] ${technologyAccent.glow}`
                            : "border-transparent bg-transparent group-hover:border-[var(--border)] group-hover:bg-[var(--surface)]/40"
                        }`}
                      >
                        <div>
                          <p
                            className={`mb-1 text-[8px] uppercase tracking-[0.2em] ${
                              isActive
                                ? technologyAccent.text
                                : "text-[var(--muted-dark)]"
                            }`}
                          >
                            {technology.category}
                          </p>

                          <h3
                            className={`font-[var(--font-display)] text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-3xl ${
                              isActive
                                ? "text-[var(--foreground)]"
                                : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                            }`}
                          >
                            {technology.name}
                          </h3>
                        </div>

                        <span
                          className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-500 ${
                            isActive
                              ? `${technologyAccent.border} ${technologyAccent.text}`
                              : "border-[var(--border)] text-[var(--muted-dark)]"
                          }`}
                        >
                          ↗
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Active technology */}
          <Reveal delay={0.14} duration={1} y={45}>
            <div
              className={`relative min-h-[29rem] overflow-hidden rounded-[1.5rem] border bg-[var(--surface)]/40 p-7 transition-all duration-700 sm:min-h-[35rem] sm:p-10 lg:min-h-[37rem] lg:p-12 ${accent.border} ${accent.glow}`}
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

              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-[100px] opacity-40 transition-all duration-1000 ${accent.background}`}
              />

              {/* Large number */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-8 -top-8 select-none font-[var(--font-display)] text-[14rem] font-medium leading-none tracking-[-0.12em] opacity-[0.025] transition-all duration-700 sm:text-[18rem] ${accent.text}`}
              >
                {active.number}
              </div>

              {/* Signal */}
              <div
                aria-hidden="true"
                className={`absolute right-10 top-10 h-1.5 w-1.5 rounded-full shadow-[0_0_20px_currentColor] ${accent.text}`}
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] ${accent.border} ${accent.text} ${accent.background}`}
                  >
                    {active.number} / {active.category}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    Engineering Layer
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                    Technology
                  </p>

                  <h3 className="font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] sm:text-6xl">
                    {active.name}
                    <span className={accent.text}>.</span>
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
                    {active.description}
                  </p>

                  {/* System layer */}
                  <div className="mt-10 border-t border-[var(--border)] pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                        System layer
                      </span>

                      <span
                        className={`text-[8px] uppercase tracking-[0.2em] ${accent.text}`}
                      >
                        Active
                      </span>
                    </div>

                    <div className="mt-4 flex gap-1.5">
                      {technologies.map((technology, index) => (
                        <span
                          key={technology.number}
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            index <= activeTechnology
                              ? accent.dot
                              : "bg-[var(--border)]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--border)]">
                <div
                  className={`h-full transition-all duration-700 ${accent.dot}`}
                  style={{
                    width: `${((activeTechnology + 1) / technologies.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stack flow */}
        <Reveal delay={0.12} duration={1} y={40}>
          <div className="mt-16 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/30 p-6 sm:p-8 lg:p-10">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                  Typical application flow
                </p>

                <p className="mt-2 text-xs text-[var(--muted)]">
                  From interface to production.
                </p>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)] sm:block">
                PixelForge / Architecture
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {architectureLayers.map((layer, index) => (
                <div
                  key={layer}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`rounded-full border px-4 py-2.5 text-[8px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      index === activeTechnology
                        ? `${accent.border} ${accent.text} ${accent.background}`
                        : "border-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    {layer}
                  </span>

                  {index < architectureLayers.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-[var(--muted-dark)]"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom statement */}
        <Reveal delay={0.16} duration={0.9} y={30}>
          <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
              Technology serves the product
            </p>

            <p className="max-w-xl text-xs leading-6 text-[var(--muted)] sm:text-right">
              The stack is chosen around the project — not the other way
              around.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}