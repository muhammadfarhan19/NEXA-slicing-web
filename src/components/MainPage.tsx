import React from "react";
import Navbar from "./layouts/Navbar";

import "swiper/css";
import "swiper/css/navigation";

const MainPage = () => {
  return (
    <main className="w-full h-screen pt-10 md:pt-20">
      <Navbar />
      {/* <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide></SwiperSlide>
      </Swiper> */}
    </main>
  );
};

export default MainPage;
