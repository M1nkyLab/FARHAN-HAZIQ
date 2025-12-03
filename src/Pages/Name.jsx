import '../App.css'
function App() {

  return (
    <div>
      
      {/* SECTION 1: HERO */}
      <section className='relative h-screen flex justify-center items-center bg-gradient-to-b from-black via-black to-white'>
          
          {/* Main Text */}
          <h1 className="text-white font-bold text-4xl md:text-7xl lg:text-9xl whitespace-nowrap">
            FARHAN HAZIQ
          </h1>

          {/* Scroll Down Arrow (Clickable) */}
          <div 
            className="absolute bottom-10 "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-10 h-10 md:w-12 md:h-12 text-black opacity-70"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

      </section>

    </div>
  )
}

export default App