import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [reveal, setReveal] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 500);
    setTimeout(() => setFinish(true), 3000);
    setTimeout(() => {
      const el = document.getElementById("intro-loader");
      if (el) el.style.display = "none";
    }, 3500);
  }, []);

  return (
    <div
      id="intro-loader"
      className={`fixed inset-0 bg-black flex items-center justify-center z-[9999]
        transition-opacity duration-700 ${finish ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex items-center justify-center relative py-10 whitespace-nowrap gap-3 md:gap-5 lg:gap-6">

        {/* LEFT TEXT */}
        <div
          className={`
            font-bold text-white
            text-4xl md:text-7xl lg:text-9xl 
            transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]
            ${reveal 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-12"
            }
          `}
        >
          FARHAN
        </div>

        {/* RIGHT TEXT */}
        <div
          className={`
            font-bold text-white
            text-4xl md:text-7xl lg:text-9xl 
            transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]
            ${reveal 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-12"
            }
          `}
        >
          HAZIQ
        </div>

      </div>
    </div>
  );
}