// import { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";
import { useNextBuyContext } from "../../../../contexts/useContext";
import { TFunction } from "i18next";

export const ActionsHeader = ({
  t,
}: {
  t: TFunction<"translation", undefined>;
}) => {
  const { isLogged } = useNextBuyContext();
  // const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div>
      <div className="lg:flex min-[300px]:hidden gap-[10px] items-center">
        {/* <button
          className="rounded-[50%] bg-black text-white h-[50px] transition-all ease-in-out duration-300 hover:bg-gray-700 flex items-center justify-center w-[50px] cursor-pointer text-3xl"
          onClick={() => {
            setToggleSearch(!toggleSearch);
          }}
          type="button"
        >
          <IoIosSearch className={toggleSearch ? "hidden" : ""} />
          <IoMdClose className={!toggleSearch ? "hidden" : ""} />
        </button> */}
        {!isLogged && (
          <>
            <Link to={"/login"}>
              <button
                className="transition-all ease-in-out duration-500 py-[12px] px-[30px] rounded-[4px] text-xl cursor-pointer text-black hover:text-[#5086FA]"
                type="button"
              >
                {t("signIn")}
              </button>
            </Link>
            <Link to={"/register"}>
              <button
                className="transition-all ease-in-out duration-300 bg-black py-[12px] px-[30px] rounded-[4px] text-xl cursor-pointer text-white hover:bg-gray-700"
                type="button"
              >
                {t("signUp")}
              </button>
            </Link>
          </>
        )}
        {isLogged && <div>Logado</div>}
      </div>
      {/* X-egg Menu */}
      <div className="lg:hidden min-[300px]:flex"></div>
    </div>
  );
};
