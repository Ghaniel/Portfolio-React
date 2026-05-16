import profile from "../assets/profile-ai.png";
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Profile() {
  const configData = getConfigData();
  const isAvailable = configData.status === "on";

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const colors = {
    textMain: isDark ? "#ffffff" : "#000000",
    textSub: isDark ? "#a3a3a3" : "#4b5563",
    bgCard: isDark ? "#171717" : "#ffffff",
    border: isDark ? "#262626" : "#e5e7eb",
    btnBg: isDark ? "#ffffff" : "#000000",
    btnText: isDark ? "#000000" : "#ffffff",
  };

  return (
    <div style={{ transition: "all 0.5s" }}>
      {/* Header */}
      <motion.div
        className="flex items-center justify-between px-7 py-7 border-b"
        style={{ borderColor: colors.border }}
        {...fadeUp(0.1)}
      >
        <div className="font-bold text-lg flex items-center gap-x-3" style={{ color: colors.textMain }}>
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          {configData.job}
        </div>
        <motion.div
          className={`rounded-full uppercase px-3 py-1 font-bold text-[10px] md:text-xs shadow-sm ${
            isAvailable ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-x-2">
            <div className={`w-1.5 h-1.5 rounded-full bg-white ${isAvailable ? "animate-pulse" : ""}`}></div>
            <span>{isAvailable ? "available for work" : "busy"}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Profile Section */}
      <div className="px-7 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="flex flex-col gap-y-4 md:w-2/3">
          <motion.h1
            className="text-4xl md:text-6xl font-black text-center md:text-left tracking-tighter"
            style={{ color: colors.textMain }}
            {...fadeUp(0.2)}
          >
            I'm {configData.name}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center md:text-left font-medium leading-relaxed"
            style={{ color: colors.textSub }}
            {...fadeUp(0.35)}
          >
            {configData.desc}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
            {...fadeUp(0.5)}
          >
            <a href={configData.hireMeLink} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="px-8 py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
                style={{ backgroundColor: colors.btnBg, color: colors.btnText }}
              >
                Hire Me
              </button>
            </a>
            <CopyEmailButton />
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div
              className="absolute inset-0 rounded-full transition-colors"
              style={{ backgroundColor: isDark ? "#262626" : "#e5e7eb" }}
            ></div>
            <img
              src={profile}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full drop-shadow-2xl border-4"
              style={{ borderColor: colors.bgCard }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
