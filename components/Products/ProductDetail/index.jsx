'use client';
import BreadCrumbArea from "@/components/BreadcrumbArea";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { decodeImage } from "@/services/functions";
import { fetchGetProductDetail } from "@/stores/Products";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoadingScreen from '@/components/LoadingScreen';
import { CataloguesBox } from "@/components/Boxes";

const ProductDetail = ({ productId }) => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const dispatch = useAppDispatch();
    const { productDetail, loading, error } = useAppSelector((state) => state.Products);

    useEffect(() => {
        dispatch(fetchGetProductDetail(productId));
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) {
        return <div style={{ color: 'red', textAlign: 'center', margin: '2rem' }}>{error}</div>;
    }
    if (!productDetail) {
        return <div style={{ color: 'gray', textAlign: 'center', margin: '2rem' }}>Ürün detayı bulunamadı.</div>;
    }

    return (
        <>
            {!loading && productDetail ? (
                <>
                    <BreadCrumbArea url='url(/images/mekanik-uygulamalar-banner.png)' title={productDetail ? (language === 'tr' ? productDetail.title : productDetail.enTitle) : ''} />
                    <section className="py-16 bg-[#F4F4F4]">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 mx-auto md:mx-0 md:col-span-1 order-2 md:order-1" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="-200">
                                    <div>{language === 'tr' ? productDetail?.description : productDetail?.enDescription}</div>
                                    {productDetail.certificates.length > 0 && (
                                        <div className="my-6 flex gap-3">
                                            {productDetail.certificates.map((item, index) => (
                                                <Image key={index} src={decodeImage(item.imageData)} width={50} height={50} alt={item.name} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-2 mx-auto md:mx-0 md:col-span-1 order-1 md:order-2" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="-200">
                                    <Image className="float-end" src={decodeImage(productDetail?.images[0].imageData)} width={200} height={200} alt={productDetail.images[0].name} />
                                </div>
                                {
                                    productDetail.catalogLink && (
                                        <div className="col-span-2 md:col-span-1 mx-auto md:mx-0 order-3">
                                            <div className="w-full md:w-1/3">
                                                <CataloguesBox link={productDetail.catalogLink} imgSrc='/images/aksu-katalog.png' imgAlt='katalog' buttonText={language === 'tr' ? 'Katalog' : 'Catalogue'} dataAos="fade-up" dataAosDuration="2000" dataAosOffset="-800" />
                                            </div>
                                        </div>
                                    )
                                }
                                {productDetail.hasTable && (
                                    <div className="col-span-2 order-4" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-200">
                                        <img className="object-cover" src={decodeImage(productDetail.tableImage.imageData)} alt={productDetail.tableImage.name} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <div className='flex justify-center items-center  md:min-h-96'>
                    <Image src='/images/loadingAnimation.gif' alt='Yükleniyor...' width={200} height={200} />
                </div >
            )}
        </>
    );
}

export default ProductDetail;
