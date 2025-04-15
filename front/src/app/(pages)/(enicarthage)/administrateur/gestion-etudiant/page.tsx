"use client"
import React, { useState } from 'react';
import { Effect, Echec } from '@src/components/icons/Icons';

interface LevelStatus {
  name: string;
  status: 'success' | 'error';
}

const departments = [
  'Informatique',
  'Mecatronique',
  'Industrielle',
  'Infotronique'
];

const levels: LevelStatus[] = [
  { name: '1ère année', status: 'error' },
  { name: '2ème année', status: 'error' },
  { name: '3ème année', status: 'success' },
];

const LevelCard = ({ name, status }: LevelStatus) => {
  const Icon = status === 'success' ? Effect : Echec;
  const color = status === 'success' ? 'text-green-600' : 'text-red-600';

  return (
    <li className={`flex justify-between items-center bg-white p-4 rounded-xl shadow-md gap-3 text-lg font-medium ${color}`}>
      <span>{name}</span>
      <Icon className="size-6" />
    </li>
  );
};

const SelectionCard = () => {
  const [niveau, setNiveau] = useState('');
  const [departement, setDepartement] = useState('');
  const [classCount, setClassCount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission ici
    console.log({ niveau, departement, classCount });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Configuration des groupes</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <select
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">Choisir un niveau</option>
            <option value="1ere">1ère année</option>
            <option value="2eme">2ème année</option>
            <option value="3eme">3ème année</option>
          </select>

          <select
            value={departement}
            onChange={(e) => setDepartement(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="">Choisir un département</option>
            {departments.map((dept) => (
              <option key={dept} value={dept.toLowerCase()}>
                {dept}
              </option>
            ))}
          </select>

          <div>
            <label className="block font-medium mb-1">Nombre de classes :</label>
            <input
              type="number"
              value={classCount}
              onChange={(e) => setClassCount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
              min="1"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Générer les groupes
        </button>
      </form>
    </div>
  );
};

export default function Page() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <SelectionCard />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold bg-white p-4 rounded-xl shadow-md">
          Statut des niveaux
        </h2>
        <ul className="space-y-3">
          {levels.map((level) => (
            <LevelCard key={level.name} {...level} />
          ))}
        </ul>
      </div>
    </div>
  );
}