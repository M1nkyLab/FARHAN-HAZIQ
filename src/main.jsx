import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import SmoothScroll from "./Components/SmoothScroll.jsx";
import './index.css'
import Preloader from "./Components/Preloader.jsx";
import Name from './Pages/Name.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Creations from './Pages/Creations.jsx'
import Tools from './Pages/Tools.jsx'
import Contact from './Pages/Contact.jsx'

// Initialize Vercel Web Analytics
inject()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
    <Preloader />
      {/* Your real website content */}
      <div className="opacity-100">
        {/* Your website components */}
      </div>
    <section className="section"><Name /></section>
        <section className="section"><Aboutme /></section>
        <section className="section"><Creations /></section>
        <section className="section"><Tools /></section>
        <section className="section"><Contact /></section>
    </SmoothScroll>
  </StrictMode>,
)
