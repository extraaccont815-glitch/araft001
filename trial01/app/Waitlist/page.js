'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mjyvowlv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-16">
      <div className="max-w-md w-full p-8 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-4">
          🚀
        </div>
        
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
          Join the Waitlist
        </h1>
        <p className="text-slate-400 mb-6 text-sm">
          Be the first to get exclusive early access when <span className="text-blue-400 font-semibold">Araft Mk1</span> launches new modules.
        </p>
        
        {status === 'success' ? (
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20 font-medium">
            🎉 Awesome! You have been successfully added to the waitlist.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 text-sm shadow-lg shadow-blue-600/20"
            >
              {status === 'loading' ? 'Securing your spot...' : 'Get Early Access'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center mt-2">
                Something went wrong. Please check your connection and try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
