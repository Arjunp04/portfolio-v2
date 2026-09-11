"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, type Variants } from "framer-motion";
import { FaRegCalendarAlt, FaLayerGroup, FaBriefcase } from "react-icons/fa";
import type { IconType } from "react-icons";
import { stats } from "../data/portfolio";

const iconMap: Record<string, IconType> = {
  Calendar: FaRegCalendarAlt,
  Layers: FaLayerGroup,
  Briefcase: FaBriefcase,
};

const containerVariants: Variants = {
  hidden: { y: 12 },
  visible: {
    y: 0,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const itemVariants: Variants = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.7 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const AnimatedStatValue = ({ value }: { value: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numericTarget, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest).toString()),
    });
    return () => controls.stop();
  }, [isInView, numericTarget]);

  return (
    <p ref={ref} className="text-foreground font-bold text-lg leading-none">
      {display}
      {suffix}
    </p>
  );
};

const Stats = () => {
  return (
    <section aria-label="Quick stats" className="pb-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 border border-border dark:border-white/10 rounded-xl px-6 py-5 bg-surface w-full lg:w-3/4 shadow"
      >
        {stats.map((stat, index) => {
          const IconComponent = iconMap[stat.icon];

          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex items-center flex-1 gap-6 md:gap-16"
            >
              {index > 0 && (
                <span
                  className="hidden sm:block w-px h-10 bg-border dark:bg-white/10"
                  aria-hidden="true"
                ></span>
              )}

              <div className="flex items-start gap-3 flex-1">
                <motion.div
                  variants={iconVariants}
                  className="text-accent shrink-0"
                >
                  {IconComponent && <IconComponent size={28} />}
                </motion.div>
                <div>
                  <AnimatedStatValue value={stat.value} />
                  <p className="text-foreground-muted text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Stats;
