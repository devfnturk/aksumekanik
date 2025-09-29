'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomAksuTab({ tabs, children, language }) {
    const [activeTab, setActiveTab] = useState(tabs[0].title); // İlk sekmeyi aktif olarak başlat

    const handleTabClick = (tabLabel) => {
        setActiveTab(tabLabel);
    };

    return (
        <div className="w-full min-h-[750px] sm:min-h-[500px] md:min-h-[900px]">
            {/* Sekme başlıkları */}
            <div className="flex justify-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.title}
                        onClick={() => handleTabClick(tab.title)}
                        className={`py-2 px-4 text-4xl font-semibold hover:cursor-pointer text-gray-500 hover:text-[var(--aksu-green)] focus:outline-none ${activeTab === tab.title ? '!text-[var(--aksu-green)]' : ''
                            }`}
                    >
                        <Image className={`${activeTab === tab.title && 'active'}`} src={language === 'tr' ? tab.title : tab.enTitle} alt="tab-title" width={400} height={300} />
                    </button>
                ))}
            </div>

            {/* Sekme içeriği */}
            <div className="mt-4">
                {tabs.map(
                    (tab) =>
                        tab.title === activeTab && (
                            <div key={tab.title} className="p-4">
                                {children(activeTab)}
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
