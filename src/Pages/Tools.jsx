import React from 'react';

function Tools() {
  // Data for Languages
  const languages = [
    { name: 'HTML', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'PHP', src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  ];

  // Data for Tools
  const tools = [
    { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Tailwind CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Git', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  ];

  // We duplicate the arrays to ensure the loop is seamless (items appear instantly at the start when the end is reached)
  // Since "languages" is a short list, we duplicate it 6 times to fill the screen width.
  const seamlessLanguages = [...languages, ...languages, ...languages, ...languages, ...languages, ...languages]; 
  const seamlessTools = [...tools, ...tools, ...tools];

  return (
    <section className="h-[60vh] bg-white flex flex-col items-center justify-center gap-12 overflow-hidden py-10">
      
      {/* CSS Styles for the Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Move to -50% because list is doubled/tripled */
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); } /* Start halfway */
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>

      {/* Languages Section - Left to Right */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-6 text-center">Languages</h2>
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-8 animate-scroll-right hover:pause">
            {seamlessLanguages.map((lang, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={lang.src}
                  alt={lang.name}
                  title={lang.name}
                  // Changed from w-16 h-16 to w-24 h-24
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section - Right to Left */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-6 text-center">Tools</h2>
        
        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-8 animate-scroll-left hover:pause">
            {seamlessTools.map((tool, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={tool.src}
                  alt={tool.name}
                  title={tool.name}
                  // Changed from w-16 h-16 to w-24 h-24
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Tools;