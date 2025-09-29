'use client';

import { useTranslation } from 'react-i18next';
import { CustomBasicAksuTab } from '../Tabs/CustomBasicAksuTab';
import { EtikKurallarimizContent, HakkimizdaContent, KaliteCevreISGContent, KatalogReferanslarContent } from './Contents';
import BreadCrumbArea from '../BreadcrumbArea';

const Corporate = () => {

    const { t } = useTranslation();

    const tabs = [
        {
            id: 'hakkimizda',
            title: `${t('Kurumsal.Hakkimizda')}`,
            content: <HakkimizdaContent />,
        },
        {
            id: 'kalite-cevre-isg',
            title: `${t('Kurumsal.KaliteCevreISG')}`,
            content: <KaliteCevreISGContent />,
        },
        {
            id: 'etik-kurallarimiz',
            title: `${t('Kurumsal.EtikKurallarimiz')}`,
            content: <EtikKurallarimizContent />,
        },
        // {
        //     id: 'insan-kaynaklari',
        //     title: `${t('Kurumsal.InsanKaynaklari')}`,
        //     content: <InsanKaynaklariContent />,
        // },
        {
            id: 'katalog-ve-referanslar',
            title: `${t('Kurumsal.Referanslar')}`,
            content: <KatalogReferanslarContent />,
        }
    ];

    return (
        <>
            <BreadCrumbArea url='url(/images/mekanik-uygulamalar-banner.png)' title={t('Header.Kurumsal')} />
            <section className="pt-16 pb-16 bg-[#F4F4F4]">
                <div className="container mx-auto px-4">
                    <CustomBasicAksuTab tabs={tabs} defaultActiveTab="hakkimizda" type='kurumsal' />
                </div>
            </section>
        </>
    );
};

export default Corporate;
