"use client";
import React, { useState, useMemo } from "react";
import { StudentPfe } from "@src/types/StudentPfe";
import { CheckCircle, XCircle, Clock } from "react-feather";

const StudentTable = () => {
  const [search, setSearch] = useState("");
  const [studentsData, setStudentsData] = useState<StudentPfe[]>([
    {
      id: 1,
      name: "Ahmed Ben Ali",
      groupe: "G1",
      niveau: "3ème année",
      cin: "12345678",
      hasSentence: true,
      sentenceLanguage: "English",
      departement: "informatique",
      profs: ["Mr. Smith", "Mme. Dupont"],
      note: 18,
      pfeDate: "2025-06-15",
      stage: "Oui"
    },
    {
      id: 2,
      name: "Fatma Trabelsi",
      groupe: "G2",
      niveau: "2ème année",
      cin: "87654321",
      hasSentence: false,
      sentenceLanguage: "",
      departement: "informatique",
      profs: ["Mr. Smith", "Mme. Dupont"],
      note: 16.5,
      pfeDate: "2025-06-20",
      stage: "En cours"
    }
  ]);

  const handleSentenceChange = (id: number, value: boolean) => {
    setStudentsData(prev => 
      prev.map(student => 
        student.id === id ? { ...student, hasSentence: value } : student
      )
    );
  };

  const handleDateChange = (id: number, date: string) => {
    setStudentsData(prev => 
      prev.map(student => 
        student.id === id ? { ...student, pfeDate: date } : student
      )
    );
  };

  const filteredStudents = useMemo(() => 
    studentsData.filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.cin.includes(search)
    ),
    [search, studentsData]
  );

  const getStageBadge = (stage: StudentPfe["stage"]) => {
    const baseStyle = "px-2 py-1 rounded-full text-sm flex items-center gap-1";
    switch(stage) {
      case "Oui":
        return <span className={`${baseStyle} bg-green-100 text-green-800`}><CheckCircle className="w-4 h-4"/>Terminé</span>;
      case "Non":
        return <span className={`${baseStyle} bg-red-100 text-red-800`}><XCircle className="w-4 h-4"/>Non débuté</span>;
      default:
        return <span className={`${baseStyle} bg-yellow-100 text-yellow-800`}><Clock className="w-4 h-4"/>En cours</span>;
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Rechercher par nom ou CIN..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {['ID', 'Nom', 'Groupe', 'Niveau', 'CIN', 'Département', 'Sentence', 'Langue', 'Professeurs', 'Date PFE', 'Stage', 'Note'].map((header) => (
                <th 
                  key={header}
                  className="p-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-600">{student.id}</td>
                <td className="p-3 font-medium text-gray-900">{student.name}</td>
                <td className="p-3 text-gray-600">{student.groupe}</td>
                <td className="p-3 text-gray-600">{student.niveau}</td>
                <td className="p-3 text-gray-600">{student.cin}</td>
                <td className="p-3 text-gray-600 capitalize">{student.departement}</td>
                <td className="p-3">
                  <select
                    value={student.hasSentence ? "yes" : "no"}
                    onChange={(e) => handleSentenceChange(student.id, e.target.value === "yes")}
                    className={`px-2 py-1 rounded-full text-sm ${
                      student.hasSentence 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <option value="yes">Oui</option>
                    <option value="no">Non</option>
                  </select>
                </td>
                <td className="p-3 text-gray-600">
                  {student.sentenceLanguage || "-"}
                </td>
                <td className="p-3 text-gray-600">
                  <div className="flex flex-col gap-1">
                    {student.profs.map((prof, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {prof}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3">
                  <input
                    type="date"
                    value={student.pfeDate}
                    onChange={(e) => handleDateChange(student.id, e.target.value)}
                    className="px-2 py-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td className="p-3">
                  {getStageBadge(student.stage)}
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full ${
                    student.note >= 10 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
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
};

export default StudentTable;