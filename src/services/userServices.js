import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const createUserData = async (user) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, user.email, user.password);
   
    const q = query(collection(db, "usuarios"), where("cpf", "==", user.cpf));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      throw new Error("CPF já cadastrado");
    }

    await sendEmailVerification(cred.user);

    const uid = cred.user.uid;
    const newUser = {
      uid,
      name: user.name,
      email: user.email,
      password: user.password,
      cpf: user.cpf,
      role: "cidadao"
    };
    await setDoc(doc(db, "usuarios", uid), {
      ...newUser,
      createdAt: serverTimestamp(),
    });

    return { success: true, message: "Cadastro realizado com sucesso! Verifique seu e-mail." };
  } catch (error) {
    let message = "Erro desconhecido";
    if (error.code === "auth/email-already-in-use") {
      message = "Este e-mail já está cadastrado.";
    } else if (error.code === "auth/invalid-email") {
      message = "Formato de e-mail inválido.";
    } else if (error.code === "auth/weak-password") {
      message = "A senha deve ter pelo menos 6 caracteres.";
    } else if (error.message.includes("CPF já cadastrado")) {
      message = "Este CPF já está cadastrado.";
    }

    return { success: false, message };
  }
};

export const getUserData = async (uid) => {
  const userRef = doc(db, "usuarios", uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    return snap.data();
  } else {
    return null;
  }
}

export const reenviarEmailVerificacao = async (user) => {
  try {
    await sendEmailVerification(user);
  } catch (error) {
    console.log("Erro ao reenviar verificação:", error.message);
  }
}

export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return await signOut(auth);
};