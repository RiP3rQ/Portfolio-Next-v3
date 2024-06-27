"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/Aceternity/MagicButton";
import { useLocation } from "@/providers/localization-provider";
import React, { useEffect, useState } from "react";
import { footer as EnglishFooter } from "@/locale/english";
import { footer as PolishFooter } from "@/locale/polish";
import Link from "next/link";
import Image from "next/image";
import { useSheets } from "@/providers/sheet-provider";
import { AiOutlineQuestion } from "react-icons/ai";

const Footer = () => {
  const { setData } = useSheets();
  const { data } = useLocation();
  const [fetchedData, setFetchedData] = useState<typeof EnglishFooter>(null);

  useEffect(() => {
    if (data === "EN") {
      setFetchedData(EnglishFooter);
    } else {
      setFetchedData(PolishFooter);
    }
  }, [data]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          {fetchedData.title_part1}{" "}
          <span className="text-[#CBACF9]">{fetchedData.title_part2}</span>{" "}
          {fetchedData.title_part3}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {fetchedData.description}
        </p>
        <div className={"flex w-full items-center justify-center gap-2"}>
          <MagicButton
            title={fetchedData.button}
            icon={<FaLocationArrow />}
            position="left"
            handleClick={() => {
              setData({
                isOpen: true,
                currentSheet: "Contact",
              });
            }}
          />
          <MagicButton
            title="Look at FAQ"
            icon={<AiOutlineQuestion />}
            position="right"
            handleClick={() => {
              setData({
                isOpen: true,
                currentSheet: "FAQ",
              });
            }}
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light underline underline-offset-1">
          Handcrafted by RiP3rQ @ 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-1">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target={"_blank"}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
