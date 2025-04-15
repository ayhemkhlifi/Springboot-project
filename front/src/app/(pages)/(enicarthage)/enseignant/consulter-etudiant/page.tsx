"use client";
import React, { useState } from "react";
import { Search } from "@src/components/icons/Icons";
import Student from "@src/types/Student";

export default function SearchBar() {
  // Sample student data
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Omar Jlassi", niveau: "3ème", groupe: "B", departement: "infotronique", note: 16.8, stage: "Oui", soutenance: "Oui" },
    { id: 2, name: "Leila Mansour", niveau: "1ère", groupe: "A", departement: "industrielle", note: 14.5, stage: "Non" },
    { id: 3, name: "Karim Daoud", niveau: "2ème", groupe: "C", departement: "mécatronique", note: 15.2, stage: "Oui" },
    { id: 4, name: "Nadia Khelifi", niveau: "3ème", groupe: "D", departement: "informatique", note: 17.9, stage: "Non" },
    
  ]);
  
  // State for filters
  const [niveauFilter, setNiveauFilter] = useState<string>("");
  const [groupeFilter, setGroupeFilter] = useState<string>("");
  const [departementFilter, setDepartementFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Update soutenance status
  const handleStageChange = (id: number, value: "Oui" | "Non") => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, soutenance: value } : student
    ));
  };

  // Update student note
  const handleNoteChange = (id: number, value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setStudents(prev => prev.map(student => 
        student.id === id ? { ...student, note: numericValue } : student
      ));
    }
  };

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesNiveau = niveauFilter ? student.niveau === niveauFilter : true;
    const matchesGroupe = groupeFilter ? student.groupe === groupeFilter : true;
    const matchesDepartement = departementFilter ? student.departement === departementFilter : true;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesNiveau && matchesGroupe && matchesDepartement && matchesSearch;
  });

  // Unique departments for filter options
  const departments = [
    "informatique",
    "mecanique",
    "electronique",
    "infotronique",
    "mecatronique",
    "industrielle"
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      {/* Search Input */}
      <div className="w-full max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Search />
        </div>
        <input
          type="text"
          placeholder="Rechercher un étudiant..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="w-full">
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            onChange={(e) => setNiveauFilter(e.target.value)}
            value={niveauFilter}
          >
            <option value="">Tous les niveaux</option>
            <option value="1ère">1ère année</option>
            <option value="2ème">2ème année</option>
            <option value="3ème">3ème année</option>
          </select>
        </div>
        
        <div className="w-full">
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            onChange={(e) => setGroupeFilter(e.target.value)}
            value={groupeFilter}
          >
            <option value="">Tous les groupes</option>
            {['A', 'B', 'C', 'D', 'E'].map(g => (
              <option key={g} value={g}>Groupe {g}</option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            onChange={(e) => setDepartementFilter(e.target.value)}
            value={departementFilter}
          >
            <option value="">Tous les départements</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className="w-full max-w-4xl mt-4 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {['ID', 'Nom', 'Niveau', 'Groupe', 'Département', 'Soutenance', 'Note'].map((header, idx) => (
                  <th 
                    key={idx}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr 
                  key={student.id} 
                  className={student.soutenance === "Non" ? "bg-red-50/50 hover:bg-red-50" : "hover:bg-gray-50"}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{student.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{student.niveau}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Groupe {student.groupe}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 capitalize">
                    {student.departement}
                  </td>
                  <td className="px-6 py-4">
                    {student.niveau === "3ème" ? (
                      <select
                        value={student.soutenance}
                        onChange={(e) => handleStageChange(student.id, e.target.value as "Oui" | "Non")}
                        className="block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                      >
                        <option value="Oui">✓ Validée</option>
                        <option value="Non">✗ En attente</option>
                      </select>
                    ) : (
                      <span className="text-sm text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={student.note}
                      onChange={(e) => handleNoteChange(student.id, e.target.value)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-center"
                      step="0.1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}