"use client";
import React, { useState } from "react";
import Link from "@node_modules/next/link";
import { CameraIcon, ChevronRight } from "lucide-react";

const ProfilePage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const data = [
    {
      level: 1,
      attestation: true,
      letter: true,
      poster: true,
      report: true,
      grade: 16,
      status: "Validé",
    },
    {
      level: 2,
      attestation: true,
      letter: true,
      poster: true,
      report: true,
      grade: 9,
      status: "Refusé",
    },
    {
      level: 3,
      attestation: false,
      letter: false,
      poster: false,
      report: false,
      grade: null,
      status: "En cours",
    },
  ];

  // Breadcrumbs Data
  const breadcrumbs = [
    { name: "Tableau de Bord", href: "/" },
    { name: "Étudiant", href: "/etudiant" },
    { name: "Nom", href: "/etudiant/nom" },
    { name: "Suivi d’Avancement", href: "/suivi", current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Breadcrumbs */}
     

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <label className="cursor-pointer text-gray-500 flex flex-col items-center">
                <CameraIcon className="w-6 h-6 mb-1" />
                <span className="text-xs">Upload</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          {/* Student Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Firas Laouini</h2>
            <p className="text-gray-500 text-sm">Étudiant à l'ENICarthage</p>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">Date de naissance:</span>{" "}
              10/11/2001
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">CIN:</span> 14772214
            </p>
          </div>
        </div>

        {/* Suivi d'Avancement Table (Kept as is) */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Niveau</th>
                <th className="border px-4 py-2">Attestation</th>
                <th className="border px-4 py-2">Lettre d’affectation</th>
                <th className="border px-4 py-2">Poster</th>
                <th className="border px-4 py-2">Rapport de stage</th>
                <th className="border px-4 py-2">Note</th>
                <th className="border px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{item.level}</td>
                  <td className="border px-4 py-2">
                    {item.attestation ? <PdfIcon /> : <UploadIcon />}
                  </td>
                  <td className="border px-4 py-2">
                    {item.letter ? <PdfIcon /> : <UploadIcon />}
                  </td>
                  <td className="border px-4 py-2">
                    {item.poster ? <PdfIcon /> : <UploadIcon />}
                  </td>
                  <td className="border px-4 py-2">
                    {item.report ? <PdfIcon /> : <UploadIcon />}
                  </td>
                  <td className="border px-4 py-2">
                    {item.grade !== null ? item.grade : "-"}
                  </td>
                  <td
                    className={`border px-4 py-2 font-bold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Action Button */}
        <Link href="etu_upload">
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Télécharger les documents
        </button>
        
        </Link>
      </div>
    </div>
  );
};

const PdfIcon = () => (
  <span role="img" aria-label="PDF">
    📄
  </span>
);

const UploadIcon = () => (
  <span role="img" aria-label="Upload">
    ➕
  </span>
);

const getStatusColor =  (status: string): string => {
  if (status === "Validé") return "text-green-600";
  if (status === "Refusé") return "text-red-600";
  return "text-gray-600";
};

export default ProfilePage;
