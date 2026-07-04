import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiHtml5, SiReact, SiDjango, SiMongodb, 
  SiDocker, SiKubernetes, SiTerraform, SiAnsible, 
  SiGit, SiGithub, SiJenkins, SiVite, SiTailwindcss, SiScikitlearn, SiPandas 
} from "react-icons/si";
import { FaCodeBranch, FaLightbulb, FaUsers, FaGraduationCap, FaComments, FaAws, FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "React", icon: SiReact },
  { name: "Django", icon: SiDjango },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "CI/CD Pipelines", icon: FaCodeBranch },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "pandas", icon: SiPandas },
  { name: "Problem Solving", icon: FaLightbulb },
  { name: "Team Collaboration", icon: FaUsers },
  { name: "Quick Learning", icon: FaGraduationCap },
  { name: "Communication", icon: FaComments }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-6xl font-black">My <span className="text-blue-500">Skills</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div 
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <Icon className="text-4xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                <h3 className="font-semibold text-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{s.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
