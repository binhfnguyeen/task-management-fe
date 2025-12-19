import React from "react";
import Link from "next/link";

export const LogoFooter = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="w-9 h-9 rounded-md bg-linear-to-b from-blue-400 to-blue-600 flex items-center justify-center shadow">
        <span className="text-white font-bold text-lg">F</span>
      </div>

      <span className="text-2xl font-semibold tracking-tight text-white">
        un <span className="font-bold">To</span> Do
        <span className="text-blue-400 font-bold ml-1">M</span>
      </span>
    </Link>
  );
};
