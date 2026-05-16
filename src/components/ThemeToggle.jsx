import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      html.style.colorScheme = "dark"; // Memaksa scrollbar dll jadi gelap
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light"; // Memaksa scrollbar dll jadi terang
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-3 rounded-full bg-white dark:bg-neutral-800 text-gray-800 dark:text-yellow-400 shadow-xl border border-gray-200 dark:border-neutral-700 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}