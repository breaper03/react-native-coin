import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

interface ContextProps {
  actualTheme: themes | undefined;
  setTheme: any
}

export enum themes {
  light,
  dark
}

const Context = createContext<ContextProps | undefined>(undefined)

interface ProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  
  useEffect(() => {
    const actualThemes = SecureStore.getItemAsync("theme")
    typeof actualThemes === "string"
      ? setTheme(actualThemes) 
      : setTheme(themes.light) 
  }, [])
  

  const [actualTheme, setTheme] = useState<themes>();

  return (
    <Context.Provider value={{ 
      actualTheme, setTheme
    }}>
      {children}
    </Context.Provider>
  );
};

const useCustomContext= (): ContextProps => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useCustomContext must be used within a UserProvider');
  }

  return context;
};

export { ContextProvider, useCustomContext };