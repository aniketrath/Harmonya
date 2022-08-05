import React from 'react'
import CompanyLogo from '../Icons/CompanyLogo.svg'
import 
{
  Link,useNavigate,
} 
  from "react-router-dom";

export const Navigation = () => {

    let navigate = useNavigate();
  return (
    <div className="flex absolute h-[6vh] inset-x-0 top-0  bg-neutral-900">

        <div className="w-3/5 ml-8 my-2 min-h-full text-neutral-100 ">
        <div className="flex">
                    <img
                        className="ml-[5vh] mr-[1vh]"
                        src={CompanyLogo} 
                        alt="oops" 
                        width="35vh"/>
                        <p className=" text-[2rem]">
                        Harmonya</p>
                    </div>
        </div>

        <Link to="/">
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-[1.175rem] px-10 mx-4 py-4 hover:cursor-default">Home</p>
        </div>
        </Link>
        <Link to="/About">
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-[1.175rem] px-10 mx-2 py-4 hover:cursor-default">About</p>
        </div>
        </Link>

        <Link to="/Login">
        <div className="text-neutral-500 hover:text-zinc-300">
            <p className="text-[1.175rem] px-10 mx-2 py-4 hover:cursor-default">Login</p>
        </div>
        </Link>

        <div className="text-l px-10 mx-4 py-3">
            <button onClick={() => {navigate("/")}} 
            className="rounded-lg bg-white w-[12vh] pb-1 h-9 font-bold hover:bg-zinc-600 hover:text-slate-100">Get a Demo</button>
        </div>
    </div>
  )
}

