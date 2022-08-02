import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export const GetStarted = () => {
    return (
        <div class="flex absolute w-[70%] h-[30%] drop-shadow-xl mt-[-7%] ml-[15%] z-10 bg-slate-50 "
        data-aos="fade-left" data-aos-duration="1000">
            <div class="w-[50%] h-full ml-[10%] mt-[5%] ">
                <p class="text-[4rem] font-bold"> Let's get started</p>
                <p class="text-[1.75rem]"> Learn more about how Harmanya can work for you</p>
            </div>
            <div class="mt-[8%] ml-[17%] h-full">
                <div>
                    <button class="rounded-lg bg-neutral-900 w-40 pb-1 h-14 font-bold text-slate-100">Learn More</button>
                </div>
            </div>

        </div>
    )
}
