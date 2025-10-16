'use client';
import BreadCrumbArea from "@/components/BreadcrumbArea";
import MechanicalApplicationBox from "@/components/MechanicalApplicationBox";
import PageText from "@/components/PageText";
import ProductBox from "@/components/Products/ProductBox";
import LoadingScreen from '@/components/LoadingScreen';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
// import { decodeImage } from "@/services/functions";
import { fetchGetActivityAreasByBrand } from "@/stores/ActivityAreasByBrand";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchGetBrandsByActivityArea } from "@/stores/BrandsByActivityArea";
import ContentNotFound from "@/components/ContentNotFound";

export const ServicesArea = ({ type, brand, activityAreasByBrand, activityArea }) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    
    // AOS'u sadece bir kez initialize et - hash navigation varsa geçici olarak kapat
    const [hashNavigationActive, setHashNavigationActive] = useState(false);
    
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setHashNavigationActive(true);
        }
    }, []);
    
    // Hash navigation aktif değilse AOS'u başlat
    useEffect(() => {
        if (!hashNavigationActive && window.AOS) {
            window.AOS.init({
                duration: 3000,
                once: false,
                offset: 100,
                delay: 0,
                easing: 'ease-in-out',
                mirror: false,
                anchorPlacement: 'top-bottom'
            });
        }
    }, [hashNavigationActive]);
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

    // Hash navigation için scroll işlemi
    useEffect(() => {
        const handleHashNavigation = () => {
            const hash = window.location.hash;
            
            if (hash && type === 'brand') {
                const elementId = hash.substring(1);
                
                // Element'in render olmasını bekle ve scroll et
                const scrollToElement = (retryCount = 0) => {
                    const element = document.getElementById(elementId);
                    
                    if (element) {            
                        // Tüm AOS animasyonlarını durdur
                        if (window.AOS) {
                            window.AOS.disable();
                        }
                        
                        // Tüm marka elementlerini görünür yap
                        const brandElements = document.querySelectorAll('[data-aos]');
                        brandElements.forEach(el => {
                            el.style.opacity = '1';
                            el.style.transform = 'none';
                            el.style.transition = 'none';
                        });
                        
                        const headerHeight = 80;
                        const elementPosition = element.offsetTop - headerHeight;
                                                
                        // Doğrudan scroll et
                        window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                        });
                        
                        // Hash navigation tamamlandıktan sonra AOS'u etkinleştir
                        setTimeout(() => {
                            setHashNavigationActive(false);
                            if (window.AOS) {
                                window.AOS.init({
                                    duration: 3000,
                                    once: false,
                                    offset: 100,
                                    delay: 0,
                                    easing: 'ease-in-out',
                                    mirror: false,
                                    anchorPlacement: 'top-bottom'
                                });
                            }
                        }, 2000);
                        
                    } else if (retryCount < 25) {
                        setTimeout(() => scrollToElement(retryCount + 1), 400);
                    } else {
                        // Element bulunamazsa AOS'u etkinleştir
                        setHashNavigationActive(false);
                    }
                };

                // Sayfanın tamamen yüklenmesini bekle
                setTimeout(() => {
                    scrollToElement();
                }, 1000);
            }
        };

        // Data yüklendikten sonra hash navigation'ı kontrol et
        if (data && data.length > 0 && hashNavigationActive) {
            setTimeout(handleHashNavigation, 1500);
        }
    }, [data, type, hashNavigationActive]);

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
                                        key={`brand-${item.id}`}
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
                            }) : type === 'brandsByActivityArea' ? data?.filter((item) => item.brands[0].isActive).map((item, index) => {
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
