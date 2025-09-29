'use client';
import useAosInit from '@/hooks/useAosInit';
import { useTranslation } from 'react-i18next';

export default function CorporateText() {
    const { t } = useTranslation();
    useAosInit();
    return (
        <section className="corporate -top-52 text-white relative" data-aos="fade-up" id="corporate">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="lg:w-1/3 text-center">
                        <h4 className="font-thin text-2xl md:text-3xl mb-4 tracking-wide">Aksu Mekanik</h4>
                        <p className="text-center text-sm font-thin leading-6">
                            <span>
                                {t('Anasayfa.Ozet')}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
