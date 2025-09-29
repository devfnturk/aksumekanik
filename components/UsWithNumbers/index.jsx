'use client';
import { usWithNumbers } from "@/utils/UsWithNumbers";
import { useCallback, useEffect } from "react";
import Odometer from "../Odometer";
import useAosInit from "@/hooks/useAosInit";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchGetData } from "@/stores/DataSlice";
import { useTranslation } from "react-i18next";
import LoadingScreen from '@/components/LoadingScreen';
import ContentNotFound from "@/components/ContentNotFound";

export default function UsWithNumbers() {

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const language = i18n.language;
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.Data);

    const handleMouseClick = useCallback(() => {
        window.scrollTo({ top: window.scrollY + 800, behavior: "smooth" });
    }, []);

    useEffect(() => {
        dispatch(fetchGetData());
    }, []);

    useAosInit();

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) return <ContentNotFound description={error} />;
    if (!data || data.length === 0) return <ContentNotFound />;

    return (
        <div className="container mx-auto relative round-position round-area">
            <div className="flex flex-wrap justify-end text-white">
                <div className="w-full lg:w-11/12 text-right border-b pb-4 border-[var(--aksu-green)]">
                    <h3 className="font-thin text-2xl md:text-3xl">{t('Banner.Sayilarla')}</h3>
                    <h3 className="font-semibold text-2xl md:text-3xl">
                        Aksu <br /> Mekanik
                    </h3>
                </div>
                <div className="w-full lg:w-1/12 border-b lg:pb-4 border-[var(--aksu-green)] relative">
                    <div id="mouse" className="js-mouse" onClick={handleMouseClick}>
                        <div className="scrollWheel"></div>
                    </div>
                </div>
                {data.slice(0, -1).filter((item) => item.isActive).map((item, index) => (
                    <div
                        key={index}
                        className="w-1/2 md:w-1/3 lg:w-1/6 mt-12 lg:mt-0 text-center relative"
                    >
                        <Odometer className="font-semibold text-2xl md:text-5xl flex justify-center odometer relative" value={item.count} plus={true} />
                        {/* <label className="block font-bold text-xl md:text-4xl absolute">+</label> */}
                        <span className="text-sm uppercase block text-[var(--aksu-green)]">{language === 'tr' ? item.title : item.enTitle}</span>
                    </div>
                ))}
                <div
                    className="w-full lg:w-6/12 text-right mt-12"
                    data-aos="fade-left"
                >
                    <h5 className="text-sm uppercase mb-2">{data.length > 0 ? language === 'tr' ? `${data[data.length - 1].title}:` : `${data[data.length - 1].enTitle}:` : ""}</h5>
                    <Odometer className="font-bold text-5xl md:text-7xl border-b-2 border-[var(--aksu-gray)] text-[var(--aksu-green)] inline" value={data.length > 0 ? data[data.length - 1].count : 0} />
                </div>
                <div className="w-full lg:w-1/12" />
            </div>
        </div>
    )
}
