"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { useLocation } from "@/providers/localization-provider";
// import data
import { navbar as EnglishNavbar } from "@/locale/english";
import { navbar as PolishNavbar } from "@/locale/polish";

const Navbar = () => {
  // TODO: CONTACT SHEET
  const { data } = useLocation();
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    if (data === "EN") {
      setFetchedData(EnglishNavbar);
    } else {
      setFetchedData(PolishNavbar);
    }
  }, [data]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  return (
    <nav
      className="sticky top-0 p-0 max-w-full z-[999] xl:items-center
      dark:shadow-lg dark:shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md h-10"
    >
      <div className="max-w-7xl flex items-center justify-between mx-auto max-h-10">
        {/*Left*/}
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <Link href={fetchedData.profile.link} target={"_blank"}>
              <Avatar className={"cursor-pointer"}>
                <AvatarImage src={fetchedData.profile.image} />
                <AvatarFallback>{fetchedData.profile.slug}</AvatarFallback>
              </Avatar>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src={fetchedData.profile.image} />
                <AvatarFallback>{fetchedData.profile.slug}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">
                  {fetchedData.profile.title}
                </h4>
                <p className="text-sm">{fetchedData.profile.description}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    {fetchedData.profile.dateText}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {/*Right*/}
        <div className="hidden md:flex items-center justify-between text-white max-h-10">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">{fetchedData.github.title}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={fetchedData.github.image} />
                  <AvatarFallback>{fetchedData.github.slug}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {fetchedData.github.title}
                  </h4>
                  <p className="text-sm">{fetchedData.github.description}</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      {fetchedData.github.dateText}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">{fetchedData.linkedin.title}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={fetchedData.linkedin.image} />
                  <AvatarFallback>{fetchedData.linkedin.slug}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {fetchedData.linkedin.title}
                  </h4>
                  <p className="text-sm">{fetchedData.linkedin.description}</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      {fetchedData.linkedin.dateText}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">{fetchedData.ai.title}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={fetchedData.ai.image} />
                  <AvatarFallback>{fetchedData.ai.slug}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {fetchedData.ai.title}
                  </h4>
                  <p className="text-sm">{fetchedData.ai.description}</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      {fetchedData.ai.dateText}
                    </span>
                  </div>


                  function PolishData(prevState: null): null {
    throw new Error("Function not implemented.");
}
             function EnglishData(prevState: null): null {
    throw new Error("Function not implemented.");
}
          </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Button variant={"link"}>{fetchedData.contact.title}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
