import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './en/common';
import commonES from './es/common';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: { common: commonEN },
    es: { common: commonES },
  },
});

export default i18n;
