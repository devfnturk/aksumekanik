'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchGetBrands } from '@/stores/BrandsSlice';
import { fetchGetActivities } from '@/stores/ActivitiesSlice';
import { fetchGetProjects } from '@/stores/ProjectsSlice';
import { fetchGetReferences } from '@/stores/ReferencesSlice';
import LoadingScreen from '@/components/LoadingScreen';
import { fetchGetCatalogues } from '@/stores/CataloguesSlice';

export default function GlobalFetchProvider({ children }) {
  const dispatch = useAppDispatch();
  const brandsLoading = useAppSelector(state => state.Brands.loading);
  const activitiesLoading = useAppSelector(state => state.Activities.loading);
  const projectsLoading = useAppSelector(state => state.Projects.loading);
  const referencesLoading = useAppSelector(state => state.References.loading);
  useEffect(() => {
    dispatch(fetchGetBrands());
    dispatch(fetchGetActivities());
    dispatch(fetchGetProjects());
    dispatch(fetchGetReferences());
    dispatch(fetchGetCatalogues());
  }, [dispatch]);
  if (brandsLoading || activitiesLoading || projectsLoading || referencesLoading) {
    return <LoadingScreen />;
  }
  return <>{children}</>;
} 
