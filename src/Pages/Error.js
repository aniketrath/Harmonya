import React from 'react'
import NotFound from '../Icons/NotFound.svg'
import {useNavigate} from "react-router-dom"
import { FooterMini } from '../Components/Footer_Mini'

export const Error = () => {

  let navigate = useNavigate();

  return (
    <div>
    <div class="bg-zinc-300 flex h-[83vh] place-content-center">
        <div>

            <img class=" ml-[30%] mt-[15%] "
            src={NotFound} 
            alt="oops" 
            width="35%"/>

            <p class="text-[1.475rem] ml-[24%] mt-10 text-center w-[50%] font-medium">
                 Error '404' Page Not found .<br />
                Seems like we're not done yet. No worries ,  let's take you back to 
                the home page. 
            </p>

            <button 
            onClick={() => {navigate("/")}} 
            class="rounded-lg text-slate-100 bg-neutral-900 
            w-[12vh] pb-1 h-[4.2vh] text-[1.4rem]
            font-semibold 
            ml-[44%] mt-[4%]">Home</button> 
        </div>
    </div>
    <FooterMini/>

    </div>
  )
}


