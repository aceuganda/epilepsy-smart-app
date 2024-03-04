// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lugandaTranslations from './assets/locales/ln/translation.json';
import englishTranslations from './assets/locales/en/translation.json';
import runyankoleTranslations from './assets/locales/rk/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: englishTranslations.en },
    lg: { translation: lugandaTranslations.lg },
    rk: { translation: runyankoleTranslations.rk }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
