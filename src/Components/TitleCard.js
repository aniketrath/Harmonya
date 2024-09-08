import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
useNavigate,
}
  from "react-router-dom";
AOS.init();

export const TitleCard = () => {

  let navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient-to-r from-lime-500 to-cyan-500 h-3"></div>
      <div className="bg-neutral-900 flex ">
        <div className="w-1/2" data-aos="fade-left" data-aos-duration="1100">
          <p className="text-white text-[4rem] w-[35%] ml-[20%] mt-[10%] mb-[15%]">We're Harmonya</p>
        </div>
        <div className="w-1/2">
          <p className="text-white text-[1.7rem] w-[45%] mt-[10%] ml-[15%] " data-aos="fade-left" data-aos-duration="1100">
            we are passionate about data, technology and building the foundation capabilities
            that drive through the commerce.
          </p>
          <div className="text-xl ml-[12%] px-10 mx-4 py-3 mt-10" data-aos="fade-down" data-aos-duration="1100">
            <button onClick={() => { navigate("/About") }}
              className="rounded-lg bg-white w-40 pb-1 h-14 font-bold hover:bg-zinc-600 hover:text-slate-100">About Us</button>
          </div>

        </div>


      </div>
    </div>
  )
}
