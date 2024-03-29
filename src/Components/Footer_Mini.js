import React from 'react'
import CompanyLogo from '../Icons/CompanyLogo.svg'

export const FooterMini = () => {
    return (
        <div className=" inset-x-0 bottom-0 z-0">
            <div className="bg-gradient-to-r from-amber-500 to-lime-500 h-4"></div>
            <div className="flex h-[22vh] text-stone-300 bg-neutral-900 ">

                <div className="w-2/5 py-8 min-h-full ">
                    <div className="flex">
                    <img
                        className="ml-[10vh] mr-[1vh]"
                        src={CompanyLogo} 
                        alt="oops" 
                        width="65vh"/>
                        <p className=" pt-[1vh] text-[3rem]">
                        Harmonya</p>
                    </div>
                    
                    <p className="px-[11vh] text-[1.2rem]">
                        Supercharge Your
                        <br/>
                        Product data.
                    </p>


                </div>
                <div className="w-1/5 min-h-full ">

                    <ul className="py-10 pl-14 text-[0.9rem]">
                        <li className="pb-2">Homepage</li>
                        <li className="pb-2">About us</li>
                    </ul>

                </div>
                <div className="w-1/5 min-h-full ">

                    <ul className="py-10 pl-14 text-[0.9rem]">
                        <li className="pb-2">US</li>
                        <li className=" pb-1">Plot - 12 ,Lorem Ipsum</li>
                        <li className=" pb-1">USSR, Canada-109910</li>

                    </ul>

                </div>
                <div className="w-1/5 min-h-full ">

                    <ul className="py-10 pl-14 text-[0.9rem]">
                        <li className="pb-2">customersupport@harmonya.com</li>
                        <li className="pb-2">linkedin</li>
                    </ul>

                </div>

            </div>
            <div className="bg-black h-10 text-[0.9rem] text-stone-500">

                <p className="py-2 pl-2"> Copyright &copy Harmonya | All Rights Reserved,</p>

            </div>


        </div>
    )
}
