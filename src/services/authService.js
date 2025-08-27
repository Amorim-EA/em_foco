import {
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { Alert } from "react-native";
import { auth } from "./firebaseConfig";

// Criar conta
const registerUser = async () => {
  try {   
    return await createUserWithEmailAndPassword(auth, email, senha);
  } catch (error) {
    Alert.alert(error)
  }
}

// Login
const loginUser = async (email, password) => {
  try{
    return await signInWithEmailAndPassword(auth, email, password);
  } catch(error) {
    Alert.alert(error)
  }
};

// Logout
const logoutUser = async () => {
  return await signOut(auth);
};

export { loginUser, logoutUser, registerUser };
