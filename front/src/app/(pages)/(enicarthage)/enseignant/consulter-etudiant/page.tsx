"use client";
import React, { useState } from "react";
import { Search } from "@src/components/icons/Icons";
import Student from "@src/types/Student";

export default function SearchBar() {
  // Sample student data
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Omar Jlassi", niveau: "3ème", groupe: "B", departement: "infotronique", note: 16.8, stage: "Oui", soutenance: "Oui" },
    { id: 2, name: "Leila Mansour", niveau: "1ère", groupe: "A", departement: "industrielle", note: 14.5, stage: "Non" },
    { id: 3, name: "Karim Daoud", niveau: "2ème", groupe: "C", departement: "mecatronique", note: 15.2, stage: "Oui" },
    { id: 4, name: "Nadia Khelifi", niveau: "3ème", groupe: "D", departement: "informatique", note: 17.9, stage: "Non" },
  ]);
  
  // State for filters
  const [niveauFilter, setNiveauFilter] = useState<string>("");
  const [groupeFilter, setGroupeFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to update soutenance status
  const handleStageChange = (id: number, value: "Oui" | "Non") => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, soutenance: value } : student
      )
    );
  };

  // Function to update student note
  const handleNoteChange = (id: number, value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, note: numericValue } : student
        )
      );
    }
  };

  // Filter students based on the selected Niveau, Groupe, and Search term
  const filteredStudents = students.filter((student) => {
    const matchesNiveau = niveauFilter ? student.niveau === niveauFilter : true;
    const matchesGroupe = groupeFilter ? student.groupe === groupeFilter : true;
    const matchesSearchTerm = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesNiveau && matchesGroupe && matchesSearchTerm;
  });

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden border border-gray-300">
        <input
          type="text"
          placeholder="Chercher..."
          className="w-full px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2 cursor-pointer bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <Search />
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex gap-4 mt-4">
        <select
          className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setNiveauFilter(e.target.value)}
          value={niveauFilter}
        >
          <option value="">Niveau</option>
          <option value="1ère">1ère</option>
          <option value="2ème">2ème</option>
          <option value="3ème">3ème</option>
        </select>

        <select
          className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setGroupeFilter(e.target.value)}
          value={groupeFilter}
        >
          <option value="">Groupe</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>

      {/* Table of Students */}
      <div className="w-full max-w-4xl mt-3 overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nom et Prénom</th>
              <th className="p-3 text-left">Niveau</th>
              <th className="p-3 text-left">Groupe</th>
              <th className="p-3 text-left">Soutenance</th>
              <th className="p-3 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} className={student.soutenance === "Non" ? "bg-gray-100" : "bg-white"}>
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.niveau}</td>
                <td className="p-3">{student.groupe}</td>
                <td className="p-3">
                  {student.niveau === "3ème" ? (
                    <select
                      value={student.soutenance}
                      onChange={(e) => handleStageChange(student.id, e.target.value as "Oui" | "Non")}
                      className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="Oui">Oui</option>
                      <option value="Non">Non</option>
                    </select>
                  ) : (
                    <span>{student.soutenance}</span>
                  )}
                </td>
                {/* Editable Note Field */}
                <td className="p-3">
                  <input
                    type="number"
                    value={student.note}
                    onChange={(e) => handleNoteChange(student.id, e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
