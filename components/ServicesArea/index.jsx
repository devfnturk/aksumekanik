'use client';
import BreadCrumbArea from "@/components/BreadcrumbArea";
import MechanicalApplicationBox from "@/components/MechanicalApplicationBox";
import PageText from "@/components/PageText";
import ProductBox from "@/components/Products/ProductBox";
import LoadingScreen from '@/components/LoadingScreen';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
// import { decodeImage } from "@/services/functions";
import { fetchGetActivityAreasByBrand } from "@/stores/ActivityAreasByBrand";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchGetBrandsByActivityArea } from "@/stores/BrandsByActivityArea";
import ContentNotFound from "@/components/ContentNotFound";

export const ServicesArea = ({ type, brand, activityAreasByBrand, activityArea }) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const brandsState = useAppSelector((state) => state.Brands);
    const activityAreasByBrandState = useAppSelector((state) => state.ActivityAreasByBrand);
    const brandsByActivityAreasState = useAppSelector((state) => state.BrandsByActivityArea);
    const activitiesState = useAppSelector((state) => state.Activities);
    const fieldOfActivityState = useAppSelector((state) => state.FieldOfActivities);
    const { data, loading, error } = type === 'brand' ? brandsState : type === 'activityAreasByBrand' ? activityAreasByBrandState : type === 'brandsByActivityArea' ? brandsByActivityAreasState : fieldOfActivityState;
    const { i18n } = useTranslation();
    const language = i18n.language;

    useEffect(() => {
        if (brand) dispatch(fetchGetActivityAreasByBrand(brand))
    }, [brand]);

    useEffect(() => {
        if (activityArea) dispatch(fetchGetBrandsByActivityArea(activityArea))
    }, [activityArea]);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) return <ContentNotFound description={error} />;
    if (!data || data.length === 0) return <ContentNotFound />;

    return (
        <>
            <BreadCrumbArea url='url(/images/breadcrumb.jpeg)' title={type === 'brand' ? t('Header.Markalar') : t('Header.FaaliyetAlanlari')} />
            <section className="pt-24 pb-24 bg-[#F4F4F4]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-5xl">
                            <PageText
                                title={t("FaaliyetAlanlari.PageTitle")}
                                description={t("FaaliyetAlanlari.Text")}
                            />

                            {/* Hizmetler */}
                            {type === 'brand' ? data?.filter((item) => item.isActive).sort((a, b) => a.order - b.order).map((item, index) => {
                                const imageInfo = item.image?.[0];
                                // const imageData = imageInfo?.imageData;
                                const imageSrc = imageInfo?.url;
                                // const imageSrc = item.image[0].url;

                                return (
                                    <MechanicalApplicationBox
                                        key={index}
                                        id={item.id}
                                        imgSrc={imageSrc}
                                        title={language === 'tr' ? item.title : item.enTitle}
                                        content={language === 'tr' ? item.description : item.enDescription}
                                        imgLeft={index % 2 === 0 ? true : false}
                                        dataAosOffset={((index * 100) % 500).toString()}
                                        type={type}
                                        pageTitle={brand}
                                    />
                                );
                            }) : type === 'brandsByActivityArea' ? data?.map((item, index) => {
                                const imageInfo = item.brands?.[0].image?.[0];
                                // const imageData = imageInfo?.imageData;
                                const imageSrc = imageInfo?.url;

                                return (
                                    <MechanicalApplicationBox
                                        key={index}
                                        id={item.brands[0].id}
                                        imgSrc={imageSrc}
                                        title={language === 'tr' ? item.brands[0].title : item.brands[0].enTitle}
                                        content={language === 'tr' ? item.brands[0].description : item.brands[0].enDescription}
                                        imgLeft={index % 2 === 0 ? true : false}
                                        dataAosOffset={((index * 100) % 500).toString()}
                                        type={type}
                                        pageTitle={brand}
                                    />
                                );
                            }) : data?.filter((item) => item.isActive).map((item, index) => {
                                const imageInfo = item.image?.[0];
                                // const imageData = imageInfo?.imageData;
                                const imageSrc = imageInfo?.url;
                                // const imageSrc = item.image[0].url;

                                return (
                                    <MechanicalApplicationBox
                                        key={index}
                                        id={item.id}
                                        imgSrc={imageSrc}
                                        title={language === 'tr' ? item.title : item.enTitle}
                                        content={language === 'tr' ? item.description : item.enDescription}
                                        imgLeft={index % 2 === 0 ? true : false}
                                        dataAosOffset={((index * 100) % 500).toString()}
                                        type={type}
                                        pageTitle={brand}
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
