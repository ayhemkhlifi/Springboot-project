"use client"
import React, { useState } from 'react'
import { LogOut } from '../icons/Icons'
import handleLogout from '@src/app/action/logout'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutClick = async () => {
    setIsLoggingOut(true);
    try {
      await handleLogout(router);
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center p-4 bg-[#1A233B] border-b border-[#283353]"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-100">Tableau de Bord</h1>
        <p className='text-gray-300 text-sm'>Gestion et Suivi des Stages étudiants</p>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogoutClick}
        disabled={isLoggingOut}
        className="flex items-center gap-2 px-4 py-2 bg-[#283353] hover:bg-[#2d3a5e] rounded-lg transition-colors duration-200 text-gray-200"
        aria-label="Déconnexion"
      >
        {isLoggingOut ? (
          <>
            <svg className="animate-spin h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm">Déconnexion...</span>
          </>
        ) : (
          <>
            <LogOut />
            <span className="text-sm hidden sm:inline">Déconnexion</span>
          </>
        )}
      </motion.button>
    </motion.header>
  )
}