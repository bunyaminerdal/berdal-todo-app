import React, { PropsWithChildren, useContext,useState } from "react";
import { ThemeProvider } from "next-themes";
import { createContext } from "react";

const themeContext = createContext<{
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}>(
  {} as {
    themeMode: string;
    setThemeMode: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const useThemeContext = () => useContext(themeContext);

const BeThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useState("night");
  return (
    <themeContext.Provider value={{themeMode,setThemeMode}}>
      <div data-theme={`${themeMode}`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </div>
    </themeContext.Provider>
  );
};

export default BeThemeProvider;
