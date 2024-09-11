import ReactQueryProvider from "./utils/providers";
import { Header } from "./components/header";
import { PagesRoutes } from "./routes";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/footer";

export const App = () => {
  const location = useLocation();
  const verifyPath = location.pathname.includes('login') || location.pathname.includes('register') ? true : false
  return (
    <>
      <ReactQueryProvider>
        {!verifyPath && <Header />}
        <PagesRoutes />
        {!verifyPath && <Footer />}
      </ReactQueryProvider>
    </>
  );
};
