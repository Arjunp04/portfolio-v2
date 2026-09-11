import { technologies } from "../data/portfolio";

const Technologies = () => {
  return (
    <section id="technologies" className="border-t border-border py-8">
      <h2 className="text-foreground font-bold text-lg tracking-wide mb-6">
        TECHNOLOGIES I WORK WITH
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {technologies.map((category) => (
          <div
            key={category.id}
            className="border border-foreground-muted/15 rounded-lg p-5 bg-surface flex flex-col gap-4 shadow"
          >
            {/* Category Meta block */}
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold text-sm">
                {category.id}
              </span>
              <span className="text-foreground font-semibold text-base">
                {category.category}
              </span>
            </div>

            {/* Dynamic Icon Rendering Node */}
            <div className="flex flex-wrap gap-5">
              {category.techs.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110">
                      <IconComponent className={`${tech.iconColor}`} />
                    </div>
                    <span className="text-foreground-muted transition-colors text-sm group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
