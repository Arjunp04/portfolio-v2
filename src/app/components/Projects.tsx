"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {  y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-foreground font-bold text-lg tracking-wide">
        PROJECTS
      </h2>
      <p className="text-accent text-sm font-medium mb-6">Selected Work</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            whileTap={{ scale: 0.98 }}
            className="border border-border dark:border-white/10 overflow-hidden bg-surface flex flex-col shadow-xs p-1 rounded-lg"
            style={{ cursor: "default" }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="flex flex-col flex-1"
            >
              <div className="relative w-full h-40 bg-background overflow-hidden rounded">
                <motion.div
                  variants={imageVariants}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="px-1.5 py-2 flex flex-col gap-2 flex-1">
                <h3 className="text-foreground font-semibold text-sm">
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-xs leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                      className="text-foreground bg-accent/5 dark:bg-border px-2 py-1 rounded-md text-xs font-medium border-accent/30 dark:border-white/10 border"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 mt-2 pt-3 border-t border-border/40 dark:border-white/10">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-accent text-xs font-medium hover:text-accent-hover transition-colors"
                  >
                    Live Demo
                    <MdArrowOutward
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-accent text-xs font-medium hover:text-accent-hover transition-colors"
                  >
                    Source Code
                    <MdArrowOutward
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
