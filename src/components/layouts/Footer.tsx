import { navLinks } from "@/utils/common";
import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import phdImg from "../../../public/assets/phd.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-white bg-blue-600 px-10 py-20 md:px-24 lg:px-56 grid gap-10 grid-cols md:grid-cols-2">
      <aside className="grid gap-y-5">
        <ul className="grid grid-cols md:grid-cols-2 gap-y-5">
          {navLinks.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>
        <div className="flex gap-x-3">
          <PiPhoneCallFill className="h-full w-16" fill="white" />
          <div className="flex flex-col h-full">
            <h1 className="text-lg md:text-xl font-bold">Customer Care</h1>
            <h1 className="text-2xl md:text-4xl font-bold">0-800-140-1109</h1>
          </div>
        </div>
      </aside>
      <aside className="grid gap-y-5">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3">
            <div className="w-20 h-20 overflow-hidden">
              <Image alt="" src={phdImg} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-4xl font-bold tracking-widest">
                SRIBOGA
              </h1>
              <h1 className="text-xs -tracking-tighter">
                PIONEER IN FLOUR INNOVATION
              </h1>
            </div>
          </div>
          <div className="grid">
            <h1 className="text-xl font-bold">Follow Us</h1>
            <div className="flex gap-x-4">
              <FaInstagram className="h-5 md:h-10 w-5 md:w-10" />
              <FaFacebook className="h-5 md:h-10 w-5 md:w-10" />
              <FaXTwitter className="h-5 md:h-10 w-5 md:w-10" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-5">
          <h1 className="text-xl flex gap-x-1 items-center font-semibold">
            <FaRegCopyright />
            <h1>Developed by NEXA</h1>
          </h1>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
