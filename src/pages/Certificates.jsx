import { getConfigData } from "../data/configReader";

export default function Certificates() {
  const configData = getConfigData();
  const certs = configData.certificates || [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] py-10 px-7 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="flex items-center gap-x-2 text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
            <div className="w-4 h-2 bg-yellow-500 rounded-full"></div>
            Learning Path
          </h1>

          <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter">
            My Certificates
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id || cert.title} // gunakan id jika ada
              className="group overflow-hidden rounded-[2rem] border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE WRAPPER */}
              <div className="aspect-[4/3] overflow-hidden border-b border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950">
                <img
                  src={cert.image}
                  alt={cert.title || "Certificate"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/800x600?text=Sertifikat+Ghaniel";
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-extrabold text-black dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-x-3">
                  <div className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Issuer
                    </span>
                  </div>
                  <p className="text-sm italic font-medium text-gray-600 dark:text-gray-400">
                    {cert.issuedBy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
