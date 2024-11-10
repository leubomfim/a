import { Link } from "react-router-dom";
import { TFunction } from "i18next";
import { FaHeart, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { changeActionType } from "../../../../state/profile/profileSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/store";

export const ActionsHeader = ({ t }: { t: TFunction<"translation", undefined> }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleChangeActionType =  (type: string) => {
    document.body.classList.add('overflow-hidden')
    dispatch(changeActionType(type));
  };

  const actions = [
    {
      icon: <FaHeart className="text-2xl cursor-pointer" />,
      quantity: 2,
      type: 'wishlist'
    },
    {
      icon: <FaShoppingCart className="text-2xl cursor-pointer" />,
      quantity: 1,
      type: 'cart'
    },
  ]
  // const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div>
      <div className="lg:flex min-[300px]:hidden gap-[30px] items-center">
        {actions.map((item, index) => (
          <div onClick={() => handleChangeActionType(item.type)} key={index} className="relative z-[1000]">
            {item.quantity > 0 && (
              <div className="bg-blue-500 h-[20px] min-w-[20px] flex justify-center items-center rounded-full cursor-pointer absolute right-[-12px] top-[-10px] text-white">
                <p onClick={() => handleChangeActionType(item.type)} className="mt-[2px] text-[0.75rem] font-semibold">{item.quantity}</p>
              </div>
            )}
            {item.icon}
          </div>
        ))}
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
