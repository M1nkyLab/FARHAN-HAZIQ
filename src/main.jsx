import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Name from './Pages/Name.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Creations from './Pages/creations.jsx'
import Tools from './Pages/Tools.jsx'
import Contact from './Pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Name />
    <Aboutme/>
    <Creations/>
    <Tools/>
    <Contact/>
  </StrictMode>,
)
