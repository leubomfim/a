import { Dispatch, SetStateAction } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  myCart: unknown[]; 
  password: string;
  photo: string;
  session: string;
  theme: string;
  created_at: string;
  updated_at: string
}

interface ContextTypes {
  setLanguage: Dispatch<SetStateAction<string | null>>;
  setIsLogged: Dispatch<SetStateAction<boolean | null>>;
  setLoading: Dispatch<SetStateAction<boolean | null>>;
  language: string | null;
  isLogged: boolean | null;
  user: User | null
  loading: boolean | null;
}

export type { ContextTypes };
