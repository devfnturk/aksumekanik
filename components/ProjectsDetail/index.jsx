'use client';
import { useTranslation } from 'react-i18next';
import BreadCrumbArea from '../BreadcrumbArea';
import { AksuCards } from '../Cards';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { slugify } from '@/services/functions';
import { CustomBasicAksuTab } from '../Tabs/CustomBasicAksuTab';

const ProjectsDetail = ({ projects, projectDetail }) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.Projects);
    const filtered = data.filter((item) => slugify(project.fieldOfActivity) === projects);

    const tabs = [
        {
            id: 'devamEdenProjeler',
            title: t('Projelerimiz.DevamEdenProjelerimiz'),
            content: <AksuCards data={filtered.filter(item => item.isCompleted ===false)} type='projects' />
        },
        {
            id: 'tamamlananProjeler',
            title: t('Projelerimiz.TamamlananProjelerimiz'),
            content: <AksuCards data={filtered.filter(item => item.isCompleted)} type='projects' />
        }
    ];

    return (
        <>
            <BreadCrumbArea url='url(/images/breadcrumb.jpeg)' title={t('Header.Projelerimiz')} />
            <section className="pt-16 pb-16 bg-[#F4F4F4]" style={{ backgroundImage: "url('/images/projelerimiz-bg.png')" }}>
                <div className="px-4">
                    <CustomBasicAksuTab tabs={tabs} defaultActiveTab="devamEdenProjeler" type='proje' />
                </div>
            </section>
        </>
    );
};

export default ProjectsDetail;
