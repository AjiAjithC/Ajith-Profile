import React from 'react'
import myImg from "../../assets/myImg.png"
import { FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
export default function Home() {
   return (
      <div id='HOME' className='bg-LightPrimary pt-10 pb-15'>

         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
            <div className='flex flex-col-reverse sm:flex-row '>
               <div className='flex flex-1 flex-col   justify-center'>
                  <p className='font-light   text-lg text-textLightPrimary'>Hello, I am</p>
                  <p className='font-bold text-5xl mt-1'>Ajith ChandraSekar</p>

                  <div className='flex mt-5'>
                     <div className='border-y py-2 border-borderPrimary pr-5'>
                        <p className='font-light   text-lg text-textLightPrimary'>Sr.React Native Developer</p>
                     </div>
                  </div>
                  <div className='flex gap-5 mt-5'>
                     <FaLinkedinIn className='text-textLightPrimary text-xl' />
                     <FaWhatsapp className='text-textLightPrimary text-xl' />
                     <FaInstagram className='text-textLightPrimary text-xl' />
                     <FaFacebookF className='text-textLightPrimary text-xl' />
                  </div>
                  <div className='mt-7'>
                     <button className='border-2 px-10 py-2 rounded-4xl flex items-center bg-LightSecondary'>
                        <p className='font-light text-base  text-black'>View My Resume</p>
                        <FaArrowRight className='pl-2 text-xl'/>
                     </button>
                  </div>

               </div>

               <div className=' border-borderPrimary rounded-2xl flex flex-1 justify-center items-center sm:mb-0 mb-5'>
                  <img src={myImg} className='h-90 lg:h-140 ' />
                  {/* <img src={myImg} className='w-100 h-100 md:w-full md:h-full' /> */}
               </div>

            </div>
         </div>
      </div>

   )
}
