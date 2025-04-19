import React, { memo } from 'react';

// Reusable image component with hover effect
const ToolImage = memo(({ src, alt }) => (
  <img src={src} alt={alt} className="w-20 h-20 mx-8 hover:scale-110 transition-transform duration-300" />
));

// Language icons configuration
const LANGUAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt: "HTML5"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", alt: "CSS3"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript"
  }
];

// Framework icons configuration
const FRAMEWORKS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "Vue.js"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma"
  }
];

// Improved ScrollingTools component for seamless looping
const ScrollingTools = memo(({ items, isReverse = false }) => {
  // Create a tripled array to ensure smooth looping
  const tripleItems = [...items, ...items, ...items];
  
  return (
    <div className="w-full overflow-hidden relative">
      {/* Edge fading effects */}
      <div className="absolute left-0 top-0 bottom-0 w-16 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 to-transparent z-10"></div>
      
      <div 
        className={`flex items-center ${isReverse ? 'animate-reverse-scroll' : 'animate-scroll'}`}
        style={{ 
          width: `${items.length * 36 * 3}px`, // Width based on number of items (36px per item with margins)
          willChange: 'transform' // Performance optimization
        }}
      >
        {tripleItems.map((item, index) => (
          <ToolImage key={`tool-${index}`} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
});

const Tools = memo(() => {
  return (
    <section id="tools" className="min-h-screen py-24 lg:py-32 px-6 sm:px-8 md:px-12 flex flex-col items-center overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">

        {/* Languages Section */}
        <div className="mb-20">
          <ScrollingTools items={LANGUAGES} />
        </div>

        {/* Tools & Frameworks Section */}
        <div className="mb-8">
          <ScrollingTools items={FRAMEWORKS} isReverse={true} />
        </div>
      </div>
    </section>
  );
});

export default Tools;
