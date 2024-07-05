import Image from "next/image";
import React from "react";
import phd from "../../../public/assets/phd.jpeg";

const ImageCardMarquee = () => {
  return (
    <div className="w-[100px] h-full flex">
      <Image className="mx-12" src={phd} alt="" width={100} />
      <Image className="mx-12" src={phd} alt="" width={100} />
      <Image className="mx-12" src={phd} alt="" width={100} />
      <Image className="mx-12" src={phd} alt="" width={100} />
      <Image className="mx-12" src={phd} alt="" width={100} />
    </div>
  );
};

export default ImageCardMarquee;
