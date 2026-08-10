export default function Founder() {
  return (
    <>
      <main className="h-screen flex flex-col md:flex-row items-start justify-start bg-gray-50 p-10">

        {/* Left Side - Circular Image */}
        <div className="pb-10 md:pb-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Heading */}
        <div className="flex-1 text-center md:text-left md:ml-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight ">
            Ready to Join the Consumer Revolution <br />
            <span className="text-blue-600 ">As a student.</span>
          </h1>
          <p className=" text-black p-12 text-xl bg-amber-100 rounded-4xl pb-10 justify-center">Hi, This is <span className=" text-amber-600 font-bold"> Mohammed Umar Farooq</span> from <span className=" underline bg-indigo-300"> Hyderabad </span>. If you are looking at this page, then you must have loved my presentation. Moving forward, I am studying in Grade 9 CBSE. My areas of interest include entrepreneurship, studying businesses, and basic human psychology. For more details you can meet me in the school.</p>
        </div>

      </main>


    </>
  );
}
