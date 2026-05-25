import { getConfigData } from "../data/configReader";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function AllProjectsPage() {
  const configData = getConfigData();
  const allProjects = configData.allProjects || [];

  return (
    <div className="min-h-screen bg-white py-10 px-7 transition-colors duration-500">

      {/* HEADER */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="flex items-center gap-x-2 text-lg font-medium text-gray-500 mb-2">
          <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
          Learning Path & Projects
        </h1>
        <h2 className="text-4xl font-black text-black tracking-tighter">
          All My Projects
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <motion.a
            key={project.id || index}
            href={project["project-link"]}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="aspect-[4/3] overflow-hidden border-b border-gray-200 bg-gray-100">
              <img
                src={project["project-image-url"]}
                alt={project["project-name"] || "Project Image"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project";
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-extrabold text-black transition-colors group-hover:text-blue-600">
                {project["project-name"]}
              </h3>
              <p className="mb-5 text-sm italic text-gray-600 leading-relaxed">
                Built with {project["project-desc"]}
              </p>
              <div className="flex items-center gap-x-2 text-sm font-bold text-blue-600">
                <span>View Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
