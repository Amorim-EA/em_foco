import { addDoc, updateDoc, getDoc, collection, doc, query, where, getDocs, serverTimestamp, arrayUnion } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { uploadImage } from "./imageService";

export const createFocoData = async (foco) => {
  try {
    const url1 = await uploadImage(foco.imagem, `foco_${Date.now()}_1`);

    const docRef = await addDoc(collection(db, "focos"), {
      registradoBy: foco.usuario,
      resolvidoBy: '',
      descricao: foco.descricao,
      localizacao: foco.localizacao,
      cidade: foco.cidade,
      status: "aberto",
      imagem: url1,
      comments: [],
      createdAt: serverTimestamp(),
    });

    return { success: true, id: docRef.id};
  } catch (error) {
    console.log("Erro ao cadastrar foco:", error);
    return { success: false };
  }
};
 
export const getAllFocos = async (role, uid, cidade) => {
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

export const getOneFoco = async (focoId) => {
  try {
    const focoRef = doc(db, "focos", focoId);
    const focoSnap = await getDoc(focoRef);

    if (focoSnap.exists()) {
      return { id: focoSnap.id, ...focoSnap.data() };
    } else {
      console.log("Foco não encontrado!");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar foco:", error);
    return null;
  }
};

export const updateFoco = async (focoId, updates) => {
  try {
    const focoRef = doc(db, "focos", focoId);

    const focoSnap = await getDoc(focoRef);
    
    if (!focoSnap.exists()) {
      return { success: false, message: "Foco não encontrado!" };
    }

    await updateDoc(focoRef, updates);

    return { success: true, message: "Foco atualizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao atualizar o foco:", error);
    return { success: false, message: "Erro ao atualizar o foco!" };
  }
};

export const addComment = async (focoId, comment) => {
  try {
    const focoRef = doc(db, "focos", focoId);
 
    const newComment = {...comment, data: serverTimestamp()};

    await updateDoc(focoRef, { comments: arrayUnion(newComment) });

    return { success: true, message: "Comentario adicionado com sucesso!" };
  } catch (error) {
    console.error("Erro ao atualizar o foco:", error);
    return { success: false, message: "Erro ao adicionar o comentario!" };
  }
};

export const deleteComment = async (focoId, commentId) => {
  try {
    const focoRef = doc(db, "focos", focoId);
    const focoSnap = await getDoc(focoRef);

    if (focoSnap.exists()) {
      const focoData = focoSnap.data();
      const comentarios = focoData.comments || [];

      const novosComentarios = comentarios.filter(comment => comment.id !== commentId);

      await updateDoc(focoRef, { comments: novosComentarios });

      return { success: true, message: "Comentário excluído com sucesso!" };
    } else {
      return { success: false, message: "Foco não encontrado." };
    }
  } catch (error) {
    console.error("Erro ao excluir comentário:", error);
    return { success: false, message: "Erro ao excluir o comentário." };
  }
};