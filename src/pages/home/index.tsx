import { Hero } from "./components/Hero";
import { ProductionHome } from "./components/products";
import brazilFrag from "../../assets/images/brazil_frag.png";
import euaFrag from "../../assets/images/eua_frag.png";
import { useTranslation } from "react-i18next";
import { useNextBuyContext } from "../../contexts/context";
import { useState } from "react";
import classNames from "classnames";

export const Home = () => {
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);
  
  const { t } = useTranslation();
  const { i18next } = useNextBuyContext();

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);

    setToggleLanguage(false);
  };
  return (
    <main className="relative z-10">
      <button
        title="Click to select new language!"
        onClick={() => setToggleLanguage(!toggleLanguage)}
        className="fixed z-10 transition-all ease duration-500 hover:scale-110 bottom-4 right-4 rounded-[50%] bg-zinc-800 p-[15px] cursor-pointer"
      >
        <img
          src={i18next.language === "br" ? brazilFrag : euaFrag}
          className="w-[30px]"
          alt="a"
          width={48}
          height={48}
        />
      </button>
      <button
        onClick={() =>
          changeLanguage(`${i18next.language === "br" ? "en" : "br"}`)
        }
        className={classNames(
          "fixed z-10 transition-all ease duration-500 hover:scale-110 bottom-20 right-4 rounded-[50%] bg-zinc-500 p-[15px] cursor-pointer",
          {
            "visible opacity-[1]": toggleLanguage,
            "invisible opacity-0": !toggleLanguage,
          }
        )}
      >
        <img
          src={i18next.language === "br" ? euaFrag : brazilFrag}
          className="w-[30px]"
          width={48}
          height={48}
          alt="a"
        />
      </button>
      <section>
        <Hero heroText={t('heroText')} language={i18next.language} heroButton={t('heroButton')} />
      </section>
      <ProductionHome title={t("bestSellers")} />

      <ProductionHome title={t("titlePromotion")} />

      <ProductionHome title={t("title")} />
    </main>
  );
};
