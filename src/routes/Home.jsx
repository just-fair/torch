import React from 'react'
import Navbar from '../components/Navbar'
import First from '../components/First'
import Featured from '../components/Featured'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Verse from '../components/Verse'
import More from '../components/More'
import Albums from '../components/Albums'

function Home() {
  return (
    <>
        <Navbar/>
        <First/>
        <Featured/>
        <Gallery/>
        <Verse/>
        <More/>
        <Footer/>
    </>
  )
}

export default Home
