import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        isAuthenticated, 
        login, 
        logout 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};