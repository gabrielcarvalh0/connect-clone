import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

export function Carousel() {
  const data = [
    {
      file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_01.png?v=638064443300300000",
    },
    {
      file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_06.png?v=638064443310470000",
    },
    {
      file: "https://connectparts.vteximg.com.br/arquivos/12-12-22-banner-desk_04.png?v=638064443306400000"
    }
  ];

  return (
    <Swiper
  
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[ Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((arr, i) => {
        return (
          <SwiperSlide key={i}>
            <img className="w-screen" src={arr.file} />
          </SwiperSlide>

        );
      })}
    </Swiper>
  );
}
