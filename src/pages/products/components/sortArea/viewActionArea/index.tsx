import { TFunction } from "i18next";
import { RiGalleryView2 } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../state/store";
import { changeViewType } from "../../../../../state/profile/profileSlice";

export const ViewActionArea = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const dispatch: AppDispatch = useDispatch();
  const viewType = useSelector((state: RootState) => state.profile.viewType);
  const viewButtons = [
    {
      name: 'grid',
      Icon: <RiGalleryView2 />
    },
    {
      name: 'list',
      Icon: <FaListUl />
    }
  ]

  return (
    <div  className="flex items-center gap-2 text-sm font-semibold text-zinc-600">
      <p>{t("viewType")}</p>
      <div className="flex gap-4 items-center"> 
        {viewButtons.map((item, index) => (
          <div key={index} onClick={() => dispatch(changeViewType(item.name))} className={`${viewType === item.name ? "text-blue-500" : ""} text-2xl cursor-pointer`}>
            {item.Icon}
          </div>
        ))}
      </div>
    </div>
  );
};
