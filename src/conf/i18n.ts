// @flow

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEn from '../locales/en/translation.json';
import translationsInGe from '../locales/ge/translation.json';

// the translations
const resources = {
    en: {
        translation: translationsInEn
    },
    ge: {
        translation: translationsInGe
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources, // resources are important to load translations for the languages.
        lng: "en", // It acts as default language. When the site loads, content is shown in this language.
        debug: false,
        fallbackLng: "de", // use de if selected language is not available
        interpolation: {
            escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation"
    }).then(r => r);

export default i18n;