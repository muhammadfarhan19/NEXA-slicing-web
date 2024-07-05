import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";

const BannerPage = () => {
  return (
    <div className="w-full h-screen py-20">
      <section className="h-full w-full text-white bg-[url('/assets/banner.webp')] bg-cover bg-opacity-75 relative ">
        <div className="w-full h-full absolute bg-blue-600 opacity-70 flex flex-col items-center justify-around">
          <h1 className="text-3xl font-bold">From us to your favorite dish</h1>
          <p className="w-3/4 md:w-1/3 text-center font-bold text-lg">
            We are passionate about feeding the ones we love delicious dishes
            made from the highest quality ingredients. Get inspired for your net
            meal or baking project by browsing through our library of original
            recipes featuring our ancient and heritage grains
          </p>
          <button className="border-2 border-white py-3 px-10 rounded text-white font-bold">
            Discover Recipes
          </button>
          <div className="w-20">
            <Image alt="" src={logo} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerPage;
