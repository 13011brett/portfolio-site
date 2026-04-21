"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <h2 id="projects-heading" className="section-heading">
          Projects
        </h2>
        <p className="section-subheading">
          A selection of things I&apos;ve built.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="card group flex flex-col"
            >
              {/* Image gallery */}
              {project.images && project.images.length > 0 && (
                <ProjectGallery
                  images={project.images}
                  projectTitle={project.title}
                />
              )}

              {/* Featured badge */}
              {project.featured && (
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                    Featured
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    aria-label={`View ${project.title} live demo (opens in new tab)`}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGallery({
  images,
  projectTitle,
}: {
  images: string[];
  projectTitle: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-2"
        : "grid-cols-2";

  return (
    <>
      <div className={`grid ${gridClass} gap-2 mb-4 -mx-6 -mt-6`}>
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(i)}
            className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 focus-visible:ring-inset ${
              images.length === 1
                ? "aspect-video rounded-t-2xl"
                : images.length === 3 && i === 0
                  ? "aspect-video row-span-2 rounded-tl-2xl"
                  : i === 0
                    ? "aspect-video rounded-tl-2xl"
                    : i === 1 && images.length === 2
                      ? "aspect-video rounded-tr-2xl"
                      : i === 1
                        ? "aspect-square rounded-tr-2xl"
                        : "aspect-square"
            }`}
            aria-label={`View screenshot ${i + 1} of ${images.length} for ${projectTitle}`}
          >
            <Image
              src={src}
              alt={`${projectTitle} screenshot ${i + 1}`}
              fill
              sizes={images.length === 1 ? "100vw" : "50vw"}
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          projectTitle={projectTitle}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  currentIndex,
  projectTitle,
  onClose,
  onNavigate,
}: {
  images: string[];
  currentIndex: number;
  projectTitle: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && currentIndex > 0)
      onNavigate(currentIndex - 1);
    if (e.key === "ArrowRight" && currentIndex < images.length - 1)
      onNavigate(currentIndex + 1);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-label={`${projectTitle} screenshot ${currentIndex + 1} of ${images.length}`}
      aria-modal="true"
      tabIndex={0}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <XIcon className="h-6 w-6" />
      </button>

      {/* Previous */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} screenshot ${currentIndex + 1}`}
          width={1200}
          height={675}
          className="rounded-lg object-contain max-h-[85vh] w-auto"
        />
        {images.length > 1 && (
          <p className="mt-3 text-center text-sm text-white/60">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}