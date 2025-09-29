'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

export default function OurServicesSlider({ children }) {

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            navigation
            breakpoints={{
                0: { slidesPerView: 1 },
                465: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mt-6 !pb-14"
        >
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}
