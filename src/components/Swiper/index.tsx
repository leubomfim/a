import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={30}
      slidesPerGroup={5}
      className="w-full"
    >
      {children}
    </Swiper>
  );
};
