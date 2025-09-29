'use client';
import useAosInit from "@/hooks/useAosInit";
import { decodeImage, slugify } from "@/services/functions";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const AksuCards = ({ data, type }) => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const language = i18n.language;
    useAosInit();

    return (
        <section
            className="pt-4 lg:pt-20 mb-[100px] pb-[100px] projects">
            <div className={`grid grid-cols-1 ${type === 'fields' ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                {data.filter((item) => item.isActive).map((item, index) => {
                    const imageInfo = item.image?.[0];
                    const imageData = imageInfo?.imageData;
                    const imageSrc = decodeImage(imageData || '');

                    return (
                        <div className={`aksu-card-item ${type === 'projects' && 'rounded-2xl max-h-[400px] min-h-[400px] h-full'}`} key={index} data-aos={index % 2 === 0 ? 'fade-down' : 'fade-up'} data-aos-duration="3000" data-aos-offset="-600">
                            <Link href={`/projelerimiz/${item.id}`} className="absolute-link" />
                            <div className="aksu-card-figure">
                                <Link href="#">
                                    <img width={551} height={700} src={imageSrc} className="object-contain mb-10 w-full" alt={item.title} loading="lazy" />
                                </Link>
                                <div className="aksu-card-content">
                                    {/* <div className="aksu-card-subTitle">
                                        <Link href="#">
                                            {type === 'fields' ? t('Header.Projelerimiz') : language === 'tr' ? (item ).fieldOfActivity : (item ).enFieldOfActivity}
                                        </Link>
                                    </div> */}
                                    <h3>
                                        <Link href="#">
                                            {language === 'tr' ? item.title : item.enTitle}
                                        </Link>
                                    </h3>
                                    <p>{language === 'tr' ? item.description : item.enDescription}</p>
                                    <div className="aksu-card-btn">
                                        <Link href={`/projelerimiz/${item.id}`} className="bg-[var(--aksu-blue)] text-white inline-block px-6 py-2 rounded-full">
                                            {t('Projelerimiz.Devami')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
