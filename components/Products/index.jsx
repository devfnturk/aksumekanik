'use client';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchGetBrandActivityAreaByFieldOfActivity, fetchGetProductsByBrandActivityArea, fetchGetProductsByBrandId } from "@/stores/Products";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductBox from "./ProductBox";
import BreadCrumbArea from "../BreadcrumbArea";
import LoadingScreen from '@/components/LoadingScreen';
import ContentNotFound from "@/components/ContentNotFound";

const Products = ({ brand, product, brandActivityArea, parent }) => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const dispatch = useAppDispatch();
    const { productsByBrandId, productsByBrandActivityArea, loading, error } = useAppSelector((state) => state.Products);

    useEffect(() => {
        if (brandActivityArea && parent === 'activityArea') {
            dispatch(fetchGetBrandActivityAreaByFieldOfActivity(brandActivityArea))
                .unwrap()
                .then((res) => {
                    const matchedItem = res.find(item =>
                        item.brands?.some(b => b.id === brand)
                    );

                    if (matchedItem) {
                        dispatch(fetchGetProductsByBrandActivityArea(matchedItem.id));
                    }
                })
                .catch((err) => console.error('BrandActivityArea fetch failed:', err));
        }
        if (brand && parent === 'brand') dispatch(fetchGetProductsByBrandId(brand))
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) return <ContentNotFound description={error} />;
    if (parent === 'brand') {
        if (!productsByBrandId || productsByBrandId.length === 0) return <ContentNotFound title={t('Urunler.Urunler')} />;
    } else {
        if (!productsByBrandActivityArea || productsByBrandActivityArea.length === 0) return <ContentNotFound title={t('Urunler.Urunler')} />;
    }

    return (
        <>
            <BreadCrumbArea url='url(/images/breadcrumb.jpeg)' title={t('Urunler.Urunler')} />
            <section className="py-16 bg-[#F4F4F4]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-4 gap-4">
                        {(parent === "brand" ? productsByBrandId : productsByBrandActivityArea)?.map((item, index) => (
                            <ProductBox
                                key={index}
                                imageSrc={item.images[0].url}
                                imageAlt={item.images[0].id}
                                href={`/cozum-ortaklari/${brand}/${item.id}`}
                                productName={language === 'tr' ? item.title : item.enTitle}
                                dataAos={index % 2 === 0 ? 'fade-up' : 'fade-down'} dataAosDuration="2000" dataAosOffset="-200"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
