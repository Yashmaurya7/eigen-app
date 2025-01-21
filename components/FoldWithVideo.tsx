import React from 'react';

export function FoldWithVideo() {
  return (
    <section className="relative h-screen w-full">
      
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        aria-hidden="true"
      >
        <source src="/proteinvid2.mp4" type="video/mp4" />
        {/* <source src="/proteinvid2.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center">
        <div className="text-white ml-10 pt-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            Finding Patterns Out of
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Complex Health Data
          </h1>
          {/* <p className="text-lg md:text-2xl mt-4">
            Empowering insights with advanced analytics.
          </p> */}
          {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
}
