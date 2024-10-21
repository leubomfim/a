import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Products",
      titlePromotion: "Promotions",
      bestSellers: 'Best Sellers',
      seeAll: 'SEE ALL',
      about: 'About',
      cart: 'ADD TO CART',
      heroText: `If you're looking for the best digital retail products, you've come to the right place! Take advantage of our promotions.`,
      heroButton: 'BUY NOW!',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      sortPrice: 'Price',
      altHomePage: "Cellphone created with artificial intelligence"
    },
  },
  br: {
    translation: {
      title: "Produtos",
      titlePromotion: "Promoções",
      bestSellers: 'Mais vendidos',
      seeAll: 'VER TUDO',
      about: 'Sobre',
      cart: 'ADICIONAR AO CARRINHO',
      heroText: `Em busca dos melhores produtos do varejo digital, chegou ao lugar certo! Aproveite nossas promoções.`,
      heroButton: 'ADQUIRA JÁ!',
      signIn: 'Logar',
      signUp: 'Registrar',
      sortPrice: 'Preço',
      altHomePage: "Celular criado com inteligência artificial"
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
