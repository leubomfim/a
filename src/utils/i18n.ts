import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Products",
      titlePromotion: "Promotions",
    },
  },
  br: {
    translation: {
      title: "Produtos",
      titlePromotion: "Promoções",
    },
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "br",
    fallbackLng: "br",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next
