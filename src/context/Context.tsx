import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Appearance, ColorSchemeName, useColorScheme } from "react-native";

interface ContextProps {
  actualTheme: string | ColorSchemeName | undefined;
  onChangeTheme: any
}

const Context = createContext<ContextProps | undefined>(undefined)

interface ProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  
  const OS = Appearance.getColorScheme()

  useEffect(() => {
    
    if (OS) {
      console.log("entraaaa", OS)
      setTheme(OS)
    }

  }, [OS])
  

  const systemColorScheme = useColorScheme();
  const [actualTheme, setTheme] = useState(systemColorScheme);

  const onChangeTheme = async (newTheme: ColorSchemeName) => {
    Appearance.setColorScheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <Context.Provider value={{ 
      actualTheme, onChangeTheme
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