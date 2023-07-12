import { useState } from 'react'
import TopHeader from './components/Header/TopHeader'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import Program from './components/Programs/Program'
import Cohorts from './components/Cohorts/Cohorts'
import Community from './components/Community/Community'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import { Copyright } from './components/Copyright/Copyright'
// import './App.css'

function App() {

  return (
    <div>
      <TopHeader />
      <Navbar />
      <Hero />
      <Story />
      <Program />
      <Cohorts />
      <Community />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
