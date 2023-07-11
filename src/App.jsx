import { useState } from 'react'
import TopHeader from './components/Header/TopHeader'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import Program from './components/Programs/Program'
import Cohorts from './components/Cohorts/Cohorts'
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
    </div>
  )
}

export default App
