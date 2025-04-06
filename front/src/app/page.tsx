"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import logo from "@public/imgs/enicarthage_logo.webp";
import CustomImage from "@src/components/customImages/CustomImage";

const TypingText = () => {
  const router = useRouter(); 
  const text = "ENNICARTHAGE PLATFORME"; 
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeEffect = () => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(typeEffect, 100); 
      } else {
        setTimeout(() => router.push("/sign-in"), 800);
      }
    };

    typeEffect();
  }, [router]); 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-5xl font-extrabold tracking-wider">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center"
      >
        {displayedText}
      </motion.span>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="mt-6"
      >
        <CustomImage 
          src={logo} 
          alt="ENICarthage Logo" 
          className="w-40 h-40 rounded-full shadow-xl animate-pulse"
        />
      </motion.div>
    </div>
  );
};

export default TypingText;
