import ReactQueryProvider from "./utils/providers";
import { Header } from "./layout/header";
import { PagesRoutes } from "./routes";
import { useLocation } from "react-router-dom";
import { Footer } from "./layout/footer";
import { ToggleLanguage } from "./components/toggleLanguage";

export const App = () => {
  const location = useLocation();
  const verifyPath = location.pathname.includes('login') || location.pathname.includes('register') ? true : false
  return (
    <>
      <ReactQueryProvider>
        <ToggleLanguage />
        {!verifyPath && <Header />}
        <PagesRoutes />
        {!verifyPath && <Footer />}
      </ReactQueryProvider>
    </>
  );
};
