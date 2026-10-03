"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };

    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[var(--z-navigation)] transition-all duration-700 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(7,8,12,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 transition-all duration-700 sm:px-8 lg:px-12 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
        {/* Brand */}
        <Link
  href="/"
  className="group relative z-10 flex items-center"
  aria-label="PixelForge home"
>
  <Image
    src="/pixelforge-mark.png"
    alt="PixelForge"
    width={42}
    height={42}
    priority
    className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-10 sm:w-10"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent-amber)] transition-all duration-400 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          href="/#contact"
          className="group relative hidden items-center gap-3 overflow-hidden rounded-full border border-[rgba(244,241,234,0.22)] bg-[rgba(244,241,234,0.025)] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--foreground)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)] hover:shadow-[0_0_28px_rgba(255,122,24,0.12)] md:flex"
        >
          {/* Animated amber fill */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,122,24,0.10),rgba(255,122,24,0.16))] transition-transform duration-700 ease-out group-hover:translate-x-0"
          />

          {/* Animated border glow */}
          <span
            aria-hidden="true"
            className="absolute inset-[1px] rounded-full border border-transparent transition-all duration-500 group-hover:border-[rgba(255,122,24,0.22)]"
          />

          <span className="relative z-10">Start a Project</span>

          <span
            aria-hidden="true"
            className="relative z-10 text-[13px] leading-none text-[var(--accent-amber)] transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>

          {/* Small accent point */}
          <span
            aria-hidden="true"
            className="absolute left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[var(--accent-amber)] opacity-50 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="pf-mobile-menu"
            aria-haspopup="menu"
            className={`pf-menu-toggle relative z-30 flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-500 active:scale-[0.98] active:border-[var(--accent-amber)] ${
              menuOpen
                ? "border-[var(--accent-amber)] bg-[var(--surface)]/50 text-[var(--accent-amber)]"
                : scrolled
                  ? "border-[var(--border-strong)] bg-[var(--surface)]/50 text-[var(--foreground)]"
                  : "border-[var(--border-strong)] bg-transparent text-[var(--foreground)]"
            } hover:border-[var(--accent-amber)]`}
          >
            <span>Menu</span>

            <span
              aria-hidden="true"
              className={`text-[13px] transition-transform duration-300 ${
                menuOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
            className={`pf-mobile-menu-backdrop fixed inset-0 z-20 bg-[rgba(7,8,12,0.55)] backdrop-blur-sm ${
              menuOpen ? "pf-is-open" : ""
            }`}
          />

          {/* Panel */}
          <div
            id="pf-mobile-menu"
            className={`pf-mobile-menu-panel absolute right-0 top-14 z-30 w-64 origin-top-right overflow-y-auto overscroll-contain rounded-2xl border border-[var(--border)] bg-[rgba(17,19,23,0.97)] p-3 shadow-2xl backdrop-blur-xl max-h-[calc(100dvh-5rem)] ${
              menuOpen ? "pf-is-open" : ""
            }`}
          >
            <div className="flex flex-col">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    transitionDelay: menuOpen
                      ? `${80 + index * 40}ms`
                      : "0ms",
                  }}
                  className="pf-mobile-menu-item group flex items-center justify-between rounded-xl px-4 py-3 text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    className="translate-x-[-4px] text-[var(--muted-dark)] opacity-0 transition-all duration-300 group-active:translate-x-0 group-active:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen
                    ? `${80 + navigationItems.length * 40}ms`
                    : "0ms",
                }}
                className="pf-mobile-menu-item group relative mt-2 flex items-center justify-between overflow-hidden rounded-xl border border-[rgba(255,122,24,0.55)] bg-[rgba(255,122,24,0.06)] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent-amber)] transition-all duration-500 hover:border-[var(--accent-amber)] hover:bg-[rgba(255,122,24,0.12)] hover:shadow-[0_0_24px_rgba(255,122,24,0.12)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,122,24,0.12),transparent)] transition-transform duration-700 group-hover:translate-x-full"
                />

                <span className="relative z-10">Start a Project</span>

                <span
                  aria-hidden="true"
                  className="relative z-10 text-[13px] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}