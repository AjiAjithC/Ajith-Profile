import React, { useState } from 'react'
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
   const [formData, setFormData] = useState({
      name: "",
      contact: "",
      email: "",
      Message: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch("https://submit.formflow.zunoy.com/sub/9o83Rrha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            alert("Form submitted successfully!");
            setFormData({ name: "", contact: "", email: "", Message: "" }); // Reset form
         } else {
            alert("Failed to submit the form.");
         }
      } catch (error) {
         console.error("Error:", error);
         alert("An error occurred while submitting.");
      }
   };

   return (
      <div id='CONTACT'>
         <div className='bg-LightPrimary py-20'>
            <div className=' max-w-[800px]  md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px]  mx-auto flex flex-col p-5 '>
               <div className=''>
                  <div className='flex justify-center items-center flex-col'>
                     <h1 className='text-center font-bold text-4xl'>Contact</h1>
                     <div className='border-1 border-borderPrimary w-60 mt-3' />
                  </div>
               </div>

               {/* <div className='mt-15 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input placeholder='Your Name' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Contact Number' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Email' className='border px-4 py-3 text-sm border-borderPrimary' />
                  <input placeholder='Subject' className='border px-4 py-3 text-sm border-borderPrimary' />
               </div>
               <input placeholder='Message' multiple className='border px-4 text-sm border-borderPrimary mt-5 h-30' /> */}

               <form onSubmit={handleSubmit} className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                     type="text"
                     name="name"
                     placeholder="Your Name"
                     value={formData.name}
                     onChange={handleChange}
                     className="border px-4 py-3 text-sm border-borderPrimary"
                  />
                  <input
                     type="text"
                     name="contact"
                     placeholder="Contact Number"
                     value={formData.contact}
                     onChange={handleChange}
                     className="border px-4 py-3 text-sm border-borderPrimary"
                  />
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleChange}
                     className="border px-4 py-3 text-sm border-borderPrimary"
                  />
                  <input
                     type="text"
                     name="Message"
                     placeholder="Message"
                     multiple
                     value={formData.subject}
                     onChange={handleChange}
                     className="border px-4 py-3 text-sm border-borderPrimary"
                  />



               </form>
               {formData.name !== "" &&formData.contact !== "" &&formData.email !== "" &&
                  <div className='flex justify-center items-center mt-10'>
                     <button type="submit" onClick={handleSubmit}
                        className="col-span-1 md:col-span-2 bg-blue-500 text-white py-3 px-4 w-50 rounded-md hover:bg-blue-600">
                        Submit
                     </button>
                  </div>
               }

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
                           <a href='tel:8870918732'>
                              <p onClick={() => { item.title == "Gmail" ? window.location = 'mailto:cpaaji1@gmail.com' : "" }} className='mt-2 font-bold text-md text-textLightPrimary text-center'>{item.context}</p>
                           </a>
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


