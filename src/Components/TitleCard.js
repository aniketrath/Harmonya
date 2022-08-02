import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const TitleCard = () => {
  return (
    <div>
        <div class="bg-gradient-to-r from-lime-500 to-cyan-500 h-3"></div>
        <div class="bg-neutral-900 flex ">
            <div class="w-1/2" data-aos="fade-left" data-aos-duration="1100">
                <p class="text-white text-[4rem] w-[35%] ml-[20%] mt-[10%] mb-[15%]">We're Harmonya</p>
            </div>
            <div class="w-1/2">
                <p class="text-white text-[1.7rem] w-[45%] mt-[10%] ml-[15%] " data-aos="fade-left" data-aos-duration="1100">
                    we are passionate about data, technology and building the foundation capabilities
                    that drive through the commerce.
                </p>
                <div class="text-xl ml-[12%] px-10 mx-4 py-3 mt-10" data-aos="fade-down" data-aos-duration="1100">
                    <button class="rounded-lg bg-white w-40 pb-1 h-14 font-bold hover:bg-zinc-600 hover:text-slate-100">About Us</button>
                </div>

            </div>


        </div>
    </div>
  )
}
