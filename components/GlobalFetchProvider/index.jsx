'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchGetBrands } from '@/stores/BrandsSlice';
import { fetchGetActivities } from '@/stores/ActivitiesSlice';
import { fetchGetProjects } from '@/stores/ProjectsSlice';
import { fetchGetReferences } from '@/stores/ReferencesSlice';
import { fetchGetCatalogues } from '@/stores/CataloguesSlice';
import { fetchGetFieldOfActivities } from '../../stores/FieldOfActivitiesSlice';
import LoadingScreen from '@/components/LoadingScreen';

const THIRTY_MINUTES = 30 * 60 * 1000;

function shouldFetch(key) {
    const lastFetched = Number(localStorage.getItem(key)) || 0;
    return Date.now() - lastFetched > THIRTY_MINUTES;
}

function updateLastFetched(key) {
    localStorage.setItem(key, Date.now().toString());
}

export default function GlobalFetchProvider({ children }) {
    const dispatch = useAppDispatch();
    const [rehydrated, setRehydrated] = useState(false);

    // redux persist rehydration kontrolü
    const persistState = useAppSelector(state => state._persist);
    useEffect(() => {
        if (persistState?.rehydrated) {
            setRehydrated(true);
        }
    }, [persistState]);

    const brandsLoading = useAppSelector(state => state.Brands.loading);
    const activitiesLoading = useAppSelector(state => state.Activities.loading);
    const projectsLoading = useAppSelector(state => state.Projects.loading);
    const referencesLoading = useAppSelector(state => state.References.loading);
    const fieldOfActivitiesLoading = useAppSelector(state => state.FieldOfActivities.loading);

    const brands = useAppSelector(state => state.Brands.data);
    const activities = useAppSelector(state => state.Activities.data);
    const projects = useAppSelector(state => state.Projects.data);
    const references = useAppSelector(state => state.References.data);
    const catalogues = useAppSelector(state => state.Catalogues.data);
    const fieldOfActivities = useAppSelector(state => state.FieldOfActivities.data);

    useEffect(() => {
        if (!rehydrated) return; // persist bitmeden fetch başlatma

        if (shouldFetch('Brands') || !brands || brands.length === 0) {
            dispatch(fetchGetBrands()).then(() => updateLastFetched('Brands'));
        }
        if (shouldFetch('Activities') || !activities || activities.length === 0) {
            dispatch(fetchGetActivities()).then(() => updateLastFetched('Activities'));
        }
        if (shouldFetch('Projects') || !projects || projects.length === 0) {
            dispatch(fetchGetProjects()).then(() => updateLastFetched('Projects'));
        }
        if (shouldFetch('References') || !references || references.length === 0) {
            dispatch(fetchGetReferences()).then(() => updateLastFetched('References'));
        }
        if (shouldFetch('Catalogues') || !catalogues || catalogues.length === 0) {
            dispatch(fetchGetCatalogues()).then(() => updateLastFetched('Catalogues'));
        }
        if (shouldFetch('FieldOfActivities') || !fieldOfActivities || fieldOfActivities.length === 0) {
            dispatch(fetchGetFieldOfActivities()).then(() => updateLastFetched('FieldOfActivities'));
        }
    }, [dispatch, rehydrated]);

    if (!rehydrated && (brandsLoading || activitiesLoading || projectsLoading || referencesLoading || fieldOfActivitiesLoading)) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
}
