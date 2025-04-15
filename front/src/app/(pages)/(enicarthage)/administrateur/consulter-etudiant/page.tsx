"use client"
import React, { useState, useMemo } from "react";
import { Search } from "@src/components/icons/Icons";
import Student from "@src/types/Student";

export default function SearchBar() {
  // État initial des étudiants
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Ahmed Ben Ali", niveau: "1ère", groupe: "A", departement: "informatique", note: 15.5, stage: "Non" },
    { id: 2, name: "Fatma Trabelsi", niveau: "2ème", groupe: "B", departement: "mécatronique", note: 17, stage: "Oui" },
    { id: 3, name: "Mohamed Sassi", niveau: "3ème", groupe: "C", departement: "industrielle", note: 14.2, stage: "Non" },
    { id: 4, name: "Sarra Bouzid", niveau: "1ère", groupe: "A", departement: "infotronique", note: 18.3, stage: "Oui" },
  ]);

  // États pour les filtres et la recherche
  const [filters, setFilters] = useState({ groupe: "", niveau: "", departement: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // Gestion des changements de stage
  const handleStageChange = (id: number, value: "Oui" | "Non") => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, stage: value } : student
    ));
  };

  // Filtrage mémoïsé
  const filteredStudents = useMemo(() => 
    students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = (
        (!filters.groupe || student.groupe === filters.groupe) &&
        (!filters.niveau || student.niveau === filters.niveau) &&
        (!filters.departement || student.departement === filters.departement)
      );
      return matchesSearch && matchesFilters;
    }),
  [students, searchQuery, filters]
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      {/* Barre de recherche */}
      <div className="flex items-center w-full max-w-lg bg-white rounded-full shadow-md border border-gray-300">
        <input
          type="text"
          placeholder="Chercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 outline-none text-gray-700 placeholder-gray-400 rounded-l-full"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition">
          <Search  />
        </button>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-4 justify-center">
        {['groupe', 'niveau', 'departement'].map((filter) => (
          <select
            key={filter}
            name={filter}
            onChange={(e) => setFilters(prev => ({ ...prev, [filter]: e.target.value }))}
            className="border border-gray-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
            {filterOptions[filter as keyof typeof filterOptions].map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Tableau des étudiants */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {['ID', 'Nom', 'Niveau', 'Groupe', 'Département', 'Stage', 'Note'].map(header => (
                <th key={header} className="p-3 text-left text-gray-700 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr 
                key={student.id} 
                className={student.stage === "Non" ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-3">{student.id}</td>
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.niveau}</td>
                <td className="p-3">{student.groupe}</td>
                <td className="p-3">{student.departement}</td>
                <td className="p-3">
                  <select
                    value={student.stage}
                    onChange={(e) => handleStageChange(student.id, e.target.value as "Oui" | "Non")}
                    className="border border-gray-300 bg-white rounded px-2 py-1 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Oui">✓</option>
                    <option value="Non">✗</option>
                  </select>
                </td>
                <td className="p-3 font-semibold">
                  <span className={student.note >= 10 ? "text-green-600" : "text-red-600"}>
                    {student.note.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Options de filtrage prédéfinies
const filterOptions = {
  groupe: ['A', 'B', 'C', 'D', 'E'].map(value => ({ value, label: `Groupe ${value}` })),
  niveau: ['1ère', '2ème', '3ème'].map(value => ({ value, label: value })),
  departement: [
    { value: 'informatique', label: 'Informatique' },
    { value: 'mecatronique', label: 'Mécatronique' },
    { value: 'industrielle', label: 'Industrielle' },
    { value: 'infotronique', label: 'Infotronique' }
  ]
};