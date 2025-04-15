"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { CameraIcon } from "lucide-react";

// Définition des types
type StatusType = "Validé" | "Refusé" | "En cours";

interface TableDataItem {
  id: number;
  level: number;
  attestation: boolean;
  letter: boolean;
  poster: boolean;
  report: boolean;
  grade: number | null;
  status: StatusType;
}

// Données statiques typées
const TABLE_DATA: TableDataItem[] = [
  {
    id: 1,
    level: 1,
    attestation: true,
    letter: true,
    poster: true,
    report: true,
    grade: 16,
    status: "Validé",
  },
  {
    id: 2,
    level: 2,
    attestation: true,
    letter: true,
    poster: true,
    report: true,
    grade: 9,
    status: "Refusé",
  },
  {
    id: 3,
    level: 3,
    attestation: false,
    letter: false,
    poster: false,
    report: false,
    grade: null,
    status: "En cours",
  },
];

// Icônes prédéfinies
const PDF_ICON = <span role="img" aria-label="PDF">📄</span>;
const UPLOAD_ICON = <span role="img" aria-label="Upload">➕</span>;

// Couleurs des statuts avec type sécurisé
const STATUS_COLORS: Record<StatusType, string> = {
  "Validé": "text-green-600",
  "Refusé": "text-red-600",
  "En cours": "text-gray-600",
};

const ProfilePage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <div className="mt-4 p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Section Profil */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <label className="cursor-pointer text-gray-500 flex flex-col items-center">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <CameraIcon className="w-6 h-6 mb-1" />
                  <span className="text-xs">Upload</span>
                </>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </label>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Firas Laouini</h2>
            <p className="text-gray-500 text-sm">Étudiant à l'ENICarthage</p>
            <div className="mt-2 space-y-1">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Date de naissance:</span> 10/11/2001
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">CIN:</span> 14772214
              </p>
            </div>
          </div>
        </div>

        {/* Tableau d'avancement */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                {["Niveau", "Attestation", "Lettre", "Poster", "Rapport", "Note", "Statut"].map((header) => (
                  <th key={header} className="p-3 text-sm font-semibold text-left border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-3 text-sm border-b">{item.level}</td>
                  <td className="p-3 text-sm border-b">{item.attestation ? PDF_ICON : UPLOAD_ICON}</td>
                  <td className="p-3 text-sm border-b">{item.letter ? PDF_ICON : UPLOAD_ICON}</td>
                  <td className="p-3 text-sm border-b">{item.poster ? PDF_ICON : UPLOAD_ICON}</td>
                  <td className="p-3 text-sm border-b">{item.report ? PDF_ICON : UPLOAD_ICON}</td>
                  <td className="p-3 text-sm border-b">{item.grade ?? "-"}</td>
                  <td className={`p-3 text-sm font-bold border-b ${STATUS_COLORS[item.status]}`}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bouton d'action */}
        <Link href="etu_upload" className="block mt-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200">
            Télécharger les documents
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;