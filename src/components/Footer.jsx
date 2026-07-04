import socialLinks from '../data/socialLinks';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const iconMap = {
  'LinkedIn': <FaLinkedin className="text-xl" />,
  'GitHub': <FaGithub className="text-xl" />,
  'Email': <FaEnvelope className="text-xl" />,
  'Phone': <FaPhone className="text-xl" />
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-black tracking-tighter">PORT<span className="text-blue-500">FOLIO.</span></span>
          <p className="text-gray-500 mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map(s => (
            <a 
              key={s.name} 
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors uppercase tracking-widest text-xs font-bold"
            >
              {iconMap[s.name]}
              <span>{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}