import React from 'react';

export default function Founder() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16 md:py-24 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">

        {/* Left Side - Circular Avatar Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/10">
            <img
              src="/founder.jpg"
              alt="Mohammed Umar Farooq"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Graceful fallback avatar if founder.jpg isn't in your public folder yet
                e.target.src = "https://unsplash.com";
              }}
            />
          </div>
        </div>

        {/* Right Side - Dynamic Text Layout */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Ready to Join the Consumer Revolution <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              As a student.
            </span>
          </h1>
          
          {/* Bio Description Block */}
          <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-left leading-relaxed space-y-4">
            <p className="text-slate-300 text-base sm:text-lg">
              Hi, this is <span className="text-blue-400 font-bold">Mohammed Umar Farooq</span> from <span className="text-white font-medium border-b-2 border-indigo-500 pb-0.5">Hyderabad</span>. 
              If you are looking at this page, then you must have loved my presentation! 
            </p>
            <p className="text-slate-300 text-base sm:text-lg">
              Moving forward, I am currently studying in <span className="font-semibold text-slate-200">Grade 9 CBSE</span> at Meru International School. 
              My core areas of interest include entrepreneurship, studying business frameworks, and exploring basic human psychology. 
            </p>
            <p className="text-slate-400 text-sm border-t border-slate-800/60 pt-4">
              📍 For more details or collaboration opportunities, feel free to track me down around the school campus!
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
