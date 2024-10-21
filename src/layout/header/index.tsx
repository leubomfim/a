import { type FormEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/api";
import { NavItemsType, HomeUsersProp } from "./types";

import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";
import { useTranslation } from "react-i18next";
import { useNextBuyContext } from "../../contexts/useContext";

export const Header = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });
  const { t } = useTranslation();
  const { isLogged, loading } = useNextBuyContext();
  const [searchValue, setSearchValue] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

  const navItems: NavItemsType[] = [
    {
      label: t("title"),
      path: "/products",
    },
    {
      label: t("bestSellers"),
      path: "/products",
    },
    {
      label: t("about"),
      path: "/about",
    },
  ];

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const dataOrFiltered =
    searchValue.length <= 0
      ? data
      : data.filter((el: { name: string }) => {
          return el.name
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
  return (
    <header
      className={`flex justify-between items-center flex-col w-full h-[70px]`}
    >
      {!loading && (
        <div className="lg:px-0 min-[300px]:px-[10px] container">
          <nav className="flex justify-between items-center h-[90px]">
            <div>
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <nav className="lg:flex min-[300px]:hidden flex items-center">
              <ul className="flex gap-[4vw]">
                {navItems.map((el) => (
                  <li key={el.label}>
                    <Link to={`${el.path}`}>
                      <button
                        className="transition-all ease-in-out duration-500 py-[8px] text-xl hover:text-[#5086FA]"
                        type="button"
                      >
                        {el.label}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <div className="lg:flex min-[300px]:hidden gap-[10px] items-center">
                <button
                  className="rounded-[50%] bg-black text-white h-[50px] transition-all ease-in-out duration-300 hover:bg-gray-700 flex items-center justify-center w-[50px] cursor-pointer text-3xl"
                  onClick={() => {
                    setToggleSearch(!toggleSearch);
                  }}
                  type="button"
                >
                  <IoIosSearch className={toggleSearch ? "hidden" : ""} />
                  <IoMdClose className={!toggleSearch ? "hidden" : ""} />
                </button>
                {!isLogged && (
                  <div>
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
                  </div>
                )}
                {isLogged && <div>Logado</div>}
              </div>
              {/* X-egg Menu */}
              <div className="lg:hidden min-[300px]:flex"></div>
            </div>
          </nav>
          <div className="flex justify-center relative z-20 mt-[10px]">
            <form
              className={classNames("transition-all ease-in-out duration-200", {
                "visible opacity-[1]": toggleSearch,
                "invisible opacity-0": !toggleSearch,
              })}
              onSubmit={(event) => handleSearchProduct(event)}
            >
              <div className="relative z-200 max-w-screen-sm w-full">
                <input
                  className="w-full h-[50px] border-solid border-[1px] border-gray-400 text-base rounded-[3px] pl-xll pr-[60px]"
                  type="text"
                  placeholder="Search by product name..."
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <button
                  className="transition-all hover:bg-gray-700 ease-in-out duration-300 rounded-[4px] top-[3.5px] right-[5px] w-[50px] cursor-pointer flex items-center justify-center text-3xl absolute bg-black  text-white h-[85%]"
                  type="button"
                >
                  <IoIosSearch />
                </button>
                <div
                  className={classNames(
                    "transition-all duration-[0.2s] ease-in-out absolute bg-white top-[70px] left-[0px] w-full rounded-[3px] p-[20px] border-solid border-[1px] border-gray-400",
                    {
                      "visible opacity-[1]": searchValue.toString().length > 0,
                      "invisible opacity-[0]":
                        searchValue.toString().length <= 0,
                    }
                  )}
                >
                  {isLoading ? (
                    <div>Is loading</div>
                  ) : dataOrFiltered.length > 0 ? (
                    <div className="flex flex-col gap-[20px]">
                      {dataOrFiltered.map((user: HomeUsersProp) => (
                        <div className="divide-black divide-y-2" key={user.id}>
                          <ul>
                            <li>Name: {user.name}</li>
                            <li>Email: {user.email}</li>
                            <li>
                              Status: {user.status ? "Ativo" : "Desativada"}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div>
                        <p>Not found</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
