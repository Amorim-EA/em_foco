import { authService } from '@/services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveUserToStorage = async (userData) => {
    try {
      const userJson = JSON.stringify(userData);
      await AsyncStorage.setItem('user', userJson);
    } catch (error) {
      console.error('Erro ao salvar usuário no AsyncStorage:', error);
    }
  };

  const loadUserFromStorage = async () => {
    try {
      const userJson = await AsyncStorage.getItem('user');
      if (userJson !== null) {
        setUser(JSON.parse(userJson));
      }
    } catch (error) {
      console.error('Erro ao carregar usuário do AsyncStorage:', error);
    }
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const login = async (userLogin) => {
    console.log(userLogin);
    try {
      const userAuth = await authService(userLogin);

      if (userAuth.message === "Usuário não encontrado!") {
        Alert.alert("Usuário não encontrado!");
        setUser(null); 
        await AsyncStorage.removeItem('user');
      }
      else if (userAuth.message === "Senha incorreta!") {
        Alert.alert("A senha está incorreta!");
        setUser(null); 
        await AsyncStorage.removeItem('user');
      }
      else if (userAuth.name) {
        setUser(userAuth);
        saveUserToStorage(userAuth);
      }
      else {
        Alert.alert("Erro desconhecido durante o login");
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login: ", error);
      Alert.alert("Erro ao tentar autenticar. Tente novamente mais tarde.");
      setUser(null);
      await AsyncStorage.removeItem('user');
    }
  };

  const logout = async () => {
    setUser(null); 
    await AsyncStorage.removeItem('user');
  };

  const checkLogin = async () => {
    loadUserFromStorage();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
