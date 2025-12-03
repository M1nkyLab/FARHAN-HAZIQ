import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Preloader from "./Components/Preloader.jsx";
import Name from './Pages/Name.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Creations from './Pages/Creations.jsx'
import Tools from './Pages/Tools.jsx'
import Contact from './Pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
      {/* Your real website content */}
      <div className="opacity-100">
        {/* Your website components */}
      </div>
    <Name />
    <Aboutme/>
    <Creations/>
    <Tools/>
    <Contact/>
  </StrictMode>,
)
