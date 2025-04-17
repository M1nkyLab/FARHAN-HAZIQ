import React, { useCallback, memo } from "react";
import SplitText from "../components/SplitText.jsx";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

// Social media config for easier maintenance
const SOCIAL_LINKS = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/syed-farhan-haziq-886a41345/",
    label: "LinkedIn Profile",
    text: "LinkedIn"
  },
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/M1nkyLab",
    label: "GitHub Profile",
    text: "GitHub"
  },
  {
    id: "email",
    icon: FaEnvelope,
    url: "mailto:farhaziq77@gmail.com",
    label: "Email Contact",
    text: "Email"
  }
];

// Fixing the linter error by using the Icon parameter explicitly
const SocialLink = memo(({ icon, url, label, text, isResume }) => {
  const IconComponent = icon;
  const linkClass = isResume 
    ? "bg-gradient-to-r from-[#470D6B] to-[#2D0E45] hover:from-[#561082] hover:to-[#3D1259] p-2.5 sm:p-3 rounded-full transition-all duration-300 ease-in-out flex items-center border border-[#6F31A8]/20"
    : "bg-[#1E0B38] group-hover:bg-[#2D0E45] p-2.5 sm:p-3 rounded-full transition-all duration-300 ease-in-out flex items-center border border-[#6F31A8]/20";

  const props = isResume ? { download: true } : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <Motion.div
      className="relative group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
    >
      <Motion.a 
        href={url} 
        className={linkClass}
        aria-label={label}
        {...props}
      >
        <IconComponent className="text-xl sm:text-2xl text-[#E2D7F4]" />
        <Motion.span 
          className="overflow-hidden whitespace-nowrap ml-0 w-0 group-hover:ml-2 group-hover:w-auto text-sm sm:text-base font-medium text-[#E2D7F4]"
          initial={false}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {text}
        </Motion.span>
      </Motion.a>
    </Motion.div>
  );
});

// ScrollIndicator component
const ScrollIndicator = memo(() => {
  const handleScrollToAbout = useCallback(() => {
    document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Motion.div 
      className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      onClick={handleScrollToAbout}
    >
      <span className="text-xs sm:text-sm mb-2 sm:mb-3 select-none text-[#A291BB]">Scroll Down</span>
      <div className="h-12 sm:h-16 w-[2px] relative overflow-hidden cursor-pointer">
        <Motion.div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#6F31A8] to-[#470D6B]"
          initial={{ y: -48 }}
          animate={{ 
            y: 48,
            boxShadow: [
              "0 0 5px 0 rgba(111, 49, 168, 0.7), 0 0 10px 0 rgba(111, 49, 168, 0.5), 0 0 15px 0 rgba(111, 49, 168, 0.3)",
              "0 0 10px 2px rgba(111, 49, 168, 0.7), 0 0 20px 5px rgba(111, 49, 168, 0.5), 0 0 30px 10px rgba(111, 49, 168, 0.3)",
              "0 0 5px 0 rgba(111, 49, 168, 0.7), 0 0 10px 0 rgba(111, 49, 168, 0.5), 0 0 15px 0 rgba(111, 49, 168, 0.3)"
            ]
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            },
            boxShadow: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }
          }}
        />
      </div>
    </Motion.div>
  );
});

function Home() {
  const handleAnimationComplete = useCallback(() => {
    console.log("Animation complete");
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center relative px-6 py-24 lg:py-32 overflow-hidden"
    >
      {/* Main Title */}
      <SplitText
        text="FARHAN HAZIQ"
        className="text-[90px] sm:text-[110px] md:text-[130px] lg:text-[150px] tracking-[-4px] sm:tracking-[-5px] leading-[0.95] text-[#FFFFFF] font-[500] font-['PP_Neue_Montreal'] drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)] text-center select-none uppercase max-w-[90vw] mx-auto mb-4"
        delay={100}
        animationFrom={{ opacity: 0, transform: "translate3d(0,60px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      
      {/* Social Links + Resume */}
      <Motion.div 
        className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-8 sm:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.8, 
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        {/* Social Links */}
        {SOCIAL_LINKS.map(link => (
          <SocialLink 
            key={link.id}
            icon={link.icon}
            url={link.url}
            label={link.label}
            text={link.text}
          />
        ))}
        
        {/* Resume Download */}
        <SocialLink 
          icon={FaFileAlt}
          url="/path-to-your-resume.pdf"
          label="Download Resume"
          text="Resume"
          isResume={true}
        />
      </Motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

export default memo(Home);