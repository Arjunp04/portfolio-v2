"use client";

import { motion, type Variants } from "framer-motion";
import { technologies } from "../data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.12,
    rotate: 3,
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

const Technologies = () => {
  return (
    <section id="technologies" className="border-t border-border py-8">
      <h2 className="text-foreground font-bold text-lg tracking-wide mb-6">
        TECHNOLOGIES I WORK WITH
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {technologies.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
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
                  <motion.div
                    key={tech.name}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="flex items-center gap-2.5 group"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="flex items-center justify-center text-2xl"
                    >
                      <IconComponent className={`${tech.iconColor}`} />
                    </motion.div>
                    <span className="text-foreground-muted transition-colors text-sm group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
