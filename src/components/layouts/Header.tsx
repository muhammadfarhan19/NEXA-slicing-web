"use client";

import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import React from "react";

const Header = () => {
  const { toggleSidebarToggle } = useSidebarToggle();

  return (
    <header className="z-50 w-full px-10 py-5 fixed flex items-center justify-between xl:px-0 xl:justify-center bg-white">
      <h1 className="text-3xl font-bold">logo</h1>
      <button
        className="xl:hidden w-8 h-8 flex flex-col justify-around"
        onClick={toggleSidebarToggle}
      >
        <div className="rounded-full bg-black w-full h-1"></div>
        <div className="rounded-full bg-black w-full h-1"></div>
        <div className="rounded-full bg-black w-full h-1"></div>
      </button>
    </header>
  );
};

export default Header;
