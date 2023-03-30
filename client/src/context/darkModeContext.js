import { createContext,useState, useEffect } from "react";


export const DarkModeContext = createContext();


export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};