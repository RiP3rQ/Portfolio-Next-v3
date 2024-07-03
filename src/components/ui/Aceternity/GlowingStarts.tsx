"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Ilustration = dynamic(
  () => import("./Ilustrations").then((m) => m.Illustration),
  {
    ssr: false,
  },
);

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={cn(
        "absolute top-0 bottom-0 right-0 left-0 bg-transparent p-4 max-w-md h-full w-full z-10",
        className,
      )}
    >
      <div className="flex justify-center items-center">
        <Ilustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};
