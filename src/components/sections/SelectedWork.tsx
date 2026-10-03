"use client";

import { useState } from "react";
import Reveal from "@/components/experience/Reveal";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  accent: "violet" | "amber" | "cyan";
};

const projects: Project[] = [
  {
    number: "01",
    category: "Artist / Music",
    title: "R JAY — Official Artist Experience",
    description:
      "A cinematic digital experience built around an artist's identity, music, visuals, and live presence.",
    tags: ["UI / UX", "Development", "Motion", "Responsive"],
    href: "https://www.ravindujayarathne.com",
    accent: "violet",
  },
];

const accentClasses = {
  violet: {
    text: "text-[var(--accent-violet)]",
    border: "border-[rgba(124,92,255,0.35)]",
    glow: "rgba(124,92,255,0.18)",
  },
  amber: {
    text: "text-[var(--accent-amber)]",
    border: "border-[rgba(255,122,24,0.35)]",
    glow: "rgba(255,122,24,0.18)",
  },
  cyan: {
    text: "text-[var(--accent-cyan)]",
    border: "border-[rgba(82,229,211,0.35)]",
    glow: "rgba(82,229,211,0.18)",
  },
};

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const active = projects[activeProject];
  const accent = accentClasses[active.accent];

  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-5 py-28 sm:scroll-mt-28 sm:px-8 sm:py-36 lg:px-12 lg:py-40"
      aria-labelledby="work-heading"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15rem] top-[10%] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.07)_0%,transparent_70%)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.05)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <Reveal duration={0.8}>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-violet)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                  02 / Selected Work
                </span>
              </div>

              <p className="max-w-xs text-xs uppercase leading-6 tracking-[0.2em] text-[var(--muted-dark)]">
                Built / Designed / Engineered
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} duration={1} y={55}>
            <div>
              <h2
                id="work-heading"
                className="max-w-5xl font-[var(--font-display)] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.06em]"
              >
                ENTER THE
                <br />
                <span className="text-[var(--muted)]">WORK</span>
                <br />
                EXPERIENCE
                <span className="text-[var(--accent-violet)]">.</span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Work Experience */}
        <Reveal duration={1} y={45}>
          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/30">
            {/* Top system bar */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${accent.text.replace(
                    "text-",
                    "bg-",
                  )}`}
                />

                <span className="text-[8px] uppercase tracking-[0.25em] text-[var(--muted)]">
                  PixelForge / Work System
                </span>
              </div>

              <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                {String(projects.length).padStart(2, "0")} Projects
              </span>
            </div>

            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              {/* Project navigation */}
              <div className="border-b border-[var(--border)] lg:border-b-0 lg:border-r">
                <div className="p-5 sm:p-7">
                  <p className="mb-6 text-[8px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                    Select Project
                  </p>

                  <div>
                    {projects.map((project, index) => {
                      const isActive = index === activeProject;
                      const projectAccent = accentClasses[project.accent];

                      return (
                        <button
                          key={project.number}
                          type="button"
                          onClick={() => setActiveProject(index)}
                          className="group relative flex w-full items-center gap-4 border-t border-[var(--border)] py-6 text-left last:border-b"
                        >
                          <span
                            className={`absolute left-0 top-0 h-full w-px origin-top transition-transform duration-500 ${
                              isActive
                                ? `scale-y-100 ${projectAccent.text.replace(
                                    "text-",
                                    "bg-",
                                  )}`
                                : "scale-y-0"
                            }`}
                          />

                          <span
                            className={`w-7 shrink-0 text-[9px] tracking-[0.2em] transition-colors duration-300 ${
                              isActive
                                ? projectAccent.text
                                : "text-[var(--muted-dark)]"
                            }`}
                          >
                            {project.number}
                          </span>

                          <div className="min-w-0">
                            <p
                              className={`mb-2 text-[7px] uppercase tracking-[0.22em] ${
                                isActive
                                  ? projectAccent.text
                                  : "text-[var(--muted-dark)]"
                              }`}
                            >
                              {project.category}
                            </p>

                            <span
                              className={`block font-[var(--font-display)] text-xl font-medium leading-tight tracking-[-0.04em] transition-all duration-500 sm:text-2xl ${
                                isActive
                                  ? "translate-x-1 text-[var(--foreground)]"
                                  : "text-[var(--muted)] group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
                              }`}
                            >
                              {project.title}
                            </span>
                          </div>

                          <span
                            className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-500 ${
                              isActive
                                ? `${projectAccent.border} ${projectAccent.text}`
                                : "border-[var(--border)] text-[var(--muted-dark)] group-hover:border-[var(--border-strong)]"
                            }`}
                          >
                            ↗
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Future project indicator */}
                  <div className="mt-6 flex items-center gap-3 border border-dashed border-[var(--border)] px-4 py-4">
                    <span className="text-lg text-[var(--muted-dark)]">
                      +
                    </span>

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                        More Projects
                      </p>

                      <p className="mt-1 text-[9px] text-[var(--muted-dark)]">
                        Expanding the portfolio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active project */}
              <div className="relative min-h-[30rem] overflow-hidden p-5 sm:p-7 lg:min-h-[38rem] lg:p-10">
                {/* Grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(244,241,234,0.5) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(244,241,234,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "55px 55px",
                  }}
                />

                {/* Accent atmosphere */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full blur-3xl transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle, ${accent.glow} 0%, transparent 68%)`,
                  }}
                />

                {/* Large project number */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-1rem] top-[-2rem] font-[var(--font-display)] text-[12rem] font-medium leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[16rem]"
                >
                  {active.number}
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[8px] uppercase tracking-[0.25em] ${accent.text}`}
                    >
                      {active.category}
                    </span>

                    <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(82,229,211,0.7)]" />
                      Live
                    </span>
                  </div>

                  {/* Preview */}
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.1] bg-[#090a0f] shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,92,255,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,122,24,0.09),transparent_34%)]" />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(244,241,234,0.4) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(244,241,234,0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: "45px 45px",
                      }}
                    />

                    {/* Browser frame */}
                    <div className="absolute left-[6%] top-[8%] h-[84%] w-[88%] overflow-hidden rounded-lg border border-white/[0.12] bg-[#08090d]/90 shadow-2xl">
                      <div className="flex h-7 items-center border-b border-white/[0.08] px-3">
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        </div>

                        <div className="mx-auto hidden rounded-full border border-white/[0.08] px-8 py-0.5 text-[5px] uppercase tracking-[0.2em] text-white/25 sm:block">
                          ravindujayarathne.com
                        </div>
                      </div>

                      <div className="relative flex h-[calc(100%-1.75rem)] items-center justify-center">
                        <div className="absolute left-1/2 top-1/2 h-[65%] w-[28%] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-full border border-[rgba(124,92,255,0.18)] transition-transform duration-1000 group-hover:rotate-0" />

                        <div className="relative z-10 text-center">
                          <p className="mb-3 text-[6px] uppercase tracking-[0.4em] text-white/35">
                            Official Artist Experience
                          </p>

                          <div className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.08em] text-white">
                            R JAY
                          </div>

                          <div className="mt-4 flex items-center justify-center gap-2">
                            <span className="h-px w-6 bg-[var(--accent-violet)]" />

                            <span className="text-[5px] uppercase tracking-[0.25em] text-white/35">
                              Music / Visual / Live
                            </span>

                            <span className="h-px w-6 bg-[var(--accent-violet)]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-[var(--accent-violet)] shadow-[0_0_14px_rgba(124,92,255,0.8)]" />

                    <span className="absolute right-[15%] top-[35%] h-1 w-1 rounded-full bg-[var(--accent-amber)] shadow-[0_0_14px_rgba(255,122,24,0.8)]" />
                  </div>

                  {/* Details */}
                  <div className="mt-auto pt-7">
                    <h3 className="max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-none tracking-[-0.05em] sm:text-3xl lg:text-4xl">
                      {active.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-xs leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">
                      {active.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {active.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[7px] uppercase tracking-[0.15em] text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Prominent Live Project Button */}
                      <a
                        href={active.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/live inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border px-5 py-3 text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ${accent.border} ${accent.text} hover:bg-white/[0.04] hover:shadow-[0_0_30px_${accent.glow}] sm:px-6 sm:py-3.5`}
                      >
                        <span>Open Live Project</span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-xs transition-all duration-500 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 group-hover/live:bg-white/[0.06]">
                          
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Explore prompt */}
        <Reveal delay={0.2} duration={0.9} y={30}>
          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-violet)] shadow-[0_0_12px_rgba(124,92,255,0.7)]" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                Work system active
              </span>
            </div>

            <p className="max-w-xl text-xs leading-6 text-[var(--muted)] sm:text-right">
              Every project is built around its own identity, audience,
              functionality, and business goals.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}