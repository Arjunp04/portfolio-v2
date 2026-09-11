"use client";

import { navLinks } from "@/app/data/portfolio";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenu from "./MobileMenu";

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

      <DesktopNavLinks activeLink={activeLink} onLinkClick={handleActiveLink} />

      {/* =====================================================
          DESKTOP THEME + SOCIAL + RESUME
      ====================================================== */}

      <div className="hidden lg:flex gap-7 items-center">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} size={18} />
        <SocialLinks variant="desktop" />
      </div>

      {/* =====================================================
          MOBILE MENU BUTTONS
      ====================================================== */}

      <div className="lg:hidden flex items-center gap-5">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} size={18} />

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
          MOBILE MENU (backdrop + panel)
      ====================================================== */}

      <MobileMenu
        menuOpen={menuOpen}
        activeLink={activeLink}
        onLinkClick={handleActiveLink}
        onClose={closeMobileMenu}
      />
    </header>
  );
};

export default Navbar;
