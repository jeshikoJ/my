import { motion } from "framer-motion";
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import GlareHover from "./GlareHover";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center">Selected <span className="text-blue-500">Projects</span></h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}