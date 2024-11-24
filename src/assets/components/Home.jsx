import React from 'react'
import HeroSection from './HeroSection'
import Gallery from './Gallery'
import AboutMe from './AboutMe'
import Services from './Services'
import WhyInkyard from './WhyInkyard'
import HappyClients from './HappyClients'
import GetInTouch from './GetInTouch'


function Home() {
  return (
    <>
      <section id="home-section">
        <HeroSection />
        <Gallery />
        <AboutMe />
        <Services />
        <HappyClients />
        <WhyInkyard />
        <GetInTouch />
      </section>
    </>
  )
}

export default Home
