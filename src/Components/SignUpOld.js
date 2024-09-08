import React from 'react'

export const SignUp = () => {
    return (
        <div className="absolute transition-all duration-100 ease-in-out
    min-h-screen
    opacity-75
    w-full ">
            <div className=" min-h-[85vh]
        flex
        w-[90vh]
        mx-[51vh]
        mt-[7vh]">
                <div className="w-1/2
            rounded-tl-lg
            rounded-bl-lg 
            min-h-full
            outline outline-4 outline-slate-400
            bg-slate-300">
                    <div className="ml-[4vh] mt-10">
                        <h1 className="text-[2.2rem]
                        font-[700]
                        underline
                        ">General Information :</h1>
                    </div>
                    <div className="mt-[5vh] ml-[4vh]">
                        <select className="select 
                    w-[35vh]
                    h-[3.7vh]
                    text-[1.3rem]
                    text-zinc-800
                    font-[500]
                    pb-1
                    pl-4
                    rounded-md
                    bg-slate-200
                    outline outline-3 outline-slate-400">
                            <option value="1"
                                className="text-[1.3rem]
                        font-[500] ">
                                Continent :
                            </option>
                            <option value="2"
                                className="text-[1.3rem]
                        font-[500]">
                                Asia
                            </option>
                            <option value="3"
                                className="text-[1.3rem]
                        font-[500]">
                                Europe
                            </option>
                            <option value="3"
                                className="text-[1.3rem]
                        font-[500]">
                                Africa
                            </option>
                            <option value="4"
                                className="text-[1.3rem]
                        font-[500]">
                                America
                            </option>
                            <option value="5"
                                className="text-[1.3rem]
                        font-[500]">
                                Australia
                            </option>
                        </select>
                        <div className="flex mt-[4vh]">
                            <input
                                type="text"
                                id="FirstName"
                                value="First Name"
                                className="w-[40%] 
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
                                value="Last Name"
                                className="w-[40%] ml-[2vh]
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
                            value="Position"
                            className="w-[85%]
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
                            value="Company Name"
                            className="w-[85%]
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
                        <div className="flex mt-[4vh]">
                            <input type="text"
                                id="LastName"
                                value="Bussiness Arena"
                                className="w-[44%] 
                        text-[1.3rem]
                        font-[600]
                        px-3
                        pb-1
                        h-[3.7vh]
                        rounded-md
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400" />
                            <select className="select 
                        w-[15vh]
                        h-[3.7vh]
                        text-[1.3rem]
                        text-zinc-400
                        font-[500]
                        ml-[2vh]
                        pb-1
                        pl-2
                        rounded-md
                        text-zinc-800
                        bg-slate-200
                        focus:outline-slate-400
                        outline outline-3 outline-slate-400">
                                <option value="1"
                                    className="text-[1.2rem]
                            font-[500]
                             ">
                                    Employees
                                </option>
                                <option value="2"
                                    className="text-[1.2rem]
                            font-[500]">
                                    Over 100K
                                </option>
                                <option value="3"
                                    className="text-[1.2rem]
                            font-[500]">
                                    Under 100K
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-1/2
            rounded-tr-lg
            rounded-br-lg 
            min-h-full
            outline outline-4  outline-slate-400
            bg-zinc-800">
                    <div className="ml-[4vh] mt-10">
                        <h1 className="text-[2.2rem]
                    font-[700]
                    text-slate-300
                    underline">Contact Details :
                        </h1>
                        <div className=" mt-[5vh]">
                            <div className=" mt-[4vh]">
                                <input
                                    type="text"
                                    id="Street"
                                    value="Street + Nr"
                                    className="w-[85%]
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
                                    value="Additional information"
                                    className="w-[85%]
                                    text-zinc-900
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
                                    value="Country"
                                    className="w-[85%]
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
                                <div className="flex mt-[4vh]">
                                    <input
                                        type="text"
                                        id="Zipcode"
                                        value="Zip Code"
                                        className="w-[40%]
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
                                        value="Place"
                                        className="w-[40%] ml-[2vh]
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
                                    value="Company Email"
                                    className="w-[85%]
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
                                <div className="flex mt-[4vh]">
                                    <input
                                        type="text"
                                        id="PinCode"
                                        value="Code +"
                                        className="w-[40%]
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
                                        value="Phone No."
                                        className="w-[40%] ml-[2vh]
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
                            <div className=" mt-[4vh] w-[65%]">
                                <input className="w-[1.3vh] h-[1.3vh]
                        focus:outline-slate-400
                        accent-slate-300"
                                    type="checkbox"
                                    value=""
                                    id="TnC" />
                                <label
                                    className="form-check-label
                        text-slate-300
                        text-[1.1rem] 
                        focus:outline-slate-400
                        ml-4 "
                                    for="Terms&Conditions">
                                    I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
                                    site.
                                </label>
                                <button
                                    className="rounded-lg 
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
