import { Dispatch, SetStateAction } from "react";

interface ContextTypes {
  setLanguage: Dispatch<SetStateAction<string | null>>;
  language: string | null;
}

export type { ContextTypes };
