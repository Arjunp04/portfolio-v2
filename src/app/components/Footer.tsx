"use client";

import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 pb-4 text-sm text-foreground">
      <p>© {currentYear} Arjun Prajapati. All rights reserved.</p>

      <p>
        Built with <span className="text-accent font-medium">Next.js</span>,{" "}
        <span className="text-accent font-medium">TypeScript</span> &{" "}
        <span className="text-accent font-medium">Tailwind CSS</span>
      </p>

      <a
        href="#home"
        className="flex items-center gap-2 text-accent dark:text-white hover:text-accent-hover dark:hover:text-white transition-colors group font-medium text-sm"
      >
        Back to Top
        <span className="w-10 h-10 rounded-full bg-surface group-hover:bg-accent border border-border flex items-center justify-center transition-all duration-300">
          <FaArrowUp
            size={16}
            className="text-accent group-hover:text-white transition-colors duration-300"
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;