import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.2,
        damping: 10,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      variants={variants}
      animate="default"
    />
  );
}