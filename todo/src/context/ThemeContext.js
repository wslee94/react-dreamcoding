import { createContext, useState } from "react";

const setLS = (theme) => {
  localStorage.setItem("theme", theme);
};

const getLS = () => {
  return localStorage.getItem("theme") || "dark";
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getLS());
  const changeTheme = (theme) => {
    setLS(theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
