'use client';
import { CataloguesBox } from "@/components/Boxes";
import BreadCrumbArea from "@/components/BreadcrumbArea";
import { useTranslation } from "react-i18next";
import { useAppSelector } from '@/hooks/redux';
import { decodeImage } from "@/services/functions";
import Image from "next/image";

export function CataloguesPageContent() {
    const { t } = useTranslation();
    const { data } = useAppSelector((state) => state.Catalogues);
    return (
        <>
            <BreadCrumbArea url='url(/images/mekanik-uygulamalar-banner.png)' title={t('Header.Kataloglar')} />
            <section className="pt-24 pb-24 bg-[#F4F4F4]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {data.filter((item) => item.isActive).map((item, index) => {

                            const imageInfo = item.image?.[0];
                            const imageData = imageInfo?.imageData;
                            const imageSrc = decodeImage(imageData || '');

                            return (
                                <CataloguesBox key={index} link={item.link} imgSrc={imageSrc} imgAlt={item.title} buttonText={item.title} dataAos={index % 2 === 0 ? 'fade-up' : 'fade-down'} dataAosDuration="2000" dataAosOffset="-800" />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export function ReferencesPageContent() {
    const { t } = useTranslation();
    const { data } = useAppSelector((state) => state.References);

    return (
        <>
            <BreadCrumbArea url='url(/images/mekanik-uygulamalar-banner.png)' title={t('Header.Referanslar')} />
            <section className="pt-24 pb-24 bg-[#F4F4F4]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {data.filter((item) => item.isActive).map((image, index) => {

                                const imageInfo = image.image?.[0];
                                const imageData = imageInfo?.imageData;
                                const imageSrc = decodeImage(imageData || '');

                                return (
                                    <Image
                                        key={index}
                                        src={imageSrc}
                                        alt={image.id.toString()}
                                        width={250}
                                        height={160}
                                        data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} data-aos-duration="2000" data-aos-offset="-200"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
