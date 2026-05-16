import aboutImg from "../assets/about.jpeg";
import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function About() {
  const configData = getConfigData();

  return (
    <>
      {/* Header Label */}
      <motion.div className="px-7 py-7" {...fadeUp(0)}>
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="px-7 py-7 flex flex-col items-center justify-center pt-3">
        <div className="flex flex-col gap-y-6 w-full items-center">
          <motion.div className="space-y-4 text-center" {...fadeUp(0.1)}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
              It's me {configData.name}
            </h1>
            <p className="text-lg text-gray-500 font-normal max-w-2xl mx-auto">
              {configData.aboutDesc}
            </p>
          </motion.div>

          <motion.img
            className="border rounded-xl p-3 grayscale shadow-md max-w-full md:max-w-2xl mx-auto transition-all duration-500 hover:grayscale-0"
            src={aboutImg}
            alt="About me"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div className="flex flex-col items-center justify-center mt-10" {...fadeUp(0.1)}>
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visual appealing design
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex justify-center py-12" {...fadeUp(0.2)}>
        <div className="flex flex-row items-center gap-x-4">
          <a href={configData.hireMeLink} target="_blank" rel="noreferrer">
            <button
              type="button"
              className="gap-x-2 relative overflow-hidden border border-black bg-[#050708] text-white shadow-xl transition-all hover:bg-black font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Hire Me
            </button>
          </a>
          <CopyEmailButton />
        </div>
      </motion.div>
    </>
  );
}
