"use client";

import { useState } from "react";
import logo from "@public/imgs/enicarthage_logo.webp";
import { setWhoami } from "@src/utils/setWhoami";
import CustomImage from "@src/components/customImages/CustomImage";
import handleLogin from "@src/app/action/login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");

  // Handle form submission
  const handleWhoAmI = (user: string) => {
    const success = setWhoami(user);
    if (!success) {
      console.error("Storage error");
    }
  };
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(role, router);
    console.log("User authenticated successfully.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-6 w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
          <CustomImage src={logo} className="w-full h-full object-cover" alt="ENICarthage Logo" />
        </div>

        {/* Title & Info */}
        <h2 className="text-2xl font-bold text-blue-700">Se connecter</h2>
        <p className="text-sm text-gray-600 mt-1">🔒 Toutes les données sont chiffrées</p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6 w-full">
          <input
            type="text"
            placeholder="Nom et prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
          />
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
          />
          <select
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              handleWhoAmI(e.target.value);
            }}
            required
          >
            <option value="">Se connecter en tant que</option>
            <option value="etudiant">Étudiant</option>
            <option value="enseignant">Enseignant</option>
            <option value="administrateur">Administrateur</option>
          </select>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-300 cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            Se connecter
          </button>

          {/* Restriction Message */}
          <p className="text-center text-red-600 text-sm mt-4">
            ⚠️ Seuls les membres d'ENICarthage peuvent accéder à cette page.
          </p>
        </form>
      </div>
    </div>
  );
}
