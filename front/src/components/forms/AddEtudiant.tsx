import React from 'react';

export default function AddEtudiant() {
  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-md w-10/12 text-black">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
        Ajouter un Étudiant
      </h2>
      
      <form className="space-y-2">
        {/* Nom et Prénom */}
        <div className="flex flex-col">
          <label htmlFor="nom" className="text-gray-700 font-medium mb-1">
            Nom et Prénom
          </label>
          <input 
            type="text" 
            id="nom" 
            name="nom" 
            required 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Entrez le nom et prénom"
          />
        </div>

        {/* CIN */}
        <div className="flex flex-col">
          <label htmlFor="cin" className="text-gray-700 font-medium mb-1">
            CIN
          </label>
          <input 
            type="text" 
            id="cin" 
            name="cin" 
            required 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Entrez le numéro CIN"
          />
        </div>

        {/* ID */}
        <div className="flex flex-col">
          <label htmlFor="id" className="text-gray-700 font-medium mb-1">
            ID
          </label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            required 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Entrez le ID"
          />
        </div>

        {/* Niveau (Dropdown) */}
        <div className="flex flex-col">
          <label htmlFor="niveau" className="text-gray-700 font-medium mb-1">
            Niveau
          </label>
          <select 
            id="niveau" 
            name="niveau" 
            required 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sélectionnez le niveau</option>
            <option value="1ere">1ère</option>
            <option value="2eme">2ème</option>
            <option value="3eme">3ème</option>
          </select>
        </div>

        {/* Groupe */}
        <div className="flex flex-col">
          <label htmlFor="groupe" className="text-gray-700 font-medium mb-1">
            Groupe
          </label>
          <input 
            type="text" 
            id="groupe" 
            name="groupe" 
            required 
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Entrez le groupe (ex: A, B, C)"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
