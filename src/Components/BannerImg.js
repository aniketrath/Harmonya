import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export const BannerImg = () => {
  return (
    <div class="h-screen mt-[3%] mb-[5%] mr-[19%] ml-[17%]"  data-aos="fade-down" data-aos-duration="1200">
        <img src="https://images.unsplash.com/photo-1482859602406-7659b00979fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        alt="fullscreenimg"
        width="110%" />

    </div>
  )
}


