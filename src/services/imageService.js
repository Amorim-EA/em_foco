import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const uploadImage = async (uri, nomeArquivo) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const storageRef = ref(storage, `focos/${nomeArquivo}`);
  await uploadBytes(storageRef, blob);

  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};