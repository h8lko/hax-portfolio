"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { Code2, Cpu, Sparkles, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Code2,
    title: "Full‑stack",
    body: "Java, Python, Node.js, Flutter — APIs and UI in one head.",
  },
  {
    icon: Cpu,
    title: "AI / Chatbots",
    body: "Built a space‑themed AI assistant with a hidden ocean mode.",
  },
  {
    icon: Sparkles,
    title: "Former Graphic Designer",
    body: "Graphic‑design roots — I care about how things look and feel.",
  },
];

export function AboutSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-neon/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-12">
        <SectionHeading
          eyebrow="/ABOUT"
          title="About"
          description="A short introduction — origins, focus, and what I'm building next."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-12 opacity-0 transition-all duration-1000 md:grid-cols-5",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {/* Avatar / identity block */}
          <div className="md:col-span-2">
            <div className="group relative">
              {/* HUD frame */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neon/30 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 shadow-neon-soft">
                <div className="absolute inset-0 bg-grid-fine opacity-50" />
                <div className="absolute inset-0 bg-scanlines opacity-40" />

                {/* Concentric ring */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-50"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#C3E41D"
                    strokeOpacity="0.2"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="#C3E41D"
                    strokeOpacity="0.3"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="none"
                    stroke="#C3E41D"
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Orbit dots */}
                <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_10px_#C3E41D] animate-float-slow" />
                <span className="absolute right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-neon shadow-[0_0_8px_#C3E41D] animate-float-slow" />

                {/* Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.png"
                      alt="HAX"
                      className="logo-neon mx-auto h-28 w-auto animate-flicker md:h-36"
                    />
                    <div className="mt-4 font-hud text-[10px] tracking-[0.4em] text-neon/60">
                      IDENTITY / 0xHAX
                    </div>
                  </div>
                </div>

                {/* Corner brackets */}
                <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-neon/80" />
                <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-neon/80" />
                <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-neon/80" />
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-neon/80" />
              </div>

              {/* Status row */}
              <div className="mt-4 grid grid-cols-2 gap-2 font-hud text-[10px] tracking-widest text-neutral-400">
                <div className="rounded border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-neon/50">CLASS</div>
                  <div className="text-neon">HUMAN / DEV</div>
                </div>
                <div className="rounded border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-neon/50">CLEARANCE</div>
                  <div className="text-neon">LVL 03</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 font-hud text-[10px] tracking-widest text-neutral-500">
              <MapPin className="h-3 w-3 text-neon" />
              IRAN → KUWAIT → KUALA LUMPUR, MY
            </div>
          </div>

          {/* Bio + highlights */}
          <div className="md:col-span-3">
            <p className="font-display text-lg leading-relaxed text-neutral-200">
              I&apos;m Hussain Alkhaldi{" "}
              <span className="font-code text-neon text-glow-soft">
                &ldquo;H A X&rdquo;
              </span>
              , a Bachelor of Science (Hons) in Software Engineering student at
              Asia Pacific University (APU) in Kuala Lumpur, Malaysia. Born in
              Kuwait with Iranian roots, I blend software engineering with a
              former graphic designer background, drawing on experience from
              esports and graphic design studios.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-neon-soft"
                  >
                    <Icon className="h-5 w-5 text-neon transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="mt-3 font-code text-sm font-bold">
                      {h.title}
                    </h4>
                    <p className="mt-1 font-display text-xs text-neutral-400">
                      {h.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 font-hud text-xs tracking-widest sm:grid-cols-3">
              <Stat label="FOCUS" value="FULL‑STACK" />
              <Stat label="YEAR" value="2024 — NOW" />
              <Stat label="BASE" value="KUALA LUMPUR" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 transition-colors duration-300 hover:border-neon/50 hover:shadow-neon-soft">
      <div className="text-[10px] text-neutral-500">{label}</div>
      <div className="mt-1 text-sm text-neon">{value}</div>
    </div>
  );
}

export default AboutSection;
