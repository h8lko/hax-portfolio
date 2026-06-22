"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    title: "Languages & frameworks",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C#",
      "C++",
      "Assembly",
      "VB.NET (basic)",
      "Node.js",
      "Flask",
      "FastAPI",
      "Flutter",
      "R",
    ],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React (learning)", "Next.js (learning)"],
  },
  {
    title: "Databases & tools",
    items: ["Microsoft SQL Server", "SQLite", "Firebase"],
  },
  {
    title: "Tools & IDEs",
    items: [
      "NetBeans",
      "Visual Studio",
      "VS Code",
      "RStudio",
      "Ubuntu",
      "Cisco Packet Tracer",
    ],
  },
];

const strengths = [
  "Java",
  "Python",
  "Full‑stack development",
  "APIs / Backend services",
];

export function SkillsSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/SKILLS"
          title="Skills"
          description="Strengths first, then the full toolkit grouped by area."
        />

        <div
          className={cn(
            "opacity-0 transition-all duration-1000",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {/* Strengths */}
          <div className="mb-12 rounded-xl border border-neon/20 bg-neon/5 p-6">
            <p className="mb-3 font-code text-xs tracking-widest text-neon">
              CORE STRENGTHS
            </p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <Badge key={s} variant="neon">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-neon/40"
              >
                <h3 className="mb-4 font-hud text-xs tracking-widest text-neon">
                  {g.title.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-hud text-xs text-neutral-300 transition-colors duration-300 hover:border-neon/60 hover:text-neon"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
