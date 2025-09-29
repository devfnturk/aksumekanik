import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
    .use(resourcesToBackend((language, namespace) =>
        import(`@/public/locales/${language}/${namespace}.json`)
    ))
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        supportedLngs: ['tr', 'en'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'navigator'],
            caches: ['cookie'],
        },
    });

export default i18n;
