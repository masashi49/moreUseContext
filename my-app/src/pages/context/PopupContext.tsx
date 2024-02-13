import { createContext, useContext, useState } from "react";

type Theme = "darkMode" | "normalMode";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "normalMode",
  setTheme: () => {},
});

export const PopUpContext = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>("normalMode");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const getPopupContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
