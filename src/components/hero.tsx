"use client";

import { TextGenerateEffect } from "@/components/ui/Aceternity/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import { useSheets } from "@/providers/sheet-provider";

type Props = {};
const Hero = (props: Props) => {
  const { setData } = useSheets();
  return (
    <div className={"pb-20 pt-36 z-10"}>
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
            Fullstack Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Building Dynamic, End-to-End Web Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Rafał, a skilled Fullstack Next.js Developer based in
            Poland. With a passion for transforming innovative ideas into
            efficient and engaging web applications, I specialize in delivering
            robust solutions that drive success.
          </p>

          <MagicButton
            title="Let's connect!"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => {
              setData({
                isOpen: true,
                currentSheet: "Contact",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
