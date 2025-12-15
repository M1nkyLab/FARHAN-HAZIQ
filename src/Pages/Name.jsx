import '../App.css'
import LiquidEther from '../Components/LiquidEther.jsx';

function App() {

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className='relative h-screen w-full overflow-hidden bg-black'>
          
          {/* LAYER 1: Fluid Animation Background */}
          {/* z-0 places it at the back. inset-0 stretches it to fill screen. */}
          <div className="absolute inset-0 z-0">
            <LiquidEther
              colors={[ '#FFFFFF', '#F8F8F8', '#EFEFEF' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* OPTIONAL: Dark Overlay */}
          {/* This adds a slight dark tint so the white text is easier to read over the bright fluid */}
          <div className="absolute inset-0 z-0 bg-black/30 pointer-events-none"></div>

          {/* LAYER 2: Main Content */}
          {/* z-10 places it on top. pointer-events-none allows mouse to pass through to the fluid */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center pointer-events-none">
            
            {/* Main Text */}
            <h1 className="text-white font-bold text-4xl md:text-7xl lg:text-9xl whitespace-nowrap drop-shadow-lg">
              FARHAN HAZIQ
            </h1>

            {/* Scroll Down Arrow */}
            {/* pointer-events-auto re-enables clicking just for this button */}
            <div className="absolute bottom-10 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-10 h-10 md:w-12 md:h-12 text-white opacity-80"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

          </div>

      </section>

    </div>
  )
}

export default App