// ThemeContext.js
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
