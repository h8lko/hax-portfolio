"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

type CaseStudy = {
  id: string;
  problem: string;
  solution: string;
  result: string;
};

function CaseCard({ study, index, defaultOpen }: { study: CaseStudy; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(Boolean(defaultOpen));

  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-black/40 transition-colors duration-300",
        open ? "border-neon/40" : "hover:border-white/20",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`case-${study.id}-body`}
        className="group flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-hud text-[10px] tracking-widest text-neutral-400 transition-colors duration-200 hover:text-neon"
      >
        <span className="flex items-center gap-2">
          {open ? (
            <ChevronDown className="h-3.5 w-3.5 text-neon" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 text-neutral-500 group-hover:text-neon" />
          )}
          <span className="text-neon/70">CASE_0{index + 1}</span>
          <span className="hidden text-neutral-600 sm:inline">/</span>
          <span className="hidden text-neutral-500 group-hover:text-neutral-300 sm:inline">
            {open ? "collapse" : "expand"}
          </span>
        </span>
        <span className="font-code text-[10px] tracking-widest text-neutral-600 group-hover:text-neon/80">
          P / S / R
        </span>
      </button>

      {open && (
        <div
          id={`case-${study.id}-body`}
          className="grid grid-cols-1 gap-3 border-t border-white/10 p-4 md:grid-cols-3"
        >
          <FieldRow label="PROBLEM" body={study.problem} accent="text-red-300/80" />
          <FieldRow label="SOLUTION" body={study.solution} accent="text-neon" />
          <FieldRow label="RESULT" body={study.result} accent="text-emerald-300/80" />
        </div>
      )}
    </div>
  );
}

function FieldRow({ label, body, accent }: { label: string; body: string; accent: string }) {
  return (
    <div className="rounded border border-white/10 bg-white/5 p-3">
      <div className={cn("font-hud text-[10px] tracking-widest", accent)}>{label}</div>
      <p className="mt-1.5 font-display text-xs leading-relaxed text-neutral-300">
        {body}
      </p>
    </div>
  );
}

export function ExperienceCases({ cases }: { cases: CaseStudy[] }) {
  return (
    <div className="mt-5 space-y-2">
      <div className="flex items-center gap-2 font-hud text-[10px] tracking-widest text-neutral-500">
        <span className="text-neon">{">"}</span>
        <span>CASE_LOGS</span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-neutral-600">{cases.length} ENTRIES</span>
      </div>
      <div className="space-y-2">
        {cases.map((c, i) => (
          <CaseCard key={c.id} study={c} index={i} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceCases;
