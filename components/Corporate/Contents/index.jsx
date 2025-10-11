'use client';
// import { CataloguesBox } from "@/components/Boxes";
import Odometer from "@/components/Odometer";
import { useAppSelector } from "@/hooks/redux";
import useAosInit from "@/hooks/useAosInit";
// import { decodeImage } from "@/services/functions";
// import { fetchGetReferences } from "@/stores/ReferencesSlice";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const HakkimizdaContent = () => {
    useAosInit();
    const { t } = useTranslation();
    const { completedCount, incompleteCount } = useAppSelector(state => state.Projects);
    return (
        <div>
            <h2 className="font-bold text-5xl text-gray-800" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="-800">Aksu Mekanik</h2>
            <h5 className="text-3xl font-bold text-gray-800 mt-3" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-800">{t('Kurumsal.BizKimiz')}</h5>

            <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-offset="-800"
                    >
                        <p className="mb-4">{t('Kurumsal.KurumsalParagraf1')}</p>
                        <p className="mb-4">{t('Kurumsal.KurumsalParagraf2')}</p>
                        <p className="mb-4">{t('Kurumsal.KurumsalParagraf3')}</p>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-2"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                        data-aos-offset="-800"
                    >
                        <div className="flex items-center justify-center">
                            <Image src='/images/tamamlanan-icon.png' alt="tamamlanan-icon" width={50} height={60} />
                            <div className="lg:mt-0 text-center relative ml-4">
                                <Odometer className="font-semibold text-2xl md:text-5xl flex odometer relative" value={completedCount} plus={true} />
                                {/* <label className="font-bold text-xl md:text-4xl absolute left-[20%] md:left-[30%] top-0.5 md:top-2">+</label> */}
                                <span className="font-bold uppercase block text-gray-700">{t('Kurumsal.TamamlananProje')}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src='/images/projelendirme-icon.png' alt="projelendirme-icon" width={70} height={80} />
                            <div className="lg:mt-0 text-center relative ml-4">
                                <Odometer className="font-semibold text-2xl md:text-5xl flex odometer relative" value={incompleteCount} plus={true} />
                                {/* <label className="font-bold text-xl md:text-4xl absolute left-[35%] md:left-[60%] top-0.5 md:top-2">+</label> */}
                                <span className="font-bold uppercase block text-gray-700">{t('Kurumsal.DevamEdenProje')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const KaliteCevreISGContent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2 className="text-3xl font-light text-gray-800" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="-200">
                {t("KaliteCevreISG.PageTitle")}
            </h2>

            <div>
                <div className="grid grid-cols-1 gap-8">
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="-200">
                        <h5 className="text-xl font-bold text-gray-800 mt-3">
                            {t("KaliteCevreISG.KalitePolitikamiz.Title")}
                        </h5>

                        <p className="mb-4">{t("KaliteCevreISG.Intro")}</p>

                        <ul className="list-disc list-inside space-y-1">
                            {Object.values(
                                t("KaliteCevreISG.KalitePolitikamiz.Items", { returnObjects: true })
                            ).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-200">
                        <h5 className="text-xl font-bold text-gray-800 mt-3">
                            {t("KaliteCevreISG.CevrePolitikamiz.Title")}
                        </h5>
                        <ul className="list-disc list-inside space-y-1">
                            {Object.values(
                                t("KaliteCevreISG.CevrePolitikamiz.Items", { returnObjects: true })
                            ).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="-200">
                        <h5 className="text-xl font-bold text-gray-800 mt-3">
                            {t("KaliteCevreISG.ISGPolitikamiz.Title")}
                        </h5>
                        <ul className="list-disc list-inside space-y-1">
                            {Object.values(
                                t("KaliteCevreISG.ISGPolitikamiz.Items", { returnObjects: true })
                            ).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const InsanKaynaklariContent = () => {
//     return (
//         <div>
//             <h2 className="text-3xl font-light text-gray-800">Birleşim Mühendislik IK</h2>
//             <h5 className="text-xl font-bold text-gray-800 mt-3">
//                 Isıtma - Soğutma - Havalandırma Konularında Büyük Tecrübe
//             </h5>

//             <div className="mt-12">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div>
//                         <p className="mb-4">
//                             2002 yılında kurulan Birleşim Mühendislik, mekanik taahhüt firmaları arasında
//                             Türkiye'de lider firmalar arasında yer almaktadır.
//                         </p>
//                         {/* Diğer içerik */}
//                     </div>
//                     <div>
//                         {/* Diğer içerik */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const EtikKurallarimizContent = () => {
    const { t } = useTranslation();

    const items = t("EtikKurallar.Items", { returnObjects: true });
    const implementation = t("EtikKurallar.Implementation", { returnObjects: true });
    const closing = t("EtikKurallar.Closing", { returnObjects: true });

    return (
        <div>
            <h2 className="text-3xl font-light text-gray-800 mb-4" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="-200">
                {t("EtikKurallar.PageTitle")}
            </h2>
            <p className="mb-6 text-gray-700" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="-200">{t("EtikKurallar.Intro")}</p>

            {items.map((item, index) => (
                <div key={index} className="mb-6" data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} data-aos-duration="2000" data-aos-offset="-200">
                    <h3 className="text-xl font-semibold text-gray-800">{item.Title}</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        {item.Details.map((detail, idx) => (
                            <li key={idx} className="text-gray-700">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <hr className="my-8 border-gray-300" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="-200" />

            <div className="mb-6" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="-200">
                <h3 className="text-xl font-semibold text-gray-800">
                    {implementation.Title}
                </h3>
                <p className="mt-2 text-gray-700">{implementation.Text}</p>
            </div>

            <hr className="my-8 border-gray-300" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="-200" />

            <div className="mt-6" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-200">
                <p className="mb-4 text-gray-700">{closing.Text}</p>
                <p className="font-bold text-gray-800">{closing.Sign.Title}</p>
                <p className="text-gray-600">{closing.Sign.Name}</p>
                <p className="text-gray-600 italic">{closing.Sign.Date}</p>
            </div>
        </div>
    );
};

export const KatalogReferanslarContent = () => {
    const { t } = useTranslation();
    const { data } = useAppSelector((state) => state.References);

    return (
        <div>
            {/* <h2 className="font-bold text-5xl text-gray-800" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="-800">{t('KatalogVeReferanslar.Kataloglar')}</h2>

            <div className="mt-12 mb-10">
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        <CataloguesBox dataAos="fade-down" dataAosDuration="2000" dataAosOffset="-800" link='/documents/katalog-aksu-mekanik.pdf' imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText='Aksu Mekanik Genel Katalog' />
                        <CataloguesBox dataAos="fade-up" dataAosDuration="2000" dataAosOffset="-800" link='/documents/katalog-aksu-mekanik.pdf' imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText='Aksu Mekanik Genel Katalog' />
                        <CataloguesBox dataAos="fade-down" dataAosDuration="2000" dataAosOffset="-800" link='/documents/katalog-aksu-mekanik.pdf' imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText='Aksu Mekanik Genel Katalog' />
                        <CataloguesBox dataAos="fade-up" dataAosDuration="2000" dataAosOffset="-800" link='/documents/katalog-aksu-mekanik.pdf' imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText='Aksu Mekanik Genel Katalog' />
                        <CataloguesBox dataAos="fade-down" dataAosDuration="2000" dataAosOffset="-800" link='/documents/katalog-aksu-mekanik.pdf' imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText='Aksu Mekanik Genel Katalog' />
                    </div>
                </div>
            </div> */}

            <h2 className="font-bold text-5xl text-gray-800" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-800">{t('KatalogVeReferanslar.Referanslar')}</h2>

            <div className="mt-12">
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {data.filter((image) => image.isActive).map((image, index) => {
                            // const imageInfo = image.image?.[0];
                            // const imageData = imageInfo?.imageData;
                            // const imageSrc = imageInfo?.url || '';
                            const imageSrc = image.image[0].url;
                            if (image.link && image.link !== '') {
                                return (
                                    <Link href={image.link} target="_blank" key={image.id}>
                                        <img
                                            src={imageSrc}
                                            alt={image.id.toString()}
                                            width={250}
                                            height={160}
                                            data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} data-aos-duration="2000" data-aos-offset="-200"
                                        />
                                    </Link>
                                );
                            } else {
                                return (
                                    <img
                                        key={image.id}
                                        src={imageSrc}
                                        alt={image.id.toString()}
                                        width={250}
                                        height={160}
                                        data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} data-aos-duration="2000" data-aos-offset="-200"
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
