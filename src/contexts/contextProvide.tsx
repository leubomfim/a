import { FC, ReactNode, useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage.tsx";
import { NextBuyContext } from "./createContext.tsx";
import { api } from "../services/api.ts";
import { User } from "./types/types.ts";

const DEFAULT_LANGUAGE: string = "br";

export const NextBuyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean | null>(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [language, setLanguage] = useLanguage();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('api/getUserProfile');
        setIsLogged(true);
        setUser(response.data);
      } catch {
        setIsLogged(false);
      } finally {
        setLoading(false); 
      }
    };

    checkAuth();
  }, [])

  useEffect(() => {
    if (language === null && typeof setLanguage === "function") {
      setLanguage(DEFAULT_LANGUAGE);
    }

  }, [language, setLanguage]);

  const nextObject = {
    user,
    loading,
    setLoading,
    isLogged,
    language,
    setLanguage,
    setIsLogged
  };

  return (
    <NextBuyContext.Provider value={nextObject}>
      {children}
    </NextBuyContext.Provider>
  );
};
