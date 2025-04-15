import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from './en.json';
import bahasa from './id.json';

const resources = {
  en: {
    translation: english
  },
  id: {
    translation: bahasa
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;