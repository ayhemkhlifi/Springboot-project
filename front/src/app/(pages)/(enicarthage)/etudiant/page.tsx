"use client";

import { motion } from "framer-motion";
import CustomImage from '@src/components/customImages/CustomImage';
import logo_etudiant from "@public/imgs/etudiant.webp"

export default function EtudiantPage() {
  return (
    <div className="h-full flex-center flex-col  bg-gradient-to-br from-[#1A233B] to-[#0f172a] relative overflow-hidden">
      {/* Éléments d'arrière-plan animés */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(#2D5E3A_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        {/* Avatar étudiant */}
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
            src={logo_etudiant} 
            alt="Profil étudiant" 
            className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1F]/60 to-transparent" />
        </motion.div>

        {/* Message de bienvenue */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
          Bienvenue,{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Étudiant
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-md leading-relaxed">
          Accédez à votre espace de stage{" "}
          <span className="font-semibold text-green-300">ENICarthage</span>
        </p>

        {/* Décorations animées */}
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
              className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 shadow-green-glow"
            />
          ))}
        </div>
      </motion.div>

      {/* Note de pied de page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 text-center"
      >
        <p className="text-sm text-gray-400/80">
          Plateforme de stage ENICarthage - {new Date().getFullYear()}
        </p>
        <div className="mt-1 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-green-400 to-transparent" />
      </motion.div>
    </div>
  );
}