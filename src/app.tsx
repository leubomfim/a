import { ToggleLanguage } from "./components/toggleLanguage";
import { ActionsResults } from "./layout/ActionsResults";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { PagesRoutes } from "./routes";

import { store } from "./state/store";

import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";

export const App = () => {
  const location = useLocation();
  const verifyPath =
    location.pathname.includes("login") ||
    location.pathname.includes("register")
      ? true
      : false;
  return (
    <>
      <Provider store={store}>
        <ActionsResults />
        <ToggleLanguage />
        {!verifyPath && <Header />}
        <PagesRoutes />
        {!verifyPath && <Footer />}
      </Provider>
    </>
  );
};
