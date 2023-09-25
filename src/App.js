import React from 'react'
import './App.css'
import Navbar from './folderSp/Navbar'
import Hero from './folderSp/Hero'
import Trending from './folderSp/Trending'
import Card from './folderSp/Card'
import About from './folderSp/About'
import Footer from './folderSp/Footer'

function App() {
  return (
    <>
      <div className="whole">
        <Navbar/>
      <Hero/>
      <Trending/>
      <Card/>
      <About/>
      <Footer/>
      </div>

    </>
  )
}

export default App
