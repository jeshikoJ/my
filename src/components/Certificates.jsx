import { motion } from "framer-motion";

const certificates = [
  { title: "Artificial Intelligence & ML Internship", issuer: "Crescent Infotech", year: "2024", details: "Python, scikit-learn, ML Prototyping, Data Processing, Production Workflows" },
  { title: "Web Development Internship", issuer: "NoviTech", year: "2023", details: "HTML5, CSS3, JavaScript, Responsive Design, Frontend Development" },
  { title: "Cloud DevOps", issuer: "SLA (Softlogic Academy)", year: "2026", details: "Docker, CI/CD Pipelines, Infrastructure Automation, Containerization, DevOps Practices" },
  { title: "Data Science with Python", issuer: "IAMAI", year: "2023", details: "pandas, scikit-learn, Machine Learning, Data Analysis, Statistical Analysis" },
  { title: "Python Full Stack Development", issuer: "E-MAX", year: "2025", details: "Backend (Django), Frontend (React), REST APIs, MongoDB, Complete Web Development" },
  { title: "Data Science using Python", issuer: "VEI Technologies", year: "2022", details: "Python Libraries, Statistical Analysis, Data Visualization, ML Fundamentals" },
  { title: "Interaction Design & Prototyping", issuer: "Feather", year: "2024", details: "UI/UX Design Principles, Figma, Prototyping Tools, User Experience Design" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="min-h-screen py-32 px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-6xl font-black">Certifications <span className="text-blue-500">& Training</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-blue-400 font-bold tracking-widest text-sm">{cert.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 flex-grow">{cert.title}</h3>
              <h4 className="text-lg text-gray-400 mb-6 font-medium">{cert.issuer}</h4>
              <p className="text-sm text-gray-500 leading-relaxed pt-4 border-t border-white/10">
                {cert.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}