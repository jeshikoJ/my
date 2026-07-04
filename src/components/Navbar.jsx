import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Work", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Jeshiko J
        </span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-10">
          {links.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider hover:glow"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-5 py-2 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full text-xs tracking-widest uppercase font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
        >
          Resume
        </motion.a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-8 md:hidden shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors uppercase text-lg tracking-widest font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="mt-2 px-8 py-3 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full text-sm tracking-widest uppercase font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.15)]"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}