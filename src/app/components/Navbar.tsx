"use client";

import { navLinks } from "@/app/data/portfolio";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineCancel } from "react-icons/md";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [activeLink, setActiveLink] = useState<string>(navLinks[0]?.href ?? "");

  const handleOpenMenu = (): void => {
    setMenuOpen(true);
  };

  const closeMobileMenu = (): void => {
    setMenuOpen(false);
  };

  const handleActiveLink = (href: string): void => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  /*
   * ============================================================
   * RESPONSIVE MENU
   * ============================================================
   */

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * ============================================================
   * INTERSECTION OBSERVER / SCROLL SPY
   * ============================================================
   */

  useEffect(() => {
    const sectionIds = navLinks.map((navItem) => navItem.href.replace("#", ""));

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const lastSectionId = sectionIds[sectionIds.length - 1];

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveLink((prevActive) => {
          const intersecting = entries.filter((entry) => entry.isIntersecting);

          if (intersecting.length === 0) {
            return prevActive;
          }

          const lastEntry = intersecting.find(
            (entry) => entry.target.id === lastSectionId,
          );
          if (lastEntry) {
            return `#${lastSectionId}`;
          }

          // Otherwise, pick whichever section occupies the most of the
          // trigger zone — same as before.
          const visibleEntry = intersecting.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

          return `#${visibleEntry.target.id}`;
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px 0% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const themeToggleButtonClasses =
    "ring ring-offset-7 ring-offset-background " +
    "dark:ring-offset-background ring-border " +
    "dark:ring-foreground-muted/50 dark:bg-background " +
    "cursor-pointer rounded-full shadow " +
    "transition-transform active:scale-95 duration-200";

  const socialIconClasses =
    "ring ring-offset-7 ring-offset-background " +
    "dark:ring-offset-background ring-border " +
    "dark:ring-foreground-muted/50 dark:bg-background " +
    "cursor-pointer shadow block " +
    "hover:bg-neutral-50 dark:hover:bg-zinc-800 " +
    "transition-all duration-200 " +
    "hover:-translate-y-0.5 active:scale-95 group";

  const getNavLinkClasses = (href: string): string => {
    const isActive = activeLink === href;

    return `
      relative
      transition-colors
      duration-200
      ${isActive ? "text-accent font-semibold" : "text-foreground"}
      lg:after:content-['']
      lg:after:absolute
      lg:after:left-0
      lg:after:-bottom-6
      lg:after:h-1
      lg:after:bg-accent
      lg:after:transition-all
      lg:after:duration-300
      ${isActive ? "lg:after:w-full" : "lg:after:w-0"}
    `;
  };

  return (
    <header className="flex justify-between items-center pt-4 pb-3 border-b border-border sticky top-0 bg-background z-50">
      {/* =====================================================
          LOGO
      ====================================================== */}

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

      {/* =====================================================
          DESKTOP NAVIGATION
      ====================================================== */}

      <nav className="lg:flex gap-14 items-center text-foreground font-medium hidden">
        {navLinks.map((navItem) => (
          <a
            key={navItem.label}
            href={navItem.href}
            onClick={() => handleActiveLink(navItem.href)}
            className={getNavLinkClasses(navItem.href)}
          >
            {navItem.label}
          </a>
        ))}
      </nav>

      {/* =====================================================
          DESKTOP THEME + SOCIAL + RESUME
      ====================================================== */}

      <div className="hidden lg:flex gap-7 items-center">
        {/* Theme */}
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

        {/* GitHub */}
        <a
          href="https://github.com/Arjunp04/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full ${socialIconClasses}`}
          aria-label="GitHub Profile"
        >
          <FaGithub
            size={22}
            className="text-foreground transition-transform group-hover:scale-110"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded ${socialIconClasses}`}
          aria-label="LinkedIn Profile"
        >
          <FaLinkedinIn
            size={20}
            className="text-foreground transition-transform group-hover:scale-110"
          />
        </a>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1JMB3AZSEZzj0totCKpgk5-nWqTlRBJsP/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer shadow-sm active:scale-95 transition-all duration-200 group"
        >
          View Resume
        </a>
      </div>

      {/* =====================================================
          MOBILE MENU BUTTONS
      ====================================================== */}

      <div className="lg:hidden flex items-center gap-5">
        {/* Theme */}
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

        {/* Menu */}
        <button
          type="button"
          onClick={handleOpenMenu}
          aria-label="Open menu"
          className="cursor-pointer text-foreground"
        >
          <MdMenu size={28} />
        </button>
      </div>

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      <div
        className={`fixed inset-0 backdrop-blur-xs bg-black/40 transition-opacity duration-300 ease-in-out z-30 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-surface z-40 p-6 flex flex-col gap-4 shadow transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Nav */}
        <div className="flex flex-col gap-8 items-start font-medium border-b border-border pb-6 text-foreground">
          {navLinks.map((navItem) => (
            <a
              key={navItem.label}
              href={navItem.href}
              onClick={() => handleActiveLink(navItem.href)}
              className={`transition-colors duration-200 ${
                activeLink === navItem.href
                  ? "text-accent font-semibold"
                  : "text-foreground"
              }`}
            >
              {navItem.label}
            </a>
          ))}
        </div>

        {/* Mobile Social */}
        <div className="flex gap-7 items-center mt-2">
          <a
            href="https://github.com/Arjunp04/"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full ${socialIconClasses}`}
            aria-label="GitHub Profile"
          >
            <FaGithub size={22} className="text-foreground" />
          </a>

          <a
            href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded ${socialIconClasses}`}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn size={20} className="text-foreground" />
          </a>

          <a
            href="https://drive.google.com/file/d/1JMB3AZSEZzj0totCKpgk5-nWqTlRBJsP/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-medium flex items-center px-4 py-2 rounded-md gap-3 text-sm cursor-pointer active:scale-95 transition-transform"
          >
            View Resume
          </a>
        </div>

        {/* Close */}
        <button
          type="button"
          className="absolute right-4 top-4 cursor-pointer text-foreground"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <MdOutlineCancel size={26} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
