"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { navLinks } from "@/app/data/portfolio";
import { MdOutlineCancel } from "react-icons/md";
import SocialLinks from "./SocialLinks";

interface MobileMenuProps {
  menuOpen: boolean;
  activeLink: string;
  onLinkClick: (href: string) => void;
  onClose: () => void;
}

const linkListVariants: Variants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const linkItemVariants: Variants = {
  closed: { opacity: 0, x: 16 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const MobileMenu = ({
  menuOpen,
  activeLink,
  onLinkClick,
  onClose,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* =====================================================
              MOBILE BACKDROP
          ====================================================== */}

          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 backdrop-blur-xs bg-black/40 z-30"
            onClick={onClose}
          />

          {/* =====================================================
              MOBILE MENU
          ====================================================== */}

          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 h-full w-72 max-w-[80%] bg-surface z-40 p-6 flex flex-col gap-4 shadow"
          >
            {/* Mobile Nav */}
            <motion.div
              variants={linkListVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-8 items-start font-medium border-b border-border pb-6 text-foreground"
            >
              {navLinks.map((navItem) => (
                <motion.a
                  key={navItem.label}
                  variants={linkItemVariants}
                  href={navItem.href}
                  onClick={() => onLinkClick(navItem.href)}
                  whileTap={{ scale: 0.95 }}
                  className={`transition-colors duration-200 ${
                    activeLink === navItem.href
                      ? "text-accent font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {navItem.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Social */}
            <div className="flex gap-7 items-center mt-2">
              <SocialLinks variant="mobile" />
            </div>

            {/* Close */}
            <motion.button
              type="button"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="absolute right-4 top-4 cursor-pointer text-foreground"
              onClick={onClose}
              aria-label="Close menu"
            >
              <MdOutlineCancel size={26} />
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
