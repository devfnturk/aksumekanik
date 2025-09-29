import { Earth } from "lucide-react";
import Link from "next/link";
import Cookies from 'js-cookie';
import i18n from "@/utils/i18n/config";
import { useEffect, useState } from "react";

export default function LngSwitch({ isScrolled }) {

    const [currentLang, setCurrentLang] = useState("");

    const changeLanguage = (lng) => {
        Cookies.set('i18next', lng);
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
    };

    useEffect(() => {
        const lngFromCookie = Cookies.get('i18next') || 'tr';
        setCurrentLang(lngFromCookie);
    }, []);

    return (
        <div className="langWrapper">
            <Earth id="vLangMobil" className="mx-auto" color={isScrolled ? 'black' : 'white'} />
            <ul id="lngList">
                <li className={currentLang === 'tr' ? 'active' : ''}>
                    <Link href="#" title="Türkçe" data-toggle="tooltip" onClick={() => changeLanguage('tr')}>
                        <span className="text-uppercase">tr</span>
                    </Link>
                </li>
                <li className={currentLang === 'en' ? 'active' : ''}>
                    <Link href="#" title="English" data-toggle="tooltip" onClick={() => changeLanguage('en')}>
                        <span className="text-uppercase">en</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
