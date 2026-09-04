'use client';

import { useState } from 'react';

export default function WaitlistPage() {
  const supportedInstitutions = {
    schools: [
      "Meru International School (Miyapur)",
      "Meru International School (Chandnagar)",
      "Chirec International School",
      "Oakridge International School",
      "Delhi Public School (DPS Hyderabad)"
    ],
    offices: [
      "HITEC City Tech Park Hub",
      "Gachibowli Financial District",
      "Madhapur IT Corridor Cluster",
      "Divyasree Orion Tech Park",
      "DLF Cyber City Hyderabad"
    ]
  };

  const [activeForm, setActiveForm] = useState('individual');
  const [status, setStatus] = useState('idle');

  const [individualData, setIndividualData] = useState({
    name: '',
    email: '',
    profession: 'Parent',
    neighborhood: '',
    destination: supportedInstitutions.schools[0]
  });

  const [institutionData, setInstitutionData] = useState({
    contactName: '',
    workEmail: '',
    category: 'School',
    selectedLocation: supportedInstitutions.schools[0],
    fleetSizeNeeded: '1-5 Vehicles'
  });

  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'profession') {
        updated.destination = value === 'Parent'
          ? supportedInstitutions.schools[0]
          : supportedInstitutions.offices[0];
      }
      return updated;
    });
  };

  const handleInstitutionalChange = (e) => {
    const { name, value } = e.target;
    setInstitutionData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'category') {
        updated.selectedLocation = value === 'School'
          ? supportedInstitutions.schools[0]
          : supportedInstitutions.offices[0];
      }
      return updated;
    });
  };

  async function handleSubmit(e, type) {
    e.preventDefault();
    setStatus('loading');

    const payload = type === 'individual'
      ? { submissionType: 'Individual Rider Profile', ...individualData }
      : { submissionType: 'B2B Institutional Partnership', ...institutionData };

    try {
      const response = await fetch('https://formspree.io', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setIndividualData({
          name: '',
          email: '',
          profession: 'Parent',
          neighborhood: '',
          destination: supportedInstitutions.schools[0]
        });
        setInstitutionData({
          contactName: '',
          workEmail: '',
          category: 'School',
          selectedLocation: supportedInstitutions.schools[0],
          fleetSizeNeeded: '1-5 Vehicles'
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-950 px-4 py-12 md:py-16 text-white min-h-screen">
      <div className="max-w-md w-full p-6 sm:p-8 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 mb-4 text-xl">
          🏢
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
          Araft Network Onboarding
        </h1>
        <p className="text-slate-400 mb-6 text-xs sm:text-sm">
          Select your registration track to secure customized route validation.
        </p>

        {/* Tab Selection Row */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => { setActiveForm('individual'); setStatus('idle'); }}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
              activeForm === 'individual'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Individual Rider
          </button>
          <button
            type="button"
            onClick={() => { setActiveForm('institutional'); setStatus('idle'); }}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
              activeForm === 'institutional'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Institution / B2B Hub
          </button>
        </div>

        {/* Success Banner */}
        {status === 'success' && (
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20 font-medium mb-6 text-left">
            🎉 Route Profile Secured! Your onboarding registration details have been mapped into the network cluster dashboard.
          </div>
        )}

        {/* Error Banner */}
        {status === 'error' && (
          <div className="p-4 bg-rose-500/10 text-rose-400 rounded-lg text-sm border border-rose-500/20 font-medium mb-6 text-left flex justify-between items-center">
            <span>⚠️ Submission failed. Please try again.</span>
            <button 
              type="button" 
              onClick={() => setStatus('idle')}
              className="text-xs underline ml-2 font-semibold hover:text-rose-300"
            >
              Retry
            </button>
          </div>
        )}

        {/* Form rendering */}
        {status !== 'success' && (
          activeForm === 'individual' ? (
            /* TRACK A: INDIVIDUAL RIDER REGISTRATION FORM */
            <form onSubmit={(e) => handleSubmit(e, 'individual')} className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={individualData.name}
                  onChange={handleIndividualChange}
                  className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={individualData.email}
                  onChange={handleIndividualChange}
                  className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">I am a...</label>
                <select
                  name="profession"
                  value={individualData.profession}
                  onChange={handleIndividualChange}
                  className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="Parent">Parent (Booking for children)</option>
                  <option value="Office Employee">Office Employee / Working Professional</option>
                  <option value="Daily Commuter">Daily Commuter</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Neighborhood</label>
                <input
                  type="text"
                  name="neighborhood"
                  required
                  placeholder="e.g., Miyapur, Gachibowli"
                  value={individualData.neighborhood}
                  onChange={handleIndividualChange}
                  className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Facility Destination</label>
                <select
                  name="destination"
                  value={individualData.destination}
                  onChange={handleIndividualChange}
                  className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {individualData.profession === 'Parent'
                    ? supportedInstitutions.schools.map((school, idx) => <option key={idx} value={school}>{school}</option>)
                    : supportedInstitutions.offices.map((office, idx) => <option key={idx} value={office}>{office}</option>)
                  }
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
