"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 pb-4 text-sm text-foreground"
    >
      <p>© {currentYear} Arjun Prajapati. All rights reserved.</p>

      <p>
        Built with <span className="text-accent font-medium">Next.js</span>,{" "}
        <span className="text-accent font-medium">TypeScript</span> &{" "}
        <span className="text-accent font-medium">Tailwind CSS</span>
      </p>

      <motion.a
        href="#home"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-2 text-accent dark:text-white hover:text-accent-hover dark:hover:text-white transition-colors group font-medium text-sm"
      >
        Back to Top
        <span className="w-10 h-10 rounded-full bg-surface group-hover:bg-accent border border-border flex items-center justify-center transition-all duration-300">
          <motion.span
            className="flex"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <FaArrowUp
              size={16}
              className="text-accent group-hover:text-white transition-colors duration-300"
            />
          </motion.span>
        </span>
      </motion.a>
    </motion.footer>
  );
};

export default Footer;
