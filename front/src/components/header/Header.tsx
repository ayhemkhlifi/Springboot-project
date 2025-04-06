"use client"
import React from 'react'
import { LogOut } from '../icons/Icons'
import handleLogout from '@src/app/action/logout'
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <div>
        <h1 className="text-2xl font-bold">Tableau de Board</h1>
        <p className='text-gray-500'>Gestion et Suivi des Stages étudiants</p>
      </div>
       <button className='cursor-pointer hover:scale-105' onClick={()=>handleLogout(router)}>
          <LogOut />
       </button>
    </header>
  )
}
