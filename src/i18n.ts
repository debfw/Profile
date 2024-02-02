import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing the translation files
import english from './locales/en/translation.json';
import french from './locales/fr/translation.json';
import chinese from './locales/ch/translation.json';

// the translations
const resources = {
  en: {
    translation: english
  },
  fr: {
    translation: french
  },
  ch: {
    translation: chinese
  }
};

i18n
  .use(initReactI18next) // connect with React
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // when specified language translations are not available, fall back to English
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
