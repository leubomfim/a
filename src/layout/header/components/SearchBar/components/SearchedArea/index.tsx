import { HomeUsersProp } from "../../../../types";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../../../api/api";

export const SearchedArea = ({ searchValue }: { searchValue: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });

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
    <div
      className={classNames(
        "transition-all duration-[0.2s] ease-in-out absolute bg-white top-[70px] left-[0px] w-full rounded-[3px] p-[20px] border-solid border-[1px] border-gray-400",
        {
          "visible opacity-[1]": searchValue.toString().length > 0,
          "invisible opacity-[0]": searchValue.toString().length <= 0,
        }
      )}
    >
      {isLoading || searchValue.toString().length <= 0 ? (
        <div>Loading...</div>
      ) : dataOrFiltered.length > 0 ? (
        <div className="flex flex-col gap-[20px]">
          {dataOrFiltered.map((user: HomeUsersProp) => (
            <div className="divide-black divide-y-2" key={user.id}>
              <ul>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Status: {user.status ? "Ativo" : "Desativada"}</li>
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
  );
};
