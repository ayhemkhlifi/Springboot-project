"use client";
import React, { useState } from "react";
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  DocumentCheckIcon,
  CalendarIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { StudentPfe } from "@src/types/StudentPfe";

export default function TeacherProfile() {
  const [activeTab, setActiveTab] = useState<"classes" | "thirdYear">("classes");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  // Classes data for 1ère and 2ème
  const classes = [
    {
      level: "1ère",
      department: "Informatique",
      className: "Groupe A",
      studentCount: 24,
      teacher: "Prof. Dupont",
      salle: "Salle B203",
      schedule: "Lundi/Jeudi 14h-16h",
    },
    {
      level: "2ème",
      department: "Mécatronique",
      className: "Groupe B",
      studentCount: 22,
      teacher: "Prof. Martin",
      salle: "Salle A102",
      schedule: "Mardi/Vendredi 10h-12h",
    },
  ];

  // 3ème year students data
  const thirdYearStudents: StudentPfe[] = [
    {
      id: 1,
      name: "Ahmed Ben Ali",
      niveau: "3ème",
      groupe: "A",
      departement: "informatique",
      cin: "12345678",
      hasSentence: true,
      sentenceLanguage: "Français",
      pfeDate: "2024-06-15",
      profs: ["Prof. Dupont", "Prof. Martin"],
      note: 16.5,
      stage: "En cours",
    },
    {
      id: 2,
      name: "Fatma Trabelsi",
      niveau: "3ème",
      groupe: "B",
      departement: "mécatronique",
      cin: "87654321",
      hasSentence: false,
      sentenceLanguage: "",
      pfeDate: "2024-06-18",
      profs: ["Prof. Leroy"],
      note: 14.0,
      stage: "Oui",
    },
  ];

  const filteredStudents = thirdYearStudents.filter((student) =>
    selectedDepartment === "all"
      ? true
      : student.departement === selectedDepartment
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <BuildingOffice2Icon className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Espace Enseignant</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("classes")}
          className={`pb-2 px-4 ${
            activeTab === "classes"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Classes (1ère/2ème)
        </button>
        <button
          onClick={() => setActiveTab("thirdYear")}
          className={`pb-2 px-4 ${
            activeTab === "thirdYear"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Étudiants de 3ème
        </button>
      </div>

      {/* Content Sections */}
      {activeTab === "classes" ? (
        // Classes Grid
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <UserGroupIcon className="w-6 h-6 text-gray-600" />
                <h3 className="text-lg font-semibold">{cls.className}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Niveau:</span> {cls.level}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Département:</span>{" "}
                  {cls.department}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Salle:</span> {cls.salle}
                </p>
                <p className="text-sm flex">
                  <span className="font-medium">Emploi du temps:</span>
                  <span className="ml-2 text-blue-600 flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {cls.schedule}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Étudiants:</span>{" "}
                  {cls.studentCount}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Enseignant:</span> {cls.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // 3ème Students Section
        <div>
          {/* Department Filter */}
          <div className="mb-4 flex gap-4 items-center">
            <select
              className="p-2 border rounded-lg"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">Tous les départements</option>
              <option value="mecatronique">Mécatronique</option>
              <option value="informatique">Informatique</option>
              <option value="infotronique">Infotronique</option>
              <option value="industrielle">Industrielle</option>
            </select>
            <span className="text-sm text-gray-500">
              {filteredStudents.length} étudiants trouvés
            </span>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    CIN
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Nom
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Groupe
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Département
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Membres du Jury
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Langue
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Date PFE
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Stage
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Note
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono">{student.cin}</td>
                    <td className="px-4 py-3 text-sm">{student.name}</td>
                    <td className="px-4 py-3 text-sm">{student.groupe}</td>
                    <td className="px-4 py-3 text-sm capitalize">
                      {student.departement}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {student.profs.join(", ")}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {student.hasSentence ? (
                        <span className="text-green-600 flex items-center">
                          <BookOpenIcon className="w-4 h-4 mr-1" />
                          {student.sentenceLanguage}
                        </span>
                      ) : (
                        <span className="text-red-500">À compléter</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {new Date(student.pfeDate).toLocaleDateString("fr-FR", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          student.stage === "Oui"
                            ? "bg-green-100 text-green-800"
                            : student.stage === "Non"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {student.stage}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-3 text-sm font-semibold ${
                        student.note >= 16
                          ? "text-green-600"
                          : student.note >= 12
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {student.note}/20
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <DocumentCheckIcon className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <span className="text-sm">Modifier</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}