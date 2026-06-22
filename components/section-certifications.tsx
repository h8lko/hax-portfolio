"use client";

import * as React from "react";
import { SectionHeading, useFadeInOnScroll } from "@/components/section-utils";
import { Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const certs = [
  {
    title: "One Million Prompters — AI Prompt Engineering",
    issuer: "Dubai Future Foundation",
    year: "2026",
    description:
      "Certification in AI prompt engineering from the One Million Prompters Initiative.",
    file: "/certificates/01-one-million-prompters.pdf",
  },
  {
    title:
      "Developing Cloud-Native Applications with Microservices Architectures",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description:
      "Cloud-native application development and microservices architecture fundamentals.",
    file: "/certificates/02-ibm-cloud-native-microservices.pdf",
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    year: "2025",
    description:
      "Foundational ReactJS training covering components, state, and modern UI development.",
    file: "/certificates/03-simplilearn-reactjs.pdf",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      "Python fundamentals applied to data science workflows and analysis.",
    file: "/certificates/04-ibm-python-101.pdf",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      "Core SQL skills and relational database concepts for data handling.",
    file: "/certificates/05-ibm-sql-relational-db.pdf",
  },
  {
    title: "Tyk Practitioner Certificate",
    issuer: "Tyk",
    year: "2025",
    description:
      "Practical certification for working with the Tyk API management platform.",
    file: "/certificates/06-tyk-practitioner.pdf",
  },
  {
    title: "Introduction to GitHub Copilot",
    issuer: "Microsoft Learn",
    year: "2025",
    description:
      "AI-assisted development with GitHub Copilot and productivity techniques.",
    file: "/certificates/07-ms-github-copilot.pdf",
  },
  {
    title: "Turn Ideas into Reality with Vibe Coding",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description:
      "A creative, low-friction approach to turning concepts into working code.",
    file: "/certificates/08-ibm-vibe-coding.png",
  },
  {
    title: "Digital Marketing Certified",
    issuer: "HubSpot Academy",
    year: "2025",
    description:
      "Inbound digital marketing fundamentals including content, SEO, and social.",
    file: "/certificates/09-hubspot-digital-marketing.png",
  },
  {
    title: "webMethods API Management Basic",
    issuer: "IBM SkillsBuild",
    year: "2025",
    description: "Foundations of API management using IBM webMethods.",
    file: "/certificates/10-ibm-webmethods-api.pdf",
  },
];

export function CertificationsSection() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative w-full bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <SectionHeading
          eyebrow="/CERTIFICATIONS"
          title="Certifications"
          description="Awards, certificates, and recognitions. Click any card to view the credential."
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-6 opacity-0 transition-all duration-1000 md:grid-cols-2 lg:grid-cols-3",
            visible && "opacity-100 translate-y-0",
          )}
          style={{ transform: visible ? "none" : "translateY(20px)" }}
        >
          {certs.map((c) => (
            <a
              key={c.title}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:shadow-[0_0_30px_rgba(195,228,29,0.15)]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-neon/30 bg-neon/10 p-3 text-neon">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-code text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-neon">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-hud text-xs tracking-widest text-neutral-400">
                    {c.issuer} • {c.year}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover:text-neon" />
              </div>

              <p className="mt-4 font-display text-sm text-neutral-300">
                {c.description}
              </p>

              <div className="mt-auto pt-4">
                <span className="font-code text-[10px] tracking-widest text-neon/80">
                  VIEW CREDENTIAL →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
