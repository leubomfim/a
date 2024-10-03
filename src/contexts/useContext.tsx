import { useContext } from "react";
import { NextBuyContext } from "./createContext";

const useNextBuyContext = () => {
  const context = useContext(NextBuyContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider"
    );
  }
  return context;
};

export { useNextBuyContext };
