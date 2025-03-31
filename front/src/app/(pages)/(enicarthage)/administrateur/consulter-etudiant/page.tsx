"use client"
import React, { useState } from "react";
import { Search } from "@src/components/icons/Icons";
import Student from "@src/types/Student";

export default function SearchBar() {
  // Sample student data
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Ahmed Ben Ali", niveau: "1ère", groupe: "A", departement: "informatique", note: 15.5, stage: "Non" },
    { id: 2, name: "Fatma Trabelsi", niveau: "2ème", groupe: "B", departement: "mecatronique", note: 17, stage: "Oui" },
    { id: 3, name: "Mohamed Sassi", niveau: "3ème", groupe: "C", departement: "industrielle", note: 14.2, stage: "Non" },
    { id: 4, name: "Sarra Bouzid", niveau: "1ère", groupe: "A", departement: "infotronique", note: 18.3, stage: "Oui" },
  ]);

  // Function to update stage status
  const handleStageChange = (id: number, value: "Oui" | "Non") => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, stage: value } : student
      )
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full p-4">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden border border-gray-300">
        <input
          type="text"
          placeholder="Chercher..."
          className="w-full px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="p-2 cursor-pointer bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <Search />
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex gap-4">
        <select className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Groupe</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <select className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Niveau</option>
          <option value="1ère">1ère</option>
          <option value="2ème">2ème</option>
          <option value="3ème">3ème</option>
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
              <th className="p-3 text-left">Stage</th>
              <th className="p-3 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className={student.stage == "Non" ? "bg-gray-100" : "bg-white"}>
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.niveau}</td>
                <td className="p-3">{student.groupe}</td>
                <td className="p-3">
                  <select
                    value={student.stage}
                    onChange={(e) => handleStageChange(student.id, e.target.value as "Oui" | "Non")}
                    className="border border-gray-300 bg-white rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </td>
                <td className="p-3">{student.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
