import { imagesUrl } from "@/utils/imagesUrl";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const url: string = "https://i.ytimg.com/vi/qH3p_bcOOE4/maxresdefault.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        {/* {[...new Array(5)].map((e, i) => (
        <SwiperSlide key={i}></SwiperSlide>
        ))} */}
        <SwiperSlide>a</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
