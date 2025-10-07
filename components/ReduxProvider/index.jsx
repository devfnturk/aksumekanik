'use client';

import { Provider } from 'react-redux';
import { store } from '@/stores/index';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from '@/components/LoadingScreen';
import GlobalFetchProvider from '../GlobalFetchProvider';
import { persistStore } from 'redux-persist';
import { useEffect, useState } from 'react';

export default function ReduxProvider({ children }) {

    const [persistor, setPersistor] = useState(null);

    useEffect(() => {
        const persistorInstance = persistStore(store);
        setPersistor(persistorInstance);
    }, []);

    if (!persistor) {
        return <LoadingScreen />;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
                <GlobalFetchProvider>
                    {children}
                </GlobalFetchProvider>
            </PersistGate>
        </Provider>
    );
}
