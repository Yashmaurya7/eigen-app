import React from "react";

export function ImageFold2() {
  return (
    <div 
      className="relative flex items-center justify-center w-full bg-black overflow-hidden "
      style={{ height: "1600px" }} // Original height of the image
    >
      <img id="www"
        src="/where_working_black_blue_2563eb.png"
        alt="Background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-full object-contain"
      />
      {/* Optional Content */}
      
    </div>
  );
}
