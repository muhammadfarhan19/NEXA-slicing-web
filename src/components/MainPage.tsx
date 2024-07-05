import React from "react";
import Navbar from "./layouts/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Carousel from "./shared/Carousel";

const MainPage = () => {
  return (
    <main className="w-full h-screen pt-10 md:pt-20">
      <Navbar />
      <Carousel />
    </main>
  );
};

export default MainPage;
