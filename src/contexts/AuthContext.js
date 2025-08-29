import React, { createContext, useEffect, useState } from "react";
import { loginUser, logoutUser, reenviarEmailVerificacao } from "@/services/useService";
import { getUserData } from "@/services/userService";
import { saveUser, getUser, removeUser } from "@/services/storageService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const userSalvo = await getUser();
      if (userSalvo) setUser(userSalvo);
      setLoading(false);
    }
    loadUser();
  }, []);

  async function signIn(email, senha) {
  try {
    const cred = await login(email, senha);
    const firebaseUser = cred.user;
    const uid = firebaseUser.uid;

     if (!firebaseUser.emailVerified) {
      return { success: false, message: "NoVerifiedEmail", user: firebaseUser };
    }

    const userDados = await getUserData(uid);
    const DadosDoUsuario = { uid, email, ...userDados };

    setUser(DadosDoUsuario);
    await saveUser(DadosDoUsuario);

    return { success: true, message: "Seja Bem Vindo/a!" };
  } catch (error) {
    let msg = "";
    switch (error.code) {
      case "auth/user-not-found":
        msg = "Usuário não encontrado.";
        break;
      case "auth/wrong-password":
        msg = "Senha incorreta.";
        break;
      case "auth/invalid-email":
        msg = "Formato de email inválido.";
        break;
      case "auth/user-disabled":
        msg = "Esta conta foi desativada.";
        break;
      case "auth/too-many-requests":
        msg = "Muitas tentativas. Tente novamente mais tarde.";
        break;
      default:
        msg = "Erro ao entrar: " + error.message;
    }

    return { success: false, message: msg };
  }
}

  async function signOut() {
    await logoutOut();
    setUser(null);
    await removeUser();
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);