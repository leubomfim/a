import { FormEvent, useState } from "react";
import classNames from "classnames";
import { IoIosSearch } from "react-icons/io";
import { SearchedArea } from "./components/SearchedArea";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-[700px] w-full">
      <div className="flex justify-center relative z-20 w-full">
        <form
          className={classNames(
            "transition-all ease-in-out duration-200 w-full"
          )}
          onSubmit={(event) => handleSearchProduct(event)}
        >
          <div className="relative z-200 max-w-screen-sm w-full">
            <input
              className="h-[50px] border-solid border-[1px] border-gray-400 text-base rounded-[30px] pl-xll pr-[60px] w-full"
              type="text"
              placeholder="Search by product name..."
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="transition-all hover:bg-gray-700 ease-in-out duration-300 rounded-[30px] top-[3.5px] right-[5px] w-[50px] cursor-pointer flex items-center justify-center text-3xl absolute bg-black  text-white h-[85%]"
              type="button"
            >
              <IoIosSearch />
            </button>
            <SearchedArea searchValue={searchValue} />
          </div>
        </form>
      </div>
    </div>
  );
};
