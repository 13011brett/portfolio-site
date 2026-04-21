import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipNav } from "@/components/layout/SkipNav";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brett Scarlett — Full Stack Engineer",
  description:
    "Senior full stack engineer specializing in .NET, React, Next.js, and TypeScript. Building accessible, performant web applications.",
  keywords: [
    "full stack engineer",
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "C#",
    "accessibility",
    "WCAG",
  ],
  openGraph: {
    title: "Brett Scarlett — Full Stack Engineer",
    description:
      "Senior full stack engineer specializing in .NET, React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased font-sans transition-colors duration-300">
        <ThemeProvider>
          <SkipNav />
          <Header />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
