import React from 'react'; 
import { Effect, Echec } from '@src/components/icons/Icons';

const profs = ["Prof A", "Prof B", "Prof C", "Prof D", "Prof E"];

function getRandomProfs() {
  const shuffled = [...profs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

export default function Page() {
  const students = ["Étudiant 1", "Étudiant 2", "Étudiant 3"];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Niveau Selection Card */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sélectionnez un niveau :</h2>
        <div className="space-y-3">
          <select 
            id="niveau" 
            name="niveau" 
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Choisir un niveau</option>
            <option value="1ere">1ère année</option>
            <option value="2eme">2ème année</option>
            <option value="3eme">3ème année</option>   
          </select>
          <select 
            id="departement" 
            name="departement" 
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="">Choisir un département</option>
            <option value="informatique">Informatique</option>
            <option value="mecatronique">Mecatronique</option>
            <option value="industrielle">Industrielle</option>
            <option value="infotronique">Infotronique</option>
          </select>
          <div>
            <label htmlFor="class" className="block font-medium">Nombre de classes :</label>
            <input 
              type="number" 
              name="class" 
              id="class" 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Remplir les listes
          </button>
        </div>
      </div>

      {/* Niveau List */}
      <div className=" ">
        <h2 className="text-xl bg-white p-4 rounded-xl shadow-md font-semibold mb-4">Liste des niveaux</h2>
        <ul className="space-y-3">
          <li className="flex-between bg-white p-4 rounded-xl shadow-md  gap-3 text-lg font-medium text-red-600">
            <span>1ère année</span>
            <Echec className="size-6" />
          </li>
          <li className="flex-between bg-white p-4 rounded-xl shadow-md items-center gap-3 text-lg font-medium text-red-600">
            <span>2ème année</span>
            <Echec className="size-6" />
          </li>
          <li className="flex-between bg-white p-4 rounded-xl shadow-md items-center gap-3 text-lg font-medium text-green-600">
            <span>3ème année</span>
            <Effect className="size-6" />
          </li>
         
        </ul>
      </div>
    </div>
  );
}
