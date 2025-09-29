'use client';
import Image from "next/image";
import CustomAksuTab from "../Tabs/CustomAksuTab";
import { OurServicesData } from "@/utils/OurServices"
import { OurServicesAndSertificates } from "@/utils/Tabs/OurServicesAndSertificates";
import useAosInit from "@/hooks/useAosInit";
import OurServicesSlider from "../Sliders/OurServicesSlider";
import { useTranslation } from "react-i18next";

export default function OurServices() {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    useAosInit();

    return (
        <>
            <div className="seperator -top-28" data-aos="fade-up"></div>
            <section className="our-services">
                <div className="container mx-auto p-4 text-center">
                    <h1 className="text-white text-2xl font-semibold mb-4">{language === 'tr' ? t('Anasayfa.HizmetlerizVeSertifikalarimiz').toLocaleUpperCase('tr') : t('Anasayfa.HizmetlerizVeSertifikalarimiz').toLocaleUpperCase('en')}</h1>
                    <CustomAksuTab tabs={OurServicesAndSertificates} language={language}>
                        {(activeTab) => {
                            const filteredItems = OurServicesData.filter(
                                (item) =>
                                    OurServicesAndSertificates.find((tab) => tab.title === activeTab)?.type ===
                                    item.type
                            );

                            return (
                                <OurServicesSlider>
                                    {filteredItems.map((item) => (
                                        <div className="mb-6 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0">
                                            <div
                                                key={item.id}
                                                className="bg-gray-700 opacity-70 rounded-xl transform transition-transform duration-300 hover:scale-105"
                                            >
                                                <Image src={item.imageUrl} width={480} height={400} alt={item.title} />
                                                <div className="md:min-h-[180px] pb-2 md:pb-0">
                                                    <h2 className="text-lg md:text-3xl text-white my-2">{language === 'tr' ? item.title : item.enTitle}</h2>
                                                    <ul className="text-sm md:text-base text-white mb-3">
                                                        {language === 'tr' ?
                                                            item.content.map((contentItem, index) => (
                                                                <li key={index}>{contentItem}</li>
                                                            )) :
                                                            item.enContent.map((contentItem, index) => (
                                                                <li key={index}>{contentItem}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OurServicesSlider>
                            );
                        }}
                    </CustomAksuTab>
                </div>
            </section>
        </>
    );
}
