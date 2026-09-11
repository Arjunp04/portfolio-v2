import Image from "next/image";
import { projectsData } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-foreground font-bold text-lg tracking-wide">
        PROJECTS
      </h2>
      <p className="text-accent text-sm font-medium mb-6">Selected Work</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="border border-border dark:border-white/10 overflow-hidden bg-surface flex flex-col shadow-xs p-1 rounded-lg"
          >
            <div className="relative w-full h-40 bg-background">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="px-1.5 py-2 flex flex-col gap-2 flex-1">
              <h3 className="text-foreground font-semibold text-sm">
                {project.title}
              </h3>
              <p className="text-foreground-muted text-xs leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-foreground bg-accent/5 dark:bg-border px-2 py-1 rounded-md text-xs font-medium border-accent/30 dark:border-white/10 border">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 mt-2 pt-3 border-t border-border/40 dark:border-white/10">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-accent text-xs font-medium hover:text-accent-hover transition-colors"
                >
                  Live Demo
                  <MdArrowOutward size={12} />
                </a>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-accent text-xs font-medium hover:text-accent-hover transition-colors"
                >
                  Source Code
                  <MdArrowOutward size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
