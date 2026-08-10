import React from "react";
import Navbar from "./Navbar";

const Page = () => {
  return (
    <main>

      <div>
        <h1 className="text-4xl text-blue-500 hover:text-rose-500 hover:scale-102 p-4 font-bold transition-all duration-400 ease-in-out cursor-pointer underline">
  Welcome to Araft
</h1>
<p className="text-gray-500 p-5 text-2xl">Lets understand what is Araft:
  </p>
  <dl>

    <dt className=" text-xl text-gray-800 ml-5">1. What is Araft ?
    </dt>

    <dd className=" text-xl text-amber-700 ml-5 p-5">ARAFT is a community-driven transport network designed to digitize and secure the daily school commute. This includes School-going students and Office employees. Instead of relying on expensive private cabs which are also very uncertain during peak demand, ARAFT connects families living in the same neighborhood to optimized and verified school routes.</dd>
    <img src="img1.png" alt="Fundamental.1" className=" w-full h-auto p-3 rounded-4xl border-2 border-[#008bfc] "/>


    <dt className=" text-xl text-gray-800 ml-5 p-6">2. How does Araft work?
    </dt>
    <dd className=" text-xl text-amber-700 ml-5 p-4">ARAFT operates by creating a digital platform that connects parents and students with verified drivers in their local area. It operates on a fee based model including monthly, quarterly and yearly plans.</dd>
    <img src="img2.png" alt="Fundamental.2" className=" w-full h-auto p-3 rounded-4xl border-2 border-[#008bfc] "/>
  </dl>

      </div>
    </main>
  );
};

export default Page;


