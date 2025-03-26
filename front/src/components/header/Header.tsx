import React from 'react'
import { LogOut } from '../icons/Icons'
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <div>
        <h1 className="text-2xl font-bold">Tableau de Board</h1>
        <p className='text-gray-500'>Gestion et Suivi des Stages étudiants</p>
      </div>
       <button className='cursor-pointer hover:scale-105'>
          <LogOut />
       </button>
    </header>
  )
}
