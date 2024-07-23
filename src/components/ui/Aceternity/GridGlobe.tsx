"use client";
import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.Cobe), {
  ssr: false,
});

const GridGlobe = () => {
  return (
    <div className="flex items-center justify-center absolute left-0 top-0 w-full h-full cursor-pointer">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-10 lg:h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-full">
          <World />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;
