import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';
import { I18nManager } from 'react-native';
import {en, ar, fr} from './translations';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  // lng:'en',
  lng:I18nManager.isRTL?'ar':'en' ,

  compatibilityJSON: 'v3',
  //language to use if translations in user language are not available
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
