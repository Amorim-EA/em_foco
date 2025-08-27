import { login } from "@/services/authService";
import { auth } from "@/services/firebaseConfig";
import { getUserData } from "@/services/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Carregar usuário salvo no storage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Erro ao carregar usuário do storage:", e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  //Salvar Usuário

  //Login
  const handleLogin = async (email, password) => {
    const cred = await login(email, password);
    const uid = cred.user.uid;

    const userData = await getUserData(uid);
    const fullUser = { ...cred.user, ...userData };

    setUser(fullUser);
    await AsyncStorage.setItem("user", JSON.stringify(fullUser));

    return fullUser;
  };

  //Logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
