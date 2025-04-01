'use client';

import { useState } from 'react';
import Link from 'next/link';
import logo from '@public/imgs/enicarthage_logo.webp'

export default function LoginPage() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="flex items-center justify-center mt-100 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src="/imgs/enicarthage_logo.webp"  className="h-12 w-30 h-30" alt="" />
        </div>
        <h2 className="text-center text-2xl font-bold text-blue-600">Se connecter</h2>
        <p className="text-center text-green-600 text-sm mt-1">🔒 Toutes les données seront chiffrées</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Nom et prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
          />
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
          />
          <select
            className="w-full p-2 border rounded-lg mb-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Se connecter en tant que</option>
            <option value="etudiant">Étudiant</option>
            <option value="enseignant">Enseignant</option>
            <option value="admin">Administrateur</option>
          </select>
          <div className="text-center mb-3">
            <Link href="/register">
              <span className="text-green-600 cursor-pointer">Créer un compte</span>
            </Link>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}
