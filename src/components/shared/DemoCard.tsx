import React from "react";
import Image from "next/image";
import bread from "../../../public/assets/bread.jpeg";

const DemoCard = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-y-3 md:gap-y-5  justify-between">
      <div className="rounded-xl overflow-hidden h-60 w-full grid place-items-center object-cover">
        <Image alt="" src={bread} sizes="cover" />
      </div>
      <h1 className="text-2xl font-semibold">Tepung Terigu</h1>
      <h1 className="text-lg text-gray-700 font-semibold">20 Mei 2001</h1>
    </div>
  );
};

export default DemoCard;
