import React from 'react'
import NotFound from '../Icons/NotFound.svg'

export const Error = () => {
  return (
    <div class="bg-zinc-300 flex h-screen place-content-center">
        <div>

            <img class=" ml-[23%] mt-[15%] "
            src={NotFound} 
            alt="oops" 
            width="55%"/>

            <p class="text-[2rem] ml-[21%] mt-10 text-center w-[60%] font-medium">
                 Error '404' Page Not found .<br />
                Seems like you're lost. No worries ,  let's take you back to 
                the home page. 
            </p>

            <button class="rounded-lg text-slate-100 bg-neutral-900 
            w-[12vh] pb-1 h-[4.2vh] text-[1.4rem]
            font-semibold 
            ml-[43%] mt-[4%]">Home</button> 

        </div>
    </div>
  )
}


