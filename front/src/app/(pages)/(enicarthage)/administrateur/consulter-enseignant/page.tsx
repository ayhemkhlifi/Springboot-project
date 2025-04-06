"use client"
import PfeEtudiant from '@src/components/select/PfeEtudiant';
import React, { useState } from 'react';

const initialProfs = [
  { nom: 'Dupont', prenom: 'Jean', cin: '12345678', premiere: 'lc21', deuxieme: '', pfe: ['Étudiant 1', 'Étudiant 2'] },
  { nom: 'Martin', prenom: 'Sophie', cin: '87654321', premiere: '', deuxieme: 'lc 22', pfe: [] },
  { nom: 'Bernard', prenom: 'Luc', cin: '56781234', premiere: 'lc 23', deuxieme: 'lc 24', pfe: ['Étudiant 3'] },
];

export default function Page() {
  const [search, setSearch] = useState('');
  const [enseignants, setEnseignants] = useState(initialProfs);
  const [newStudent, setNewStudent] = useState('');

  const filteredProfs = enseignants.filter(prof =>
    `${prof.nom} ${prof.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

 

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <input 
          type="text" 
          placeholder="Rechercher un enseignant..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      
      {/* enseignants Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 text-center">Nom & Prénom</th>
              <th className="p-3 text-center">CIN</th>
              <th className="p-3 text-center">1ère (Salle)</th>
              <th className="p-3 text-center">2ème (Salle)</th>
              <th className="p-3 text-center">PFE (Étudiants)</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfs.map((prof, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{prof.nom} {prof.prenom}</td>
                <td className="p-3">{prof.cin}</td>
                <td className="p-3 text-center"><input type="text" className='w-24 text-center' defaultValue={prof.premiere || '✘'} /></td>
                <td className="p-3 text-center"><input type="text" className='w-24 text-center' defaultValue={prof.deuxieme || '✘'} /></td>
                <td className="p-3 text-center">
                  <PfeEtudiant list={["hosni raissi","hfihir"]}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
