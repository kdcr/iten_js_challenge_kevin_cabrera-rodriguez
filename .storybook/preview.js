import '../src/index.css';
import i18n from '../src/i18n';

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    es: 'Español',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
