import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SortArea = () => {
  const [sortType, setSortType] = useState<string>("");
  const { t } = useTranslation();
  const sortList = [
    {
      name: t("sortPrice"),
      type: "by_price",
    },
    {
      name: t("sortPrice"),
      type: "by_purchased",
    },
  ];

  const changeSortType = (type: string) => {
    setSortType(type);
    console.log(sortType)
  };
  return (
    <div>
      <div>
        <p className="text-sm">Sort By:</p>
        <div>
          {sortList.map((item) => (
            <button onClick={() => changeSortType(item.type)} type="button" key={item.type}>{item.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
