'use client';
import { useEffect, useState, useTransition } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks/redux";

export default function AllMenu({ isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const activities = useAppSelector(state => state.Activities.data);
    const brands = useAppSelector(state => state.Brands.data);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Menü Açma Butonu */}
            <button
                onClick={() => setIsOpen(true)}
                className="mr-4 hover:cursor-pointer"
            >
                <Menu stroke={isScrolled ? 'black' : 'white'} />
            </button>

            {/* Offcanv� */}
            <div
                className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[100vh] h-full opacity-100" : "max-h-0 opacity-0"}`}
            >
                {/* Menü İçeriği */}
                <div className="container mx-auto">
                    <div className="flex mt-4 relative">
                        <Link className="flex-1/2" href='/'>
                            <Image width={250} height={40} src='/images/logo.png' alt="logo" />
                        </Link>
                        {/* Kapatma Butonu */}
                        <div className="flex-1/2">
                            <button onClick={() => setIsOpen(false)} className="float-end hover:cursor-pointer">
                                <X size={24} />
                            </button>
                        </div>
                        <hr className="absolute -bottom-2.5 h-0.5 text-gray-300" style={{ left: 'calc((-100% - 1280px) / 2)', right: 'calc((-100% - 1280px) / 2)' }} />
                    </div>
                    <nav className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-5 px-4 lg:px-0 mt-10">
                        <div>
                            <Link href='/kurumsal' className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.Kurumsal')}</Link>
                        </div>
                        <div>
                            <Link href='/faaliyet-alanlari' className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.FaaliyetAlanlari')}</Link>
                            <ul className="space-y-2">
                                {activities?.filter((item) => item.isActive).sort((a, b) => a.order - b.order).map((item, index) => (
                                    <li key={index}><Link href={`/faaliyet-alanlari/#${item.id}`}>{language === 'tr' ? item.title : item.enTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Link href='/projelerimiz' className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.Projelerimiz')}</Link>
                            <ul className="space-y-2">
                                <li><Link href='/projelerimiz?tab=devamEdenProjeler'>{t('Projelerimiz.DevamEdenProjelerimiz')}</Link></li>
                                <li><Link href='/projelerimiz?tab=tamamlananProjeler'>{t('Projelerimiz.TamamlananProjelerimiz')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <Link href={'/markalar'} className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.Markalar')}</Link>
                            <ul className="space-y-2">
                                {/* <li><Link href='#'>POİNT</Link></li>
                                <li><Link href='#'>AİRCOL</Link></li>
                                <li><Link href='#'>ISIDEM</Link></li>
                                <li><Link href='#'>BLAUBERG</Link></li> */}
                                {brands?.filter((item) => item.isActive).map((item, index) => (
                                    <li key={index}><Link href={`/markalar/#${item.id}`}>{language === 'tr' ? item.title : item.enTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Link href={'/iletisim'} className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.Iletisim')}</Link>
                        </div>
                        <div>
                            <Link href={'/kataloglar'} className="text-base lg:text-lg font-bold text-[var(--aksu-green)]">{t('Header.Kataloglar')}</Link>
                            {/* <ul className="space-y-2">
                                <li><Link href='/kataloglar'>{t('KatalogVeReferanslar.Kataloglar')}</Link></li>
                                <li><Link href='/referanslar'>{t('KatalogVeReferanslar.Referanslar')}</Link></li>
                            </ul> */}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Arka Plan Kapatma */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                />
            )}
        </>
    );
}
