"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  y = 45,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const isCoarse = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    const startY = isCoarse ? Math.min(y, 22) : y;
    const activeDuration = isCoarse ? Math.min(duration, 0.6) : duration;

    let observer: IntersectionObserver | null = null;
    let context: gsap.Context | null = null;

    const reveal = () => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: activeDuration,
        delay,
        ease: "power3.out",
        overwrite: "auto",
      });

      if (once) {
        observer?.disconnect();
      }
    };

    try {
      context = gsap.context(() => {
        gsap.set(element, {
          opacity: 0,
          y: startY,
        });

        // No observer support → show content immediately rather than
        // leaving it hidden by gsap.set.
        if (!("IntersectionObserver" in window)) {
          reveal();
          return;
        }

        observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) {
              return;
            }

            try {
              reveal();
            } catch {
              // Never allow a failure to strand content at opacity 0.
              element.style.opacity = "1";
              element.style.transform = "none";
            }
          },
          {
            threshold: 0.12,
            rootMargin: "0px 0px -8% 0px",
          },
        );

        observer.observe(element);
      }, element);

      return () => {
        observer?.disconnect();
        context?.revert();
      };
    } catch {
      // Any animation-initialization failure → content stays fully
      // visible. Animation failure must never equal content failure.
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }
  }, [delay, duration, once, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}