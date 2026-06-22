"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hussainalkhaldi819@gmail.com",
    href: "mailto:hussainalkhaldi819@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+60 1140606146",
    href: "tel:+601140606146",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "/in/hossein-shahram-khaledi",
    href: "https://www.linkedin.com/in/hossein-shahram-khaledi-941178402",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/h8lko",
    href: "https://github.com/h8lko",
  },
];

export function ContactSection() {
  const { ref, visible } = useFadeInOnScroll();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sub = encodeURIComponent(
      subject || `Portfolio inquiry from ${name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message || "Hi HAX, I'd like to connect."}`,
    );
    window.location.href = `mailto:hussainalkhaldi819@gmail.com?subject=${sub}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden bg-neutral-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-neon/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-12">
        <SectionHeading
          eyebrow="/LET'S TALK"
          title="Get in Touch"
          description="Open to internships, full‑stack projects, and form‑design work."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-10 opacity-0 transition-all duration-1000 lg:grid-cols-5",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {/* Contact links */}
          <div className="space-y-3 lg:col-span-2">
            {contactItems.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:bg-neon/5 hover:shadow-neon-soft"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg border border-neon/30 bg-neon/10 p-2.5 text-neon transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-hud text-[10px] tracking-widest text-neutral-500">
                        {c.label}
                      </p>
                      <p className="font-hud text-sm text-white transition-colors group-hover:text-neon">
                        {c.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-neon" />
                </a>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neon/20 bg-black/60 p-6 shadow-neon-soft backdrop-blur lg:col-span-3"
          >
            <div className="mb-5 flex items-center justify-between font-hud text-[10px] tracking-widest text-neon/70">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
                COMMS_LINK / ACTIVE
              </span>
              <span>{submitted ? "SENT" : "READY"}</span>
            </div>

            <p className="mb-4 font-hud text-xs tracking-widest text-neon">
              QUICK_MESSAGE
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="NAME">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="border-white/10 bg-black/40 font-hud text-white placeholder:text-neutral-600 focus-visible:border-neon focus-visible:ring-neon"
                  />
                </Field>
                <Field label="EMAIL">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="border-white/10 bg-black/40 font-hud text-white placeholder:text-neutral-600 focus-visible:border-neon focus-visible:ring-neon"
                  />
                </Field>
              </div>

              <Field label="SUBJECT">
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="border-white/10 bg-black/40 font-hud text-white placeholder:text-neutral-600 focus-visible:border-neon focus-visible:ring-neon"
                />
              </Field>

              <Field label="MESSAGE">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit more…"
                  rows={5}
                  className="border-white/10 bg-black/40 font-hud text-white placeholder:text-neutral-600 focus-visible:border-neon focus-visible:ring-neon"
                />
              </Field>

              <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
                <p className="font-hud text-[10px] tracking-widest text-neutral-500">
                  {">"} SUBMIT OPENS YOUR MAIL CLIENT WITH A PRE‑FILLED MESSAGE.
                </p>
                <Button
                  type="submit"
                  variant="neon"
                  className="w-full sm:w-auto"
                >
                  {submitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> SENT
                    </>
                  ) : (
                    <>
                      TRANSMIT
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block font-hud text-[10px] tracking-widest text-neutral-500">
        {label}
      </label>
      {children}
    </div>
  );
}

export default ContactSection;
