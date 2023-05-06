import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', undefined });

export const ThemeProvider = ({ children }) => {
  // localStorage to save theme choice
  const [theme, setTheme] = useState('light');

  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}