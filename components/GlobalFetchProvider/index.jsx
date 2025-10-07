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
        console.log('Persist state:', persistState);
        console.log('Rehydrated:', rehydrated);
    }, [persistState]);

    const brandsLoading = useAppSelector(state => state.Brands.loading);
    const activitiesLoading = useAppSelector(state => state.Activities.loading);
    const projectsLoading = useAppSelector(state => state.Projects.loading);
    const referencesLoading = useAppSelector(state => state.References.loading);
    const fieldOfActivitiesLoading = useAppSelector(state => state.FieldOfActivities.loading);

    useEffect(() => {
        if (!rehydrated) return; // persist bitmeden fetch başlatma

        if (shouldFetch('Brands')) {
            dispatch(fetchGetBrands()).then(() => updateLastFetched('Brands'));
        }
        if (shouldFetch('Activities')) {
            dispatch(fetchGetActivities()).then(() => updateLastFetched('Activities'));
        }
        if (shouldFetch('Projects')) {
            dispatch(fetchGetProjects()).then(() => updateLastFetched('Projects'));
        }
        if (shouldFetch('References')) {
            dispatch(fetchGetReferences()).then(() => updateLastFetched('References'));
        }
        if (shouldFetch('Catalogues')) {
            dispatch(fetchGetCatalogues()).then(() => updateLastFetched('Catalogues'));
        }
        if (shouldFetch('FieldOfActivities')) {
            dispatch(fetchGetFieldOfActivities()).then(() => updateLastFetched('FieldOfActivities'));
        }
    }, [dispatch, rehydrated]);

    if (!rehydrated && ( brandsLoading || activitiesLoading || projectsLoading || referencesLoading || fieldOfActivitiesLoading)) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
}
