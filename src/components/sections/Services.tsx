"use client";

import { useState } from "react";
import Reveal from "@/components/experience/Reveal";

type Accent = "amber" | "violet" | "cyan";

interface Service {
  number: string;
  shortTitle: string;
  title: string;
  description: string;
  capabilities: string[];
  process: string[];
  accent: Accent;
}

const services: Service[] = [
  {
    number: "01",
    shortTitle: "WEBSITES",
    title: "Website Development",
    description:
      "Premium websites designed around your brand, audience, and business goals — from focused landing pages to complete corporate websites.",
    capabilities: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Personal Brands",
      "Artist Websites",
      "Responsive UI",
    ],
    process: ["Discover", "Design", "Develop", "Launch"],
    accent: "amber",
  },
  {
    number: "02",
    shortTitle: "WEB APPLICATIONS",
    title: "Web Applications",
    description:
      "Custom web applications engineered for real business workflows, with modern interfaces, authentication, dashboards, APIs, and scalable architecture.",
    capabilities: [
      "Custom Platforms",
      "Dashboards",
      "Authentication",
      "Business Systems",
      "Full-Stack Development",
      "REST APIs",
    ],
    process: ["Plan", "Architect", "Build", "Deploy"],
    accent: "violet",
  },
  {
    number: "03",
    shortTitle: "INTEGRATIONS",
    title: "APIs & Integrations",
    description:
      "Connect your website or application with the services your business already depends on — from APIs and email to payments and third-party platforms.",
    capabilities: [
      "REST APIs",
      "Payment Gateways",
      "Email Services",
      "Third-Party APIs",
      "Custom Integrations",
      "Automation",
    ],
    process: ["Connect", "Integrate", "Test", "Deliver"],
    accent: "cyan",
  },
  {
    number: "04",
    shortTitle: "DEPLOYMENT",
    title: "Deployment & Engineering",
    description:
      "From development to production, we handle the technical foundation needed to deploy, maintain, and continuously improve your digital product.",
    capabilities: [
      "Docker",
      "CI / CD",
      "Jenkins",
      "Cloud Deployment",
      "Production Setup",
      "Maintenance",
    ],
    process: ["Prepare", "Containerize", "Deploy", "Monitor"],
    accent: "amber",
  },
];

const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    glow: string;
    soft: string;
    line: string;
  }
> = {
  amber: {
    text: "text-[var(--accent-amber)]",
    border: "border-[rgba(255,122,24,0.35)]",
    glow: "shadow-[0_0_45px_rgba(255,122,24,0.10)]",
    soft: "bg-[rgba(255,122,24,0.07)]",
    line: "bg-[var(--accent-amber)]",
  },
  violet: {
    text: "text-[var(--accent-violet)]",
    border: "border-[rgba(124,92,255,0.35)]",
    glow: "shadow-[0_0_45px_rgba(124,92,255,0.10)]",
    soft: "bg-[rgba(124,92,255,0.07)]",
    line: "bg-[var(--accent-violet)]",
  },
  cyan: {
    text: "text-[var(--accent-cyan)]",
    border: "border-[rgba(82,229,211,0.35)]",
    glow: "shadow-[0_0_45px_rgba(82,229,211,0.10)]",
    soft: "bg-[rgba(82,229,211,0.07)]",
    line: "bg-[var(--accent-cyan)]",
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];
  const accent = accentStyles[activeService.accent];

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-[var(--border)] py-28 sm:py-36 lg:py-44"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-24 h-[32rem] w-[32rem] rounded-full blur-[140px] transition-all duration-1000 ${
          activeService.accent === "amber"
            ? "bg-[rgba(255,122,24,0.05)]"
            : activeService.accent === "violet"
              ? "bg-[rgba(124,92,255,0.05)]"
              : "bg-[rgba(82,229,211,0.05)]"
        }`}
      />

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-amber)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                  03 / Services
                </span>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                From a first digital presence to a complete business
                application, PixelForge builds around what your business
                actually needs.
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              WE BUILD WHAT
              <br />
              <span className="text-[var(--muted-dark)]">
                YOUR BUSINESS NEEDS.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Service selector */}
        <Reveal delay={0.08}>
          <div className="grid border-y border-[var(--border)] lg:grid-cols-[0.7fr_1.3fr]">
            {/* Navigation */}
            <div className="border-b border-[var(--border)] lg:border-b-0 lg:border-r">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                const serviceAccent = accentStyles[service.accent];

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group relative flex w-full items-center justify-between border-b border-[var(--border)] px-5 py-7 text-left transition-all duration-500 last:border-b-0 sm:px-7 sm:py-8 lg:px-10 ${
                      isActive
                        ? `${serviceAccent.soft} ${serviceAccent.text}`
                        : "text-[var(--muted)] hover:bg-[rgba(244,241,234,0.02)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {/* Active indicator */}
                    <span
                      className={`absolute left-0 top-0 h-full w-px origin-top transition-transform duration-500 ${
                        isActive
                          ? `${serviceAccent.line} scale-y-100`
                          : "scale-y-0"
                      }`}
                    />

                    <span className="flex items-center gap-5">
                      <span
                        className={`font-[var(--font-display)] text-xs tracking-[0.08em] transition-colors duration-500 ${
                          isActive
                            ? serviceAccent.text
                            : "text-[var(--muted-dark)]"
                        }`}
                      >
                        {service.number}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-[0.16em]">
                        {service.shortTitle}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`text-lg transition-all duration-500 ${
                        isActive
                          ? `${serviceAccent.text} translate-x-0 opacity-100`
                          : "translate-x-[-6px] opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active service */}
            <div
              className={`relative min-h-[34rem] overflow-hidden p-6 transition-all duration-700 sm:p-9 lg:min-h-[39rem] lg:p-12 ${accent.glow}`}
            >
              {/* Decorative number */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-5 -top-14 select-none font-[var(--font-display)] text-[15rem] font-medium leading-none tracking-[-0.1em] opacity-[0.025] transition-all duration-700 sm:text-[20rem] ${
                  accent.text
                }`}
              >
                {activeService.number}
              </div>

              {/* Top metadata */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`rounded-full border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] ${accent.border} ${accent.text} ${accent.soft}`}
                >
                  Service {activeService.number}
                </span>

                <span className="font-[var(--font-display)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                  PixelForge
                </span>
              </div>

              {/* Main content */}
              <div className="relative z-10 mt-16 max-w-3xl sm:mt-20">
                <h3
                  key={activeService.title}
                  className="text-4xl leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl"
                >
                  {activeService.title}
                </h3>

                <p
                  key={`${activeService.title}-description`}
                  className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8"
                >
                  {activeService.description}
                </p>
              </div>

              {/* Capabilities */}
              <div className="relative z-10 mt-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    Capabilities
                  </span>

                  <span className="h-px flex-1 bg-[var(--border)]" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeService.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-[var(--border)] bg-[rgba(244,241,234,0.02)] px-3.5 py-2 text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] transition-colors duration-300 hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="relative z-10 mt-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    Typical workflow
                  </span>

                  <span className="h-px flex-1 bg-[var(--border)]" />
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {activeService.process.map((step, index) => (
                    <div key={step} className="relative">
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${accent.line}`}
                        />

                        <span className="font-[var(--font-display)] text-[9px] text-[var(--muted-dark)]">
                          0{index + 1}
                        </span>
                      </div>

<span className="break-words text-[10px] uppercase tracking-[0.08em] text-[var(--muted)]">
  {step}
</span>

                      {index < activeService.process.length - 1 && (
                        <span className="absolute left-[calc(100%+4px)] top-[3px] hidden h-px w-[calc(100%-12px)] bg-[var(--border)] sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-[var(--border)]">
                <div
                  className={`h-full w-1/3 transition-all duration-700 ${accent.line}`}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom statement */}
        <Reveal delay={0.16}>
          <div className="mt-16 grid gap-8 border-b border-[var(--border)] pb-10 sm:mt-20 sm:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                One studio
              </span>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl text-[var(--foreground)]">
                  Multiple possibilities
                </span>

                <span
                  aria-hidden="true"
                  className={`text-xl transition-colors duration-500 ${accent.text}`}
                >
                  →
                </span>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
              You bring the idea. We shape the digital experience, engineer
              the technology, and take it from concept to a finished product.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}