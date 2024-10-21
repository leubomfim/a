import { Header } from "./layout/header";
import { PagesRoutes } from "./routes";
import { useLocation } from "react-router-dom";
import { Footer } from "./layout/footer";
import { ToggleLanguage } from "./components/toggleLanguage";
import { Provider } from "react-redux";
import { store } from "./state/store";

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
        <ToggleLanguage />
        {!verifyPath && <Header />}
        <PagesRoutes />
        {!verifyPath && <Footer />}
      </Provider>
    </>
  );
};
