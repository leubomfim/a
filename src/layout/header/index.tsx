import { useTranslation } from "react-i18next";
import { Nav } from "./components/Nav";
// import { SearchBar } from "./components/SearchBar";
import { ActionsHeader } from "./components/ActionsHeader";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={`flex flex-col items-center w-full`}>
      <div className="bg-black text-white p-2 w-full text-center">
        <p>
          {t('freeShipping')}{" "}
          <a className="underline" href="">
            {t('shopNow')}
          </a>
        </p>
      </div>
      <section className="lg:px-0 min-[300px]:px-[10px] w-[81%]">
        <div className="flex justify-between items-center">
          <div className="flex  items-center gap-[20px] relative h-[85px]">
            <Nav t={t} />
            {/* <SearchBar /> */}
          </div>
          <Link className="left-1/2 ml-[-100px] absolute" to={"/"}>
            <Logo />
          </Link>
          <ActionsHeader t={t} />
        </div>
      </section>
    </header>
  );
};
