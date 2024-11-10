import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { changeActionType } from "../../state/profile/profileSlice";

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
        <div
          className={`w-full h-full flex absolute z-[9999]`}
        >
          <div className={`bg-black opacity-50 h-full transition-all duration-500 ease-in-out ${actionsType.length === 0 ? "w-0" : "w-[75%]"}`}></div>
          <div className="relative w-[25%] h-full bg-white">
            <div onClick={handleCloseSide} className="absolute">
              X
            </div>
            {actionsType === "search" && <div>search</div>}
            {actionsType === "wishlist" && <div>Wislist</div>}
            {actionsType === "cart" && <div>Cart</div>}
          </div>
        </div>
      )}
    </>
  );
};
