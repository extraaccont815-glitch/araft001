'use client'; // This tells Next.js to allow interactive handlers like onError

import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-12 md:py-20 flex flex-col items-center justify-start">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Main Hero Header */}
        <div className="text-center md:text-left">
          <h1 className="inline-block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent transform hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer pb-2">
            Welcome to Araft
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base md:text-lg">
            Digitizing and securing the daily school and office commute.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-16">
          
          {/* Card 1: What is Araft */}
          <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20">
                1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                What is Araft?
              </h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pl-1">
              Araft is a <span className="text-blue-400 font-semibold">community-driven transport network</span> designed to digitize and secure the daily school and office commute. Instead of relying on expensive private cabs that face extreme surge pricing and uncertainty during peak demand, Araft connects families living in the same neighborhood to optimized, completely verified transit routes.
            </p>
            
            {/* Visual Feature Image 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/5">
              <img 
                src="/img1.png" 
                alt="Araft Transit Ecosystem Map" 
                className="w-full h-auto object-cover transform group-hover:scale-101 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://unsplash.com"; }}
              />
            </div>
          </section>

          {/* Card 2: How it works */}
          <section className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold border border-indigo-500/20">
                2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                How does Araft work?
              </h2>
            </div>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pl-1">
              Araft operates via an intuitive digital layer matching neighborhood clusters with empty transit capacity. Parents and working professionals track verified local fleet drivers in real time. The platform drives sustainable, predictable recurring revenue using a <span className="text-indigo-400 font-semibold">tiered subscription architecture</span> featuring monthly, quarterly, and yearly pricing plans.
            </p>
            
            {/* Visual Feature Image 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/5">
              <img 
                src="/img2.png" 
                alt="Araft Mobile Interface Mockup" 
                className="w-full h-auto object-cover transform group-hover:scale-101 transition-transform duration-500"
                onError={(e) => { e.target.src = "https://unsplash.com"; }}
              />
            </div>
          </section>

        </div>

        {/* Dynamic CTA Footer Section */}
        <div className="text-center pt-8">
          <p className="text-sm text-slate-500">
            Ready to secure your seat? Head straight over to our active route waitlist.
          </p>
        </div>

      </div>
    </main>
  );
};

export default Page;
