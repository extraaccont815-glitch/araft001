import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black sm:w-full md:w-full h-20 text-white font-bold text-4xl p-5 flex items-center justify-between">
      {/* Logo Section */}
      <span>Araft</span>

      {/* Links Section */}
    <div className="space-x-6 font-normal 
                text-base sm:text-lg md:text-xl lg:text-2xl">
  <a href="/" className="hover:text-gray-400">Home</a>
  <a href="/founder" className="hover:text-gray-400">Founder</a>
  <a href="/contact" className="hover:text-gray-400">Contact</a>
</div>

    </div>
  );
};

export default Navbar;
