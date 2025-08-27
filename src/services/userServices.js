import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Criar usuário no Firestore
const createUserData = async (user) => {
  const userRef = doc(db, "usuarios", user.uid);
  await setDoc(userRef, {
    ...user,
    createdAt: serverTimestamp(),
    });
  return 'Cadastro realizado com sucesso!'
}

// Buscar dados do usuário
const getUserData = async (uid) => {
  const userRef = doc(db, "usuarios", uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    return snap.data();
  } else {
    return null;
  }
}

export { createUserData, getUserData };

