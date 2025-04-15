"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@public/imgs/enicarthage_logo.webp";
import { setWhoami } from "@src/utils/setWhoami";
import handleLogin from "@src/app/action/login";
import { useRouter } from "next/navigation";
import CustomImage from "@src/components/customImages/CustomImage";
import Link from "@node_modules/next/link";
import { Connect1, Connect2, Identify, LogProblem, LogUser, Secure } from "@src/components/icons/Icons";
import { itemVariants,containerVariants } from "@src/animation/login";



export default function LoginPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleWhoAmI = (user: string) => {
    const success = setWhoami(user);
    if (!success) {
      setError("Erreur de stockage local");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await handleLogin(role, router);
    } catch (err) {
      setError("Échec de l'authentification. Veuillez réessayer.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="flex-center h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-md border border-blue-100/50 backdrop-blur-sm"
      >
        {/* Logo & Header Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm mb-4 bg-gradient-to-br from-blue-100 to-white"
          >
            <CustomImage 
              src={logo} 
              className="w-full h-full object-cover p-2" 
              alt="ENICarthage Logo"
              width={96}
              height={96}
              priority
            />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Plateforme de Stage
          </h1>
          <h2 className="text-xl font-semibold text-gray-600 mt-2">Connexion</h2>
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <span className="mr-1">🔒</span> Données sécurisées et chiffrées
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form 
          variants={containerVariants}
          onSubmit={handleSubmit} 
          className="space-y-5"
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom et prénom
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Votre nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="login-input"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <LogUser />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-2">
              Identifiant
            </label>
            <div className="relative">
              <input
                id="id"
                type="text"
                placeholder="Votre ID ENICarthage"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="login-input"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Identify />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Rôle
            </label>
            <div className="relative">
              <select
                id="role"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 appearance-none shadow-sm hover:shadow-md bg-white"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  handleWhoAmI(e.target.value);
                }}
                required
              >
                <option value="">Sélectionnez votre rôle</option>
                <option value="etudiant">Étudiant</option>
                <option value="enseignant">Enseignant</option>
                <option value="administrateur">Administrateur</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-start"
            >
              <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-md ${
                isLoading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Connect1 />
                  Connexion en cours...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Connect2 />
                  Se connecter
                </span>
              )}
            </button>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center"
          >
            <Secure />
            Accès réservé aux membres autorisés d'ENICarthage
          </motion.p>
        </motion.form>

        {/* Footer Links */}
        <motion.div 
          variants={itemVariants}
          className="mt-2 pt-4 border-t border-gray-100 text-center"
        >
          <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 inline-flex items-center">
            <LogProblem />
            Problème de connexion ?
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}