import React from "react";
import Image from "next/image";
import productImg1 from "../../../public/assets/product.png";

const ProductCard = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-y-3 md:gap-y-8 items-center justify-between">
      <div className="group rounded-xl bg-gray-100 overflow-hidden p-5 w-full h-[400px] grid place-items-center">
        <Image
          alt=""
          src={productImg1}
          width={150}
          className="transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12"
        />
      </div>
      <h1 className="text-xl">Tepung Terigu</h1>
      <button className="border border-blue-600 py-3 px-10 rounded text-blue-600 transition-all duration-200 ease-in-out hover:text-white hover:bg-blue-600">
        See Product
      </button>
    </div>
  );
};

export default ProductCard;
