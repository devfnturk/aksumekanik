'use client';

import { Provider } from 'react-redux';
import { store, persistor } from '@/stores/index';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from '@/components/LoadingScreen';
import GlobalFetchProvider from '../GlobalFetchProvider';

export default function ReduxProvider({ children }) {
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
