import { PortfolioHero } from "@/components/ui/portfolio-hero";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { AboutSection } from "@/components/section-about";
import { ProjectsSection } from "@/components/section-projects";
import { SkillsSection } from "@/components/section-skills";
import { EducationSection } from "@/components/section-education";
import { CertificationsSection } from "@/components/section-certifications";
import { ContactSection } from "@/components/section-contact";
import {
  ExperienceSection,
  WritingSection,
} from "@/components/section-experience-writing";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PortfolioHero />
      <AboutSection />
      <ProjectShowcase />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <WritingSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
