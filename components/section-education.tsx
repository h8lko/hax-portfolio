"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { cn } from "@/lib/utils";

export function EducationSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="education"
      ref={ref}
      className="relative w-full bg-black text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/EDUCATION"
          title="Education"
          description="Formal study and current focus."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-6 opacity-0 transition-all duration-1000",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="font-code text-xs tracking-widest text-neon">
              BACHELOR OF SCIENCE (HONS)
            </p>
            <h3 className="mt-2 font-code text-2xl font-bold">
              Software Engineering
            </h3>
            <p className="mt-2 font-display text-base text-neutral-300">
              Asia Pacific University (APU), Kuala Lumpur, Malaysia
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 font-code text-xs tracking-widest text-neutral-400">
              <Field label="INTAKE / ID" value="APD2F2511SE" />
              <Field label="EXPECTED" value="NOV 2027" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
      <div className="text-[10px] text-neutral-500">{label}</div>
      <div className="mt-1 text-sm text-neon">{value}</div>
    </div>
  );
}

export default EducationSection;
