import React from 'react'
import Header from '../../components/landing/Header'
import LandingHero from '../../components/landing/LandingHero'
import HighlightingCards from '../../components/landing/HighlightingCards'
import heroImg from '../../assets/Landing Page/hero.webp'
import TrustedTeams from '../../components/landing/TrustedTeams'
import Problem from '../../components/landing/Problem'
import Working from '../../components/landing/Working'
import Features from '../../components/landing/Features'
import Reviews from '../../components/landing/Reviews'
import Price from '../../components/landing/Price'
import BottomHero from '../../components/landing/BottomHero'
import Footer from '../../components/landing/Footer'

export default function Landing() {
  return (
   <>
   <header className='bg-[#01061D]'>
   <div className=' bg-cover bg-no-repeat bg-left max-w-345 mx-auto' style={{ backgroundImage: `url(${heroImg})` }}>
   <Header/>
   <LandingHero/>
   </div>
   </header>
   <main className='bg-[#01061D]'>
        <HighlightingCards/>
        <TrustedTeams/>
        <hr className='border-[#1E293B]' />
        <Problem/>
        <hr className='border-[#1E293B]' />
        <Working/>
        <hr className='border-[#1E293B]' />
        <Features/>
        <hr className='border-[#1E293B]' />
        <Reviews/>
        <hr className='border-[#1E293B]' />
        <Price/>
        <BottomHero/>
        <Footer/>
   </main>
   
   </>
  )
}
