import { createContext } from "react";
import { ContextTypes } from "./types/types";

const NextBuyContext = createContext<ContextTypes | undefined>(undefined);

export { NextBuyContext };
