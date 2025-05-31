import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

type Theme = 'dark' | 'light';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string, fullName: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const { user, loading, signIn, signUp, signOut } = useAuth();

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider 
      value={{ 
        theme, 
        toggleTheme, 
        isAuthenticated: !!user,
        user,
        loading,
        signIn,
        signUp,
        signOut
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