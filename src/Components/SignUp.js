import React from 'react'

export const SignUp = () => {
    return (
        <div class="absolute transition-all duration-100 ease-in-out
    bg-gradient-to-r 
    from-slate-900 
    to-stone-800
    min-h-screen
    w-full ">
            <div class=" min-h-[85vh]
        flex
        w-[90vh]
        mx-[51vh]
        mt-[7vh]">
                <div class="w-1/2
            rounded-tl-lg
            rounded-bl-lg 
            min-h-full
            outline outline-4 outline-slate-400
            bg-slate-300">
                    <div class="ml-[4vh] mt-10">
                        <h1 class="text-[2.2rem]
                        font-[700]
                        underline
                        ">General Information :</h1>
                    </div>
                    <div class="mt-[5vh] ml-[4vh]">
                        <select class="select 
                    w-[35vh]
                    h-[3.7vh]
                    text-[1.3rem]
                    text-zinc-400
                    font-[500]
                    pb-1
                    pl-4
                    rounded-md
                    bg-slate-200
                    outline outline-3 outline-slate-400">
                            <option value="1"
                                class="text-[1.3rem]
                        font-[500] ">
                                Continent :
                            </option>
                            <option value="2"
                                class="text-[1.3rem]
                        font-[500]">
                                Asia
                            </option>
                            <option value="3"
                                class="text-[1.3rem]
                        font-[500]">
                                Europe
                            </option>
                            <option value="3"
                                class="text-[1.3rem]
                        font-[500]">
                                Africa
                            </option>
                            <option value="4"
                                class="text-[1.3rem]
                        font-[500]">
                                America
                            </option>
                            <option value="5"
                                class="text-[1.3rem]
                        font-[500]">
                                Australia
                            </option>
                        </select>
                        <div class="flex mt-[4vh]">
                            <input
                                type="text"
                                id="FirstName"
                                placeholder="First Name"
                                class="w-[40%] 
                        focus:outline-slate-400
                        text-[1.3rem]
                        font-[500]
                        px-4
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        outline outline-slate-400" />
                            <input type="text"
                                id="LastName"
                                placeholder="Last Name"
                                class="w-[40%] ml-[2vh]
                        focus:outline-slate-400
                        text-[1.3rem]
                        font-[500]
                        px-4
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        outline outline-3 outline-slate-400" />
                        </div>
                        <input
                            type="text"
                            id="Position"
                            placeholder="Position"
                            class="w-[85%]
                    text-[1.3rem]
                    font-[600]
                    mt-[4vh]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                        <input
                            type="text"
                            id="Position"
                            placeholder="Company Name"
                            class="w-[85%]
                    mt-[4vh]
                    text-[1.3rem]
                    font-[600]
                    px-4
                    pb-1
                    h-[3.7vh]
                    rounded-md
                    bg-slate-200
                    focus:outline-slate-400
                    outline outline-3 outline-slate-400" />
                        <div class="flex mt-[4vh]">
                            <input type="text"
                                id="LastName"
                                placeholder="Bussiness Arena"
                                class="w-[44%] 
                        text-[1.3rem]
                        font-[600]
                        px-3
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                            <select class="select 
                        w-[15vh]
                        h-[3.7vh]
                        text-[1.3rem]
                        text-zinc-400
                        font-[500]
                        ml-[2vh]
                        pb-1
                        pl-2
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400">
                                <option value="1"
                                    class="text-[1.2rem]
                            font-[500] ">
                                    Employees
                                </option>
                                <option value="2"
                                    class="text-[1.2rem]
                            font-[500]">
                                    Over 100K
                                </option>
                                <option value="3"
                                    class="text-[1.2rem]
                            font-[500]">
                                    Under 100K
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="w-1/2
            rounded-tr-lg
            rounded-br-lg 
            min-h-full
            outline outline-4  outline-slate-400
            bg-zinc-800">
                    <div class="ml-[4vh] mt-10">
                        <h1 class="text-[2.2rem]
                    font-[700]
                    text-slate-300
                    underline">Contact Details :
                        </h1>
                        <div class=" mt-[5vh]">
                            <div class=" mt-[4vh]">
                                <input
                                    type="text"
                                    id="Street"
                                    placeholder="Street + Nr"
                                    class="w-[85%]
                        text-[1.3rem]
                        font-[600]
                        px-4
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                                <input
                                    type="text"
                                    id="Extra"
                                    placeholder="Additional information"
                                    class="w-[85%]
                        mt-[4vh]
                        text-[1.3rem]
                        font-[600]
                        px-4
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                                <input
                                    type="text"
                                    id="Country"
                                    placeholder="Country"
                                    class="w-[85%]
                        mt-[4vh]
                        text-[1.3rem]
                        font-[600]
                        px-4
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                                <div class="flex mt-[4vh]">
                                    <input
                                        type="text"
                                        id="Zipcode"
                                        placeholder="Zip Code"
                                        class="w-[40%]
                            text-[1.3rem]
                            font-[500]
                            px-4
                            h-[3.7vh]
                            rounded-md
                            bg-slate-200
                            focus:outline-slate-400
                            outline outline-3 outline-slate-400" />
                                    <input type="text"
                                        id="Place"
                                        placeholder="Place"
                                        class="w-[40%] ml-[2vh]
                            text-[1.4rem]
                            font-[500]
                            px-4
                            h-[3.7vh]
                            rounded-md
                            bg-slate-200
                            focus:outline-slate-400
                            outline outline-3 outline-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    id="Email"
                                    placeholder="Company Email"
                                    class="w-[85%]
                        mt-[4vh]
                        text-[1.3rem]
                        font-[600]
                        px-4
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                                <div class="flex mt-[4vh]">
                                    <input
                                        type="text"
                                        id="PinCode"
                                        placeholder="Code +"
                                        class="w-[40%]
                            text-[1.3rem]
                            font-[500]
                            px-4
                            h-[3.7vh]
                            rounded-md
                            bg-slate-200
                            focus:outline-slate-400
                            outline outline-3 outline-slate-400" />
                                    <input type="text"
                                        id="Contact Number"
                                        placeholder="Phone No."
                                        class="w-[40%] ml-[2vh]
                            text-[1.4rem]
                            font-[500]
                            px-4
                            h-[3.7vh]
                            rounded-md
                            bg-slate-200
                            focus:outline-slate-400
                            outline outline-3 outline-slate-400" />
                                </div>
                            </div>
                            <div class=" mt-[4vh] w-[65%]">
                                <input class="w-[1.3vh] h-[1.3vh]
                        focus:outline-slate-400
                        accent-slate-300"
                                    type="checkbox"
                                    value=""
                                    id="TnC" />
                                <label
                                    class="form-check-label
                        text-slate-300
                        text-[1.1rem] 
                        focus:outline-slate-400
                        ml-4 "
                                    for="Terms&Conditions">
                                    I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                                    site.
                                </label>
                                <button
                                    class="rounded-lg 
                        text-[1.1rem]
                        mt-[4vh]
                        ml-[23vh]
                        w-32 pb-1 h-10
                        font-bold 
                        bg-zinc-500
                        hover:bg-zinc-600 
                        hover:text-slate-100
                        outline outline-3 outline-slate-400">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
