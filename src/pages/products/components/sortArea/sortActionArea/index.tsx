import { TFunction } from "i18next";
import { AppDispatch } from "../../../../../state/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSortType } from "../../../../../state/profile/profileSlice";
type SortListType = {
  name: string;
  type: string;
  selected: boolean;
};
export const SortActionArea = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const dispatch: AppDispatch = useDispatch();
  const [sortList, setSortList] = useState<SortListType[]>([
    {
      name: t("sortRated"),
      type: "by_rated",
      selected: true,
    },
    {
      name: t("sortPrice"),
      type: "by_price",
      selected: false,
    },
    {
      name: t("sortOrders"),
      type: "by_purchased",
      selected: false,
    },
  ]);

  useEffect(() => {}, [sortList]);
  const changeSortType = (type: string) => {
    const changeSelectedType: SortListType[] = sortList.map((item) => {
      if (item.type === type) {
        return { ...item, selected: true };
      }

      return { ...item, selected: false };
    });
    setSortList(changeSelectedType);
    dispatch(setSortType(type));
  };
  return (
    <div className="flex gap-5 text-sm font-semibold text-zinc-600 items-center justify-end w-full">
      <p>{t("sortText")}</p>
      <div className="flex gap-[1.10rem] rounded-[30px] border-solid border-1 border-zinc-400 p-1 px-[20px]">
        {sortList.map((item, index) => (
          <button
            onClick={() => changeSortType(item.type)}
            type="button"
            key={item.type}
            className={`${
              index === 1
                ? "px-[1.10rem] border-solid border-x-1 border-y-0 border-zinc-400"
                : ""
            }`}
          >
            <p
              className={`${
                item.selected ? "text-blue-500" : "bg-transparent"
              } rounded-[30px] p-2`}
            >
              {item.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
