import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-10 py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{ once: true }}>
          <p className="text-blue-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">About Me</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-gray-100">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Scalable Web Apps
            </span>
          </h2>
          <div className="text-gray-300 text-lg font-light leading-relaxed space-y-6">
            <p>
              I am a motivated Software Engineer with hands-on experience in full-stack web development. My core stack includes Python, Django, HTML, CSS, JavaScript, and MongoDB.
            </p>
            <p>
              With a proven ability to design and deploy scalable web applications from end to end, I am actively expanding my expertise into Cloud Computing (AWS), DevOps automation, CI/CD pipelines, and Infrastructure as Code.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <ProfileCard
            name="Jeshiko J"
            title="Software Engineer"
            handle="jeshiko"
            status="Online"
            contactText="Hire Me"
            avatarUrl="/profile.jpg"
            showUserInfo={true}
            enableTilt={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
