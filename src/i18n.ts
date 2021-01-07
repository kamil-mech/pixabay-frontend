import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// eslint-disable-next-line no-void
void i18n
  // load translation using xhr -> see /public/locales
  .use(XHR)
  // detect user language
  .use(LanguageDetector)
  // init i18n next
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`
    },
    whitelist: ['en', 'de'],
    fallbackLng: 'en',
    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'navigator'],
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      // only detect languages that are in the whitelist
      checkWhitelist: true
    },
    react: {
      wait: true,
      useSuspense: false
    }
  })
