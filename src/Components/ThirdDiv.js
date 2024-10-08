import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 
{
  useNavigate,
} 
from "react-router-dom";
AOS.init();

export const ThirdDiv = () => {
    let navigate = useNavigate();
  return (
    <div className="flex mt-[10%] mb-[10%] ">
        <div className="h-3/4 ml-[20%]">
            <div>
                <p className="font-extrabold text-[4.1rem] w-[90%]" data-aos="fade-left" data-aos-duration="600">
                    Flexible application Layer
                </p>
                <p className="text-[1.4rem] w-[80%] mt-4" data-aos="fade-left" data-aos-duration="1800">
                    Harmonya enables enterprises to keep pace with consumers and 
                    capitalise on oppurtunity faster with more precision
                </p>

            </div>
            <div className="mt-[8%]" data-aos="fade-left" data-aos-duration="600">
                <button onClick={() => {navigate("/About")}}
                className="rounded-lg bg-neutral-900 w-32 pb-1 h-12 font-bold text-slate-100">Learn More</button> 
            </div>

        </div>
        <div className="h-3/4 mt-3 " data-aos="fade-left" data-aos-duration="600">
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="div 3 content" 
            width='70%' />
        </div>

    </div>
  )
}

