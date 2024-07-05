import React from "react";
import Image, { StaticImageData } from "next/image";

const DemoCard = ({
  image,
  context,
}: {
  image: string | StaticImageData;
  context: string;
}) => {
  return (
    <div className="w-full h-auto flex flex-col gap-y-3 md:gap-y-5  justify-between">
      <div className="rounded-xl overflow-hidden h-60 w-full grid place-items-center object-cover">
        <Image alt="" src={image} sizes="cover" />
      </div>
      <h1 className="text-2xl font-semibold capitalize">{context} 1</h1>
      <h1 className="text-lg text-gray-700 font-semibold">20 Mei 2001</h1>
    </div>
  );
};

export default DemoCard;
