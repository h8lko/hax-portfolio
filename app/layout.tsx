import type { Metadata } from "next";
import "./globals.css";
import { PortfolioHero } from "@/components/ui/portfolio-hero";

export const metadata: Metadata = {
  title: "HAX — Hussain Alkhaldi | Software Engineering Portfolio",
  description:
    'Personal portfolio of Hussain Alkhaldi "H A X" — software engineering student, former graphic designer, and builder of chatbots & full‑stack systems.',
  keywords: [
    "Hussain Alkhaldi",
    "HAX",
    "Software Engineering",
    "APU",
    "Portfolio",
    "Full Stack",
    "Chatbot",
  ],
};

const THEME_SCRIPT = `
(function () {
  try {
    var saved = window.localStorage.getItem('hax-theme');
    var theme = saved === 'light' ? 'light' : 'dark';
    var root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    root.setAttribute('data-theme', theme);
  } catch (e) {
    // localStorage unavailable; default to dark
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Fira+Code:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
