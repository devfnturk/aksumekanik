'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import '@/utils/i18n/config';
import i18n from '@/utils/i18n/config';

const I18nProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        i18n.init();
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <>{children}</>;
};

export default I18nProvider;
