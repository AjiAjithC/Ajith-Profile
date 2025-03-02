import React from 'react'
import html from "../../assets/icon/html.png"
import css from "../../assets/icon/css.png"
import bug from "../../assets/icon/bug.png"
import javascript from "../../assets/icon/javascript.png"
import react from "../../assets/icon/react.png"
import redux from "../../assets/icon/redux.png"
import tailwindcss from "../../assets/icon/tailwindcss.png"
import probleme from "../../assets/icon/probleme.png"

export default function AboutMe() {

   const skills = [
      {
         name: "ReactNative",
         icon: react
      },
      {
         name: "React",
         icon: react
      },
      {
         name: "Redux",
         icon: redux
      },
      {
         name: "Javascript",
         icon: javascript
      },
      {
         name: "HTML",
         icon: html
      },
      {
         name: "CSS",
         icon: css
      },
      {
         name: "Tailwindcss",
         icon: tailwindcss
      },
      {
         name: "Testing&Debugging",
         icon: bug
      },
      {
         name: "Problem-Solving",
         icon: probleme
      },
   ]


   return (
      <div id='ABOUT ME' className='bg-white my-20'>

         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
            <div className=''>
               <div className='flex justify-center items-center flex-col'>
                  <h1 className='text-center font-bold text-4xl'>About Me</h1>
                  <div className='border-1 border-borderPrimary w-60 mt-3' />
                  {/* <div className='border-2 border-borderPrimary border-black w-30 rounded-2xl ' /> */}
               </div>
            </div>
            <div className='flex mt-10 flex-col lg:flex-row gap-10'>
               <div className='flex flex-1 p-2'>
                  <p className='text-base text-textLightPrimary'>Self-driven and versatile Senior Mobile Application Developer with
                     3 years of experience. Excellent analytical and communication skills
                     with capability to handle new technologies. Strong problem-solving,
                     organizing, planning, skills with ability to work in team environment</p>
               </div>
               <div className='flex flex-col flex-1 items-start'>
                  <h1 className='text-center font-bold text-xl'>Skills</h1>

                  <div className='grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-2 mt-5 '>
                     {skills.map((item) => (
                        <div className="flex flex-row flex-1 items-center mr-4 mb-5" >
                           <img src={item.icon} className='h-8 w-8'/>
                           <p className='text-base font-medium text-textLightSecondary ml-3 '>{item.name}</p>
                        </div>
                     ))}

                  </div>


               </div>
            </div>

         </div>
      </div>
   )
}
