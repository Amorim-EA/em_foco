import { getUserAuthenticated } from './handlerAcessApi';

const handlerAuth = async (user, navigation) => {
  try {
    const userAuth = await getUserAuthenticated(user);
  } catch (error) {
    console.log("Erro durante a autenticação", error);
    return null;
  }
 } 

export { handlerAuth };
