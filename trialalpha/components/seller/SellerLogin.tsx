"use client";

import { useState } from "react";

export default function SellerLogin() {
    const [identifier, setIdentifier] = useState("");
    const [message, setMessage] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <form className="space-y-4 w-full" onSubmit={handleLogin}>
            <div>
                <label className="block text-sm sm:text-base font-medium mb-1">
                    Email or Seller name
                </label>
                <input
                    name="email"
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter your email or seller name"
                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5e3e89]"
                    required
                />
            </div>

            <div>
                <label className="block text-sm sm:text-base font-medium mb-1">
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#5e3e89]"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center items-center gap-2 bg-[#5e3e89] text-white py-2 sm:py-3 rounded-lg transition text-sm sm:text-base font-medium ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#392655]"
                    }`}
            >
                {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    "Login"
                )}
            </button>
            <div className="flex justify-center">
                {message && (
                    <p
                        className={`text-sm ${message.includes("❌") ? "text-red-600" : "text-green-600"
                            }`}
                    >
                        {message}
                    </p>
                )}
            </div>
            <div className="text-center">

                <link href="/seller/forgot-password"
                    className="text-sm sm:text-base text-[#5e3e89] hover:underline hover:text-[#392655] transition"
                > Forgot Password</link>

            </div>
        </form>
    );
}