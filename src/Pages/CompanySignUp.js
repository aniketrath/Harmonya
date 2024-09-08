import React from 'react'
import {SignUp} from '../Components/SignUp'
import {FooterMini} from '../Components/Footer_Mini'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
AOS.init();

export const CompanySignUp = () => {
  return (
    <div>
    <div class=" background_form
    w-full ">
      <div data-aos="fade-in" data-aos-duration="1200"><SignUp/></div>
    </div>
    <FooterMini/>
    </div>
  )
}


