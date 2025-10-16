'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AllMenu from "./AllMenu";
import { usePathname } from "next/navigation";
import LngSwitch from "../LngSwitch";
import { useTranslation } from 'react-i18next';
import { useAppSelector } from "@/hooks/redux";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const activities = useAppSelector(state => state.Activities.data);
    const brands = useAppSelector(state => state.Brands.data);
    const fieldOfActivities = useAppSelector(state => state.FieldOfActivities.data);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 z-[100] ${scrolled && 'bg-white'}`}>
            <nav className="flex items-center min-h-20">
                <Link className="flex-1 flex justify-start lg:justify-center" href='/'>
                    <Image width={250} height={40} src='/images/logo.png' alt="logo" />
                </Link>
                <ul className={`navbar flex-5 hidden lg:flex justify-around ${scrolled ? 'text-black' : 'text-white'}`}>
                    <li className={`nav-item relative ${pathname === '/kurumsal' ? 'active' : ''}`}>
                        <Link className="before:w-full" href='/kurumsal'>{t('Header.Kurumsal')}</Link>
                    </li>
                    <li className={`nav-item relative ${pathname === '/faaliyet-alanlari' ? 'active' : ''}`}>
                        <Link href='/faaliyet-alanlari'>{t('Header.FaaliyetAlanlari')}</Link>
                        <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" data-accordion-icon="true" width="14" height="7" aria-hidden="true" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.86324 6.49876L13.227 1.50839C13.316 1.42643 13.3866 1.32891 13.4348 1.22147C13.483 1.11403 13.5078 0.998784 13.5078 0.88239C13.5078 0.765996 13.483 0.650754 13.4348 0.543312C13.3866 0.43587 13.316 0.338354 13.227 0.256389C13.0491 0.0921733 12.8085 -2.89081e-08 12.5577 -3.9276e-08C12.3069 -4.96439e-08 12.0663 0.0921733 11.8884 0.256389L7.14174 4.62076L2.44251 0.256389C2.26464 0.0921729 2.02403 -4.74728e-07 1.77323 -4.85096e-07C1.52243 -4.95464e-07 1.28182 0.0921729 1.10395 0.256389C1.01425 0.338046 0.942884 0.435425 0.893996 0.542881C0.845109 0.650337 0.819668 0.765736 0.819147 0.88239C0.819668 0.999044 0.845109 1.11444 0.893996 1.2219C0.942884 1.32935 1.01425 1.42673 1.10395 1.50839L6.46771 6.49876C6.55661 6.58826 6.6645 6.65968 6.78459 6.70854C6.90468 6.75739 7.03437 6.78261 7.16547 6.78261C7.29658 6.78261 7.42626 6.75739 7.54635 6.70854C7.66644 6.65968 7.77434 6.58826 7.86324 6.49876Z" fill={scrolled ? 'black' : 'white'}>
                            </path>
                        </svg>
                        <ul className="submenu hidden absolute text-white max-h-64 overflow-y-auto header-item-scrollbar">
                            {fieldOfActivities?.filter((item) => item.isActive).sort((a, b) => a.order - b.order).map((item, index) => (
                                <li className="submenu-item" key={index}>
                                    <Link href={`/faaliyet-alanlari/#${item.id}`}>{language === 'tr' ? item.title : item.enTitle}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={`nav-item relative ${pathname === '/projelerimiz' ? 'active' : ''}`}>
                        <Link className="before:w-full" href='/projelerimiz'>{t('Header.Projelerimiz')}</Link>
                        <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" data-accordion-icon="true" width="14" height="7" aria-hidden="true" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.86324 6.49876L13.227 1.50839C13.316 1.42643 13.3866 1.32891 13.4348 1.22147C13.483 1.11403 13.5078 0.998784 13.5078 0.88239C13.5078 0.765996 13.483 0.650754 13.4348 0.543312C13.3866 0.43587 13.316 0.338354 13.227 0.256389C13.0491 0.0921733 12.8085 -2.89081e-08 12.5577 -3.9276e-08C12.3069 -4.96439e-08 12.0663 0.0921733 11.8884 0.256389L7.14174 4.62076L2.44251 0.256389C2.26464 0.0921729 2.02403 -4.74728e-07 1.77323 -4.85096e-07C1.52243 -4.95464e-07 1.28182 0.0921729 1.10395 0.256389C1.01425 0.338046 0.942884 0.435425 0.893996 0.542881C0.845109 0.650337 0.819668 0.765736 0.819147 0.88239C0.819668 0.999044 0.845109 1.11444 0.893996 1.2219C0.942884 1.32935 1.01425 1.42673 1.10395 1.50839L6.46771 6.49876C6.55661 6.58826 6.6645 6.65968 6.78459 6.70854C6.90468 6.75739 7.03437 6.78261 7.16547 6.78261C7.29658 6.78261 7.42626 6.75739 7.54635 6.70854C7.66644 6.65968 7.77434 6.58826 7.86324 6.49876Z" fill={scrolled ? 'black' : 'white'}>
                            </path>
                        </svg>
                        <ul className="submenu hidden absolute text-white">
                            <li className="submenu-item">
                                <Link href='/projelerimiz?tab=devamEdenProjeler'>{t('Projelerimiz.DevamEdenProjelerimiz')}</Link>
                            </li>
                            <li className="submenu-item">
                                <Link href='/projelerimiz?tab=tamamlananProjeler'>{t('Projelerimiz.TamamlananProjelerimiz')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item relative ${pathname === '/cozum-ortaklari' ? 'active' : ''}`}>
                        <Link href='/cozum-ortaklari'>{t('Header.Markalar')}</Link>
                        <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" data-accordion-icon="true" width="14" height="7" aria-hidden="true" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.86324 6.49876L13.227 1.50839C13.316 1.42643 13.3866 1.32891 13.4348 1.22147C13.483 1.11403 13.5078 0.998784 13.5078 0.88239C13.5078 0.765996 13.483 0.650754 13.4348 0.543312C13.3866 0.43587 13.316 0.338354 13.227 0.256389C13.0491 0.0921733 12.8085 -2.89081e-08 12.5577 -3.9276e-08C12.3069 -4.96439e-08 12.0663 0.0921733 11.8884 0.256389L7.14174 4.62076L2.44251 0.256389C2.26464 0.0921729 2.02403 -4.74728e-07 1.77323 -4.85096e-07C1.52243 -4.95464e-07 1.28182 0.0921729 1.10395 0.256389C1.01425 0.338046 0.942884 0.435425 0.893996 0.542881C0.845109 0.650337 0.819668 0.765736 0.819147 0.88239C0.819668 0.999044 0.845109 1.11444 0.893996 1.2219C0.942884 1.32935 1.01425 1.42673 1.10395 1.50839L6.46771 6.49876C6.55661 6.58826 6.6645 6.65968 6.78459 6.70854C6.90468 6.75739 7.03437 6.78261 7.16547 6.78261C7.29658 6.78261 7.42626 6.75739 7.54635 6.70854C7.66644 6.65968 7.77434 6.58826 7.86324 6.49876Z" fill={scrolled ? 'black' : 'white'}>
                            </path>
                        </svg>
                        <ul className="submenu hidden absolute text-white max-h-64 overflow-y-auto header-item-scrollbar">
                            {brands?.filter((item) => item.isActive).map((item, index) => (
                                <li className="submenu-item" key={index}>
                                    <Link href={`/cozum-ortaklari/#${item.id}`}>{language === 'tr' ? item.title : item.enTitle}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={`nav-item relative ${pathname === '/iletisim' ? 'active' : ''}`}>
                        <Link href='/iletisim'>{t('Header.Iletisim')}</Link>
                    </li>
                    <li className={`nav-item relative ${pathname === '/kataloglar' ? 'active' : ''}`}>
                        <Link href='/kataloglar'>{t('Header.Kataloglar')}</Link>
                        {/* <svg className="absolute right-0 top-1/2 transform -translate-y-1/2" data-accordion-icon="true" width="14" height="7" aria-hidden="true" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.86324 6.49876L13.227 1.50839C13.316 1.42643 13.3866 1.32891 13.4348 1.22147C13.483 1.11403 13.5078 0.998784 13.5078 0.88239C13.5078 0.765996 13.483 0.650754 13.4348 0.543312C13.3866 0.43587 13.316 0.338354 13.227 0.256389C13.0491 0.0921733 12.8085 -2.89081e-08 12.5577 -3.9276e-08C12.3069 -4.96439e-08 12.0663 0.0921733 11.8884 0.256389L7.14174 4.62076L2.44251 0.256389C2.26464 0.0921729 2.02403 -4.74728e-07 1.77323 -4.85096e-07C1.52243 -4.95464e-07 1.28182 0.0921729 1.10395 0.256389C1.01425 0.338046 0.942884 0.435425 0.893996 0.542881C0.845109 0.650337 0.819668 0.765736 0.819147 0.88239C0.819668 0.999044 0.845109 1.11444 0.893996 1.2219C0.942884 1.32935 1.01425 1.42673 1.10395 1.50839L6.46771 6.49876C6.55661 6.58826 6.6645 6.65968 6.78459 6.70854C6.90468 6.75739 7.03437 6.78261 7.16547 6.78261C7.29658 6.78261 7.42626 6.75739 7.54635 6.70854C7.66644 6.65968 7.77434 6.58826 7.86324 6.49876Z" fill={scrolled ? 'black' : 'white'}>
                            </path>
                        </svg>
                        <ul className="submenu hidden absolute text-white">
                            <li className="submenu-item">
                                <Link href='/kataloglar'>{t('KatalogVeReferanslar.Kataloglar')}</Link>
                            </li>
                            <li className="submenu-item">
                                <Link href='/referanslar'>{t('KatalogVeReferanslar.Referanslar')}</Link>
                            </li>
                        </ul> */}
                    </li>
                </ul>
                <LngSwitch isScrolled={scrolled} />
                <AllMenu isScrolled={scrolled} />
            </nav>
        </header>
    )
}
