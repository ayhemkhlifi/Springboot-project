"use client"
import React, { useEffect } from 'react';
import { setWhoami } from '@src/utils/setWhoami';
import logo_adm from "@public/imgs/administrateur.webp"
import CustomImage from '@src/components/customImages/CustomImage';
export default function AdminPage() {
  useEffect(() => {
    const success = setWhoami("administration");
    if (!success) {
      console.log("storage error");
    }
  }, []);

  return (
    <div className='text-white h-full overflow-hidden flex-center flex-col gap-4'>
      <h1 className='text-blue-400 text-6xl text-center'>Bienvenue sur la page de l'administrateur</h1>
      <CustomImage src={logo_adm} alt='adm' className='w-auto h-[80%] rounded-md' />
    </div>
  );
}