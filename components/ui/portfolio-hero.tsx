"use client";

import * as React from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const MENU_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "WRITING", href: "#writing" },
  { label: "CONTACT", href: "#contact" },
];

// Constellation: random but stable points
function generateStars(count: number, seed = 7) {
  const stars: { x: number; y: number; r: number; delay: number }[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      r: 0.5 + rand() * 1.6,
      delay: rand() * 4,
    });
  }
  return stars;
}
const STARS = generateStars(70);

function Constellation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {STARS.map((s, i) => (
          <g key={i}>
            <circle
              cx={`${s.x}%`}
              cy={`${s.y}%`}
              r={s.r}
              fill="#C3E41D"
              opacity={0.35 + s.r / 4}
            >
              <animate
                attributeName="opacity"
                values={`${0.2 + s.r / 6};${0.8};${0.2 + s.r / 6}`}
                dur={`${3 + s.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
        {/* connecting lines between nearby stars */}
        {STARS.slice(0, 30).map((s, i) => {
          const next = STARS.slice(30)[i % 30];
          if (!next) return null;
          const dx = s.x - next.x;
          const dy = s.y - next.y;
          if (Math.hypot(dx, dy) > 22) return null;
          return (
            <line
              key={`l${i}`}
              x1={`${s.x}%`}
              y1={`${s.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke="#C3E41D"
              strokeOpacity="0.12"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
      {/* scanning line */}
      <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-neon/10 to-transparent" />
    </div>
  );
}

function HudCorners({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute -left-2 -top-2 h-3 w-3 border-l border-t border-neon/70" />
      <span className="absolute -right-2 -top-2 h-3 w-3 border-r border-t border-neon/70" />
      <span className="absolute -bottom-2 -left-2 h-3 w-3 border-b border-l border-neon/70" />
      <span className="absolute -bottom-2 -right-2 h-3 w-3 border-b border-r border-neon/70" />
      {children}
    </div>
  );
}

export function PortfolioHero() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [time, setTime] = React.useState("");
  const [bootLines, setBootLines] = React.useState<string[]>([]);

  const BOOT = [
    "INITIALIZING SYSTEM…",
    "DECRYPTING NEURAL LINK…",
    "LOADING PORTFOLIO MODULE v2.4.1",
    "USER DETECTED: HUSSAIN ALKHALDI \"H A X\"",
    "STATUS: ONLINE • LOCATION: KL, MY",
    "READY.",
  ];

  React.useEffect(() => {
    setLoaded(true);
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);

    let i = 0;
    const bootId = setInterval(() => {
      setBootLines((prev) => [...prev.slice(-5), BOOT[i]]);
      i++;
      if (i >= BOOT.length) clearInterval(bootId);
    }, 280);

    return () => {
      clearInterval(id);
      clearInterval(bootId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <Constellation />
      <div className="absolute inset-0 bg-scanlines opacity-50" />

      {/* Top Nav */}
      <header className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-neon shadow-[0_0_10px_#C3E41D]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="HAX"
            className="logo-neon h-7 w-auto md:h-8"
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {MENU_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative font-hud text-xs tracking-widest text-neutral-400 transition-colors duration-300 hover:text-neon"
            >
              <span className="mr-1 text-neon/40">
                0{idx + 1}
              </span>
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-neutral-300 transition-all duration-300 hover:border-neon hover:text-neon hover:shadow-neon-soft md:hidden"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute right-4 top-20 z-30 w-60 rounded-xl border border-neon/30 bg-black/90 p-5 shadow-neon-soft backdrop-blur-md md:hidden">
          {MENU_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-hud text-xs tracking-widest text-neutral-300 transition-colors hover:text-neon"
            >
              <span className="mr-2 text-neon/50">0{idx + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Status pill */}
        <div
          className={cn(
            "mb-8 flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 font-hud text-[10px] tracking-widest text-neon opacity-0 backdrop-blur transition-opacity duration-1000",
            loaded && "opacity-100"
          )}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
          AVAILABLE FOR INTERNSHIPS • KL, MY
          <span className="mx-1 h-3 w-px bg-neon/40" />
          <span className="text-neon/70">{time}</span>
        </div>

        {/* Eyebrow */}
        <div
          className={cn(
            "mb-4 font-hud text-[10px] tracking-[0.4em] text-neutral-500 opacity-0 transition-opacity duration-1000 delay-200",
            loaded && "opacity-100"
          )}
        >
          [ SYS::WELCOME ] ── HUSSAIN ALKHALDI ── SOFTWARE_ENGINEER
        </div>

        {/* Kinetic HAX */}
        <HudCorners>
          <h1
            className={cn(
              "relative font-code text-[22vw] font-bold leading-[0.85] tracking-tighter opacity-0 transition-opacity duration-1000 delay-300 md:text-[16vw]",
              loaded && "opacity-100"
            )}
          >
            <span className="block text-neon text-glow animate-flicker">
              HAX
            </span>
          </h1>
        </HudCorners>

        {/* Signature */}
        <div
          className={cn(
            "mt-6 font-display text-2xl font-light tracking-[0.2em] text-neutral-200 opacity-0 transition-opacity duration-1000 delay-500 md:text-3xl",
            loaded && "opacity-100"
          )}
        >
          HUSSAIN <span className="text-neon/60">·</span> ALKHALDI{" "}
          <span className="text-neon/60">&ldquo;</span>
          <span className="font-code text-neon">H A X</span>
          <span className="text-neon/60">&rdquo;</span>
        </div>

        {/* Tagline */}
        <p
          className={cn(
            "mt-6 max-w-2xl font-display text-base text-neutral-400 opacity-0 transition-opacity duration-1000 delay-700 md:text-lg",
            loaded && "opacity-100"
          )}
        >
          Software engineering student{" "}
          <span className="text-neon/60">/</span> Former graphic designer{" "}
          <span className="text-neon/60">/</span> Builder of chatbots &amp;
          full‑stack systems
        </p>

        {/* Location */}
        <div
          className={cn(
            "mt-3 flex items-center gap-2 font-hud text-[10px] tracking-widest text-neutral-500 opacity-0 transition-opacity duration-1000 delay-800",
            loaded && "opacity-100"
          )}
        >
          <span className="h-px w-8 bg-neon/40" />
          IRAN → KUWAIT → KUALA LUMPUR, MALAYSIA
          <span className="h-px w-8 bg-neon/40" />
        </div>

        {/* Terminal-style status */}
        <div
          className={cn(
            "mt-10 hidden max-w-2xl rounded-lg border border-neon/20 bg-black/70 p-4 font-hud text-[11px] leading-relaxed text-neon/80 opacity-0 transition-opacity duration-1000 delay-900 sm:block",
            loaded && "opacity-100"
          )}
        >
          <div className="mb-2 flex items-center gap-1.5 text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-red-500/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <span className="h-2 w-2 rounded-full bg-neon/80" />
            <span className="ml-2">~/hax/portfolio — boot</span>
          </div>
          {bootLines.map((line, i) => (
            <div key={i} className="text-neon/70">
              <span className="text-neon/40">$ </span>
              {line}
            </div>
          ))}
          <div className="text-neon">
            <span className="text-neon/40">$ </span>
            <span className="animate-blink">█</span>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={cn(
            "mt-12 mb-24 flex flex-col items-center gap-4 opacity-0 transition-opacity duration-1000 delay-1000 sm:mb-32 sm:flex-row",
            loaded && "opacity-100"
          )}
        >
          <a
            href="#projects"
            className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-none border border-neon bg-neon/10 px-8 py-3 font-hud text-xs font-bold tracking-widest text-neon transition-all duration-300 hover:bg-neon hover:text-black hover:shadow-neon"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW PROJECTS
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-none border border-white/15 bg-white/5 px-8 py-3 font-hud text-xs font-bold tracking-widest text-white transition-all duration-300 hover:border-neon hover:text-neon hover:shadow-neon-soft"
          >
            LET&apos;S TALK
            <span className="text-neon/60 transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Ticker / status bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-neon/20 bg-black/70 px-6 py-3 font-hud text-[10px] tracking-widest text-neutral-400 backdrop-blur-sm md:px-12">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
            ONLINE
          </span>
          <span className="hidden sm:inline">LAT 3.1390° • LON 101.6869°</span>
        </div>
        <div className="hidden overflow-hidden md:block md:max-w-md md:flex-1">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-8">
                <span>◆ SOFTWARE ENGINEERING @ APU</span>
                <span>◆ BUILDING CHATBOTS &amp; FULL‑STACK SYSTEMS</span>
                <span>◆ FORMER GRAPHIC DESIGNER + CODE</span>
                <span>◆ OPEN TO INTERNSHIPS</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          SCROLL
          <ChevronDown className="h-3 w-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
