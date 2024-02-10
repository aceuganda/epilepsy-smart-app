// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lugandaTranslations from './assets/locales/ln/translation.json';
import englishTranslations from './assets/locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: englishTranslations.en },
    lg: { translation: lugandaTranslations.lg }
  },
  lng: 'lg', // Default language
  fallbackLng: 'lg', // Fallback language
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
