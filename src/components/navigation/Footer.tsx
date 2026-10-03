"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/experience/Reveal";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Websites",
  "Web Applications",
  "API Integrations",
  "Deployment & CI / CD",
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 10V16M8 7.5V7.6M12 16V10M12 13C12 11.2 13.1 10 14.7 10C16.3 10 17 11.1 17 13V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const isWide = window.matchMedia("(min-width: 640px)");

    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();

    if (!isWide.matches) {
      return;
    }

    const interval = window.setInterval(updateTime, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

const scrollToTop = () => {
  try {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch {
    window.scrollTo(0, 0);
  }
};

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]">
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[35rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(124,92,255,0.055)_0%,rgba(255,122,24,0.035)_35%,transparent_72%)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(244,241,234,0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244,241,234,0.45) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =========================================================
          MASSIVE CLOSING STATEMENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pt-40">
        <Reveal
          y={32}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(17,19,23,0.42)] px-6 py-12 backdrop-blur-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative corner marks */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-16 w-16 border-l border-t border-[rgba(255,122,24,0.45)]"
          />

          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-[rgba(124,92,255,0.45)]"
          />

          {/* Tiny system label */}
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-8 bg-[var(--accent-amber)]" />

            <span className="text-[9px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              End of experience
            </span>

            <span className="ml-auto hidden text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)] sm:block">
              PF / 08
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
                PixelForge
              </p>

              <h2 className="max-w-6xl font-[var(--font-display)] text-5xl leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[8.5rem]">
                WHERE DESIGN
                <br />
                <span className="text-[var(--muted-dark)]">
                  MEETS TECHNOLOGY.
                </span>
              </h2>
            </div>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex w-fit items-center gap-4 rounded-full border border-[var(--border-strong)] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)] transition-all duration-500 active:scale-[0.98] active:border-[var(--accent-amber)] hover:-translate-y-1 hover:border-[var(--accent-amber)] hover:text-[var(--foreground)]"
            >
              <span>Back to top</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-500 group-active:-translate-y-1 group-active:border-[var(--accent-amber)] group-active:text-[var(--accent-amber)] group-hover:-translate-y-1 group-hover:border-[var(--accent-amber)] group-hover:text-[var(--accent-amber)]">
                ↑
              </span>
            </button>
          </div>

          {/* Moving signal line */}
          <div className="mt-12 overflow-hidden border-t border-[var(--border)] pt-5">
            <div className="flex items-center gap-4 text-[8px] uppercase tracking-[0.25em] text-[var(--muted-dark)]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-[var(--accent-amber)] opacity-30" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
              </span>

              <span>Digital experiences / engineered with intent</span>

              <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />

              <span className="hidden sm:block">
                Colombo / Sri Lanka / Worldwide
              </span>
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            FOOTER INFORMATION
        ========================================================= */}

        <div className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.25fr_0.65fr_0.65fr_0.9fr] lg:gap-12 lg:py-28">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-[var(--font-display)] text-2xl font-medium tracking-[-0.045em]"
            >
              <span>PixelForge</span>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)] transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_16px_rgba(255,122,24,0.65)]" />
            </Link>

            <p className="mt-5 max-w-sm text-xs leading-7 text-[var(--muted)]">
              Premium websites, web applications, and digital experiences
              designed around real businesses and real goals.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--accent-amber)]" />

              <span className="text-[8px] uppercase tracking-[0.26em] text-[var(--muted-dark)]">
                Sri Lanka / Worldwide
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              Explore
            </p>

            <nav
              className="flex flex-col items-start gap-3.5"
              aria-label="Footer navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--foreground)]"
                >
                  <span className="h-px w-0 bg-[var(--accent-amber)] transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              Capabilities
            </p>

            <div className="flex flex-col items-start gap-3.5">
              {services.map((service, index) => (
                <Link
                  key={service}
                  href="/#services"
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--foreground)]"
                >
                  <span className="text-[8px] text-[var(--muted-dark)]">
                    0{index + 1}
                  </span>

                  <span>{service}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              Start something
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/94770304719"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(17,19,23,0.35)] px-4 py-3.5 transition-all duration-300 hover:border-[rgba(82,229,211,0.35)] hover:bg-[rgba(82,229,211,0.04)]"
              >
                <span className="text-[var(--accent-cyan)]">
                  <WhatsAppIcon />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-[10px] text-[var(--foreground)]">
                    +94 77 030 4719
                  </span>
                </span>

                <span className="text-[var(--muted-dark)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent-cyan)]">
                  ↗
                </span>
              </a>

              <a
                href="mailto:thadeshan527@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(17,19,23,0.35)] px-4 py-3.5 transition-all duration-300 hover:border-[rgba(255,122,24,0.35)] hover:bg-[rgba(255,122,24,0.04)]"
              >
                <span className="text-[var(--accent-amber)]">
                  <MailIcon />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-[10px] text-[var(--foreground)]">
                    thadeshan527@gmail.com
                  </span>
                </span>

                <span className="text-[var(--muted-dark)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent-amber)]">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            SOCIAL / STATUS
        ========================================================= */}

        <div className="flex flex-col gap-8 border-t border-[var(--border)] py-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/deshannn.h/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-amber)] hover:text-[var(--foreground)]"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/deshan-herath-035a7a192/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-cyan)] hover:text-[var(--foreground)]"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://wa.me/94770304719"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-cyan)] hover:text-[var(--foreground)]"
            >
              <WhatsAppIcon />
            </a>

            <a
              href="mailto:thadeshan527@gmail.com"
              aria-label="Email"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-amber)] hover:text-[var(--foreground)]"
            >
              <MailIcon />
            </a>
          </div>

          {/* Live status */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-cyan)] opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-cyan)]" />
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                Available for projects
              </span>
            </div>

            <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

            <span className="hidden font-mono text-[8px] tracking-[0.16em] text-[var(--muted-dark)] sm:block">
              SLT {time || "--:--:--"}
            </span>
          </div>
        </div>

        {/* =========================================================
            COPYRIGHT
        ========================================================= */}

        <div className="flex flex-col gap-3 border-t border-[var(--border)] py-6 text-[8px] uppercase tracking-[0.16em] text-[var(--muted-dark)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} PixelForge. All Rights Reserved.
          </span>

          <span className="text-center sm:text-left">
            Where Design Meets Technology.
          </span>

          <span>
            Built by{" "}
            <span className="text-[var(--foreground)]">Deshan Herath</span>
          </span>
        </div>
      </div>
    </footer>
  );
}