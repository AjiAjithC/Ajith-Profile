import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

export default function Header() {

   const nav = ["HOME", "ABOUT ME", "EXPERIENCE", "PROJECT", "CONTACT"]
   const [selected, setSelected] = useState("HOME")
   const [showNavBar, setShowNavBar] = useState(false)
   const [colorChange, setColorChange] = useState(false);


  const scrollToElement = (id) => {
   setSelected(id) 
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
 }


  
 const changeNavbarColor = () => {
   if (window.scrollY >= 80) {
     setColorChange(true);
   } else {
     setColorChange(false);
   }
 };
 
 window.addEventListener("scroll", changeNavbarColor);

   return (
      <div className={`${colorChange?"bg-white":"bg-LightPrimary"} `}>
         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5'>
            <div className='flex items-center gap-10 justify-between items-center'>
               <div>
                  <h1 className='text-4xl font-bold'>Ajith.</h1>
               </div>
               <div className='hidden sm:block'>
                  <div className='flex items-center gap-10'>
                     {nav.map((item) => (
                        <div onClick={(() => scrollToElement(item))}>
                           <p className={`text-xs  ${selected == item ? "text-black font-bold" : "text-textLightPrimary"}`}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className='sm:hidden block' onClick={() => setShowNavBar(!showNavBar)}>
                  {showNavBar ?
                     <IoClose className='text-4xl' />
                     :
                     <FiAlignJustify className='text-3xl' />
                  }
               </div>
            </div>
            <div className='block lg:hidden'>
               <div className={` flex overflow-hidden top-20   absolute ${colorChange?"bg-white":"bg-LightPrimary"} w-full left-0 right-0 ${showNavBar ? " h-160 transition-all duration-300" : "h-0 transition-all duration-300"}`}>
                  <div className=' flex flex-1   flex-col items-center gap-7'>
                     {nav.map((item) => (
                        <div className=" group overflow-hidden flex flex-col" onClick={() => { scrollToElement(item), setShowNavBar(false) }}>
                           <p className={`text-xs  ${selected == item ? "text-black font-bold" : "text-textLightPrimary"}`}>{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
