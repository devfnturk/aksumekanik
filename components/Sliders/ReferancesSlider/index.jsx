'use client';
import useAosInit from "@/hooks/useAosInit";
import SliderWithLogo from "../SliderWithLogo";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";

export default function ReferancesSlider() {

    const { t } = useTranslation();
    const { data } = useAppSelector((state) => state.References);

    useAosInit();
    return (
        <section className="referance -top-52 mt-12 relative" data-aos="fade-up">
            <SliderWithLogo title={t('KatalogVeReferanslar.Referanslar')} data={data} />
            <Link href='#' className="mt-6 mx-auto" />
        </section>
    )
}
