import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { Hero } from "./components/Hero";
import { ProductionHome } from "./components/products";

import { Props } from "./types";
import { GeometricBackground } from "./components/geometricBackground";

export const Home = () => {
  const { t } = useTranslation();
  const productsComponents: Props[] = [
    {
      title: t("bestSellers"),
    },
    {
      title: t("titlePromotion"),
    },
    {
      title: t("title"),
    },
  ];

  return (
    <main className="relative z-10">
      <section className=" h-[86vh] bg-blue-800 relative overflow-hidden">
        <GeometricBackground />
        <Hero
          heroText={t("heroText")}
          language={i18next.language}
          heroButton={t("heroButton")}
        />
      </section>
      {productsComponents.map((comp) => (
        <section key={comp.title} className="w-full mt-[80px] m-auto">
          <ProductionHome title={comp.title} />
        </section>
      ))}
    </main>
  );
};
