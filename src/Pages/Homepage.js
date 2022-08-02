import React from 'react'
import {Footer} from '../Components/Footer';
import {Landing} from '../Components/Landing';
import {Navigation} from '../Components/Navigation'
import {FirstDiv} from '../Components/FirstDiv'
import {SecondDiv} from '../Components/SecondDiv'
import {ThirdDiv} from '../Components/ThirdDiv'
import {ApplicationCards} from '../Components/ApplicationCards'
import {TitleCard} from '../Components/TitleCard'
import {BannerImg} from '../Components/BannerImg'
import {GetStarted} from '../Components/GetStarted'

export const Homepage = () => {
  return (
    <div>

        <Navigation/>
        <Landing/>
    
        <FirstDiv/>
        <SecondDiv/>
        <ThirdDiv/>

        <ApplicationCards/>
        <TitleCard/>
        <BannerImg/>

        <GetStarted/>
        <Footer/>
    
   </div>
  )
}
