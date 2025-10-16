'use client'

import { useTranslation } from "react-i18next";

const DetailCard = ({ client, location, area, projectDate }) => {

    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-xl w-full">
            {/* Header */}
            <div className="bg-[var(--aksu-green)] text-white p-6 font-bold text-lg rounded-t-xl">
                {t('Projelerimiz.ProjeDetaylari')}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-sm text-gray-800 border border-[var(--aksu-green)] rounded-b-xl">
                <div className="border-b border-gray-300 pb-2 font-bold text-lg">
                    <span className="font-light">{t('Projelerimiz.Isveren')}:</span><br />
                    {client}
                </div>

                <div className="border-b border-gray-300 pb-2 font-bold text-lg">
                    <span className="font-light">{t('Projelerimiz.Yer')}:</span><br />
                    {location}
                </div>

                <div className="border-b border-gray-300 pb-2 font-bold text-lg">
                    <span className="font-light">{t('Projelerimiz.Alan')}:</span><br />
                    {area}
                </div>

                <div className="pt-2 font-bold text-lg">
                    <span className="font-light">{t('Projelerimiz.ProjeTarihi')}:</span><br />
                    {projectDate}
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
