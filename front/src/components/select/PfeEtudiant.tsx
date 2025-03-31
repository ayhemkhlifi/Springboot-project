import React, { useState } from 'react'
import { Delete, Down } from '../icons/Icons'
import useClickOutside from '@src/hooks/useClickOutSide';
export default function PfeEtudiant({list}:{list?:string[]}) {
    const [openList,setOpenList] = useState<boolean>(false);
    const etudiantListRef = React.useRef<HTMLDivElement>(null);
    const handleOutsideClick=()=>{
        setOpenList(false);
    }
    useClickOutside(etudiantListRef, handleOutsideClick);
  return (
    <div ref={etudiantListRef} className='relative'>
        <div className='border flex-between select-none border-gray-500 px-2 py-1 rounded-md cursor-pointer' 
            onClick={()=>setOpenList(!openList)}>
            Etudiants <Down />
        </div>
        {
            openList && <div className='absolute border border-gray-500 rounded-md mt-1 bg-white shadow-2xl z-20 '>
                <ul>
                    {list?.map((item, index) => (
                        <li key={index} className='border-b border-gray-500 px-2 py-1 flex-between'>
                            <span>{item}</span><button className='cursor-pointer'><Delete /></button>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-1 relative'>
                    <input type="text" placeholder='...'  className='border-0 focus:ring-blue-600 w-full p-0.5 '/>
                    <button className='bg-blue-600 shadow-2xl text-white flex-center absolute -right-6 w-6 top-0 h-full rounded-r-md cursor-pointer'>+</button>
                </div>
            </div>
        }
    </div>
  )
}
