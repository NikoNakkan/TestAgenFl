import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import el from './locales/el.json'

void i18n.use(initReactI18next).init({
  resources: {
    en: { app: en.app, time: en.time, common: en.common },
    el: { app: el.app, time: el.time, common: el.common },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'app',
  interpolation: { escapeValue: false },
})

export default i18n
