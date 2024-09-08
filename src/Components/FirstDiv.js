import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const FirstDiv = () => {
  return (
    <div className="flex h-screen">
        <div className="w-1/2 h-full">
            <div className="mt-[35%] ml-[10%] w-[80%]" >
                <p className=" font-extrabold text-[4.5rem] " data-aos="fade-left" data-aos-duration="600">Products are varied and Complex.</p>
                <p className="text-[1.8rem] w-[80%]" data-aos="fade-left" data-aos-duration="1100">products and consumers are the heart of the consumers,
                    yet most product and data sources don't offer the richness and depth
                    of industry and consumer's perspective.
                </p>
            </div>
        </div>
        <div className="w-1/2 h-full">
            <div className="mt-[25%] " data-aos="fade-right" data-aos-duration="600">
                <img src="https://images.unsplash.com/photo-1516274626895-055a99214f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=" something "
                    width='80%' />
            </div>
        </div>
    </div>
  )
}
export default FirstDiv;

