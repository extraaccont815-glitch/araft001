import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Araft",
  description: "One stop solution for all your daily commute needs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {/* Navbar will show on every page */}
        <Navbar />
        
        {/* Your dynamic pages (Home, Founder, Contact, Waitlist) render here */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
