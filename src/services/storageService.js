import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = "@user";

export async function saveUser(user) {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
  }
}

export async function getUser() {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
}

export async function removeUser() {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
  }
}