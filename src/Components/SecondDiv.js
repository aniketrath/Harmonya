import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const SecondDiv = () => {
  return (
    <div className="flex overflow-hidden">
        
        <div className="w-1/2 h-screen">
            <div className="mt-[20%] ml-[10%] " data-aos="fade-right" data-aos-duration="600">
                <img className="h-[90vh]"  src="https://images.unsplash.com/photo-1535117399959-7df1714b4202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=" building " />
            </div>
        </div>
        <div className="w-1/2 h-screen ">
            <div className="mt-[25%] ml-[10%] w-[80%]">
                <p className=" font-extrabold text-[4.2rem] " data-aos="fade-left" data-aos-duration="600" >A new Language for products</p>
                
                <p className=" mt-[2%] text-[1.4rem] w-[80%]" data-aos="fade-left" data-aos-duration="1800">Harmonya's product language is a single source of truth
                    for every application that uses product data and provides a rich and dynamic set of product 
                    concepts, which are derived from the perspective of retailers, consumers and producers.
                </p>
                <p className=" mt-[5%] text-[1.4rem] font-bold w-[80%]" data-aos="fade-down" data-aos-duration="1000">
                    Vocabulary that is not constratined
                </p>
                <p className=" mt-[5%] text-[1.4rem] font-bold w-[80%]" data-aos="fade-down" data-aos-duration="1000">
                    Capturing evolving consumer's perspectives.
                </p>
            </div>
        </div>
    </div>
  )
}
