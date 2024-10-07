import * as SecureStore from 'expo-secure-store';
import { getUserAuthenticated } from './handlerAcessApi';

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync('jwtToken', token);
  } catch (error) {
    console.log("Erro ao salvar token", error);
  }
}

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('jwtToken');
    return token;
  } catch (error) {
    console.log("Erro ao recuperar token", error);
    return null;
  }
}

const handlerAuth = async (user, navigation) => {
  try {
    const userAuth = await getUserAuthenticated(user);

    // Verifique se userAuth foi retornado e se contém o token
    const token = userAuth?.token;

    if (token) {
      await storeToken(token);
      navigation.navigate('Home');
      return userAuth;
    } else {
      await SecureStore.deleteItemAsync('jwtToken');
      console.log('Nenhum token retornado, login falhou.');
      return null;
    }

  } catch (error) {
    console.log("Erro durante a autenticação", error);
    return null;
  }
}


export { getToken, handlerAuth };
