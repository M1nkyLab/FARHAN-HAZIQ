import React from "react";

const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 w-screen h-screen -z-10 bg-gradient-to-br from-[#030114] via-[#1E0B38] to-[#470D33]"
      style={{
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 25s ease infinite",
        margin: 0,
        padding: 0
      }}
    >
      <style jsx="true">{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 0% }
          25% { background-position: 100% 0% }
          50% { background-position: 100% 100% }
          75% { background-position: 0% 100% }
          100% { background-position: 0% 0% }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
