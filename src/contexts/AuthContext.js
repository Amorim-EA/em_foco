import * as SecureStore from 'expo-secure-store';
import React, { createContext, useState } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (user) => {
    const userAuth = await authService(user);
    setUser(userAuth);
    console.log(userAuth)
    await SecureStore.setItemAsync('user', JSON.stringify(userAuth));
  };

  const logout = async () => {
    setUser(null);
    await SecureStore.deleteItemAsync('user'); 
  };

  const checkLogin = async () => {
    const userData = await SecureStore.getItemAsync('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
