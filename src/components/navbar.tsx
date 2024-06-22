"use client";

import React from "react";
import { motion } from "framer-motion";
import NavigationButton from "@/components/navbar-button";

const Navbar = () => {
  const navigate = (id: string) => () => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 p-0 max-w-full z-50 xl:items-center
      overflow-x-hidden dark:shadow-lg dark:shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md"
    >
      <div className="max-w-7xl flex items-center justify-center mx-auto">
        {/* NAVIGATION | CENTER*/}
        <motion.div
          // initial={{
          //   opacity: 0,
          //   scale: 0.5,
          // }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          // }}
          // transition={{
          //   duration: 1.5,
          // }}
          className="hidden md:flex items-center justify-center space-x-3 h-auto
    border border-[#7042f861] bg-[#0300145e] rounded-2xl text-white"
        >
          <NavigationButton text="O mnie" href="#about" navigate={navigate} />
          <NavigationButton text="Ścieżka" href="#path" navigate={navigate} />
          <NavigationButton
            text="Umiejętności"
            href="#skills"
            navigate={navigate}
          />
          <NavigationButton
            text="Projekty"
            href="#projects"
            navigate={navigate}
          />
          <NavigationButton
            text="Kontakt"
            href="#contact"
            navigate={navigate}
          />
        </motion.div>

        {/*/!* NAVIGATION | MOBILE*!/*/}
        {/*<motion.div*/}
        {/*  // initial={{*/}
        {/*  //   opacity: 0,*/}
        {/*  //   scale: 0.5,*/}
        {/*  // }}*/}
        {/*  // animate={{*/}
        {/*  //   opacity: 1,*/}
        {/*  //   scale: 1,*/}
        {/*  // }}*/}
        {/*  // transition={{*/}
        {/*  //   duration: 1.5,*/}
        {/*  // }}*/}
        {/*  className="flex md:hidden items-start justify-center h-auto"*/}
        {/*>*/}
        {/*  <MobileNavbar />*/}
        {/*</motion.div>*/}
      </div>
    </header>
  );
};

export default Navbar;
