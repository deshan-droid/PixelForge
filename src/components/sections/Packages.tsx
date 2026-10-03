"use client";

import { useState } from "react";
import Reveal from "@/components/experience/Reveal";

type Accent = "amber" | "violet" | "cyan";

interface Package {
  number: string;
  name: string;
  label: string;
  price: string;
  pricePrefix: string;
  description: string;
  features: string[];
  accent: Accent;
}

const packages: Package[] = [
  {
    number: "01",
    name: "Foundation",
    label: "STARTER",
    price: "LKR 35,000",
    pricePrefix: "From",
    description:
      "A professional, responsive website for businesses, personal brands, portfolios, landing pages, and focused digital presence.",
    features: [
      "HTML / CSS / JavaScript",
      "Responsive Design",
      "Professional UI",
      "Custom Layout",
      "Performance Focus",
      "Deployment Support",
    ],
    accent: "amber",
  },
  {
    number: "02",
    name: "Business",
    label: "DYNAMIC",
    price: "LKR 100,000+",
    pricePrefix: "From",
    description:
      "For businesses that need more than a static website — including backend functionality, APIs, email services, payments, and third-party integrations.",
    features: [
      "PHP Backend",
      "API Integrations",
      "Email Services",
      "Payment Gateways",
      "Third-Party Services",
      "Custom Functionality",
    ],
    accent: "violet",
  },
  {
    number: "03",
    name: "Application",
    label: "FULL-STACK",
    price: "CUSTOM",
    pricePrefix: "",
    description:
      "Complete web applications engineered around real business workflows, from the interface and backend to APIs, deployment, and continuous delivery.",
    features: [
      "React",
      "Java / Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Docker / CI / CD",
    ],
    accent: "cyan",
  },
];

const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    background: string;
    glow: string;
    dot: string;
  }
> = {
  amber: {
    text: "text-[var(--accent-amber)]",
    border: "border-[rgba(255,122,24,0.38)]",
    background: "bg-[rgba(255,122,24,0.06)]",
    glow: "shadow-[0_0_70px_rgba(255,122,24,0.08)]",
    dot: "bg-[var(--accent-amber)]",
  },
  violet: {
    text: "text-[var(--accent-violet)]",
    border: "border-[rgba(124,92,255,0.38)]",
    background: "bg-[rgba(124,92,255,0.06)]",
    glow: "shadow-[0_0_70px_rgba(124,92,255,0.08)]",
    dot: "bg-[var(--accent-violet)]",
  },
  cyan: {
    text: "text-[var(--accent-cyan)]",
    border: "border-[rgba(82,229,211,0.38)]",
    background: "bg-[rgba(82,229,211,0.06)]",
    glow: "shadow-[0_0_70px_rgba(82,229,211,0.08)]",
    dot: "bg-[var(--accent-cyan)]",
  },
};

export default function Packages() {
  const [activePackage, setActivePackage] = useState(0);

  const active = packages[activePackage];
  const accent = accentStyles[active.accent];

  return (
    <section
      id="packages"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      aria-labelledby="packages-heading"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-48 top-[28%] h-[34rem] w-[34rem] rounded-full blur-[130px] transition-all duration-1000 ${accent.background}`}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
          <Reveal duration={0.8}>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-violet)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--muted)]">
                  04 / Packages
                </span>
              </div>

              <p className="max-w-sm text-xs uppercase leading-6 tracking-[0.18em] text-[var(--muted-dark)]">
                Clear starting points.
                <br />
                Flexible where it matters.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} duration={1} y={55}>
            <h2
              id="packages-heading"
              className="max-w-5xl font-[var(--font-display)] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.06em]"
            >
              BUILT AROUND
              <br />
              <span className="text-[var(--muted)]">WHAT YOU</span>
              <br />
              NEED
              <span className="text-[var(--accent-violet)]">.</span>
            </h2>
          </Reveal>
        </div>

        {/* Package experience */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          {/* Package selector */}
          <Reveal duration={1} y={45}>
            <div className="border-t border-[var(--border)]">
              {packages.map((pkg, index) => {
                const isActive = index === activePackage;
                const pkgAccent = accentStyles[pkg.accent];

                return (
                  <button
                    key={pkg.number}
                    type="button"
                    onMouseEnter={() => setActivePackage(index)}
                    onFocus={() => setActivePackage(index)}
                    onClick={() => setActivePackage(index)}
                    className={`group relative flex w-full items-center gap-5 border-b border-[var(--border)] py-7 text-left transition-all duration-500 sm:gap-8 sm:py-9 ${
                      isActive
                        ? pkgAccent.background
                        : "hover:bg-[rgba(244,241,234,0.018)]"
                    }`}
                  >
                    {/* Active edge */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-full w-px origin-top transition-transform duration-500 ${
                        isActive
                          ? `scale-y-100 ${pkgAccent.dot}`
                          : "scale-y-0"
                      }`}
                    />

                    {/* Number */}
                    <span
                      className={`w-8 shrink-0 text-[9px] tracking-[0.2em] transition-colors duration-300 sm:w-10 ${
                        isActive
                          ? pkgAccent.text
                          : "text-[var(--muted-dark)]"
                      }`}
                    >
                      {pkg.number}
                    </span>

                    {/* Name */}
                    <div className="min-w-0">
                      <p
                        className={`mb-2 text-[8px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                          isActive
                            ? pkgAccent.text
                            : "text-[var(--muted-dark)]"
                        }`}
                      >
                        {pkg.label}
                      </p>

                      <span
                        className={`block font-[var(--font-display)] text-[clamp(1.8rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.05em] transition-all duration-500 ${
                          isActive
                            ? "translate-x-2 text-[var(--foreground)]"
                            : "text-[var(--muted)] group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
                        }`}
                      >
                        {pkg.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-11 sm:w-11 ${
                        isActive
                          ? `${pkgAccent.border} ${pkgAccent.text} ${pkgAccent.background}`
                          : "border-[var(--border)] text-[var(--muted-dark)] group-hover:border-[var(--border-strong)] group-hover:text-[var(--muted)]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`text-sm transition-transform duration-500 ${
                          isActive
                            ? "translate-x-0.5 -translate-y-0.5"
                            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      >
                        ↗
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active package */}
          <Reveal delay={0.16} duration={1} y={45}>
            <div
              className={`group relative min-h-[32rem] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/45 p-7 transition-all duration-700 sm:min-h-[35rem] sm:p-10 lg:min-h-[39rem] lg:p-12 ${accent.glow}`}
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

              {/* Radial atmosphere */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute right-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-40 blur-[110px] transition-all duration-1000 ${accent.background}`}
              />

              {/* Large number */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-4 -top-8 select-none font-[var(--font-display)] text-[13rem] font-medium leading-none tracking-[-0.12em] opacity-[0.025] transition-all duration-700 sm:text-[17rem] ${accent.text}`}
              >
                {active.number}
              </div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Top metadata */}
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] ${accent.border} ${accent.text} ${accent.background}`}
                  >
                    {active.label}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    PixelForge / 0{activePackage + 1}
                  </span>
                </div>

                {/* Main information */}
                <div className="mt-16 sm:mt-20">
                  <div className="flex items-baseline gap-3">
                    {active.pricePrefix && (
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                        {active.pricePrefix}
                      </span>
                    )}

                    <h3
                      className={`font-[var(--font-display)] text-4xl font-medium tracking-[-0.055em] sm:text-5xl ${accent.text}`}
                    >
                      {active.price}
                    </h3>
                  </div>

                  <h4 className="mt-4 font-[var(--font-display)] text-3xl font-medium tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl">
                    {active.name}
                  </h4>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-[15px] sm:leading-8">
                    {active.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-auto pt-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                      Includes
                    </span>

                    <span className="h-px flex-1 bg-[var(--border)]" />
                  </div>

                  <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    {active.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 border-b border-[var(--border)] py-3"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                        />

                        <span className="text-[9px] uppercase tracking-[0.13em] text-[var(--muted)]">
                          {feature}
                        </span>

                        <span className="ml-auto font-[var(--font-display)] text-[8px] text-[var(--muted-dark)]">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom progress line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-[var(--border)]"
              >
                <div
                  className={`h-full transition-all duration-700 ${accent.dot}`}
                  style={{
                    width: `${((activePackage + 1) / packages.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pricing note */}
        <Reveal delay={0.2} duration={0.9} y={30}>
          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                Pricing adapts to the project
              </p>

              <p className="mt-2 text-xs text-[var(--muted)]">
                Every build is scoped around the actual requirements.
              </p>
            </div>

            <p className="max-w-2xl text-xs leading-6 text-[var(--muted)] sm:text-right">
              Payment gateways, email services, third-party APIs, and other
              integrations are quoted according to the requirements of each
              project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}