"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/30 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/10"
        aria-hidden="true"
      />

      <div className="section-container pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-2xl">
          {/* Greeting badge */}
          <div className="mb-6 animate-fade-in">
            <span className="badge">Available for opportunities</span>
          </div>

          {/* Name & title */}
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl animate-fade-in-up"
          >
            {SITE_CONFIG.name}
          </h1>
          <p className="mt-2 text-xl font-medium text-indigo-600 dark:text-indigo-400 animate-fade-in-up animation-delay-100">
            {SITE_CONFIG.title}
          </p>

          {/* Bio */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-200">
            9+ years building enterprise web applications across the full stack.
            I specialize in <strong className="text-gray-900 dark:text-white">React</strong>,{" "}
            <strong className="text-gray-900 dark:text-white">Next.js</strong>,{" "}
            <strong className="text-gray-900 dark:text-white">C#/.NET</strong>, and{" "}
            <strong className="text-gray-900 dark:text-white">TypeScript</strong> — with a
            deep focus on accessibility and performance.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="mt-12 flex gap-8 border-t border-gray-200 dark:border-gray-800 pt-8 animate-fade-in-up animation-delay-400"
            aria-label="Career highlights"
          >
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">9+</p>
              <p className="text-sm text-gray-500">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">508</p>
              <p className="text-sm text-gray-500">Compliant builds</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">Full Stack</p>
              <p className="text-sm text-gray-500">.NET to React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}