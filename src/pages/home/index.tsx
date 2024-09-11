import { Hero } from "./components/Hero";
import { ProductionHome } from "./components/products";
import brazilFrag from "../../assets/images/brazil_frag.png";
import euaFrag from "../../assets/images/eua_frag.png";
import { useTranslation } from "react-i18next";
import { useNextBuyContext } from "../../contexts/context";
import { useState } from "react";
import classNames from "classnames";

export const Home = () => {
  const [languages, setLanguages] = useState<boolean>(false);
  console.log(languages);
  const { i18next } = useNextBuyContext();
  console.log(i18next.language);
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };
  return (
    <main className="relative z-10">
      <button
      title="Click to select new language!"
        onClick={() => setLanguages(!languages)}
        className="fixed z-10 transition-all ease duration-500 hover:scale-110 bottom-4 right-4 rounded-[50%] bg-zinc-800 p-[15px] cursor-pointer"
      >
        <img
          src={i18next.language === "br" ? brazilFrag : euaFrag}
          className="w-[30px]"
          alt="a"
        />
      </button>
      <div
        className={classNames(
          "fixed z-10 transition-all ease duration-500 hover:scale-110 bottom-20 right-4 rounded-[50%] bg-zinc-500 p-[15px] cursor-pointer", {
            "visible opacity-[1]": languages,
            "invisible opacity-0": !languages,
          }
        )}
      >
        <img
          src={i18next.language === "br" ? euaFrag : brazilFrag}
          onClick={() =>
            changeLanguage(`${i18next.language === "br" ? "en" : "br"}`)
          }
          className="w-[30px]"
          alt="a"
        />
      </div>
      <section>
        <Hero />
      </section>
      <section className="w-full mt-[80px]">
        <ProductionHome title={t("titlePromotion")} />
      </section>
      <section className="w-full mt-[80px]">
        <ProductionHome title={t("title")} />
      </section>
    </main>
  );
};
