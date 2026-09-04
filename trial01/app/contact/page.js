
import React from 'react';

const Contact = () => {
  return (
    <main className="flex-grow bg-slate-950 px-6 py-16 md:py-24 text-white flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-12">
        
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Have questions about Araft ? Let's talk about collaboration, features, or investments.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Email Block */}
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-xl space-y-3">
            <div className="text-2xl">✉️</div>
            <h3 className="text-xl font-bold text-slate-200">Email Address</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Official Inquiry</p>
            <a 
              href="mailto:mohammedumarfarooq.19cmis0093@meruinternationalschool.com" 
              className="block text-blue-400 hover:text-blue-300 font-medium text-sm break-all transition"
            >
              mohammedumarfarooq.19cmis0093@meruinternationalschool.com
            </a>
          </div>

          {/* Role/Response Block */}
          <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-xl space-y-3">
            <div className="text-2xl">⚡</div>
            <h3 className="text-xl font-bold text-slate-200">Response Window</h3>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Availability</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              As a solo founder attending <span className="text-blue-400 font-medium">Meru International School</span>, I monitor this inbox daily. Expect a reply within 24 hours.
            </p>
          </div>

        </div>

        {/* Professional Footer Notice */}
        <p className="text-xs text-slate-600">
          Araft © {new Date().getFullYear()} — Built for India, with love from Hyderabad.
        </p>

      </div>
    </main>
  );
};

export default Contact;
