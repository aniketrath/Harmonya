import React from 'react'

export const SignUp = () => {
  return (
    <div class="flex h-[82vh] ">

        <div class="w-1/5">

        </div>
        <div class="w-4/5 bg-stone-900">

            <div class=" mx-[20vh] ">
                <h1 class="text-white text-[3rem] mt-[5vh]">
                    Set up Your Harmonya account
                </h1>
                <h2 class="text-gray-300 text-[1.4rem] my-2 "> You will be invited to join Harmonya to start expanding
                    your Bussiness
                </h2>

                <div>
                    <input type="text" id="Name" placeholder="Name" class="w-[50vh]
                    mt-[4vh]
                    text-[1.1rem]
                    font-[600]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                </div>
                <div>
                    <input type="text" id="email" placeholder="Email ID*" class="w-[50vh]
                    mt-[4vh]
                    text-[1.1rem]
                    font-[600]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                </div>

                <div>
                    <input type="text" id="CompanyName" placeholder="Company Name" class="w-[50vh]
                    mt-[4vh]
                    text-[1.1rem]
                    font-[600]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                </div>

                <div>
                    <input type="text" id="position" placeholder="Role" class="w-[50vh]
                    mt-[4vh]
                    text-[1.1rem]
                    font-[600]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                </div>

                <select class="select 
                mt-[4vh]
                mr-20
                w-[50vh]
                h-[3.7vh]
                text-[1.1rem]
                font-[500]
                pb-1
                pl-4
                rounded-md
                bg-slate-200
                outline outline-3 outline-slate-400">
                    <option value="1" class="text-[1.1rem]
                    font-[500] ">
                        Continent :
                    </option>
                    <option value="2" class="text-[1.1rem]
                    font-[500]">
                        Asia
                    </option>
                    <option value="3" class="text-[1.1rem]
                    font-[500]">
                        Europe
                    </option>
                    <option value="3" class="text-[1.1rem]
                    font-[500]">
                        Africa
                    </option>
                    <option value="4" class="text-[1.1rem]
                    font-[500]">
                        America
                    </option>
                    <option value="5" class="text-[1.1rem]
                    font-[500]">
                        Australia
                    </option>
                </select>

                <div class="mt-10">
                    
                    <input class="w-[1.1vh] h-[1.1vh]
                        focus:outline-slate-400
                        accent-slate-300" type="checkbox" value="" id="TnC" />
                    <label class="form-check-label
                        text-slate-300
                        text-[1.1rem] 
                        focus:outline-slate-400
                        ml-4 " for="Terms&Conditions">
                        I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                        site.
                    </label>

                </div>
                <button class="rounded-lg 
                        text-[1.2rem]
                        mt-[4vh]
                        w-28 pb-1 h-10
                        font-bold 
                        bg-zinc-500
                        hover:bg-stone-900 
                        hover:text-slate-100
                        outline outline-3 outline-slate-400">
                    Continue
                </button>


            </div>

        </div>
    </div>
  )
}
