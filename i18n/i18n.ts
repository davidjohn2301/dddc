import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../public/lang/en";
import Arab from "../public/lang/ar";
import France from "../public/lang/fr";
import China from "../public/lang/cn";
import Germany from "../public/lang/ger";
import Vietnamese from "../public/lang/vi";

const resources = {
  en: {
    translation: English,
  },
  ar: {
    translation: Arab,
  },
  fr: {
    translation: France,
  },
  cn: {
    translation: China,
  },
  ger: {
    translation: Germany,
  },
  vn: {
    translation: Vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
