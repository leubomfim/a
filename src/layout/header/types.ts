export type NavItemsType = {
    label: string;
    path: string;
  };
  
  export interface HomeUsersProp {
    id: string;
    name: string;
    email: string;
    status: boolean;
    created_at: string;
  }
  
  export interface ThemeTypes {
    id: number;
    themeTitle: string;
    bgColor: string;
    textColor: string;
  }
  