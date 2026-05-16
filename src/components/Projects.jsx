import { useState } from "react";
import { Link } from "react-router-dom";
import { getConfigData } from "../data/configReader";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-2">
      <div className="flex flex-col bg-slate-100 dark:bg-white rounded-3xl px-6 py-10 shadow-sm border border-slate-200 dark:border-gray-300 transition-all duration-500">

        {/* HEADER */}
        <motion.div
          className="flex items-center justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-black text-3xl flex items-center gap-x-4 !text-black tracking-tighter">
            <div className="w-2.5 h-8 bg-blue-600 rounded-full"></div>
            Semua Project
          </div>
          <Link to="/projects">
            <button
              type="button"
              className="group gap-x-2 bg-black text-white hover:scale-105 active:scale-95 transition-all duration-300 font-bold rounded-2xl text-sm px-6 py-3 inline-flex items-center shadow-xl"
            >
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project["project-link"]}
              target="_blank"
              rel="noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col bg-white dark:bg-neutral-800 rounded-3xl p-4 border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out"
            >
              {/* IMAGE */}
              <div className="relative w-full h-52 mb-5 rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-900">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project["project-image-url"]}
                  alt={project["project-name"]}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col px-2 pb-2">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="font-extrabold text-xl text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project["project-name"]}
                  </h1>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-gray-400"
                  }`}>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed line-clamp-2">
                  {project["project-desc"]}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
