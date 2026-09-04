'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  // Single state object to cleanly manage all 5 major customer details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: 'Student', // Default fallback option
    neighborhood: '',
    destination: 'School Commute' // Default tracking category
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // Dynamic input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData), // Sends all 5 fields to Formspree automatically
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', profession: 'Student', neighborhood: '', destination: 'School Commute' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-12 md:py-16">
      <div className="max-w-md w-full p-6 sm:p-8 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-4">
          🚀
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
          Secure Your Araft Seat
        </h1>
        <p className="text-slate-400 mb-6 text-xs sm:text-sm">
          Provide your routing profile below to join the neighborhood community grid.
        </p>
        
        {status === 'success' ? (
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20 font-medium">
            🎉 Profile Secured! Your routing details have been successfully logged to our network grid.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            
            {/* Detail 1: Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                disabled={status === 'loading'}
              />
            </div>

            {/* Detail 2: Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                disabled={status === 'loading'}
              />
            </div>

            {/* Detail 3: Profession Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">I am a...</label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-sm transition cursor-pointer"
                disabled={status === 'loading'}
              >
                <option value="Student">Student (School / College)</option>
                <option value="Parent">Parent (Booking for children)</option>
                <option value="Office Employee">Office Employee / Working Professional</option>
                <option value="Fleet Operator">Fleet Driver / Car Owner</option>
              </select>
            </div>

            {/* Detail 4: Neighborhood Location */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Neighborhood</label>
              <input
                type="text"
                name="neighborhood"
                required
                placeholder="e.g., Miyapur, Gachibowli, Kondapur"
                value={formData.neighborhood}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                disabled={status === 'loading'}
              />
            </div>

            {/* Detail 5: Commute Destination Target */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Primary Destination Type</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-sm transition cursor-pointer"
                disabled={status === 'loading'}
              >
                <option value="School Commute">School / Educational Institute</option>
                <option value="Office Tech Park">Office / IT Tech Park Hub</option>
                <option value="Metro Station Feeding">Metro Station Feeding Route</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 text-sm shadow-lg shadow-blue-600/20"
            >
              {status === 'loading' ? 'Mapping your profile...' : 'Get Early Access'}
            </button>
            
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center mt-2">
                Something went wrong. Please check your inputs and try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
