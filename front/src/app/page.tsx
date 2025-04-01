
import SignUp from "@src/app/(pages)/SignUp/SignUp";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@public/imgs/enicarthage_logo.webp"
import CustomImage from "@src/components/customImages/CustomImage";

const TypingText = () => {
  const text = "ENNICARTHAGE PLATFORME";
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, []);


  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SignUp />

    <div>
        <div className="flex text-white justify-center items-center h-screen text-6xl font-bold">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {displayedText}
        </motion.span>
      </div>
      <CustomImage src={logo} alt="enicarthage logo" />

    </div>
  );
};

export default TypingText;
