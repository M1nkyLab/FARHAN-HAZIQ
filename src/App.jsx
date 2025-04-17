import React, { memo } from 'react';
import './styles/App.css'
import AnimatedBackground from "./assets/AnimatedBackground";
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Work from './pages/Work.jsx'
import Tools from './components/Tools.jsx'
import Footer from './components/Footer.jsx'
import AboutMe from './pages/AboutMe.jsx'


const App = memo(() => {
  return (
    <>
      <AnimatedBackground />
      <Home />
      <Navbar />
      <AboutMe />
      <Work />
      <Tools />
      <Footer />
    </>
  )
})

export default App
