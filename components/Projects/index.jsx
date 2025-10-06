'use client';
import { useTranslation } from 'react-i18next';
import BreadCrumbArea from '../BreadcrumbArea';
import { AksuCards } from '../Cards';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { slugify } from '@/services/functions';
import { CustomBasicAksuTab } from '../Tabs/CustomBasicAksuTab';
import LoadingScreen from '@/components/LoadingScreen';
import { useSearchParams } from 'next/navigation';

const Projects = () => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.Projects);
    // const filtered = data.filter((item) => slugify(project.fieldOfActivity) === projects);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) {
        return <div style={{ color: 'red', textAlign: 'center', margin: '2rem' }}>{error}</div>;
    }
    if (!data || data.length === 0) {
        return <div style={{ color: 'gray', textAlign: 'center', margin: '2rem' }}>Proje bulunamadı.</div>;
    }

    const tabs = [
        {
            id: 'devamEdenProjeler',
            title: t('Projelerimiz.DevamEdenProjelerimiz'),
            content: <AksuCards data={data.filter(item => item.isCompleted === false)} type='projects' />
        },
        {
            id: 'tamamlananProjeler',
            title: t('Projelerimiz.TamamlananProjelerimiz'),
            content: <AksuCards data={data.filter(item => item.isCompleted)} type='projects' />
        }
    ];

    return (
        <>
            <BreadCrumbArea url='url(/images/breadcrumb.jpeg)' title={t('Header.Projelerimiz')} />
            <section className="pt-16 pb-16 bg-[#F4F4F4]" style={{ backgroundImage: "url('/images/projelerimiz-bg.png')" }}>
                <div className="px-4">
                    <CustomBasicAksuTab tabs={tabs} defaultActiveTab={(useSearchParams().get('tab') || 'devamEdenProjeler')} type='proje' />
                </div>
            </section>
        </>
    );
};

export default Projects;
