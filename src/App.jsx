import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const configData = getConfigData();

  const [isDark, setIsDark] = useState(() => {
    return (
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"
    );
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-white transition-colors duration-500">
      <div
        className={`min-h-screen transition-colors duration-500 
      ${isDark ? "!bg-neutral-950 text-white" : "!bg-gray-50 text-gray-900"}`}
      >
        <Navbar />
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <main className="pt-[5rem] px-4 pb-10">
          <div
            className={`mx-auto w-full max-w-xl md:max-w-4xl lg:max-w-7xl 
          rounded-3xl shadow-2xl border transition-all duration-500 overflow-hidden
          ${
            isDark
              ? "!bg-neutral-900 !border-neutral-800 shadow-black/50"
              : "!bg-white !border-gray-100 shadow-gray-200"
          }`}
          >
            <div className="p-4 md:p-10 flex flex-col gap-10">
              <div className="min-h-[60vh]">
                <SiteRoutes />
              </div>
              <div className="border-t border-gray-100 dark:border-neutral-800 pt-10">
                <Social />
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
