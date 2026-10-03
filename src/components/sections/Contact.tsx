"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/experience/Reveal";

type ProjectType = {
  id: string;
  number: string;
  name: string;
  price: string;
  description: string;
  accent: "amber" | "violet" | "cyan";
};

const projectTypes: ProjectType[] = [
  {
    id: "starter",
    number: "01",
    name: "Starter Website",
    price: "From LKR 35,000",
    description:
      "A polished static website for a business, personal brand, landing page, or focused online presence.",
    accent: "amber",
  },
  {
    id: "business",
    number: "02",
    name: "Business Website",
    price: "From LKR 100,000+",
    description:
      "A dynamic business website with backend functionality, APIs, email services, payments, and integrations.",
    accent: "violet",
  },
  {
    id: "application",
    number: "03",
    name: "Web Application",
    price: "Custom",
    description:
      "A full-stack application built around your workflow, with authentication, dashboards, APIs, and production infrastructure.",
    accent: "cyan",
  },
  {
    id: "unsure",
    number: "04",
    name: "Not Sure Yet",
    price: "Let's discuss",
    description:
      "Have an idea but don't know which solution fits? Tell us what you need and we'll figure out the right direction together.",
    accent: "amber",
  },
];

const accentClasses = {
  amber: {
    border: "border-[rgba(255,122,24,0.5)]",
    bg: "bg-[rgba(255,122,24,0.07)]",
    text: "text-[var(--accent-amber)]",
    glow: "shadow-[0_0_45px_rgba(255,122,24,0.1)]",
    line: "bg-[var(--accent-amber)]",
  },
  violet: {
    border: "border-[rgba(124,92,255,0.5)]",
    bg: "bg-[rgba(124,92,255,0.07)]",
    text: "text-[var(--accent-violet)]",
    glow: "shadow-[0_0_45px_rgba(124,92,255,0.1)]",
    line: "bg-[var(--accent-violet)]",
  },
  cyan: {
    border: "border-[rgba(82,229,211,0.5)]",
    bg: "bg-[rgba(82,229,211,0.07)]",
    text: "text-[var(--accent-cyan)]",
    glow: "shadow-[0_0_45px_rgba(82,229,211,0.1)]",
    line: "bg-[var(--accent-cyan)]",
  },
};

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="M20.1 3.9A11.8 11.8 0 0 0 11.7.5C5.2.5 0 5.7 0 12.2c0 2.1.6 4.1 1.6 5.9L0 24l6.1-1.6a11.7 11.7 0 0 0 5.6 1.4h.1c6.4 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6-3.4-8.2Z"
        fill="currentColor"
      />
      <path
        d="M7 5.9c.2-.2.5-.3.8-.3h.6c.2 0 .4.1.5.4l1.2 2.8c.1.2.1.5-.1.7l-.8 1c-.2.2-.2.5 0 .7.5.9 1.5 2.2 2.6 2.9.8.5 1.4.7 1.7.5l1.2-1.2c.2-.2.5-.2.8-.1l2.7 1.3c.3.1.4.4.3.7-.1.7-.5 1.5-1.2 1.9-.6.4-1.4.6-2.2.4-1.5-.3-3.6-1.5-5.5-3.2-1.5-1.4-2.7-3.2-3.4-4.6-.5-1.1-.6-2.1-.3-2.8.2-.5.7-.9 1.1-1.1Z"
        fill="var(--background)"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 7.1 5.1a1.6 1.6 0 0 0 1.8 0L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const [selectedId, setSelectedId] = useState("starter");
  const [projectDetails, setProjectDetails] = useState("");

  const selectedProject = useMemo(
    () =>
      projectTypes.find((project) => project.id === selectedId) ??
      projectTypes[0],
    [selectedId],
  );

  const selectedAccent = accentClasses[selectedProject.accent];

  const createMessage = () => {
    const details =
      projectDetails.trim() ||
      "I'd like to discuss my project and requirements.";

    return [
      "Hi PixelForge,",
      "",
      `I'm interested in the ${selectedProject.name}.`,
      `Estimated package: ${selectedProject.price}`,
      "",
      "Project details:",
      details,
      "",
      "I'd like to discuss the project further.",
    ].join("\n");
  };

  const whatsappUrl = `https://wa.me/94770304719?text=${encodeURIComponent(
    createMessage(),
  )}`;

  const emailSubject = `PixelForge Project Enquiry — ${selectedProject.name}`;

  const emailBody = [
    "Hi PixelForge,",
    "",
    `I'm interested in the ${selectedProject.name}.`,
    `Estimated package: ${selectedProject.price}`,
    "",
    "Project details:",
    projectDetails.trim() ||
      "I'd like to discuss my project and requirements.",
    "",
    "I'd like to discuss the project further.",
  ].join("\n");

  const emailUrl = `mailto:thadeshan527@gmail.com?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-[var(--border)] py-28 sm:py-36 lg:py-44"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full blur-[120px] transition-all duration-1000 ${
          selectedProject.accent === "violet"
            ? "bg-[rgba(124,92,255,0.08)]"
            : selectedProject.accent === "cyan"
              ? "bg-[rgba(82,229,211,0.07)]"
              : "bg-[rgba(255,122,24,0.07)]"
        }`}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <Reveal y={30}>
          <header className="mb-16 max-w-5xl lg:mb-20">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--accent-amber)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                07 / Start a Project
              </span>
            </div>

            <h2
              id="contact-heading"
              className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              LET&apos;S BUILD
              <br />
              <span className="text-[var(--muted-dark)]">SOMETHING</span>
              <br />
              <span className="text-[var(--foreground)]">
                WORTH BUILDING.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Tell us what you&apos;re looking to build. Choose the project type
              that feels closest to your idea, add a few details, and send your
              enquiry directly to PixelForge.
            </p>
          </header>
        </Reveal>

        {/* Main enquiry system */}
        <Reveal y={34} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* Left side */}
          <div className="flex flex-col">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                  Step 01
                </p>

                <h3 className="text-xl tracking-[-0.035em]">
                  What are you building?
                </h3>
              </div>

              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[var(--muted-dark)] sm:block">
                Select one
              </span>
            </div>

            <div className="space-y-2">
              {projectTypes.map((project) => {
                const isSelected = selectedId === project.id;
                const accent = accentClasses[project.accent];

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedId(project.id)}
                    className={`group relative w-full touch-manipulation overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 active:scale-[0.985] ${
                      isSelected
                        ? `${accent.border} ${accent.bg} ${accent.glow}`
                        : "border-[var(--border)] bg-[rgba(17,19,23,0.45)] hover:border-[var(--border-strong)] hover:bg-[rgba(17,19,23,0.75)] active:border-[var(--border-strong)] active:bg-[rgba(17,19,23,0.75)]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {/* Active indicator */}
                    <span
                      className={`absolute left-0 top-0 h-full w-px transition-all duration-500 ${
                        isSelected
                          ? accent.line
                          : "bg-transparent group-hover:bg-[var(--border-strong)] group-active:bg-[var(--border-strong)]"
                      }`}
                    />

                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 font-[var(--font-display)] text-xs transition-colors duration-300 ${
                          isSelected
                            ? accent.text
                            : "text-[var(--muted-dark)]"
                        }`}
                      >
                        {project.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h4 className="text-base tracking-[-0.025em] sm:text-lg">
                            {project.name}
                          </h4>

                          <span
                            className={`text-[9px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                              isSelected
                                ? accent.text
                                : "text-[var(--muted-dark)]"
                            }`}
                          >
                            {project.price}
                          </span>
                        </div>

                        <p
                          className={`mt-2 max-w-xl text-xs leading-6 transition-colors duration-300 ${
                            isSelected
                              ? "text-[var(--muted)]"
                              : "text-[var(--muted-dark)]"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>

                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isSelected
                            ? `${accent.border} ${accent.text}`
                            : "border-[var(--border)] text-transparent"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct contact */}
            <div className="mt-8 border-t border-[var(--border)] pt-7">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                Prefer a direct conversation?
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {/* Direct WhatsApp */}
                <a
                  href="https://wa.me/94770304719"
                  className="group flex touch-manipulation items-center justify-between rounded-xl border border-[var(--border)] bg-[rgba(17,19,23,0.35)] px-4 py-3.5 transition-all duration-300 hover:border-[rgba(82,229,211,0.35)] hover:bg-[rgba(82,229,211,0.04)] active:scale-[0.985] active:border-[rgba(82,229,211,0.35)] active:bg-[rgba(82,229,211,0.04)]"
                  aria-label="Open PixelForge WhatsApp"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[var(--accent-cyan)]">
                      <WhatsAppIcon />
                    </span>

                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.16em] text-[var(--muted-dark)]">
                        WhatsApp
                      </span>

                      <span className="mt-0.5 block text-xs text-[var(--foreground)]">
                        +94 77 030 4719
                      </span>
                    </span>
                  </span>

                  <span className="text-[var(--muted-dark)] transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
                    →
                  </span>
                </a>

                {/* Email */}
                <a
                  href={emailUrl}
                  className="group flex touch-manipulation items-center justify-between rounded-xl border border-[var(--border)] bg-[rgba(17,19,23,0.35)] px-4 py-3.5 transition-all duration-300 hover:border-[rgba(255,122,24,0.35)] hover:bg-[rgba(255,122,24,0.04)] active:scale-[0.985] active:border-[rgba(255,122,24,0.35)] active:bg-[rgba(255,122,24,0.04)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[var(--accent-amber)]">
                      <EmailIcon />
                    </span>

                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.16em] text-[var(--muted-dark)]">
                        Email
                      </span>

                      <span className="mt-0.5 block text-xs text-[var(--foreground)]">
                        thadeshan527@gmail.com
                      </span>
                    </span>
                  </span>

                  <span className="text-[var(--muted-dark)] transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side — enquiry */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[rgba(17,19,23,0.62)] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
              {/* Top status line */}
              <div className="mb-10 flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${selectedAccent.line} shadow-[0_0_12px_currentColor]`}
                  />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Project enquiry
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                  PixelForge / 07
                </span>
              </div>

              {/* Selected project */}
              <div className="mb-9">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                    Selected project type
                  </span>

                  <span
                    className={`text-[9px] uppercase tracking-[0.15em] ${selectedAccent.text}`}
                  >
                    {selectedProject.price}
                  </span>
                </div>

                <div
                  className={`relative overflow-hidden rounded-xl border ${selectedAccent.border} ${selectedAccent.bg} px-5 py-4`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${selectedAccent.line}`}
                  />

                  <div className="flex items-center justify-between gap-4 pl-2">
                    <span className="font-[var(--font-display)] text-xl tracking-[-0.035em]">
                      {selectedProject.name}
                    </span>

                    <span
                      className={`hidden text-xs sm:block ${selectedAccent.text}`}
                    >
                      {selectedProject.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mb-8">
                <label
                  htmlFor="project-details"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]"
                >
                  Tell us about your project
                </label>

                <div className="relative">
                  <textarea
                    id="project-details"
                    value={projectDetails}
                    onChange={(event) =>
                      setProjectDetails(event.target.value)
                    }
                    rows={7}
                    placeholder="Tell us about your business, idea, website, features, goals, or anything else that would help us understand what you need..."
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[rgba(7,8,12,0.55)] px-5 py-4 text-base leading-7 text-[var(--foreground)] placeholder:text-[var(--muted-dark)] transition-all duration-300 focus:border-[var(--border-strong)] focus:bg-[rgba(7,8,12,0.75)] focus:outline-none sm:text-sm"
                  />

                  <span className="pointer-events-none absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.15em] text-[var(--muted-dark)]">
                    Optional
                  </span>
                </div>
              </div>

              {/* Send actions */}
              <div className="border-t border-[var(--border)] pt-7">
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                  Send your enquiry through
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    className={`group relative flex min-h-14 touch-manipulation items-center justify-between overflow-hidden rounded-xl border ${selectedAccent.border} ${selectedAccent.bg} px-5 transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.985] active:translate-y-0 ${selectedAccent.glow}`}
                    aria-label="Send project enquiry via WhatsApp"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-white/[0.04] transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative z-10 flex items-center gap-3">
                      <span className={selectedAccent.text}>
                        <WhatsAppIcon />
                      </span>

                      <span className="text-[10px] font-medium uppercase tracking-[0.17em]">
                        Send via WhatsApp
                      </span>
                    </span>

                    <span
                      className={`relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 ${selectedAccent.text}`}
                    >
                      →
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={emailUrl}
                    className="group relative flex min-h-14 touch-manipulation items-center justify-between overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[rgba(244,241,234,0.025)] px-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent-amber)] hover:bg-[rgba(255,122,24,0.05)] active:scale-[0.985] active:translate-y-0 active:border-[var(--accent-amber)] active:bg-[rgba(255,122,24,0.05)]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,122,24,0.07),transparent)] transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative z-10 flex items-center gap-3">
                      <span className="text-[var(--accent-amber)]">
                        <EmailIcon />
                      </span>

                      <span className="text-[10px] font-medium uppercase tracking-[0.17em]">
                        Send via Email
                      </span>
                    </span>

                    <span className="relative z-10 text-lg text-[var(--accent-amber)] transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                <p className="mt-5 text-center text-[9px] leading-5 tracking-[0.08em] text-[var(--muted-dark)]">
                  Your selected project type and message will be included
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[var(--border)] pt-8 sm:mt-32">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              Have a clear idea or just a starting point? Either way, the
              conversation starts here.
            </p>

            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
              <span>Open for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}