"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Install react-icons if not installed
import { motion } from "framer-motion";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      className={`fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <FaArrowUp size={20} />
    </motion.button>
  );
}
