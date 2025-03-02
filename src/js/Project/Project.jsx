import React, { useState } from 'react'
import adaniLogo from "../../assets/image/adaniLogo.png"
import doxwiz from "../../assets/image/doxwiz.png"
import fmcg from "../../assets/image/fmcg.png"
import twflogo from "../../assets/image/logo.png"
import ZunoyLightlogo from "../../assets/image/ZunoyLightlogo.png"
import { IoIosCloseCircle, IoIosCloseCircleOutline } from 'react-icons/io'
export default function Project() {
   const projects = [
      {
         "name": "TWF - THEWATERFIRM",
         "img": twflogo,
         "subProjects": ["TWF Consumer", "TWF Admin", "TWF Lead Calendar"],
         "features": [
            "• Graph-Based Data Visualization & Filtering: Displayed water consumption trends (daily, weekly, monthly, yearly) with building-wise and own custom calendar-based filtering.",
            "• Billing & Payment System: Integrated monthly bill generation and payment processing.",
            "• Role-Based Access Control & Multi-App Management: Supported multiple user types (Admin, Consumer, Guest, Tenant) with an admin app to manage users, data, and billing."
         ]
      },
      {
         "name": "ZUNOY",
         img: ZunoyLightlogo,
         "subProjects": ["Watch Tower", "Form Flow", "Hrms Employee"],
         "features": [
            "• Implemented a feature to check if a website is up or down, measure network traffic, and display detailed information on downtime (why, duration, and reasons).",
            "• Employee attendance system: Created an attendance system for employees to punch in and out daily. Integrated Google Maps for location tracking, a custom leave calendar, company details display, and payslip generation."
         ]
      },

      {
         "name": "DOXWIZ",
         img: doxwiz,
         "subProjects": ["Medqwiz Consumer", "Medqwiz Vendoe", "Medqwiz CRM"],
         "features": [
            "• Consumer App: Enabled users to purchase medical products either through direct payment or by earning coins through three types of in-app games (Quiz, Drag and Drop, Excavation, and Search in the Dark). Included a blog feature for daily health-related news updates.",
            "• Vendor App and CRM: Allowed to update product listings, manage stock, and oversee vendor operations."
         ]
      },

      {
         "name": "FMCG",
         img: fmcg,
         "subProjects": ["FMCG Vendoe", "FMCG Consumer"],
         "features": [
            "• Direct Vendor-to-Consumer Purchasing: Allowed consumers to buy bulk daily-use products directly from vendors, bypassing dealers.",
            "• Real-Time Stock Management: Vendors could upload stock in the vendor app, which reflected in real-time on the consumer app.",
            "• Stripe Payment Integration: Implemented secure and seamless payment processing using Stripe."
         ]
      },
      {
         "name": "ADANI",
         "img": adaniLogo,
         "subProjects": ["Adani Electricity"],
         "features": [
            "• Map Integration: Displayed locations consuming solar power on a map with real-time data updates.",
            "• Graph-Based Data Visualization: Showcased solar power consumption trends through interactive graphs.",
            "• Real-Time Monitoring: Tracked electricity consumption and provided insights into usage patterns."
         ]
      }
   ];

   const [selected, setSelected] = useState(""); // Store the selected project object, not index

   const DetailsComponent = () => {
      return (
         <div className="flex flex-col flex-1 mt-5 lg:mt-0 ">
            <div className=' border border-borderPrimary rounded-2xl p-10'>
               <div className='flex justify-between'>
                  <div>
                     <img src={selected.img} className='h-8 ' />
                     <h1 className={`text-lg font-bold mt-3 text-textLightSecondary`}>
                        {selected.name}
                     </h1>
                  </div>

                  <IoIosCloseCircleOutline onClick={() => setSelected(false)} className='text-4xl text-textLightPrimary' />

               </div>
               {selected.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className='mt-4' >
                     <p className="text-base text-textLightPrimary mb-1 ">{feature}</p>
                  </div>
               ))}
            </div>
         </div>
      )
   }



   return (
      <div id='PROJECT' className='bg-white py-20'>
         <div className='max-w-[800px] p-2 md:max-w-[1000px] lg:max-w-[1150px] xl:max-w-[1250px] mx-auto flex flex-col p-5'>
            <div className='flex justify-center items-center flex-col'>
               <h1 className='text-center font-bold text-4xl'>Project</h1>
               <div className='border-1 border-borderPrimary w-55 mt-3' />
            </div>

            <div className="flex mt-10 gap-10 flex-col lg:flex-row justify-center">
               <div className='flex  flex-1 justify-center'>

                  <div className={`grid  grid-cols-1   gap-10 ${selected ? "grid-cols-1  lg:grid-cols-2 " : "md:grid-cols-2 lg:grid-cols-3"} `}>
                     {projects.map((item, index) => (
                        <div>
                           <div key={index} onClick={() => setSelected(item)}
                              className={`flex flex-col border border-borderPrimary justify-center  items-center ${selected ? "p-5 h-35 justify-center items-center" : "p-10 h-60"} rounded-2xl  hover:bg-LightPrimary`}>
                              <img src={item.img} className={`${selected ? "h-4" : "h-8"} `} />
                              <h1 className={`${selected ? "text-sm" : "text-lg"} font-bold mt-3 text-textLightSecondary`}>
                                 {item.name}
                              </h1>
                              <div className='flex flex-wrap items-center justify-center'>
                                 {item.subProjects?.map((subItem, subIndex) => (
                                    <h1 key={subIndex} className={`text-textLightPrimary font-medium ${selected ? "text-xs" : "text-sm"} mt-1 mr-3 text-center`}>
                                       {subItem},
                                    </h1>
                                 ))}
                              </div>
                           </div>
                           {selected.name == item.name &&
                              <div className='flex flex-1'>
                                 <div className='block lg:hidden '>
                                    <DetailsComponent />
                                 </div>
                              </div>
                           }
                        </div>
                     ))}

                  </div>
               </div>
               {selected &&
                  <div className='flex flex-1'>
                     <div className='hidden lg:block '>
                        <DetailsComponent />
                     </div>
                  </div>
               }
            </div>

         </div>
      </div>
   )
}
