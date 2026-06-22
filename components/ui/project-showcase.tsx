"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
  tag: string;
};

const projects: Project[] = [
  {
    title: "NASA AI Chatbot",
    description:
      "Space‑focused AI chatbot with a secondary ocean exploration mode.",
    year: "2026",
    link: "https://github.com/h8lko/cosmos-space-ocean-ai",
    image: "/projects/nasa-chatbot.jpg",
    tag: "AI / NLP",
  },
  {
    title: "Assessment Feedback System (AFS)",
    description:
      "Role‑based Java OOP system for academic module management and feedback.",
    year: "2026",
    link: "https://github.com/h8lko/Assessment-Feedback-System",
    image: "/projects/afs.jpg",
    tag: "JAVA / OOP",
  },
  {
    title: "Analysis of Cyber‑Attack Events",
    description:
      "R data analysis studying trends, outliers, and financial impact of web defacements.",
    year: "2026",
    link: "https://github.com/h8lko/Analysis-of-Cyber-Attack-Events",
    image: "/projects/cyber-attack.jpg",
    tag: "DATA / R",
  },
  {
    title: "MyARFMS (C# + SQL)",
    description:
      "Facility booking & maintenance management system backed by MS SQL Server.",
    year: "2025",
    link: "https://github.com/h8lko/IOOP-Group-Assignment",
    image: "/projects/myarfms.jpg",
    tag: "C# / SQL",
  },
];

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [hovering, setHovering] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const el = sectionRef.current;
    if (el) el.addEventListener("mousemove", onMove);
    return () => {
      if (el) el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative w-full overflow-hidden bg-neutral-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />

      {/* Cursor glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute z-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500",
          hovering && "opacity-30"
        )}
        style={{
          left: cursor.x,
          top: cursor.y,
          background:
            "radial-gradient(circle, rgba(195,228,29,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-12">
        {/* Header row */}
        <div className="mb-16 grid grid-cols-1 items-end gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-3 inline-flex items-center gap-2 font-hud text-xs tracking-widest text-neon">
              <span className="h-px w-8 bg-neon" />
              /SELECTED_WORK
            </p>
            <h2 className="font-code text-4xl font-bold md:text-7xl">
              Featured
              <span className="block text-neon text-glow">Projects.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm font-display text-sm text-neutral-400 md:block">
            <span className="font-hud text-neon/60">
              {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>{" "}
            — hover the index to preview. Each build taught me something new.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* List — col-span 7, asymmetric */}
          <ul className="flex flex-col lg:col-span-7">
            {projects.map((p, i) => (
              <li
                key={p.title}
                onMouseEnter={() => setActiveIndex(i)}
                className={cn(
                  "group relative cursor-pointer border-b border-white/5 py-7 transition-all duration-500",
                  activeIndex === i
                    ? "translate-x-3 opacity-100"
                    : "opacity-40 hover:opacity-80"
                )}
              >
                {/* Active indicator bar */}
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 bg-neon transition-all duration-500",
                    activeIndex === i
                      ? "opacity-100 shadow-[0_0_20px_#C3E41D]"
                      : "opacity-0"
                  )}
                />

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-baseline justify-between gap-4 pl-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-hud text-xs text-neon/50">
                        0{i + 1}
                      </span>
                      <h3
                        className={cn(
                          "font-code text-2xl font-bold transition-colors duration-300 md:text-3xl",
                          activeIndex === i
                            ? "text-neon text-glow"
                            : "text-white group-hover:text-neon"
                        )}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-hud text-[10px] tracking-widest text-neutral-500">
                      {p.year}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 pl-12">
                    <span className="font-hud text-[10px] tracking-widest text-neon/70">
                      [{p.tag}]
                    </span>
                    <p className="font-display text-sm text-neutral-400">
                      {p.description}
                    </p>
                  </div>

                  <span className="mt-3 inline-flex items-center gap-1 pl-12 font-hud text-[10px] tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-neon">
                    VIEW PROJECT
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Preview — col-span 5, sticky feel */}
          <div className="relative lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-neon/30 bg-black shadow-neon">
              {/* HUD frame */}
              <div className="flex items-center justify-between border-b border-neon/20 bg-black/60 px-4 py-2 font-hud text-[10px] tracking-widest text-neon/70">
                <span>PREVIEW_LIVE</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
                  REC
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                {projects.map((p, i) => (
                  <div
                    key={p.title}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      activeIndex === i
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    )}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-scanlines opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="mb-1 font-hud text-[10px] tracking-widest text-neon">
                        PROJECT {String(i + 1).padStart(2, "0")} / {p.year}
                      </p>
                      <h4 className="font-code text-2xl font-bold">
                        {p.title}
                      </h4>
                      <p className="mt-2 font-display text-sm text-neutral-300">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Corner brackets */}
                <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-neon/70" />
                <span className="absolute right-2 top-2 h-4 w-4 border-r border-t border-neon/70" />
                <span className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-neon/70" />
                <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-neon/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
