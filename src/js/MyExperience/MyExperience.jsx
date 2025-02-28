import React from 'react'

export default function MyExperience() {



   const list = [
      "•  Responsive UI Design supporting Android and iOS devices from 4 inches to 7 inches.",
      "•  Hands on Redux with latest @reduxjs/toolkit.",
      "•  Created React Native Template with customized styles and components for efficient new projects development.",
      "•  Centralized Token System with AT&RT Developed.",
      "•  Push Notification and Dynamic linking - Android and iOS. Firebase.",
      "•  Code Push using AppCenter.",
      "•  App Development from scratch to App release to Playstore and Appstore.",
      "•  Writing less code and creating customized functions to solve complex functionality.",
      "•  Implemented custom npm libraries via GitHub and integrated them into projects.",
      "•  Integrated Google Maps into my React Native project.",
      "•  Created a custom CodePush library.",
      "•  Implemented secure payment integration in React Native applications."
   ]


   return (
      <div className='bg-LightPrimary py-20'>

         <div className=' max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
            <div className=''>
               <div className='flex justify-center items-center flex-col'>
                  <h1 className='text-center font-bold text-4xl'>Work Experience</h1>
                  <div className='border-1 border-borderPrimary w-85 mt-3' />
               </div>
            </div>
            <div className='flex mt-10 flex-col lg:flex-row'>
               <div className='flex  flex-col flex-1 items-center lg:items-start '>
                  {/* <div className='flex justify-center items-center flex-col mt-5'> */}
                  <h1 className='text-textLightSecondary font-bold text-lg'>REACT NATIVE DEVELOPER</h1>
                  <h1 className='text-textLightPrimary font-medium text-sm mt-1'>Perisync Technologies Pvt Ltd</h1>
                  <h1 className='text-textLightPrimary font-medium text-sm mt-1'>Feb2022 - Present</h1>
               </div>
               <div className='flex  flex-col flex-1 mt-5 lg:mt-0'>
                  {list.map((item) => (
                     <div>
                        <p className='text-base text-textLightPrimary mb-1'>{item}</p>
                     </div>
                  ))}
               </div>

            </div>

         </div>

      </div>
   )
}
