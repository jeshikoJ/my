import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="min-h-[50vh] py-32 px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl font-black text-center">My <span className="text-blue-500">Education</span></h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Bachelor of Engineering (B.E.)</h3>
              <h4 className="text-xl text-blue-400 font-semibold mb-2">Computer Science & Engineering</h4>
            </div>
            <span className="px-4 py-2 mt-4 md:mt-0 rounded-full bg-blue-500/20 text-blue-300 font-bold tracking-wider text-sm border border-blue-500/30">
              Graduating June 2025
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-6">Bethlahem Institute of Engineering, Kanyakumari, Tamil Nadu</p>
          
          <div>
            <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Areas of Interest</h5>
            <div className="flex flex-wrap gap-3">
              {['Full-Stack Development', 'Cloud Computing', 'DevOps'].map(interest => (
                <span key={interest} className="px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}