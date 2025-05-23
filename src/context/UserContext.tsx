"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the interface for the UserContext
interface UserContextType {
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
}

// Create the UserContext
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the props for the UserProvider
interface UserProviderProps {
  children: ReactNode;
}

// Create the UserProvider component
export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useState<string | null>(null);

  // Load userName from localStorage on initial mount
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Login function
  const login = (name: string) => {
    localStorage.setItem('userName', name);
    setUserName(name);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('userName');
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create the useUser custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
