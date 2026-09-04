import React from 'react';

const Contact = () => {

  return (
    <main className="p-10 bg-rose-300">
      {/* Heading */}
      <div>
        <span className="text-5xl text-black">Contact</span>
      </div>

      {/* Email block with responsive spacing */}
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16">
  <p className="break-words text-gray-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
    <span className="text-3xl">Email address</span> : 
    mohammedumarfarooq.19cmis0093@meruinternationalschool.com
  </p>
  <h1 className=' text-gray-700 text-3xl p-5 m-6 font-semibold  '>And pretty much that is it 👍 </h1>
</div>

    </main>
  );
};

export default Contact;
