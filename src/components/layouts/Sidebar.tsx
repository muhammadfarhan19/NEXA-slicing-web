"use client";

import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const Sidebar = () => {
  const { isOpen, toggleSidebarToggle } = useSidebarToggle();
  const navLinks = [
    {
      name: "Tentang Kami",
      url: "",
    },
    {
      name: "Product",
      url: "",
    },
    {
      name: "Inspirasi Baking",
      url: "",
    },
    {
      name: "Backing & Consulting",
      url: "",
    },
    {
      name: "Pemberdayaan UKM",
      url: "",
    },
    {
      name: "Acara",
      url: "",
    },
    {
      name: "Hubungi Kami",
      url: "",
    },
  ];
  return (
    <nav
      className={`w-full fixed z-50 h-screen bg-white py-3 flex xl:hidden border-r transition-all duration-100 ${
        isOpen ? "translate-x-0" : "-translate-x-[1300px]"
      }`}
    >
      <ul className="flex flex-col justify-center gap-y-5 w-full">
        <button className="flex justify-end pr-10 py-5">
          <RiCloseLargeFill className="h-5 w-5" onClick={toggleSidebarToggle} />
        </button>
        {navLinks.map((e) => (
          <li className="text-lg text-blue-600 cursor-pointer p-5" key={e.name}>
            {e.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
