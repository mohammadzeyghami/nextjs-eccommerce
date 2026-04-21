import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import faCommon from '../locales/fa/common.json';
import enCommon from '../locales/en/common.json';

const resources = {
  en: { common: enCommon },
  fa: { common: faCommon }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // default language
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
