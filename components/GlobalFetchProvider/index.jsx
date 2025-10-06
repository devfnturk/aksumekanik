'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchGetBrands } from '@/stores/BrandsSlice';
import { fetchGetActivities } from '@/stores/ActivitiesSlice';
import { fetchGetProjects } from '@/stores/ProjectsSlice';
import { fetchGetReferences } from '@/stores/ReferencesSlice';
import LoadingScreen from '@/components/LoadingScreen';
import { fetchGetCatalogues } from '@/stores/CataloguesSlice';
import { fetchGetFieldOfActivities } from '../../stores/FieldOfActivitiesSlice';

export default function GlobalFetchProvider({ children }) {
    const dispatch = useAppDispatch();

    const brands = useAppSelector(state => state.Brands.data);
    const activities = useAppSelector(state => state.Activities.data);
    const projects = useAppSelector(state => state.Projects.data);
    const references = useAppSelector(state => state.References.data);
    const catalogues = useAppSelector(state => state.Catalogues.data);
    const fieldOfActivities = useAppSelector(state => state.FieldOfActivities.data);

    const brandsLoading = useAppSelector(state => state.Brands.loading);
    const activitiesLoading = useAppSelector(state => state.Activities.loading);
    const projectsLoading = useAppSelector(state => state.Projects.loading);
    const referencesLoading = useAppSelector(state => state.References.loading);
    const fieldOfActivitiesLoading = useAppSelector(state => state.FieldOfActivities.loading);

    const brandsLastFetched = useAppSelector(state => state.Brands.lastFetched);
    const activitiesLastFetched = useAppSelector(state => state.Activities.lastFetched);
    const projectsLastFetched = useAppSelector(state => state.Projects.lastFetched);
    const referencesLastFetched = useAppSelector(state => state.References.lastFetched);
    const cataloguesLastFetched = useAppSelector(state => state.Catalogues.lastFetched);
    const fieldOfActivitiesLastFetched = useAppSelector(state => state.FieldOfActivities.lastFetched);

    useEffect(() => {
        const now = Date.now();
        const THIRTY_MINUTES = 30 * 60 * 1000;

        if (!brands?.length || now - brandsLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetBrands());
        }

        if (!activities?.length || now - activitiesLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetActivities());
        }

        if (!projects?.length || now - projectsLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetProjects());
        }

        if (!references?.length || now - referencesLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetReferences());
        }

        if (!catalogues?.length || now - cataloguesLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetCatalogues());
        }

        if (!fieldOfActivities?.length || now - fieldOfActivitiesLastFetched > THIRTY_MINUTES) {
            dispatch(fetchGetFieldOfActivities());
        }
    }, [
        dispatch,
        brands,
        activities,
        projects,
        references,
        catalogues,
        fieldOfActivities,
        brandsLastFetched,
        activitiesLastFetched,
        projectsLastFetched,
        referencesLastFetched,
        cataloguesLastFetched,
        fieldOfActivitiesLastFetched
    ]);
    if (brandsLoading || activitiesLoading || projectsLoading || referencesLoading || fieldOfActivitiesLoading) {
        return <LoadingScreen />;
    }
    return <>{children}</>;
} 
