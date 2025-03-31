"use client"

import React, { useState } from "react";
import Student from "@src/types/Student";



export default function MeilleurPoster()  {

 const students: Student[] = [
        { id: 1, name: "Ahmed Ben Ali", niveau: "1ère", groupe: "A", departement: "informatique", note: 15.5, stage: "Non" },
  { id: 2, name: "Fatma Trabelsi", niveau: "2ème", groupe: "B", departement: "mecatronique", note: 17, stage: "Oui" },
  { id: 3, name: "Mohamed Sassi", niveau: "3ème", groupe: "C", departement: "industrielle", note: 14.2, stage: "Non" },
  { id: 4, name: "Sarra Bouzid", niveau: "1ère", groupe: "A", departement: "infotronique", note: 18.3, stage: "Oui" },
  { id: 5, name: "Ali Kacem", niveau: "1ère", groupe: "B", departement: "informatique", note: 16.7, stage: "Non" },
  { id: 6, name: "Leila Mansour", niveau: "2ème", groupe: "C", departement: "mecatronique", note: 19.1, stage: "Oui" },
  { id: 7, name: "Omar Jaziri", niveau: "3ème", groupe: "D", departement: "industrielle", note: 14.9, stage: "Non" },
  { id: 8, name: "Nadia Souissi", niveau: "1ère", groupe: "A", departement: "infotronique", note: 17.5, stage: "Oui" },
  { id: 9, name: "Hedi Belhaj", niveau: "2ème", groupe: "B", departement: "informatique", note: 15.8, stage: "Non" },
  { id: 10, name: "Salma Chikhaoui", niveau: "3ème", groupe: "C", departement: "mecatronique", note: 18.0, stage: "Oui" },
  { id: 11, name: "Khaled Amari", niveau: "1ère", groupe: "D", departement: "industrielle", note: 13.6, stage: "Non" },
  { id: 12, name: "Hana Riahi", niveau: "2ème", groupe: "A", departement: "infotronique", note: 17.9, stage: "Oui" },
  { id: 13, name: "Youssef Miled", niveau: "3ème", groupe: "B", departement: "informatique", note: 16.2, stage: "Non" },
  { id: 14, name: "Sami Khelifi", niveau: "1ère", groupe: "C", departement: "mecatronique", note: 14.8, stage: "Oui" },
  { id: 15, name: "Amira Bouhlel", niveau: "2ème", groupe: "D", departement: "industrielle", note: 18.7, stage: "Non" },
  { id: 16, name: "Rami Zouari", niveau: "3ème", groupe: "A", departement: "infotronique", note: 15.3, stage: "Oui" },
  { id: 17, name: "Sonia Triki", niveau: "1ère", groupe: "B", departement: "informatique", note: 16.5, stage: "Non" },
  { id: 18, name: "Mehdi Jlassi", niveau: "2ème", groupe: "C", departement: "mecatronique", note: 19.4, stage: "Oui" },
  { id: 19, name: "Mouna Gharbi", niveau: "3ème", groupe: "D", departement: "industrielle", note: 14.1, stage: "Non" },
  { id: 20, name: "Hatem Fersi", niveau: "1ère", groupe: "A", departement: "infotronique", note: 17.8, stage: "Oui" },
  { id: 21, name: "Karim Jaouadi", niveau: "2ème", groupe: "B", departement: "informatique", note: 15.6, stage: "Non" },
  { id: 22, name: "Leila Baccar", niveau: "3ème", groupe: "C", departement: "mecatronique", note: 18.2, stage: "Oui" },
  { id: 23, name: "Tarek Sellami", niveau: "1ère", groupe: "D", departement: "industrielle", note: 13.9, stage: "Non" },
  { id: 24, name: "Imen Saidi", niveau: "2ème", groupe: "A", departement: "infotronique", note: 17.1, stage: "Oui" },
  { id: 25, name: "Walid Dridi", niveau: "3ème", groupe: "B", departement: "informatique", note: 16.9, stage: "Non" },
  ];   
  const [niveau, setNiveau] = useState<"1ère" | "2ème" | "3ème">("1ère");
  const [groupe, setGroupe] = useState<"A" | "B" | "C" | "D">("A");
  const [departement, setDepartement] = useState<"mecatronique" | "informatique" | "industrielle" | "infotronique">("informatique");

  const filteredStudents = students
    .filter(student => student.niveau === niveau && student.groupe === groupe && student.departement === departement)
    .sort((a, b) => b.note - a.note)
    

  return (
    <div className="p-4 bg-gray-200 text-black rounded-lg">
      <h2 className="text-xl font-bold mb-4">Meilleur Poster</h2>
      <div className="flex gap-4 mb-4">
        <select className="p-2 hover:bg-blue-500 hover:rounded-2xl" value={niveau} onChange={e => setNiveau(e.target.value as "1ère" | "2ème" | "3ème") }>
          {["1ère", "2ème", "3ème"].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <select className="p-2  hover:bg-blue-500 hover:rounded-2xl" value={groupe} onChange={e => setGroupe(e.target.value as "A" | "B" | "C" | "D") }>
          {["A", "B", "C", "D"].map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select className="p-2  hover:bg-blue-500 hover:rounded-2xl" value={departement} onChange={e => setDepartement(e.target.value as "mecatronique" | "informatique" | "industrielle" | "infotronique") }>
          {["mecatronique", "informatique", "industrielle", "infotronique"].map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nom</th>
            <th className="border p-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id} className="border">
              <td className="p-2">{student.id}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


