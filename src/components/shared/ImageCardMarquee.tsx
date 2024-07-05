import Image from "next/image";
import React from "react";
import phd from "../../../public/assets/phd.jpeg";

const ImageCardMarquee = () => {
  return (
    <div className="flex gap-x-10">
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
      <div className="w-[100px] h-full flex">
        <Image className="mx-12" src={phd} alt="" width={100} />
      </div>
    </div>
  );
};

export default ImageCardMarquee;
