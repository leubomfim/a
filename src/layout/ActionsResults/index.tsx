import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { changeActionType } from "../../state/profile/profileSlice";
import { motion } from "framer-motion";
import { SearchArea } from "./components/searchArea";
import { Wishlist } from "./components/wishlist";
import { Cart } from "./components/cart";
import { IoMdClose } from "react-icons/io";

export const ActionsResults = () => {
  const dispatch: AppDispatch = useDispatch();
  const actionsType = useSelector(
    (state: RootState) => state.nextBuy.actionsType
  );

  const handleCloseSide = () => {
    dispatch(changeActionType(""));
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      {actionsType.length > 0 && (
        <div className={`w-full h-full flex absolute z-[9999]`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`bg-black opacity-50 h-full transition-all duration-500 ease-in-out ${
              actionsType.length === 0 ? "w-0" : "w-[75%]"
            }`}
          ></motion.div>
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-[25%] h-full bg-white flex justify-center pt-20"
          >
            <div className="absolute left-5 top-5">
              <div className="flex justify-center item-center gap-4">
                <button onClick={handleCloseSide}>
                  <IoMdClose
                    size={40}
                    className="cursor-pointer"
                  />
                </button>
                <span className="text-xl font-semibold mt-[6px] text-blue-700">
                  {actionsType === "cart"
                    ? "My Cart"
                    : actionsType === "search"
                    ? "Search Product"
                    : "Wishlist"}
                </span>
              </div>
            </div>
            {actionsType === "search" && <SearchArea />}
            {actionsType === "wishlist" && <Wishlist />}
            {actionsType === "cart" && <Cart />}
          </motion.aside>
        </div>
      )}
    </>
  );
};
