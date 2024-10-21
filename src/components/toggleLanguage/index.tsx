import brazilFrag from "../../assets/images/brazil_frag.png";
import euaFrag from "../../assets/images/eua_frag.png";
import classNames from "classnames";
import { useNextBuyContext } from "../../contexts/useContext";
import { useState } from "react";
import { PreloadImage } from "../preloadImage";

export const ToggleLanguage = () => {
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);
  const { language, setLanguage } = useNextBuyContext();
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setToggleLanguage(false);
  };
  return (
    <div>
      {" "}
      <button
        title="Click to select new language!"
        onClick={() => setToggleLanguage(!toggleLanguage)}
        className="fixed z-20 transition-all ease duration-500 hover:scale-110 bottom-4 right-4 rounded-[50%] bg-zinc-800 p-[15px] cursor-pointer"
      >
        <PreloadImage
          src={language === "br" ? brazilFrag : euaFrag}
          srcSet={`${language === "br" ? brazilFrag : euaFrag} 500w, ${language === "br" ? brazilFrag : euaFrag} 1000w, ${language === "br" ? brazilFrag : euaFrag} 1500w`}
          sizes="(max-width: 500px) 30px, (max-width: 30px) 1000px, 30px"
          alt={language === "br" ? 'Brazil Frag' : "Eua Frag"}
          width={30}
          height={30}
        />
      </button>
      <button
        onClick={() => changeLanguage(`${language === "br" ? "en" : "br"}`)}
        className={classNames(
          "fixed z-20 transition-all ease duration-500 hover:scale-110 bottom-20 right-4 rounded-[50%] bg-zinc-500 p-[15px] cursor-pointer",
          {
            "visible opacity-[1]": toggleLanguage,
            "invisible opacity-0": !toggleLanguage,
          }
        )}
      >
        <PreloadImage
          src={language === "br" ? euaFrag : brazilFrag}
          srcSet={`${language === "br" ? euaFrag : brazilFrag} 48w, ${language === "br" ? euaFrag : brazilFrag} 1000w, ${language === "br" ? euaFrag : brazilFrag} 1500w`}
          sizes="(max-width: 500px) 30px, (max-width: 30px) 1000px, 30px"
          alt={language === "br" ? 'Brazil Frag' : "Eua Frag"}
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};
