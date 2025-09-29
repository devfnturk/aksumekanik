'use client';
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function ContentNotFound({
    title,
    description,
    backHref = "/",
    backText,
}) {
    const { t, i18n } = useTranslation();
    const language = i18n.language;

    const computedTitle = title ?? (language === 'tr' ? 'İçerik bulunamadı' : 'Content not found');
    const computedDesc = description ?? (language === 'tr'
        ? 'Aradığınız içerik bulunamadı ya da kaldırılmış olabilir.'
        : 'The content you are looking for could not be found or may have been removed.');
    const computedBackText = backText ?? (language === 'tr' ? 'Ana sayfaya dön' : 'Go to homepage');

    return (
        <section className="min-h-screen bg-[#F4F4F4] flex items-center relative">
            <div className="absolute inset-x-0 top-0 h-24 md:h-28 bg-gradient-to-b from-black/50 via-black/25 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--aksu-green)] mb-4">{computedTitle}</h1>
                        <p className="text-base md:text-lg text-gray-500 mb-8">{computedDesc}</p>
                        <Link
                            href={backHref}
                            className="inline-block px-6 py-3 bg-[var(--aksu-green)] text-white rounded hover:opacity-90 transition"
                        >
                            {computedBackText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}


