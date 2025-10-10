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

    const brands = useAppSelector(state => state.Brands.data);
    const activities = useAppSelector(state => state.Activities.data);
    const projects = useAppSelector(state => state.Projects.data);
    const references = useAppSelector(state => state.References.data);
    const catalogues = useAppSelector(state => state.Catalogues.data);
    const fieldOfActivities = useAppSelector(state => state.FieldOfActivities.data);

    useEffect(() => {
        if (!rehydrated) return;

        const fetchAll = async () => {
            const promises = [];

            if (shouldFetch('Brands') || !brands || brands.length === 0) {
                promises.push(dispatch(fetchGetBrands()).then(() => updateLastFetched('Brands')));
            }
            if (shouldFetch('Activities') || !activities || activities.length === 0) {
                promises.push(dispatch(fetchGetActivities()).then(() => updateLastFetched('Activities')));
            }
            if (shouldFetch('Projects') || !projects || projects.length === 0) {
                promises.push(dispatch(fetchGetProjects()).then(() => updateLastFetched('Projects')));
            }
            if (shouldFetch('References') || !references || references.length === 0) {
                promises.push(dispatch(fetchGetReferences()).then(() => updateLastFetched('References')));
            }
            if (shouldFetch('Catalogues') || !catalogues || catalogues.length === 0) {
                promises.push(dispatch(fetchGetCatalogues()).then(() => updateLastFetched('Catalogues')));
            }
            if (shouldFetch('FieldOfActivities') || !fieldOfActivities || fieldOfActivities.length === 0) {
                promises.push(dispatch(fetchGetFieldOfActivities()).then(() => updateLastFetched('FieldOfActivities')));
            }

            // Tüm fetch'leri beklemeden sayfa yüklensin
            Promise.all(promises).finally(() => {
                setInitialFetchDone(true);
            });

            // Sayfayı hemen render et
            setInitialFetchDone(true);
        };

        fetchAll();
    }, [dispatch, rehydrated]);

    if (!rehydrated ) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
}
