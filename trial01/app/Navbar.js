import React from 'react';

const Navbar = () => {
  return (
    // Added 'sticky top-0 z-50' so it stays at the top when scrolling, and a subtle border at the bottom
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-900 w-full h-20 text-white p-5 flex items-center justify-between transition-all duration-300">
      
      {/* Logo Section - Clean, bold, and clickable to go home */}
      <a href="/" className="flex items-center space-x-2 group">
        <span className="font-extrabold text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:text-blue-400 transition-colors">
          Araft
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
      </a>

      {/* Links Section - Balanced, readable, and responsive spacing */}
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 font-medium text-sm sm:text-base md:text-lg">
        <a href="/" className="text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">
          Home
        </a>
        <a href="/founder" className="text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">
          Founder
        </a>
        <a href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full">
          Contact
        </a>
        
        {/* Waitlist Button - Styled slightly like a subtle call-to-action button */}
        <a 
          href="/Waitlist" 
          className="px-3.5 py-1.5 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-sm shadow-blue-500/5 text-xs sm:text-sm font-semibold"
        >
          Waitlist
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
