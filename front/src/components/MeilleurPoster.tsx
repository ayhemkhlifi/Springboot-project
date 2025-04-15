"use client";
import React, { useState } from "react";
import { Trophy, DocumentArrowDown } from "@src/components/icons/Icons";

type Student = {
  id: number;
  name: string;
  niveau: "1ère" | "2ème" | "3ème";
  groupe: "A" | "B" | "C" | "D";
  departement: "mecatronique" | "informatique" | "industrielle" | "infotronique";
  note: number;
  stage: "Oui" | "Non";
  posterUrl?: string;
};

export default function MeilleursPosters() {
  const [students] = useState<Student[]>([
    { id: 1, name: "Ahmed Ben Ali", niveau: "1ère", groupe: "A", departement: "informatique", note: 15.5, stage: "Non", posterUrl: "/posters/poster1.pdf" },
    { id: 2, name: "Fatma Trabelsi", niveau: "2ème", groupe: "B", departement: "mecatronique", note: 17, stage: "Oui", posterUrl: "/posters/poster2.pdf" },
    { id: 3, name: "Mohamed Sassi", niveau: "3ème", groupe: "C", departement: "industrielle", note: 14.2, stage: "Non", posterUrl: "/posters/poster3.pdf" },
    { id: 4, name: "Sarra Bouzid", niveau: "1ère", groupe: "A", departement: "infotronique", note: 18.3, stage: "Oui", posterUrl: "/posters/poster4.pdf" },
    { id: 5, name: "Ali Kacem", niveau: "1ère", groupe: "B", departement: "informatique", note: 16.7, stage: "Non", posterUrl: "/posters/poster5.pdf" },
    { id: 6, name: "Leila Mansour", niveau: "2ème", groupe: "C", departement: "mecatronique", note: 19.1, stage: "Oui", posterUrl: "/posters/poster6.pdf" },
    { id: 7, name: "Omar Jaziri", niveau: "3ème", groupe: "D", departement: "industrielle", note: 14.9, stage: "Non", posterUrl: "/posters/poster7.pdf" },
    { id: 8, name: "Nadia Souissi", niveau: "1ère", groupe: "A", departement: "infotronique", note: 17.5, stage: "Oui", posterUrl: "/posters/poster8.pdf" },
    { id: 9, name: "Hedi Belhaj", niveau: "2ème", groupe: "B", departement: "informatique", note: 15.8, stage: "Non", posterUrl: "/posters/poster9.pdf" },
    { id: 10, name: "Salma Chikhaoui", niveau: "3ème", groupe: "C", departement: "mecatronique", note: 18.0, stage: "Oui", posterUrl: "/posters/poster10.pdf" },
    { id: 11, name: "Khaled Amari", niveau: "1ère", groupe: "D", departement: "industrielle", note: 13.6, stage: "Non", posterUrl: "/posters/poster11.pdf" },
    { id: 12, name: "Hana Riahi", niveau: "2ème", groupe: "A", departement: "infotronique", note: 17.9, stage: "Oui", posterUrl: "/posters/poster12.pdf" },
    { id: 13, name: "Youssef Miled", niveau: "3ème", groupe: "B", departement: "informatique", note: 16.2, stage: "Non", posterUrl: "/posters/poster13.pdf" },
    { id: 14, name: "Sami Khelifi", niveau: "1ère", groupe: "C", departement: "mecatronique", note: 14.8, stage: "Oui", posterUrl: "/posters/poster14.pdf" },
    { id: 15, name: "Amira Bouhlel", niveau: "2ème", groupe: "D", departement: "industrielle", note: 18.7, stage: "Non", posterUrl: "/posters/poster15.pdf" },
    { id: 16, name: "Rami Zouari", niveau: "3ème", groupe: "A", departement: "infotronique", note: 15.3, stage: "Oui", posterUrl: "/posters/poster16.pdf" },
    { id: 17, name: "Sonia Triki", niveau: "1ère", groupe: "B", departement: "informatique", note: 16.5, stage: "Non", posterUrl: "/posters/poster17.pdf" },
    { id: 18, name: "Mehdi Jlassi", niveau: "2ème", groupe: "C", departement: "mecatronique", note: 19.4, stage: "Oui", posterUrl: "/posters/poster18.pdf" },
    { id: 19, name: "Mouna Gharbi", niveau: "3ème", groupe: "D", departement: "industrielle", note: 14.1, stage: "Non", posterUrl: "/posters/poster19.pdf" },
    { id: 20, name: "Hatem Fersi", niveau: "1ère", groupe: "A", departement: "infotronique", note: 17.8, stage: "Oui", posterUrl: "/posters/poster20.pdf" },
  ]);

  const [niveau, setNiveau] = useState<"1ère" | "2ème" | "3ème">("1ère");
  const [groupe, setGroupe] = useState<"A" | "B" | "C" | "D">("A");
  const [departement, setDepartement] = useState<"mecatronique" | "informatique" | "industrielle" | "infotronique">("informatique");

  const filteredStudents = students
    .filter(student => student.niveau === niveau && 
                      student.groupe === groupe && 
                      student.departement === departement)
    .sort((a, b) => b.note - a.note)
    .slice(0, 5);

  const getNoteColor = (note: number) => {
    if (note >= 18) return "text-green-600";
    if (note >= 15) return "text-yellow-600";
    return "text-red-600";
  };

  const viewPDF = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Classement des Meilleurs Posters</h2>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">Niveau</label>
          <select 
            className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={niveau} 
            onChange={e => setNiveau(e.target.value as typeof niveau)}
          >
            {["1ère", "2ème", "3ème"].map(n => 
              <option key={n} value={n}>{n} année</option>
            )}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">Département</label>
          <select 
            className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all capitalize"
            value={departement} 
            onChange={e => setDepartement(e.target.value as typeof departement)}
          >
            {["mecatronique", "informatique", "industrielle", "infotronique"].map(d => 
              <option key={d} value={d}>{d}</option>
            )}
          </select>
        </div>
      </div>

      {/* Results */}
      {filteredStudents.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-100">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Position</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Étudiant</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">Note</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Poster</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-500">
                    {index === 0 ? (
                      <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                        {index + 1}
                      </span>
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">{student.name}</span>
                      <span className="text-sm text-gray-500">{student.departement}</span>
                    </div>
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${getNoteColor(student.note)}`}>
                    {student.note.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {student.posterUrl ? (
                      <button
                        onClick={() => viewPDF(student.posterUrl!)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Voir le poster"
                      >
                        <DocumentArrowDown className="w-5 h-5" />
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">Non disponible</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-6 text-center text-gray-500 bg-gray-50 rounded-lg">
          Aucun étudiant trouvé avec ces critères
        </div>
      )}
    </div>
  );
}