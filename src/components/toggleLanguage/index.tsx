import brazilFrag from "../../assets/images/brazil_frag.png";
import euaFrag from "../../assets/images/eua_frag.png";
import classNames from "classnames";
import { useNextBuyContext } from "../../contexts/useContext";
import { useState } from "react";

export const ToggleLanguage = () => {
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);
  const { language, setLanguage } = useNextBuyContext();
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
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
        <img
          src={language === "br" ? brazilFrag : euaFrag}
          className="w-[30px]"
          alt="a"
          width={48}
          height={48}
        />
      </button>
      <button
        onClick={() =>
          changeLanguage(`${language === "br" ? "en" : "br"}`)
        }
        className={classNames(
          "fixed z-20 transition-all ease duration-500 hover:scale-110 bottom-20 right-4 rounded-[50%] bg-zinc-500 p-[15px] cursor-pointer",
          {
            "visible opacity-[1]": toggleLanguage,
            "invisible opacity-0": !toggleLanguage,
          }
        )}
      >
        <img
          src={language === "br" ? euaFrag : brazilFrag}
          className="w-[30px]"
          width={48}
          height={48}
          alt="a"
        />
      </button>
    </div>
  );
};
