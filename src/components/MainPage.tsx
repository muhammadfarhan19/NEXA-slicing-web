import React from "react";
import Navbar from "./layouts/Navbar";
import Image from "next/image";
import img from "../../public/assets/car.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MainPage = () => {
  return (
    <main className="w-full h-screen pt-10 md:pt-20">
      <Navbar />
      <div className="py-10 object-cover flex h-screen w-full items-center justify-center relative">
        <div className="flex absolute w-full justify-between items-center">
          <button>
            <IoIosArrowBack className="h-14 w-14" fill="white" />
          </button>
          <button>
            <IoIosArrowForward className="h-14 w-14" fill="white" />
          </button>
        </div>
        <Image alt="" src={img} sizes="cover" className="w-full max-h-full" />
      </div>
    </main>
  );
};

export default MainPage;
