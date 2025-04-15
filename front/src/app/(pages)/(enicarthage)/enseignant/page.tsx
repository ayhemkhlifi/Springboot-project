"use client";

import { motion } from "framer-motion";
import CustomImage from '@src/components/customImages/CustomImage';
import logo_encd from "@public/imgs/mentor.png";

export default function EncadrantPage() {
  return (
    <div className="h-full flex-center flex-col bg-gradient-to-br from-[#1A233B] to-[#0f172a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(#2d3a5e_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        {/* Teacher Avatar */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden group"
        >
          <CustomImage 
            src={logo_encd} 
            alt="Teacher profile" 
            className="object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-300"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A233B]/60 to-transparent" />
        </motion.div>

        {/* Welcome Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
          Bienvenue,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Enseignant
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-md leading-relaxed">
          Vous êtes connecté à votre espace personnel{" "}
          <span className="font-semibold text-blue-300">ENICarthage</span>
        </p>

        {/* Animated Decorations */}
        <div className="flex space-x-4 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 shadow-blue-glow"
            />
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 text-center"
      >
        <p className="text-sm text-gray-400/80">
          Plateforme de stage ENICarthage - {new Date().getFullYear()}
        </p>
        <div className="mt-1 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </motion.div>
    </div>
  );
}