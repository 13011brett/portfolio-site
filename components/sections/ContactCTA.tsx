import { SITE_CONFIG } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="section-container text-center">
        <h2 id="contact-heading" className="section-heading">
          Let&apos;s work together
        </h2>
        <p className="mx-auto max-w-lg text-lg text-gray-600 dark:text-gray-400 mb-8">
          I&apos;m open to full-time remote roles, contract work, and consulting
          engagements. If you&apos;re building something interesting, I&apos;d
          love to hear about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${SITE_CONFIG.email}`} className="btn-primary">
            Send me an email
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
