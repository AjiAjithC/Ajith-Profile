import React from 'react'
import address from "../../assets/icon/address.png"
import phone from "../../assets/icon/phone.png"
import gmail from "../../assets/icon/gmail.png"
import location from "../../assets/icon/ocation.png"
export default function Contact() {


   const contact = [
      {
         title: "Phone",
         context: "+91 8870918732",
         icon: phone
      },
      {
         title: "Address",
         context: "Navalue Attur(Tk),Salem(Dt), Tamil Nadu",
         icon: location
      },
      {
         title: "Gmail",
         context: "cpaaji1@gmail.com",
         icon: gmail
      },
   ]


   return (
      <div>

         <div className='bg-LightPrimary py-20'>
            <div className=' max-w-[800px]  md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
               <div className=''>
                  <div className='flex justify-center items-center flex-col'>
                     <h1 className='text-center font-bold text-4xl'>Contact</h1>
                     <div className='border-1 border-borderPrimary w-60 mt-3' />
                  </div>
               </div>

               <div className='mt-15 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input placeholder='Your Name' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Contact Number' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Email' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Subject' className='border px-4 py-3 text-sm border-borderPrimary' />
               </div>
               <input placeholder='Message' multiple className='border px-4 text-sm border-borderPrimary mt-5 h-30' />


            </div>
         </div>
         <div className='bg-white py-5'>
            <div className=' max-w-[800px]  md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
               <div className='grid grid-cols-1 md:grid-cols-3'>
                  {contact.map((item, index) => (
                     <div className='flex flex-col md:flex-row'>
                        <div className='flex flex-col flex-1 justify-center items-center mt-10 md:mt-0 '>
                           <img src={item.icon} className='h-7 w-7' />
                           <p className='mt-2 font-light text-md text-textLightPrimary'>{item.title}</p>
                           <p className='mt-2 font-bold text-md text-textLightPrimary text-center'>{item.context}</p>
                        </div>
                        {index == 0 || index == 1 ?
                           <div className='border border-borderPrimary my-5 mx-20 md:mx-5 md:my-0' />
                           : null}
                     </div>
                  ))}

               </div>

            </div>
         </div>
      </div>
   )
}
