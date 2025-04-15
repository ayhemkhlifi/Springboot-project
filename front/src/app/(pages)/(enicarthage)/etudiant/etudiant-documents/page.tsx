"use client";
import React, { useState } from "react";
import { FiUploadCloud, FiFile, FiX, FiCheckCircle } from "react-icons/fi";

interface FileUploadProps {
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    attestation: null,
    poster: null,
    affectation: null,
    lettre_d_affectation: null,
    raport_de_stage: null,
  });

  const docs = [
    { title: "Attestation", key: "attestation", required: true },
    { title: "Poster", key: "poster", required: false },
    { title: "Document d'affectation", key: "affectation", required: true },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFiles((prev) => ({ ...prev, [key]: file }));
    } else {
      alert("Veuillez sélectionner un fichier PDF valide");
    }
  };

  const removeFile = (key: string) => {
    setFiles((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm">
      <header className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {label}
        </h2>
        <p className="text-gray-500 mt-2">Format accepté : PDF (max. 5MB)</p>
      </header>

      <div className="space-y-6">
        {docs.map((item) => (
          <section 
            key={item.key}
            className="p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-200 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-700">
                {item.title}
                {item.required && <span className="text-red-500 ml-2">*</span>}
              </h3>
              {files[item.key] && (
                <FiCheckCircle className="text-green-500 w-5 h-5" />
              )}
            </div>

            {files[item.key] ? (
              <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FiFile className="text-blue-600 w-6 h-6" />
                  <div>
                    <p className="font-medium text-gray-700">{files[item.key]?.name}</p>
                    <p className="text-sm text-gray-500">
                      {(files[item.key]?.size || 0 / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(item.key)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Supprimer le fichier"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center space-y-3 group">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  <FiUploadCloud className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Télécharger PDF
                </span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, item.key)}
                  className="hidden"
                  aria-label={`Télécharger ${item.title}`}
                />
              </label>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Annuler
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Soumettre les documents
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FileUpload;