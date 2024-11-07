import { TFunction } from "i18next";
import { SortActionArea } from "./sortActionArea";
import { ViewActionArea } from "./viewActionArea";

export const ActionsArea = ({
  t,
}: {
  t: TFunction<"translation", undefined>;
}) => {
  return (
    <div className="w-full flex justify-end items-center gap-9">
      <SortActionArea t={t} />
      <ViewActionArea t={t} />
    </div>
  );
};
