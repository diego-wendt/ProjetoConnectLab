import PropTypes from "prop-types";
import { useEffect, useState, createContext, useContext } from "react";
import {
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../../utils/localStorage";
import { themeDark, themeLight } from "../../themes";

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeDefault = getThemeLocalStorage();
    if (themeDefault) {
      setTheme(themeDefault);
    }
  }, []);

  const handleTheme = () => {
    setTheme((prev) => {
      const newValue = prev === "dark" ? "light" : "dark";
      setThemeLocalStorage(newValue);
      return newValue;
    });
  };

  const customTheme = theme === "dark" ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme: customTheme, handleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);
  return context;
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
