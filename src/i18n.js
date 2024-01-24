// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lugandaTranslations from './assets/translations/lg.json';
import englishTranslations from './assets/translations/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: englishTranslations.en },
    lg: { translation: lugandaTranslations.lg }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
