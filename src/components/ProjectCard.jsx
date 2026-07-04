import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
    >
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.15}
        glareAngle={-45}
        glareSize={400}
        transitionDuration={800}
        playOnce={false}
      >
      <div className="aspect-video w-full overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-blue-900/20 flex items-center justify-center">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xl">Preview</span>
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech?.map(t => (
            <span key={t} className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 relative z-20">
          <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 text-center bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors">
            Live Site
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 text-center border border-white/20 hover:bg-white/10 rounded-xl font-bold transition-colors">
            GitHub
          </a>
        </div>
      </div>
      </GlareHover>
    </motion.div>
  );
}