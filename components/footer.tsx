import * as React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-12">
        <p className="font-code text-[10px] tracking-widest text-neutral-500">
          © {new Date().getFullYear()} HUSSAIN ALKHALDI • BUILT WITH NEXT.JS
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/h8lko"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors duration-300 hover:border-neon hover:text-neon"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hossein-shahram-khaledi-941178402"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors duration-300 hover:border-neon hover:text-neon"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hussainalkhaldi819@gmail.com"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors duration-300 hover:border-neon hover:text-neon"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
