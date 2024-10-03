import { Dispatch, SetStateAction, useEffect, useState } from "react";
import i18next from "../utils/i18n";

const DEFAULT_LANGUAGE: string = "br";

export function useLanguage(): [string | null, Dispatch<SetStateAction<string | null>>] {
  const [language, setLanguage] = useState<string | null>(
    localStorage.getItem("language") || DEFAULT_LANGUAGE
  );

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
      i18next.changeLanguage(language);
    }
  }, [language]);

  return [language, setLanguage];
};
