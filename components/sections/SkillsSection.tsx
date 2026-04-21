import { SKILLS } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "🖥️",
  Backend: "⚙️",
  "Data & Infrastructure": "🗄️",
  Practices: "✅",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="section-container">
        <h2 id="skills-heading" className="section-heading">
          Tech Stack
        </h2>
        <p className="section-subheading">
          Tools and technologies I work with daily.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="card">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-2xl"
                  role="img"
                  aria-hidden="true"
                >
                  {CATEGORY_ICONS[skill.category] ?? "📦"}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
