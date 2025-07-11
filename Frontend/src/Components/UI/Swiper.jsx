// components/SwiperCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperCarousel = ({ children,className }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
      }}
      autoplay={{ delay: 3000 }}
      loop
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;
