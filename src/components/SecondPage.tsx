import React from "react";
import Image from "next/image";
import image1 from "../../public/assets/sriboga.jpeg";
import Marquee from "react-fast-marquee";
import ImageCardMarquee from "./shared/ImageCardMarquee";

const SecondPage = () => {
  return (
    <main className="w-full h-screen flex flex-col gap-y-14 items-center justify-center">
      <section className="mx-10 md:mx-20 lg:mx-56 flex flex-col lg:flex-row gap-5">
        <aside className="w-full text-center lg:text-left h-full flex flex-col justify-around items-start gap-y-5">
          <h1 className="text-lg lg:text-4xl font-bold w-full">
            Pioneer in Flour Innovation
          </h1>
          <p className="w-full lg:w-1/2 text-lg">
            PT. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011
            berubah menjadi PT. Sriboga Four Mill sebagai pelopor Produsen
            Tepung Terigu yang memiliki gizi tinggi di Indonesia
          </p>
          <button className="border mx-auto lg:mx-0 border-blue-600 py-3 px-10 rounded text-blue-600 transition-all duration-500 ease-in-out hover:text-white hover:bg-blue-600">
            Learn More
          </button>
        </aside>
        <aside className="w-full h-full rounded-lg overflow-hidden">
          <Image src={image1} alt="" sizes="cover" />
        </aside>
      </section>
      <section className="w-full h-40">
        <Marquee className="w-full h-full" speed={80}>
          <ImageCardMarquee />
        </Marquee>
      </section>
    </main>
  );
};

export default SecondPage;
