"use client";
import React, { useState } from "react";

interface FileUploadProps {
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    attestation: null,
    poster: null,
    affectation: null,
    lettre_d_affectation: null,
    raport_de_stage : null,
  });

  const docs = [
    { title: "Attestation", key: "attestation" },
    { title: "Poster", key: "poster" },
    { title: "Document d'affectation", key: "affectation" },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const uploadedFile = event.target.files?.[0] || null;
    setFiles((prevFiles) => ({ ...prevFiles, [key]: uploadedFile }));
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">{label}</h2>
      
      <div className="grid gap-4">
        {docs.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg bg-gray-100 shadow-sm">
            <h3 className="text-md font-medium mb-2">{item.title}</h3>
            
            {files[item.key] ? (
              <div className="flex flex-col items-center space-y-2">
                <a
                  href={URL.createObjectURL(files[item.key]!)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline flex items-center space-x-2"
                >
                  📄 <span>View {files[item.key]?.name}</span>
                </a>
                <button
                  onClick={() => setFiles((prev) => ({ ...prev, [item.key]: null }))}
                  className="text-red-500 text-sm underline hover:text-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                ➕ Upload PDF
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(e, item.key)}
                  className="hidden"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;