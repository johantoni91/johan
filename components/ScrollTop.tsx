"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Install react-icons if not installed
import { motion } from "framer-motion";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`transition-opacity fixed bottom-5 right-5 p-3 ${
        isVisible ? "" : "hidden"
      }`}>
      <FaArrowUp size={30} />
    </motion.button>
  );
}
