import { getUserAuthenticated } from './apiUser';

const authService = async (user, navigation) => {
  try {
    const userAuth = await getUserAuthenticated(user);
    console.log(userAuth)
    return userAuth
  } catch (error) {
    console.log("Erro durante a autenticação", error);
    return null;
  }
 } 

export { authService };
