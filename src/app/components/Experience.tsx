"use client";

import { motion, type Variants } from "framer-motion";
import { experience } from "../data/portfolio";
import { MdLocationOn } from "react-icons/md";
import type { ReactNode } from "react";

const parseHighlight = (text: string): ReactNode[] => {
  const parts = text.split(/(<hl>.*?<\/hl>)/g);
  return parts.map((part, index) => {
    const match = part.match(/^<hl>(.*?)<\/hl>$/);
    if (match) {
      return (
        <span key={index} className="text-accent font-medium">
          {match[1]}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <h2 className="text-foreground font-bold text-lg tracking-wide mb-8">
        EXPERIENCE
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col"
      >
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            variants={itemVariants}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <span className="relative w-3 h-3 rounded-full bg-accent shrink-0 mt-1.5">
                {index === 0 && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-accent"
                    animate={{
                      scale: [1, 2.2, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </span>
              {index < experience.length - 1 && (
                <motion.span
                  variants={lineVariants}
                  style={{ transformOrigin: "top" }}
                  className="w-px flex-1 bg-border mt-1"
                ></motion.span>
              )}
            </div>

            <div
              className={`flex-1 ${
                index < experience.length - 1 ? "pb-10" : ""
              }`}
            >
              <p className="text-foreground-muted text-sm mb-1">
                {job.period}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <span className="text-foreground text-lg font-semibold">
                    {job.role}
                  </span>
                  <br />
                  <span className="text-accent font-medium ">
                    {job.company}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-foreground-muted text-sm shrink-0">
                  <MdLocationOn size={18} />
                  {job.location}
                </div>
              </div>

              <ul className="flex flex-col gap-1.5">
                {job.highlights.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-foreground-muted text-sm flex gap-2"
                  >
                    <span className="text-accent shrink-0">•</span>
                    <span>{parseHighlight(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;