import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import Facebook from '../Icons/Facebook.svg'
import LinkedIn from '../Icons/LinkedIn.svg'
import Twitter from '../Icons/Twitter.svg'
import {FooterMini} from '../Components/Footer_Mini'

export const Login = () => {

  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = event => 
  {
    const result = event.target.value.replace(/[^a-z]/gi,"");
    setUsername(result);
  }

  const handlePassCode = event => 
  {
    const result = event.target.value.replace(/[^0-9]/gi,"");
    setPassword(result);
  }

  return (
    <div>
    <div class="flex h-[85vh] bg-neutral-900">
      <div class="w-1/2 h-full">

        <Spline scene="https://prod.spline.design/VXnJirBt-mA-Clha/scene.splinecode" />

      </div>

      <div 
      class="w-1/2 h-full">

        <div class="mt-[15vh] mb-[5vh] ml-[5vh]">
          <h1 class="text-[5rem] text-slate-300"> Lets Get you In ! </h1>
        </div>

        <div class="mt-4 ">

          <div class="flex items-center ml-[10vh] mb-4">

            <p
              class="text-lg 
                mb-0 
                mr-4 
                text-slate-400">
              Sign in with
            </p>

            <button
              type="button"
              class="inline-block 
                p-2.5
                bg-neutral-900
                text-white 
                rounded-full 
                hover:bg-neutral-800  
                mx-1">
               <img
                  src={Facebook} 
                  alt="oops" 
                  width="12vh"/>
            </button>

            <button
              type="button"
              class="inline-block 
                p-2.5
                bg-neutral-900
                text-white 
                rounded-full 
                hover:bg-neutral-800 
                mx-1">
               <img
                  src={Twitter} 
                  alt="oops" 
                  width="18vh"/>
            </button>

            <button
              type="button"
              class="inline-block 
                p-2.5
                bg-neutral-900
                text-white 
                rounded-full 
                hover:bg-neutral-800 
                mx-1">
               <img
                  src={LinkedIn} 
                  alt="oops" 
                  width="17vh"/>
            </button>
          </div>
    
        </div>
        
        <div
          class="
            ml-[10vh]
            mb-[3vh]
            w-[56vh]
            flex 
            items-center 
            my-4 
            before:flex-1 
            before:border-t
            before:border-gray-300 
            before:mt-0.5 
            after:flex-1 
            after:border-t 
            after:border-gray-300 
            after:mt-0.5">
              <p class="
                  text-center 
                  font-semibold 
                  mx-4  
                  text-slate-400">
                    Or
              </p>
        </div>

        <div class="mb-[2vh]">

          <div 
            class="mb-6
              ml-[10vh]">
              <input
                type="text"
                class="block w-[36vh] px-4 py-2 text-xl font-normal 
                  text-gray-300 
                  bg-neutral-800
                  border 
                  border-solid
                  border-gray-600 
                  rounded  
                  focus:text-gray-600"
                id="userName"
                value={username}
                onChange={handleUser}
                placeholder="Enter Your Username"/>
          </div>

          <div 
            class="mb-6
              ml-[10vh]">
              <input
                type="password"
                class="block w-[36vh] px-4 py-2 text-xl font-normal 
                  text-gray-300 
                  bg-neutral-800
                  border 
                  border-solid
                  border-gray-600 
                  rounded  
                  focus:text-gray-600"
                id="password"
                pattern="[0-9]*"
                value={password}
                onChange={handlePassCode}
                placeholder="Enter Your Passcode"/>
          </div>
        </div>

        
        <div 
          class="flex
            justify-between 
            w-[56vh] 
            mb-6
            ml-[10vh]">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="h-4 w-4 
                  border 
                  border-gray-300 
                  rounded-sm 
                  bg-white 
                  checked:bg-gray-600
                  checked:border-gray-600 
                  mt-1 mr-2 
                  cursor-pointer"
                id="Remember"
              />
              <label 
                class="
                  form-check-label 
                  inline-block 
                  text-gray-400" 
                >Remember me
                </label>
            </div>
            <a href="#!" 
              class="text-gray-400">
                Forgot password?
            </a>
          </div>
        <div class="ml-[10vh]">
          <button
            type="submit"
            class="inline-block 
              px-7 
              py-3 
              bg-slate-800 
              hover:bg-slate-700
              text-white 
              text-sm rounded  ">
                LOGIN
            </button>
        </div>
      </div>
    </div>
      <FooterMini/>
    </div>
    


  )
}
