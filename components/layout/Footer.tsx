import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-200 dark:border-gray-800"
    >
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} {SITE_CONFIG.name}. Built with Next.js &
            TypeScript.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
