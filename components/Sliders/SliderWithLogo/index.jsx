import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { decodeImage } from "@/services/functions";
import Link from "next/link";

export default function SliderWithLogo({ data, title }) {

    return (
        <section className="mt-5 py-10" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center relative">
                    <h4 className="text-white text-2xl font-thin">{title}</h4>
                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            450: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        loop
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="my-6"
                    >
                        {data.filter((item) => item.isActive).map((image, index) => {
                            const imageInfo = image.image?.[0];
                            const imageData = imageInfo?.imageData;
                            const imageSrc = decodeImage(imageData || '');

                            return (
                                <SwiperSlide key={index} className="flex justify-center">
                                    {(image.link && image.link !== '') ? (
                                        <Link href={image.link} target="_blank">
                                            <img
                                                src={imageSrc}
                                                alt={image.id}
                                                className="max-w-[150px] md:max-w-[200px] mx-auto"
                                            />
                                        </Link>
                                    ) : (
                                        <img
                                            src={imageSrc}
                                            alt={image.id}
                                            className="max-w-[150px] md:max-w-[200px] mx-auto"
                                        />
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
