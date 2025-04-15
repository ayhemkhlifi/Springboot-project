"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import logo from "@public/imgs/enicarthage_logo.webp";
import CustomImage from "@src/components/customImages/CustomImage";

const TypingText = () => {
  const router = useRouter(); 
  const text = "ENNICARTHAGE INTERNSHIP PLATFORM"; 
  const [displayedText, setDisplayedText] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let index = 0;

    const typeEffect = () => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(typeEffect, 80); // Slightly faster typing
      } else {
        setShowLoading(true);
        setTimeout(() => router.push("/sign-in"), 1200);
      }
    };

    const timer = setTimeout(() => typeEffect(), 800); // Small delay before starting

    return () => clearTimeout(timer); 
  }, [router]); 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight"
        >
          {displayedText}
          <span className="animate-pulse">|</span> 
        </motion.span>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-6 sm:mt-8 flex-center"
        >
          <CustomImage 
            src={logo} 
            alt="ENICarthage Logo" 
            width={160}
            height={160}
            priority 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </motion.div>

        {showLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-sm sm:text-base opacity-80">Redirecting to login...</p>
          </motion.div>
        )}
      </div>

      {/* Footer with copyright */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 text-xs sm:text-sm"
      >
        © {new Date().getFullYear()} ENICarthage Internship Platform
      </motion.footer>
    </div>
  );
};

export default TypingText;