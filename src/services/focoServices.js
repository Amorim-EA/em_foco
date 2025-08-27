import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { uploadImage } from "./storageService";

const createFocoData = async (foco) => {
  const url1 = await uploadImage(foco.imagem, `foco_${Date.now()}_1`);

  const docRef = await addDoc(collection(db, "focos"), {
    usuario: foco.uid,
    agente: '',
    titulo: foco.titulo,
    descricao: foco.descricao,
    localizacao: foco.localizacao,
    cidade: foco.cidade,
    status: "aberto",
    imagem: url1,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

const getAllFocos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "focos"));
    return querySnapshot;
  } catch (error) {
    console.log(error)
  }
}

export { createFocoData, getAllFocos };
