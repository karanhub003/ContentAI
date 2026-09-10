import React from 'react'
import Header from '../../components/landing/Header'
import LandingHero from '../../components/landing/LandingHero'
import HighlightingCards from '../../components/landing/HighlightingCards'
import heroImg from '../../assets/Auth Page/heroImg.webp'

export default function Landing() {
  return (
   <>
   <header className=' bg-cover bg-no-repeat bg-left' style={{ backgroundImage: `url(${heroImg})` }}>
   <Header/>
   <LandingHero/>
   </header>
  
   <main>
        
        <HighlightingCards/>
   </main>
   
   </>
  )
}
