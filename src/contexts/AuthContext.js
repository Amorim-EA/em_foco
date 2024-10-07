import React, { createContext, useState } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userLogin) => {
    console.log(userLogin);
    try {
        const userAuth = await authService(userLogin);
        if (userAuth) {
            setUser(userAuth);
        } else {
            console.error("Autenticação falhou:", userAuth);
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
};

  const logout = async () => {
    setUser(null);
  };

  const checkLogin = async () => {

  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
