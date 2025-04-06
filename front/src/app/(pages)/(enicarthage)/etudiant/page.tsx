
"use client"
import React, { useState} from "react";
import Link from "@node_modules/next/link";
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

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-[400px] border border-gray-200">
        
        {/* Profile Photo */}
        <div className="flex flex-col items-center relative">
          <div className="w-28 h-28 border-4 border-blue-500 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <label className="cursor-pointer text-gray-500 flex flex-col items-center">
                <div className="cursor-pointer text-gray-500 flex flex-col items-center">
                    <span className="text-2xl">📷</span> 
                    <span className="text-xs">Upload Photo</span>
                </div>

                <span className="text-xs">Upload Photo</span>
                <input type="file" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Firas Laouini</h2>
          <p className="text-gray-500 text-sm">Étudiant à l'ENICarthage</p>
        </div>

        {/* Card Information */}
        <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
          <p className="text-gray-600 text-sm"><span className="font-semibold">Date de naissance:</span> 10/11/2001</p>
          <p className="text-gray-600 text-sm"><span className="font-semibold">CIN:</span> 14772214</p>
          <p className="text-blue-600 font-semibold text-sm">Carte Étudiant 2024-2025</p>
        </div>

        {/* Button */}
        <Link href="etudiant/etu_avan">
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Voir Avancement Stage
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;

