import React from 'react'

export const Footer = () => {
  return (
    <div className=" inset-x-0 bottom-0 z-10">
        <div>

            <div className="bg-gradient-to-r from-amber-500 to-lime-500 h-4">

            </div>
            <div className="bg-neutral-900 h-96 ">

            </div>
        </div>

        
        <div className="flex h-96 text-stone-300 bg-neutral-900 ">

            <div className="w-2/5 py-4 min-h-full ">

                <p className="px-[20%] pt-18 text-[50px]">Harmonya</p>
                <p className="px-[15%] text-[30px]">
                    Supercharge Your 
                    <br/>
                    Product data.
                </p>


            </div>
            <div className="w-1/5 min-h-full ">

                <ul className="py-10 pl-14 text-lg">
                    <li className=" pb-6 underline hover:no-underline">SHOTCUTS</li>

                    <li className="pb-2">Homepage</li>
                    <li className="pb-2">About us</li>
                    <li className="pb-2">Career</li>
                </ul>
                
            </div>
            <div className="w-1/5 min-h-full ">

                <ul className="py-10 pl-14 text-lg">
                    <li className=" pb-6 underline hover:no-underline">OUR OFFICES</li>

                    <li className="pb-2">IND</li>
                    <li className=" pb-1">Plot - 12 ,Lorem Ipsum</li>
                    <li className=" pb-4">BBSR, Odisha-751011</li>

                    <li className="pb-2">US</li>
                    <li className=" pb-1">Plot - 12 ,Lorem Ipsum</li>
                    <li className=" pb-1">BBSR, Odisha-751011</li>
                    
                </ul>
                
            </div>
            <div className="w-1/5 min-h-full "> 

                <ul className="py-10 pl-14 text-lg">
                    <li className=" pb-6 underline hover:no-underline">CONTACT US</li>

                    <li className="pb-2">customersupport@harmonya.com</li>
                    <li className="pb-2">linkedin</li>
                </ul>
                
            </div>

        </div>
        <div className="bg-black h-12 text-lg text-stone-500">
            
           <p className="py-2 pl-2"> Copyright &copy Harmonya | All Rights Reserved,</p>
            
        </div>
        

    </div>
  )
}
