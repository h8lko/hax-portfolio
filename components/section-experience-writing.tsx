"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { ExperienceCases } from "@/components/section-experience-cases";
import { cn } from "@/lib/utils";

const experience = [
  {
    role: "Esports Studio Contributor",
    org: "Esports / Graphic Design",
    period: "Prior",
    bullets: [
      "Produced broadcast graphics and match overlays for streamed events.",
      "Designed social media assets and team branding collateral.",
      "Coordinated with talent and production on tight broadcast schedules.",
    ],
    cases: [
      {
        id: "esports-roster",
        problem:
          "Key players left teams before tournaments, causing roster instability.",
        solution:
          "Built a structured player retention system with performance reviews and clear career progression plans.",
        result:
          "Improved roster stability and eliminated last-minute player replacements during competitive seasons.",
      },
      {
        id: "esports-data",
        problem:
          "Team decisions were based on opinions with no objective data.",
        solution:
          "Introduced match analysis systems, statistical tracking, and post-game review processes.",
        result:
          "Improved drafting accuracy, strategy development, and player evaluation quality.",
      },
      {
        id: "esports-comms",
        problem:
          "Multi-national team members had communication breakdowns due to language and cultural differences.",
        solution:
          "Established standardized communication procedures and designated English as the operational language.",
        result:
          "Reduced internal conflicts and improved team coordination across the roster.",
      },
    ],
  },
  {
    role: "Graphic Design Studio",
    org: "Studio work",
    period: "Prior",
    bullets: [
      "Delivered form‑centric visual assets and brand systems for clients.",
      "Translated briefs into reusable components and design tokens.",
      "Worked with print and digital pipelines across multiple projects.",
    ],
    cases: [
      {
        id: "design-scope",
        problem:
          "Clients requested unlimited revisions, causing project delays and profitability issues.",
        solution:
          "Introduced a project scope system with defined revision limits and milestone sign-offs.",
        result:
          "Reduced project delays and set clearer client expectations from day one.",
      },
      {
        id: "design-brand",
        problem:
          "Clients received designs that lacked visual consistency across platforms.",
        solution:
          "Built comprehensive brand guideline documents covering typography, color systems, and logo usage.",
        result:
          "Delivered consistent brand identity across print and digital, increasing client satisfaction.",
      },
      {
        id: "design-files",
        problem:
          "Design files were scattered across devices, causing version control issues and wasted time.",
        solution:
          "Implemented centralized cloud-based asset management with standardized file naming conventions.",
        result:
          "Faster project delivery and near-zero production errors from file mix-ups.",
      },
    ],
  },
];

const writing = [
  {
    title: "Building a NASA‑themed AI Chatbot",
    note: "Lessons from prompt design, intent routing, and a hidden ocean mode.",
  },
  {
    title: "How Being a Former Graphic Designer Shapes My Software Engineering",
    note: "How a graphic design background shapes better developer tooling.",
  },
];

export function ExperienceSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative w-full bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/EXPERIENCE"
          title="Experience"
          description="Roles and studios that shaped my design and engineering eye."
        />

        <div
          className={cn(
            "space-y-6 opacity-0 transition-all duration-1000",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {experience.map((e) => (
            <div
              key={e.role}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-neon/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-code text-xl font-bold">{e.role}</h3>
                <span className="font-code text-xs tracking-widest text-neutral-500">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 font-hud text-sm text-neon">{e.org}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 font-display text-sm text-neutral-300">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ExperienceCases cases={e.cases} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WritingSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="writing"
      ref={ref}
      className="relative w-full bg-black text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/WRITING"
          title="Notes"
          description="Short posts and notes (placeholders for now)."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-6 opacity-0 transition-all duration-1000 md:grid-cols-2",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {writing.map((w) => (
            <article
              key={w.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/60"
            >
              <h3 className="font-code text-lg font-bold transition-colors duration-300 hover:text-neon">
                {w.title}
              </h3>
              <p className="mt-2 font-display text-sm text-neutral-400">
                {w.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
