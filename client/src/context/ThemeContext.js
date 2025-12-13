import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const themes = {
  dark: {
    primaryBg: "#0E1524",
    secondaryBg: "#000A1B",
    heading: "#BED600",
    subheading: "#8BE030",
    content: "#FFFFFF",
    accent: "#E32227",
  },
  light: {
    primaryBg: "#FCFDFE",
    secondaryBg: "#C9D9F0",
    heading: "#111410",
    subheading: "#2F362F",
    content: "#000000",
    accent: "#E32227",
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.primaryBg;
    document.body.style.color = currentTheme.content;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, theme: currentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
