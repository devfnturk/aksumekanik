'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const CustomBasicAksuTab = ({ tabs, defaultActiveTab, type }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);
    const router = useRouter();

    useEffect(() => {
        if (defaultActiveTab && defaultActiveTab !== activeTab) {
            setActiveTab(defaultActiveTab);
        }
    }, [defaultActiveTab]);

    return (
        <div className="tabs-container">
            {/* Tab Headers */}
            <div className={`${type === 'proje' ? 'container mx-auto' : 'overflow-x-auto whitespace-nowrap justify-between'} flex border-b border-gray-200 bg-white p-4 rounded-lg`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${type === 'proje' && 'flex-1/2'} px-6 py-2 font-medium hover:cursor-pointer text-black ${activeTab === tab.id
                            ? 'bg-[var(--aksu-green)] text-white rounded-lg'
                            : 'hover:text-gray-600'
                            }`}
                        onClick={() => {
                            setActiveTab(tab.id);
                            if (type === 'proje') {
                                router.replace(`?tab=${tab.id}`, { scroll: false });
                            }
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content mt-4 px-6">
                <div className="flex justify-center">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
};
