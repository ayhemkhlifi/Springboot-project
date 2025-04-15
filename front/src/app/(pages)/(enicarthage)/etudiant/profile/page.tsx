"use client";
import React, { useState } from "react";
import Link from "next/link";

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
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        {/* Profile Photo */}
        <div className="flex flex-col items-center relative mb-6">
          <div className="w-32 h-32 border-4 border-blue-100 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative transition-all hover:border-blue-200">
            {image ? (
              <img 
                src={image} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <label className="cursor-pointer w-full h-full flex items-center justify-center group">
                <div className="text-center">
                  <span className="text-3xl">📷</span>
                  <p className="text-xs text-gray-500 mt-1 group-hover:text-blue-600 transition-colors">
                    Upload Photo
                  </p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Firas Laouini</h2>
          <p className="text-gray-500 text-sm">Étudiant à l'ENICarthage</p>
        </div>

        {/* Information Card */}
        <div className="space-y-3 bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm font-medium">Date de naissance:</span>
            <span className="text-gray-800 text-sm">10/11/2001</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm font-medium">CIN:</span>
            <span className="text-gray-800 text-sm font-mono">14772214</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm font-medium">Email:</span>
            <span className="text-blue-600 text-sm">firas@enicar.tn</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm font-medium">Téléphone:</span>
            <span className="text-gray-800 text-sm">+216 12 345 678</span>
          </div>
          
          <div className="pt-3 border-t border-gray-200">
            <p className="text-blue-600 font-semibold text-sm text-center">
              Carte Étudiant 2024-2025
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Link href="etudiant/etu_avan" className="block w-full">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Voir Avancement Stage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;