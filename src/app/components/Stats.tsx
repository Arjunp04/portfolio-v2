import { FaRegCalendarAlt, FaLayerGroup, FaBriefcase } from "react-icons/fa";
import type { IconType } from "react-icons";
import { stats } from "../data/portfolio";

const iconMap: Record<string, IconType> = {
  Calendar: FaRegCalendarAlt,
  Layers: FaLayerGroup,
  Briefcase: FaBriefcase,
};

const Stats = () => {
  return (
    <section aria-label="Quick stats" className="pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 border border-border dark:border-white/10 rounded-xl px-6 py-5 bg-surface w-full lg:w-3/4 shadow">
        {stats.map((stat, index) => {
          const IconComponent = iconMap[stat.icon];

          return (
            <div key={stat.label} className="flex items-center flex-1 gap-6 md:gap-16">
              {index > 0 && (
                <span
                  className="hidden sm:block w-px h-10 bg-border dark:bg-white/10"
                  aria-hidden="true"
                ></span>
              )}

              <div className="flex items-start gap-3 flex-1">
                <div className="text-accent shrink-0">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg leading-none">
                    {stat.value}
                  </p>
                  <p className="text-foreground-muted text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
