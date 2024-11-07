import { useTranslation } from "react-i18next";
import { Nav } from "./components/Nav";
import { SearchBar } from "./components/SearchBar";
import { ActionsHeader } from "./components/ActionsHeader";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header
      className={`flex justify-between items-center flex-col w-full h-[95px]`}
    >
      <section className="lg:px-0 min-[300px]:px-[10px] w-[95%]">
        <div className="flex justify-between items-center h-[95px]">
          <div className="flex  items-center w-[90%] gap-[20px] relative">
            <Nav t={t} />
            <SearchBar />
          </div>
          <ActionsHeader t={t} />
        </div>
      </section>
    </header>
  );
};
