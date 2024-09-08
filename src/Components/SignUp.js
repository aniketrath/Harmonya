import React from 'react'

export const SignUp = () => {
  return (
    <div className="flex h-[82vh] ">

        <div className="w-1/5">

        </div>
        <div className="w-4/5 bg-stone-900">

            <div className=" mx-[20vh] ">
                <h1 className="text-white text-[3rem] mt-[5vh]">
                    Set up Your Harmonya account
                </h1>
                <h2 className="text-gray-300 text-[1.4rem] my-2 "> You will be invited to join Harmonya to start expanding
                    your Bussiness
                </h2>

                <div>
                    <input type="text" id="Name" placeholder="Name" className="w-[50vh]
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
                    <input type="text" id="email" placeholder="Email ID*" className="w-[50vh]
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
                    <input type="text" id="CompanyName" placeholder="Company Name" className="w-[50vh]
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
                    <input type="text" id="position" placeholder="Role" className="w-[50vh]
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

                <select className="select 
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
                    <option value="1" className="text-[1.1rem]
                    font-[500] ">
                        Continent :
                    </option>
                    <option value="2" className="text-[1.1rem]
                    font-[500]">
                        Asia
                    </option>
                    <option value="3" className="text-[1.1rem]
                    font-[500]">
                        Europe
                    </option>
                    <option value="3" className="text-[1.1rem]
                    font-[500]">
                        Africa
                    </option>
                    <option value="4" className="text-[1.1rem]
                    font-[500]">
                        America
                    </option>
                    <option value="5" className="text-[1.1rem]
                    font-[500]">
                        Australia
                    </option>
                </select>

                <div className="mt-10">
                    
                    <input className="w-[1.1vh] h-[1.1vh]
                        focus:outline-slate-400
                        accent-slate-300" type="checkbox" value="" id="TnC" />
                    <label className="form-check-label
                        text-slate-300
                        text-[1.1rem] 
                        focus:outline-slate-400
                        ml-4 " for="Terms&Conditions">
                        I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                        site.
                    </label>

                </div>
                <button className="rounded-lg 
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
