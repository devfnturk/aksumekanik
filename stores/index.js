import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bannerReducer from './BannerSlice';
import referencesReducer from './ReferencesSlice';
import acitiviesReducer from './ActivitiesSlice';
import communicationsReducer from './CommunicationsSlice';
import dataReducer from './DataSlice';
import projectsReducer from './ProjectsSlice';
import projectFieldsReducer from './ProjectFields';
import brandsReducer from './BrandsSlice';
import activityAreasByBrandReducer from './ActivityAreasByBrand';
import brandsByActivityAreaReducer from './BrandsByActivityArea';
import productsReducer from './Products';
import cataloguesReducer from './CataloguesSlice';
import fieldOfActivitiesReducer from './FieldOfActivitiesSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'Brands',
        'Activities',
        'Projects',
        'References',
        'Catalogues',
        'FieldOfActivities'
    ],
};

const rootReducer = combineReducers({
    Banners: bannerReducer,
    References: referencesReducer,
    Catalogues: cataloguesReducer,
    Activities: acitiviesReducer,
    Communications: communicationsReducer,
    Data: dataReducer,
    Projects: projectsReducer,
    ProjectFields: projectFieldsReducer,
    Brands: brandsReducer,
    ActivityAreasByBrand: activityAreasByBrandReducer,
    BrandsByActivityArea: brandsByActivityAreaReducer,
    Products: productsReducer,
    FieldOfActivities: fieldOfActivitiesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

