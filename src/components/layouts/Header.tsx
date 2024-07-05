"use client";

import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import React from "react";

const Header = () => {
  const { isOpen, toggleSidebarToggle } = useSidebarToggle();

  return (
    <header className="w-full px-10 py-5 border-b fixed flex items-center justify-between md:px-0 md:justify-center bg-white">
      <h1 className="text-3xl font-bold">logo</h1>
      <button
        className="md:hidden w-8 h-8 flex flex-col justify-around"
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
