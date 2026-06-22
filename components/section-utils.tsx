"use client";

import * as React from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-hud text-xs tracking-widest text-neon">
        {eyebrow}
      </p>
      <h2 className="font-code text-4xl font-bold md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl font-display text-base text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

export function useFadeInOnScroll() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}
