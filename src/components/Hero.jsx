import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center px-4 overflow-hidden z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-blue-500 mb-4 font-semibold tracking-[0.3em] uppercase">Jeshiko J</p>
        <h1 className="text-5xl md:text-[5.5rem] leading-tight font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 mb-6 drop-shadow-lg">
          Software Engineer
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light tracking-wide leading-relaxed">
          Building scalable, high-performance web applications and robust cloud infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-12 pointer-events-auto flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold tracking-wider uppercase transition-all hover:scale-105 active:scale-95 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
          View Projects
        </button>
        <a 
          href={`${import.meta.env.BASE_URL}resume.pdf`} 
          download
          className="px-8 py-4 bg-transparent border border-blue-500/50 hover:bg-blue-600/10 text-blue-400 font-semibold tracking-wider uppercase transition-all hover:scale-105 active:scale-95 rounded-full"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}