import React from 'react'
import {FooterMain} from '../Components/Footer_Main';
import {Landing} from '../Components/Landing';
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
        <Landing/>
        <FirstDiv/>
        <SecondDiv/>
        <ThirdDiv/>

        <ApplicationCards/>
        <TitleCard/>
        <BannerImg/>

        <GetStarted/>
        <FooterMain/>
   </div>
  )
}
