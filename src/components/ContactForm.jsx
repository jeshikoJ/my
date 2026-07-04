import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // TODO: The user needs to replace this with their actual access key from web3forms.com
    formData.append("access_key", "1bfad821-ce96-4295-8f30-e9d572356d09");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000); // Reset button text after 5 seconds
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    }
  };

  return (
    <motion.form 
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="John Doe" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
          <input 
            type="email" 
            name="email"
            required
            placeholder="john@example.com" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
        <textarea 
          name="message"
          required
          placeholder="Tell me about your project..." 
          rows="6"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[4px] transition-colors relative overflow-hidden group"
      >
        <span className="relative z-10">{result ? result : "Send Message"}</span>
        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      </button>
    </motion.form>
  );
}