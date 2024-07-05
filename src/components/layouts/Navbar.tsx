import { navLinks } from "@/utils/common";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-5 hidden xl:block">
      <ul className="flex sm:gap-x-3 md:gap-x-5 lg:gap-x-14 items-center justify-center mx-auto">
        {navLinks.map((e) => (
          <li className="text-lg text-blue-600 cursor-pointer" key={e.name}>
            {e.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
