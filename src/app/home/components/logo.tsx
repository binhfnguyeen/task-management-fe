import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-9 h-9 rounded-md bg-linear-to-b from-blue-500 to-blue-700 flex items-center justify-center">
        <span className="text-white font-bold text-lg">F</span>
      </div>
      <span className="text-2xl font-semibold tracking-tight text-[#172b4d]">
        un <span className="font-bold">To</span> Do
        <span className="text-blue-600 font-bold ml-1">M</span>
      </span>
    </div>
  );
};
