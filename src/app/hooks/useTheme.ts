"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const rootElement = document.documentElement;

    if (isDark) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return { isDark, toggleTheme };
};

export default useTheme;
