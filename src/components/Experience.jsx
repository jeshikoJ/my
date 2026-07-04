import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Software Development Intern", company: "Crescent Infotech", description: "Developed 3+ intelligent software prototypes by applying machine learning and data processing concepts, reducing manual data handling time by approximately 30%. Completed end-to-end software development workflows across 2 project cycles, improving delivery speed and code quality." },
  { year: "2023", title: "Industrial Visit Participant", company: "Srishti Campus", description: "Observed agile project management workflows used across 4+ enterprise software teams, gaining insight into real-world DevOps and deployment practices." }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-black mb-20 text-center">Work <span className="text-blue-500">Experience</span></h2>
        </motion.div>
        
        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2"></div>
          
          {timeline.map((item, n) => (
            <motion.div 
              key={n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: n * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 md:mb-24 flex flex-col md:flex-row items-center justify-between w-full ${n % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              <div className="z-20 absolute -left-2 md:static md:w-auto flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#0a0a0a]"></div>
              </div>

              <div className={`w-full md:w-5/12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors ${n % 2 === 0 ? 'md:text-right md:pl-0 md:pr-8' : 'md:text-left md:pr-0 md:pl-8'}`}>
                <span className="text-blue-400 font-black tracking-widest text-sm mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <h4 className="text-lg text-gray-300 mb-4">{item.company}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}