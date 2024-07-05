import { imagesUrl } from "@/utils/imagesUrl";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const url: string = "https://i.ytimg.com/vi/qH3p_bcOOE4/maxresdefault.jpg";

function Carousel() {
  return (
    <>
      <Swiper>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
