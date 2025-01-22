import React from 'react';

export function FoundingTeamFold() {
  return (
    <section id="team" className="bg-black py-12 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-6xl lg:text-8xl font-bold text-blue-600">
          Founding Team 
        </h2>
        <p className="text-2xl md:text-2xl text-white mt-4 pb-16">
          Our team members have studied or worked at 
        </p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-8 ">
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Carnegie Mellon University</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Indian School of Business</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">University of<br></br> Chicago</p>
          </div>
         
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Google</p>
          </div>
          
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">McKinsey</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Johnson & Johnson</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Baxter</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Schneider <br></br>Electric</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">NSUT / NSIT</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Northwestern University</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Indian Institute of Technology</p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 ">
            <p className="text-2xl font-medium text-white">Delhi Technological University(DCE)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
