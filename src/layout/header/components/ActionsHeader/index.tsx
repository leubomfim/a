import { Link } from "react-router-dom";
import { useNextBuyContext } from "../../../../contexts/useContext";
import { TFunction } from "i18next";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export const ActionsHeader = ({
  t,
}: {
  t: TFunction<"translation", undefined>;
}) => {
  const { isLogged } = useNextBuyContext();
  console.log(isLogged);
  // const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div>
      <div className="lg:flex min-[300px]:hidden gap-[30px] items-center">
        <IoIosSearch className="text-3xl cursor-pointer" />
        <div className="flex gap-2 items-center">
          <FaRegUserCircle className="text-4xl" />
          <p className="w-[90px] text-[14px]">
            {t("hello")}{" "}
            <Link to="/login" className="font-semibold">
              {t("signIn")}{" "}
            </Link>
            {t("or")}{" "}
            <Link to="/register" className="font-bold">
              {t("signUp")}
            </Link>
          </p>
        </div>
      </div>
      {/* X-egg Menu */}
      <div className="lg:hidden min-[300px]:flex"></div>
    </div>
  );
};
