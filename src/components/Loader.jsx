import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "hello", 
  "bonjour", 
  "hola", 
  "ciao", 
  "olá", 
  "hallo", 
  "привет", 
  "こんにちは", 
  "안녕하세요", 
  "你好"
];

export default function Loader({ setLoading }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // When we reach the last greeting, wait a second then remove loader
    if (index === greetings.length - 1) {
      const finishTimer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(finishTimer);
    }

    // Switch greetings 
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [index, setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence>
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute text-white text-5xl md:text-7xl font-sans font-extralight tracking-tight will-change-transform"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}