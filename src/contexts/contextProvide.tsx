import { FC, ReactNode, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage.tsx";
import { NextBuyContext } from "./createContext.tsx";
import { getUserProfile } from "../api/api.ts";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_LANGUAGE: string = "br";

export const NextBuyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data } = useQuery({
    queryKey: ["getUserProfile"],
    queryFn: getUserProfile,
  });
  const [language, setLanguage] = useLanguage();

  console.log(console.log(data));
  useEffect(() => {
    if (language === null && typeof setLanguage === "function") {
      setLanguage(DEFAULT_LANGUAGE);
    }
  }, [language, setLanguage]);

  const nextObject = {
    language,
    setLanguage,
  };

  return (
    <NextBuyContext.Provider value={nextObject}>
      {children}
    </NextBuyContext.Provider>
  );
};
