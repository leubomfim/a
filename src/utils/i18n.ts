import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Products",
      titlePromotion: "Promotions",
      bestSellers: "Best Sellers",
      seeAll: "SEE ALL",
      about: "About",
      cart: "ADD TO CART",
      heroText: `If you're looking for the best digital retail products, you've come to the right place! Take advantage of our promotions.`,
      heroButton: "BUY NOW!",
      signIn: "Sign In",
      signUp: "Sign Up",
      sortPrice: "Price",
      altHomePage: "Cellphone created with artificial intelligence",
      sortOrders: "Orders",
      sortRated: "Ratings",
      sortText: "Sort by:",
      price: "Price",
      searchByTitle: "Search By Name",
      searchPlaceholder: "Example: Keyboard, Mouse, Tv.",
      filterButton: "CONFIRM",
      viewType: "View:",
      password: "Password",
      confirmPassword: "Confirm Password",
      welcomeBack: "Welcome Back!",
      loginText: "Please login to your account.",
      remember: "Remember me",
      forgotPassword: "Forgot password?",
      hello: "Hello,",
      or: "or",
      freeShipping: "FREE SHIPPING ON ALL ORDERS! Shop Now",
      shopNow: 'Shop Now'
    },
  },
  br: {
    translation: {
      title: "Produtos",
      titlePromotion: "Promoções",
      bestSellers: "Mais vendidos",
      seeAll: "VER TUDO",
      about: "Sobre",
      cart: "ADICIONAR AO CARRINHO",
      heroText: `Em busca dos melhores produtos do varejo digital, chegou ao lugar certo! Aproveite nossas promoções.`,
      heroButton: "ADQUIRA JÁ!",
      signIn: "Entre",
      signUp: "Cadastre-se",
      sortPrice: "Preço",
      altHomePage: "Celular criado com inteligência artificial",
      sortOrders: "Pedidos",
      sortRated: "Avaliações",
      sortText: "Ordenar por:",
      price: "Preço",
      searchByTitle: "Buscar por nome",
      searchPlaceholder: "Examplo: Teclado, Mouse, Tv.",
      filterButton: "BUSCAR",
      viewType: "Visualização:",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      welcomeBack: "Bem-vindo de volta!",
      loginText: "Por favor, faça login na sua conta.",
      remember: "Lembre de mim",
      forgotPassword: "Esqueceu a senha?",
      hello: "Olá,",
      or: "ou",
      freeShipping: "FRETE GRÁTIS EM TODOS OS PEDIDOS!",
      shopNow: 'Compre Agora'
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

export default i18next;
