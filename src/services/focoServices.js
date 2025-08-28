import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { uploadImage } from "./storageService";

export const createFocoData = async (foco) => {
  const url1 = await uploadImage(foco.imagem, `foco_${Date.now()}_1`);

  const docRef = await addDoc(collection(db, "focos"), {
    registradoBy: foco.uid,
    resolvidoBy: '',
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
 
export const getFocos = async (role, uid, cidade) => {
  try {
    let focosQuery;

    if (role === "cidadao") {
      focosQuery = query(
        collection(db, "focos"),
        where("registradoBy", "==", uid)
      );
    } else {
      focosQuery = query(
        collection(db, "focos"),
        where("cidade", "==", cidade)
      );
    }

    const querySnapshot = await getDocs(focosQuery);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

  } catch (error) {
    console.error("Erro ao buscar focos:", error);
    return [];
  }
};