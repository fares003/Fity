import React from 'react'
import HeroSection from '../../sections/HeroSection'
import AdvantagesSection from '@/sections/AdvantagesSection'
import Services from '@/sections/Services'
import PlansSection from '@/sections/PlansSection'
import LandingToolsSection from '@/sections/LandingToolsSection'
import Footer from '@/sections/Footer'

function LandingPage() {
  return (
    <div className='w-full flex flex-col gap-y-18'> 
        <HeroSection/>
        <AdvantagesSection/>
        <Services/>
        <PlansSection/>
        <LandingToolsSection/>
    </div>
  )
}

export default LandingPage