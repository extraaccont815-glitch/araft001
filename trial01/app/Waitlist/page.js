'use client';

import { useState } from 'react';

const educationalInstitutions = [
  "Meru International School (Miyapur)",
  "Meru International School (Chandnagar)",
  "Chirec International School",
  "Oakridge International School",
  "Delhi Public School (DPS Hyderabad)"
];

const generalLocations = [
  "HITEC City Tech Park Hub",
  "Gachibowli Financial District",
  "Madhapur IT Corridor Cluster",
  "Divyasree Orion Tech Park",
  "DLF Cyber City Hyderabad"
];

export default function WaitlistPage() {
  const [activeForm, setActiveForm] = useState('individual');
  const [status, setStatus] = useState('idle');

  const [individualData, setIndividualData] = useState({
    name: '',
    email: '',
    profession: 'Parent',
    neighborhood: '',
    destination: educationalInstitutions[0]
  });

  const [institutionData, setInstitutionData] = useState({
    contactName: '',
    workEmail: '',
    category: 'School',
    selectedLocation: educationalInstitutions[0],
    fleetSizeNeeded: '1-5 Vehicles'
  });

  const handleTabSwitch = (tab) => {
    setActiveForm(tab);
    setStatus('idle');
  };

  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'profession') {
        updated.destination = value === 'Parent' ? educationalInstitutions[0] : generalLocations[0];
      }
      return updated;
    });
  };

  const handleInstitutionalChange = (e) => {
    const { name, value } = e.target;
    setInstitutionData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'category') {
        updated.selectedLocation = value === 'School' ? educationalInstitutions[0] : generalLocations[0];
      }
      return updated;
    });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setStatus('loading');

    const payload = type === 'individual'
      ? { submissionType: 'Individual Rider Profile', ...individualData }
      : { submissionType: 'B2B Institutional Partnership', ...institutionData };

    try {
      const response = await fetch('https://formspree.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-16">
      <div className="max-w-md w-full p-6 sm:p-8 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Join the Waitlist
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm mb-6">
          Reserve your spot in the network cluster today.
        </p>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => handleTabSwitch('individual')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition duration-200 ${
              activeForm === 'individual'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Individual Rider
          </button>
          <button
            type="button"
            onClick={() => handleTabSwitch('institutional')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-md transition duration-200 ${
              activeForm === 'institutional'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Institution / B2B Hub
          </button>
        </div>

        {/* Success Alert Banner */}
        {status === 'success' && (
          <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20 font-medium mb-6 text-left">
            🎉 Registration successful! Your spot has been reserved on the waitlist network.
          </div>
        )}

        {/* Error Alert Banner */}
        {status === 'error' && (
          <div className="p-4 bg-rose-500/10 text-rose-400 rounded-lg text-sm border border-rose-500/20 font-medium mb-6 text-left flex justify-between items-center">
            <span>⚠️ Submission failed. Please check details and try again.</span>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs underline ml-2 font-semibold hover:text-rose-300"
            >
              Retry
            </button>
          </div>
        )}

        {/* Form Logic */}
        {status !== 'success' && (
          activeForm === 'individual' ? (
            /* Track A: Individual Rider Form UI */
            <form onSubmit={(e) => handleSubmit(e, 'individual')} className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={individualData.name}
                  onChange={handleIndividualChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer placeholder-slate-600"
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
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profession</label>
                <select
                  name="profession"
                  value={individualData.profession}
                  onChange={handleIndividualChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer"
                >
                  <option value="Parent">Parent</option>
                  <option value="Office Employee">Office Employee</option>
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
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Facility Destination</label>
                <select
                  name="destination"
                  value={individualData.destination}
                  onChange={handleIndividualChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer"
                >
                  {individualData.profession === 'Parent'
                    ? educationalInstitutions.map((inst, index) => (
                        <option key={index} value={inst}>{inst}</option>
                      ))
                    : generalLocations.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                      ))
                  }
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 font-semibold rounded-lg text-sm shadow-lg transition duration-200 disabled:opacity-50 active:scale-98 bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 mt-2"
              >
                {status === 'loading' ? 'Submitting...' : 'Join Individual Waitlist'}
              </button>
            </form>
          ) : (
            /* Track B: Institution / B2B Hub Form UI */
            <form onSubmit={(e) => handleSubmit(e, 'institutional')} className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Representative Name</label>
                <input
                  type="text"
                  name="contactName"
                  required
                  placeholder="Enter representative name"
                  value={institutionData.contactName}
                  onChange={handleInstitutionalChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Institutional Email</label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  placeholder="admin@institution.com"
                  value={institutionData.workEmail}
                  onChange={handleInstitutionalChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Institution Classification</label>
                <select
                  name="category"
                  value={institutionData.category}
                  onChange={handleInstitutionalChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer"
                >
                  <option value="School">Educational Institute</option>
                  <option value="Office Workspace">Corporate Workspace</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Institution Name</label>
                <select
                  name="selectedLocation"
                  value={institutionData.selectedLocation}
                  onChange={handleInstitutionalChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer"
                >
                  {institutionData.category === 'School'
                    ? educationalInstitutions.map((inst, index) => (
                        <option key={index} value={inst}>{inst}</option>
                      ))
                    : generalLocations.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                      ))
                  }
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fleet Capacity Needed</label>
                <select
                  name="fleetSizeNeeded"
                  value={institutionData.fleetSizeNeeded}
                  onChange={handleInstitutionalChange}
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition duration-200 cursor-pointer"
                >
                  <option value="1-5 Vehicles">1-5 Vehicles</option>
                  <option value="5-15 Vehicles">5-15 Vehicles</option>
                  <option value="15+ Dedicated Fleet">15+ Dedicated Fleet</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 font-semibold rounded-lg text-sm shadow-lg transition duration-200 disabled:opacity-50 active:scale-98 bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20 mt-2"
              >
                {status === 'loading' ? 'Submitting...' : 'Register Institutional Hub'}
              </button>
            </form>
          )
        )}
      </div>
    </div>
  );
}