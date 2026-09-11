"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialLinksProps {
  variant: "desktop" | "mobile";
}

const socialIconClasses =
  "ring ring-offset-7 ring-offset-background " +
  "dark:ring-offset-background ring-border " +
  "dark:ring-foreground-muted/50 dark:bg-background " +
  "cursor-pointer shadow block " +
  "hover:bg-neutral-50 dark:hover:bg-zinc-800 " +
  "transition-colors duration-200 group";

const SocialLinks = ({ variant }: SocialLinksProps) => {
  const isDesktop = variant === "desktop";

  const iconTextClasses = isDesktop
    ? "text-foreground transition-transform group-hover:scale-110"
    : "text-foreground";

  const resumeClasses = isDesktop
    ? "bg-accent hover:bg-accent-hover text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer shadow-sm transition-colors duration-200"
    : "bg-accent text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer";

  return (
    <>
      {/* GitHub */}
      <motion.a
        href="https://github.com/Arjunp04/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className={`rounded-full ${socialIconClasses}`}
        aria-label="GitHub Profile"
      >
        <FaGithub size={22} className={iconTextClasses} />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className={`rounded ${socialIconClasses}`}
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn size={20} className={iconTextClasses} />
      </motion.a>

      {/* Resume */}
      <motion.a
        href="https://drive.google.com/file/d/1JMB3AZSEZzj0totCKpgk5-nWqTlRBJsP/view"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={resumeClasses}
      >
        View Resume
      </motion.a>
    </>
  );
};

export default SocialLinks;
