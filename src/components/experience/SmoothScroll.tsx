"use client";

import { ReactNode, useEffect, useSyncExternalStore } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

function subscribeToEligibility(callback: () => void) {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const targets = [finePointer, reducedMotion];
  const trigger = () => callback();

  for (const target of targets) {
    if (typeof target.addEventListener === "function") {
      target.addEventListener("change", trigger);
    } else if (typeof target.addListener === "function") {
      target.addListener(trigger);
    }
  }

  // TEMPORARY diagnostic hook: lets the touch forensics A/B test
  // force Lenis off/on live (window.__pfForceLenisOff + custom event).
  const handleOverride = () => callback();

  window.addEventListener("pf-lenis-override", handleOverride);

  return () => {
    window.removeEventListener("pf-lenis-override", handleOverride);

    for (const target of targets) {
      if (typeof target.removeEventListener === "function") {
        target.removeEventListener("change", trigger);
      } else if (typeof target.removeListener === "function") {
        target.removeListener(trigger);
      }
    }
  };
}

// TEMPORARY diagnostic: ?lenisoff in the URL (or the live flag set by
// forensics) forces Lenis off. Never true in normal navigation.
function isLenisOverrideActive(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    if ((window as Window & { __pfForceLenisOff?: boolean }).__pfForceLenisOff) {
      return true;
    }

    if (new URLSearchParams(window.location.search).has("lenisoff")) {
      return true;
    }
  } catch {
    return false;
  }

  return false;
}

function getEligibilitySnapshot(): boolean {
  if (isLenisOverrideActive()) {
    return false;
  }

  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return finePointer && !reducedMotion;
}

function getEligibilityServerSnapshot(): boolean {
  return false;
}

function ScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const eligible = useSyncExternalStore(
    subscribeToEligibility,
    getEligibilitySnapshot,
    getEligibilityServerSnapshot,
  );

  if (!eligible) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}