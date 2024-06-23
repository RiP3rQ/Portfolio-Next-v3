"use client";

import { TextGenerateEffect } from "@/components/ui/Aceternity/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import { useLocation } from "@/providers/localization-provider";
import React, { useEffect, useState } from "react";
import { hero as EnglishHero } from "@/locale/english";
import { hero as PolishHero } from "@/locale/polish";

type Props = {};
const Hero = (props: Props) => {
  const { data } = useLocation();
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    if (data === "EN") {
      setFetchedData(EnglishHero);
    } else {
      setFetchedData(PolishHero);
    }
  }, [data]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={"pb-20 pt-36 z-40"}>
      <div
        className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {fetchedData.subTitle}
          </p>

          <TextGenerateEffect
            words={fetchedData.mainTitle}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl">
            {fetchedData.description}
          </p>

          {/* TODO: Open contact form */}
          <MagicButton
            title={fetchedData.button}
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
