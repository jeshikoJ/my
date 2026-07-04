import { motion } from "framer-motion";
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 px-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-black mb-6">Let's <span className="text-blue-500">Work Together</span></h2>
          <p className="text-xl text-gray-400">Have a project in mind? Reach out and let's make it happen.</p>
        </motion.div>
        
        <ContactForm />
      </div>
    </section>
  );
}