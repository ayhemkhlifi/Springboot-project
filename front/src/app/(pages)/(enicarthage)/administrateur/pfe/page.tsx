"use client";

import React, { useState } from "react";
import { StudentPfe } from "@src/types/StudentPfe";

// Assure-toi que le type StudentPfe contient bien ce champ :
// pfeDate: string;

const students: StudentPfe[] = [
  {
    id: 1,
    name: "Ahmed Ben Ali",
    groupe: "G1",
    cin: "12345678",
    hasSentence: true,
    sentenceLanguage: "English",
    departement: "informatique",
    profs: ["Mr. Smith", "Mme. Dupont"],
    note: 18,
    pfeDate: "2025-06-15",
  },
  {
    id: 2,
    name: "Fatma Trabelsi",
    groupe: "G2",
    cin: "87654321",
    hasSentence: false,
    sentenceLanguage: "",
    departement: "informatique",
    profs: ["Mr. Smith", "Mme. Dupont"],
    note: 18,
    pfeDate: "2025-06-20",
  },
];

export default function StudentTable() {
  const [search, setSearch] = useState("");
  const [studentsData, setStudentsData] = useState(students);

  const handleSentenceChange = (id: number, value: boolean) => {
    setStudentsData((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, hasSentence: value } : student
      )
    );
  };

  const handleDateChange = (id: number, date: string) => {
    setStudentsData((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, pfeDate: date } : student
      )
    );
  };

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 flex-center flex-col">
      <input
        type="text"
        placeholder="Rechercher un étudiant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 max-w-2xl p-2 border border-gray-300 rounded-md bg-white"
      />
      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border border-gray-300 text-center">ID</th>
            <th className="p-2 border border-gray-300 text-center">Nom & Prénom</th>
            <th className="p-2 border border-gray-300 text-center">Groupe</th>
            <th className="p-2 border border-gray-300 text-center">CIN</th>
            <th className="p-2 border border-gray-300 text-center">Département</th>
            <th className="p-2 border border-gray-300 text-center">Effectué Sentence</th>
            <th className="p-2 border border-gray-300 text-center">Langue Sentence</th>
            <th className="p-2 border border-gray-300 text-center">Professeurs</th>
            <th className="p-2 border border-gray-300 text-center">Date PFE</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {filteredStudents.map((student) => (
            <tr key={student.id} className="border-b border-gray-300">
              <td className="p-2 border border-gray-300">{student.id}</td>
              <td className="p-2 border border-gray-300">{student.name}</td>
              <td className="p-2 border border-gray-300">{student.groupe}</td>
              <td className="p-2 border border-gray-300">{student.cin}</td>
              <td className="p-2 border border-gray-300">{student.departement}</td>
              <td className="p-2 border border-gray-300">
                <select
                  value={student.hasSentence ? "yes" : "no"}
                  onChange={(e) =>
                    handleSentenceChange(student.id, e.target.value === "yes")
                  }
                  className={`p-1 rounded ${
                    student.hasSentence ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <option value="yes" className="text-green-600">
                    Oui
                  </option>
                  <option value="no" className="text-red-600">
                    Non
                  </option>
                </select>
              </td>
              <td className="p-2 border border-gray-300">
                {student.sentenceLanguage || "N/A"}
              </td>
              <td className="p-2 border border-gray-300">
                {student.profs.join(", ")}
              </td>
              <td className="p-2 border border-gray-300">
                <input
                  type="date"
                  value={student.pfeDate}
                  onChange={(e) =>
                    handleDateChange(student.id, e.target.value)
                  }
                  className="p-1 rounded border border-gray-300  bg-white text-gray-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
