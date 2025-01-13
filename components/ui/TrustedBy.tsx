"use client";
import React from "react";

export function IncubatedAndTrustedFolds() {
  return (
    <div className="pb-16 bg-black pb-32">
       <div className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-12 pb-16">Trusted by</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">
            {/* Trusted Partners */}
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">All India Institute of<br></br>Medical Sciences</p>
              <p className="text-lg font-medium">
                (AIIMS)
              </p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">Maulana Azad Medical<br></br> College</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">Lady Hardinge Medical <br></br>College</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">PGI Rohtak</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">East Ocyon</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">Cankids</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">Safdarjung & <br></br>VMMC</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">Gautam Buddha<br></br> University</p>
            </div>
            
            <div className="p-4 bg-black rounded-lg shadow-lg">
              <p className="text-2xl font-medium">BCCI Level 2 <br></br>Coach</p>
            </div>
          </div>
        </div>
      </div>
      {/* Incubated At Fold */}
      <div className="bg-black text-white py-16 px-8 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center pb-16">Incubated at</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center  ">
            {/* Incubated Partners */}
            <div className="p-4 bg-black rounded-lg shadow-md pt-12">
              <p className="text-2xl font-medium">Mazumdar Shaw Medical Foundation (MSMF)</p>
            </div>
            <div className="p-4 bg-black rounded-lg shadow-md pt-12">
              <p className="text-2xl font-medium">Nasscom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Fold */}
     
    </div>
  );
}
