import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: "Advanced",
    icon: <FaHtml5 className="w-8 h-8 text-[#e34c26]" />,
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: <FaCss3Alt className="w-8 h-8 text-[#264de4]" />,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    icon: <FaJs className="w-8 h-8 text-[#f7df1e]" />,
  },
  {
    name: "React",
    level: "Intermediate",
    icon: <FaReact className="w-8 h-8 text-[#61dafb]" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="w-8 h-8 text-[#38bdf8]" />,
  },
  {
    name: "Laravel",
    level: "Intermediate",
    icon: <FaLaravel className="w-8 h-8 text-[#ff2d20]" />,
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    icon: <FaBootstrap className="w-8 h-8 text-[#7952b3]" />,
  },
  {
    name: "Figma",
    level: "Advanced",
    icon: <FaFigma className="w-8 h-8 text-[#f24e1e]" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

export default function Home() {
  return (
    <>
      <Profile />

      {/* SKILLS SECTION */}
      <div className="py-10 px-6 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          {/* Header Skills */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="flex items-center gap-x-2 text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
              <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
              Expertise
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tighter">
              My Skills
            </h2>
          </motion.div>

          {/* GRID SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex items-center gap-x-4 rounded-3xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-700 transition-all duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                {/* INFO */}
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-black dark:text-white leading-tight">
                    {skill.name}
                  </span>
                  <span className="mt-1 text-xs italic font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center py-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">
          Let's work together.
        </h1>
        <p className="text-md font-medium text-gray-500 dark:text-gray-400 text-center max-w-sm leading-relaxed">
          Creating user experience and visual appealing design
        </p>
      </motion.div>

      <Projects />
    </>
  );
}
