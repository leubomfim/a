import { Hero } from "./components/Hero";
import { ProductionHome } from "./components/products";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import { productsComponents } from "./components/products/productList";

export const Home = () => {
  const { t } = useTranslation();
  

  return (
    <main className="relative z-10">
      <section>
        <Hero
          heroText={t("heroText")}
          language={i18next.language}
          heroButton={t("heroButton")}
        />
      </section>
      {productsComponents.map((comp) => (
        <section key={comp.title} className="w-full mt-[80px]">
          <ProductionHome
            title={comp.title}
            currencySign={comp.currencySign}
            products={comp.products}
          />
        </section>
      ))}
    </main>
  );
};
