import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Header() {

   const nav = ["HOME", "ABOUT ME", "PROJECT", "CONTACT"]
   const [selected, setSelected] = useState("HOME")

   return (
      <div className='bg-LightPrimary'>
         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5'>
            <div className='flex items-center gap-10 justify-between items-center'>
               <div>
                  <h1 className='text-4xl font-bold'>Ajith.</h1>
               </div>
               <div className='hidden sm:block'>
                  <div className='flex items-center gap-10'>
                     {nav.map((item) => (
                        <div onClick={(() => setSelected(item))}>
                           <p className={`text-xs  ${selected == item ? "text-black font-bold" : "text-textLightPrimary"}`}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className='sm:hidden block'>
                  <FiAlignJustify className='text-3xl'/>
               </div>
            </div>
         </div>
      </div>
   )
}
