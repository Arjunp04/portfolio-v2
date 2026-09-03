"use client";

import { navLinks } from "@/app/data/portfolio";
import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaRegMoon } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineCancel } from "react-icons/md";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = (): void => {
    setMenuOpen(true);
  };

  const closeMobileMenu = (): void => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const themeToggleButtonClasses =
    "ring ring-offset-7 ring-offset-background dark:ring-offset-background ring-border dark:ring-foreground-muted dark:bg-background cursor-pointer rounded-full";

  const socialIconClasses =
    "ring ring-offset-7 ring-offset-background dark:ring-offset-background ring-border dark:ring-foreground-muted dark:bg-background cursor-pointer";

  return (
    <div className="flex justify-between items-center py-4 border-b border-border px-4">
      {/* logo */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="font-semibold rounded-full border-2 border-accent w-12 h-12 flex justify-center items-center text-xl text-foreground">
          AP
        </div>
        <div className="leading">
          <p className="text-foreground font-bold text-lg tracking-wide">
            Arjun Prajapati
          </p>
          <p className="text-foreground-muted text-sm tracking-tight">
            Frontend Developer
          </p>
        </div>
      </div>

      {/* NavLinks */}
      <div className="lg:flex gap-14 items-center text-foreground font-medium hidden">
        {navLinks.map((navItem) => (
          <Link key={navItem.label} href={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </div>

      {/* theme and social icons */}
      <div className="hidden lg:flex gap-7 items-center">
        <button
          type="button"
          className={themeToggleButtonClasses}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <MdOutlineWbSunny size={20} className="text-accent" />
          ) : (
            <FaRegMoon size={20} className="text-foreground" />
          )}
        </button>

        <div className={`rounded-full ${socialIconClasses}`}>
          <FaGithub size={22} className="text-foreground" />
        </div>

        <div className={`rounded ${socialIconClasses}`}>
          <FaLinkedinIn size={20} className="text-foreground" />
        </div>

        <div className="bg-accent text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer">
          Resume
          <BsDownload size={16} />
        </div>
      </div>

      {/* mobile menu  */}
      <div className="lg:hidden flex items-center gap-5">
        <button
          type="button"
          className={themeToggleButtonClasses}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <MdOutlineWbSunny size={18} className="text-accent" />
          ) : (
            <FaRegMoon size={18} className="text-foreground" />
          )}
        </button>
        <button
          type="button"
          onClick={handleOpenMenu}
          aria-label="Open menu"
          className="cursor-pointer text-foreground"
        >
          <MdMenu size={28} />
        </button>
      </div>

      {/* backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-xs bg-black/40 transition-opacity duration-300 ease-in-out z-30 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-surface z-40 p-6 flex flex-col gap-4 shadow transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 items-start font-medium border-b border-border pb-4 text-foreground">
          {navLinks.map((navItem) => (
            <Link
              key={navItem.label}
              href={navItem.href}
              onClick={closeMobileMenu}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-7 items-center">
          <div className={`rounded-full ${socialIconClasses}`}>
            <FaGithub size={22} className="text-foreground" />
          </div>

          <div className={`rounded ${socialIconClasses}`}>
            <FaLinkedinIn size={20} className="text-foreground" />
          </div>

          <div className="bg-accent text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer">
            Resume
            <BsDownload size={16} />
          </div>
        </div>

        <button
          type="button"
          className="absolute right-4 top-4 cursor-pointer text-foreground"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <MdOutlineCancel size={26} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
