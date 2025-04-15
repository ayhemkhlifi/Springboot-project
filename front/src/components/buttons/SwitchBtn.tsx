// src/components/buttons/SwitchBtn.tsx
"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { SwitchContext } from "@src/contexts/SwitchContext";

const SwitchButton = () => {
  const { isStudent, toggleSwitch } = useContext(SwitchContext);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center bg-gray-100 rounded-full p-1 shadow-sm"
    >
      <button
        onClick={toggleSwitch}
        className={`px-6 py-2 rounded-full transition-colors ${
          isStudent 
            ? "bg-blue-600 text-white shadow-md" 
            : "bg-transparent text-gray-500"
        }`}
      >
        Étudiant
      </button>
      <button
        onClick={toggleSwitch}
        className={`px-6 py-2 rounded-full transition-colors ${
          !isStudent 
            ? "bg-blue-600 text-white shadow-md" 
            : "bg-transparent text-gray-500"
        }`}
      >
        Enseignant
      </button>
    </motion.div>
  );
};

export default SwitchButton;