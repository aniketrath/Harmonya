import React from 'react'
import {SignUp} from '../Components/SignUp'
import {FooterMini} from '../Components/Footer_Mini'

export const CompanySignUp = () => {
  return (
    <div>
    <div class=" transition-all duration-100 ease-in-out
    bg-gradient-to-r 
    from-neutral-900 
    to-neutral-700
    min-h-screen
    w-full ">
      <SignUp/>
    </div>
    <FooterMini/>
    </div>
  )
}


