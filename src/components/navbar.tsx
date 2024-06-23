"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const Navbar = () => {
  // TODO: STATIC PICTURES FOR LINKS
  // TODO: CONTACT SHEET

  return (
    <nav
      className="sticky top-0 p-0 max-w-full z-[999] xl:items-center
      dark:shadow-lg dark:shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md h-10"
    >
      <div className="max-w-7xl flex items-center justify-between mx-auto max-h-10">
        {/*Left*/}
        <Link href={"https://github.com/RiP3rQ"} target={"_blank"}>
          <Avatar className={"cursor-pointer"}>
            <AvatarImage src="/hero.png" />
            <AvatarFallback>RiP3rQ</AvatarFallback>
          </Avatar>
        </Link>
        {/*Right*/}
        <div className="hidden md:flex items-center justify-between text-white max-h-10">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">Github</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/github.png" />
                  <AvatarFallback>Github</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Github</h4>
                  <p className="text-sm">
                    Look at my projects and contributions on Github.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined July 2022
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">LinkedIn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/linkedin.png" />
                  <AvatarFallback>LinkedIn</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">LinkedIn</h4>
                  <p className="text-sm">
                    Connect with me on LinkedIn for professional networking.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2023
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button variant="link">Ask AI</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/ai.png" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Ask AI assistant</h4>
                  <p className="text-sm">
                    Ask my AI assistant for more information about me.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Created July 2024
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Button variant={"link"}>Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
