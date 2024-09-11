import { createContext, ReactNode, useContext, useState } from "react";
import P from "prop-types";
import i18next from "../utils/i18n.ts";

type ContextTypes = {
  i18next: typeof i18next
}
interface Props {
  children?: ReactNode
}

export const nextBuyContext = createContext<ContextTypes>({
  i18next
});

export const NextBuyProvider = ({children}: Props) => {

  const nextObject = {
    i18next
  };

  return (
    <nextBuyContext.Provider value={nextObject}>{children}</nextBuyContext.Provider>
  );
};

export const useNextBuyContext = () => {
  const context = useContext(nextBuyContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutContext must be used within a CheckoutProvider"
    );
  }
  return context;
};

NextBuyProvider.propTypes = {
  children: P.node.isRequired,
};
