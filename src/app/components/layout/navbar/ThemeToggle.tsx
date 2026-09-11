"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
  size: number;
}

const themeToggleButtonClasses =
  "ring ring-offset-background " +
  "dark:ring-offset-background ring-border " +
  "dark:ring-foreground-muted/50 dark:bg-background " +
  "cursor-pointer rounded-full shadow overflow-hidden " +
  "relative flex items-center justify-center";

const ThemeToggle = ({ isDark, toggleTheme, size }: ThemeToggleProps) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={themeToggleButtonClasses}
      style={{ width: size + 20, height: size + 20 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute flex items-center justify-center"
          >
            <MdOutlineWbSunny size={size} className="text-accent" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute flex items-center justify-center"
          >
            <FaRegMoon size={size} className="text-foreground" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;