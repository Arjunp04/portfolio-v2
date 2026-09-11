"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/app/data/portfolio";

interface DesktopNavLinksProps {
  activeLink: string;
  onLinkClick: (href: string) => void;
}

const DesktopNavLinks = ({ activeLink, onLinkClick }: DesktopNavLinksProps) => {
  return (
    <nav className="lg:flex gap-14 items-center text-foreground font-medium hidden">
      {navLinks.map((navItem) => {
        const isActive = activeLink === navItem.href;

        return (
          <a
            key={navItem.label}
            href={navItem.href}
            onClick={() => onLinkClick(navItem.href)}
            className={`relative transition-colors duration-200 ${
              isActive ? "text-accent font-semibold" : "text-foreground"
            }`}
          >
            <motion.span whileHover={{ y: -1 }} className="inline-block">
              {navItem.label}
            </motion.span>

            {isActive && (
              <motion.span
                layoutId="desktop-nav-underline"
                className="hidden lg:block absolute left-0 -bottom-6 h-1 w-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default DesktopNavLinks;