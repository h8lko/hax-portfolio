"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AriGatueX",
    subtitle: "Flutter Cake Ordering App",
    description:
      "A cross‑platform mobile ordering experience focused on small bakeries, with cart, checkout, and order tracking.",
    year: "In Progress",
    stack: ["Flutter", "Dart", "Firebase"],
    link: "#",
  },
  {
    title: "FC Barcelona Fan Website",
    subtitle: "Messi page + Players page",
    description:
      "A tribute site with a dedicated Lionel Messi page and a players section. Built with HTML, CSS, and a sprinkle of JavaScript.",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/h8lko/FC-Barcelona-Fan-Website",
  },
];

export function ProjectsSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="projects-extra"
      ref={ref}
      className="relative w-full bg-black text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/ALL PROJECTS"
          title="More Projects"
          description="Side projects, experiments, and tributes that don't fit in the animated showcase."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-6 opacity-0 transition-all duration-1000 md:grid-cols-2",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target={p.link === "#" ? undefined : "_blank"}
              rel={p.link === "#" ? undefined : "noopener noreferrer"}
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:shadow-[0_0_30px_rgba(195,228,29,0.15)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-code text-2xl font-bold transition-colors duration-300 group-hover:text-neon">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-antic text-sm text-neutral-400">
                    {p.subtitle}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-neon" />
              </div>

              <p className="mt-4 font-display text-sm text-neutral-300">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neon/20 bg-neon/5 px-3 py-1 font-hud text-[10px] tracking-widest text-neon"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 font-code text-[10px] tracking-widest text-neutral-500">
                {p.year}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
