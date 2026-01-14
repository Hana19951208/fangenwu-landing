import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation';
import zh from './zh/translation';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            zh: { translation: zh }
        },
        lng: 'zh', // Force default to Chinese
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already safes from xss
        }
    });

export default i18n;
