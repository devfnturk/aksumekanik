'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchGetBanners } from "@/stores/BannerSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTranslation } from 'react-i18next';
// import { decodeImage } from "@/services/functions";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function HomePageSlider() {

    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.Banners);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const language = i18n.language;
    const windowWidth = useWindowWidth();

    useEffect(() => {
        dispatch(fetchGetBanners())
    }, []);

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            speed={1000}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            direction="vertical"
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"><span class='swiper-number hidden text-xs relative -left-2.5 transition-[.3s all] text-[var(--aksu-gray)]'>${index + 1}</span></span>`;
                }
            }}
            loop
            className="mySwiper w-full h-screen max-h-[1600px]"
        >
            {windowWidth > 1024 && (
                <SwiperSlide>
                    <div className="block relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden bg-blend-multiply bg-[rgba(0, 0, 0, .7)] before:absolute before:bg-[#0000006b] before:w-full before:h-full before:z-10 before:content-['']">
                        <div className="h-full w-full z-0 absolute overflow-hidden inset-0 pointer-events-none bg-cover bg-no-repeat bg-center">
                            <video src={'/images/sliderVideo.mp4'} autoPlay muted loop
                                className="top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%] absolute opacity-[1] w-[2105px] h-[1184.06px]" />
                        </div>
                    </div>
                </SwiperSlide>
            )}
            {data?.filter((slide) => slide.isActive && slide.image?.[0]?.url).map((slide) => {
                // const imageInfo = slide.image?.[0];
                // const imageData = imageInfo?.imageData;
                const imageSrc = slide.image[0].url;

                return (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="sliderImg h-screen max-h-[1600px] bg-cover bg-left-bottom"
                            style={{ backgroundImage: `url(${imageSrc})` }}
                        >
                            <div className="container mx-auto">
                                <div className="text-white lg:w-full w-[85%] absolute top-1/4 z-10">
                                    <h4 className="font-semibold text-2xl">{language === 'tr' ? slide.title : slide.enTitle}</h4>
                                    <h2 className="font-thin text-5xl">{language === 'tr' ? slide.description : slide.enDescription}</h2>
                                    <h2 className="font-semibold text-5xl">{language === 'tr' ? slide.tag : slide.enTag}</h2>
                                    {(slide.link && slide.link !== '') && (
                                        <Link
                                            href={slide.link}
                                            className="mt-6 relative block max-w-fit border border-[var(--aksu-green)] rounded-[25px] bg-[var(--aksu-green)] px-[30px] py-[12px] text-white text-sm transition-all duration-300 before:content-[''] before:absolute before:w-[60px] before:h-[20px] before:bg-no-repeat before:bg-[size:0] before:transition-all before:duration-300 before:left-[75%] before:top-[22%] hover:opacity-70"
                                        >
                                            {t('Banner.DetayGor')}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
