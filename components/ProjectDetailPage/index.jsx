'use client';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";
import BreadCrumbArea from "../BreadcrumbArea";
import { decodeImage } from "@/services/functions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import DetailCard from "../DetailCard";

const ProjectDetailPage = ({ projectId }) => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.Projects);
    const project = data.find((project) => project.id === projectId);
    const imageInfo = project?.image?.[0];
    const imageData = imageInfo?.imageData;
    const imageSrc = decodeImage(imageData || '');
    const imageSources = project?.image?.map(image => decodeImage(image.imageData || '')) || [];

    return (
        <>
            <BreadCrumbArea url={`url('${imageSrc}')`} title={project ? language === 'tr' ? project?.title : project?.enTitle : ''} />
            <section style={{ backgroundImage: 'url(/images/projelerimiz-bg.png)' }}>
                <div className="py-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-10 col-start-2">
                            {imageSrc ? (
                                <img src={imageSrc} className="w-full max-h-[700px]" />
                            ) : null}
                            <div className="grid grid-cols-8">
                                <div className="col-span-8 lg:col-span-6 bg-white rounded-b-md p-8">
                                    {/* <h3 className="text-[var(--aksu-green)] font-bold mb-6">{language === 'tr' ? project?.fieldOfActivity : project?.enFieldOfActivity}</h3> */}
                                    <h2 className="text-4xl mb-6" >{language === 'tr' ? project?.title : project?.enTitle}</h2>
                                    <Swiper
                                        modules={[Autoplay, EffectFade]}
                                        effect="fade"
                                        speed={1000}
                                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                                        direction="horizontal"
                                        loop
                                        className="mySwiper w-full"
                                    >
                                        {imageSources.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <img className="sliderImg max-h-96" src={item} alt={index.toString()} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="col-span-8 lg:col-span-2 relative">
                                    <div className="lg:absolute -top-19 right-0 w-full">
                                        <DetailCard
                                            client={project?.client || ''}
                                            location={project?.location || ''}
                                            area={project?.area || ''}
                                            projectDate={project?.projectDate || ''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectDetailPage;
