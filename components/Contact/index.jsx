'use client';

import ContactForm from '@/components/Forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect } from 'react';
import { InfoBox } from '@/components/Boxes';
import GoogleMaps from '@/components/GoogleMaps';
import BreadCrumbArea from '@/components/BreadcrumbArea';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchGetCommunications } from '@/stores/CommunicationsSlice';
import LoadingScreen from '@/components/LoadingScreen';
import ContentNotFound from '../ContentNotFound';

export default function Contact() {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.Communications);

    useEffect(() => {
        dispatch(fetchGetCommunications())
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) return <ContentNotFound description={error} />;
    if (!data || !data[0]) return <ContentNotFound />;

    return (
        <>
            <BreadCrumbArea url='url(/images/breadcrumb.jpeg)' title={t('Header.Iletisim')} />
            <section
                className="pt-[80px] pb-[100px]"
                style={{ backgroundImage: "url('/images/contact-us-map.jpg')" }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">
                        {/* İletişim Formu */}
                        <div className="w-full lg:w-7/12 p-0 m-0">
                            <ContactForm />
                        </div>
                        {/* İletişim Bilgileri */}
                        <div className="w-full lg:w-5/12 p-4 text-white bg-[var(--aksu-blue)] clip-angled" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="-800">
                            <div className="mb-5 text-center font-bold">
                                Aksu Mekanik
                            </div>

                            <InfoBox
                                title={t('Iletisim.IletisimBilgileri.Adres')}
                                content={
                                    <>
                                        <b>{t('Iletisim.IletisimBilgileri.MerkezOfis')}</b>
                                        <br />
                                        <span className='text-sm md:text-base'>{data[0].address}</span>
                                    </>
                                }
                                icon={<MapPin />}
                            />

                            <InfoBox
                                title={t('Iletisim.IletisimBilgileri.IletisimNumaralari')}
                                content={
                                    <>
                                        <span className='text-sm md:text-base'>{t('Iletisim.IletisimBilgileri.Ofis')}: <a href="tel:+902164994959">{data[0].officePhone}</a></span>
                                        <br />
                                        <span className='text-sm md:text-base'>GSM 1: {data[0].phoneNumber1}</span>
                                        <br />
                                        <span className='text-sm md:text-base'>GSM 2 :{data[0].phoneNumber2}</span>
                                    </>
                                }
                                icon={<Phone />}
                            />

                            <InfoBox
                                title={t('Iletisim.IletisimBilgileri.EmailAdresleri')}
                                content={
                                    <>
                                        <div className="mb-2 text-sm md:text-base">
                                            <a href="mailto:info@aksumekanik.com">{data[0].email1}</a>
                                        </div>
                                        <div className="mb-2 text-sm md:text-base">
                                            <a href="mailto:muhasebe@aksumekanik.com">{data[0].email2}</a>
                                        </div>
                                    </>
                                }
                                icon={<Mail />}
                            />
                        </div>
                    </div>
                </div>
                {/* Harita */}
                <GoogleMaps
                    title='aksu mekanik gebze'
                    ariaLabel='aksu mekanik gebze'
                    url='https://maps.google.com/maps?q=aksu%20mekanik%20gebze&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near'
                />
            </section>
        </>
    );
}
