import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Recommended from '../components/Recommended'
import WhyChooseUs from '../components/WhyChooseUs'
import Category1 from '../components/Category1'
import HeroSection from '../components/HeroSection'
import RecentProperti from '../components/RecentProperti'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <Hero/>
        <Recommended/>
        <WhyChooseUs/>
        <Category1/>
        <HeroSection/>
        <RecentProperti/>
        <Testimonials/>

        <Footer/>
    </div>
  )
}
