import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const storage = getStorage();

export const uploadImage = async (uri, nomeArquivo) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const storageRef = ref(storage, `focos/${nomeArquivo}`);
  await uploadBytes(storageRef, blob);

  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const PegarFoto = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert('Operação cancelada', 'Você cancelou a seleção de imagem.');
    return;
  }

  const asset = result.assets[0];
  const filename = asset.uri.substring(asset.uri.lastIndexOf('/') + 1);
  const extend = filename.split('.').pop();

  return({
    name: filename,
    uri: asset.uri,
    type: 'image/' + extend,
  });
};

export const TirarFoto = async () => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (!permission.granted) {
    Alert.alert('Permissão negada para usar a câmera');
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert('Operação cancelada', 'Você cancelou a captura da imagem.');
    return;
  }

  const asset = result.assets[0];
  const filename = asset.uri.substring(asset.uri.lastIndexOf('/') + 1);
  const extend = filename.includes('.') ? filename.split('.').pop() : 'jpg';

  return({
    name: filename,
    uri: asset.uri,
    type: 'image/' + extend,
  });
};