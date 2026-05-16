import { FaWhatsapp, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import configData from "../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  return (
    <div className="px-2">
      {/* LIGHT MODE: bg-slate-200 (abu lebih gelap) + border slate-300
          DARK MODE: bg-neutral-800 + border neutral-700
      */}
      <div className="flex flex-col md:flex-row items-center justify-between px-7 py-7 transition-all duration-500 rounded-3xl border
                      bg-slate-200 border-slate-300 
                      dark:bg-neutral-800 dark:border-neutral-700 shadow-xl gap-4">
        
        <div className="font-bold text-lg flex items-center gap-x-3 text-black dark:text-white uppercase tracking-widest">
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
          Follow Me
        </div>

        <div className="flex gap-x-3">
          {socialLinks.map((socialLink, index) => {
            const iconMap = {
              FaWhatsapp,
              FaInstagram,
              FaDribbble,
              FaGithub,
              FaLinkedinIn,
            };
            const IconComponent = iconMap[socialLink.icon];

            return (
              <a 
                key={index} 
                href={socialLink.link} 
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 p-3 rounded-2xl border-2 shadow-sm hover:scale-110 active:scale-95
                           bg-white text-black border-white
                           dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:border-blue-500"
              >
                {IconComponent && <IconComponent size={22} />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}