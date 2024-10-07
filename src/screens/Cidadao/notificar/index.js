import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../../components/Button';
import ButtonIcon from '../../../components/ButtonIcon';
import RederizarMapa from '../../../components/Mapa';

export default function Notificar() {
    const [descricao, setDescricao] = useState('');
    const [isSelected, setIsSelected] = useState(false); 


    //Cam
    const [imageUris, setImageUris] = useState([]);
    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);

    const requestCameraPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        setCameraPermission(status === 'granted');
        if (status !== 'granted') {
          Alert.alert('Você precisa conceder permissão para usar a câmera!');
        }
        return status === 'granted';
      };
    
      const requestGalleryPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setGalleryPermission(status === 'granted');
        if (status !== 'granted') {
          Alert.alert('Você precisa conceder permissão para acessar a galeria!');
        }
        return status === 'granted';
      };
    
      const adicionarImagem = (uri) => {
        if (imageUris.length < 2) {
          setImageUris((prev) => [...prev, uri]);
        }
      };
    
      const obterImagemCam = async () => {
        const hasPermission = cameraPermission || await requestCameraPermission();
        if (hasPermission) {
          const result = await ImagePicker.launchCameraAsync();
          if (!result.canceled) {
            const uri = result.assets[0]?.uri;
            if (uri) {
              adicionarImagem(uri);
            } else {
              Alert.alert('Erro ao obter a URI da imagem da câmera.');
            }
          }
        }
      };
    
      const obterImagemGaleria = async () => {
        const hasPermission = galleryPermission || await requestGalleryPermission();
        if (hasPermission) {
          const result = await ImagePicker.launchImageLibraryAsync();
          if (!result.canceled) {
            const uri = result.assets[0]?.uri;
            if (uri) {
              adicionarImagem(uri);
            } else {
              Alert.alert('Erro ao obter a URI da imagem da galeria.');
            }
          }
        }
      };
    
      const removerImagem = (uri) => {
        setImageUris((prev) => prev.filter((imageUri) => imageUri !== uri));
      };
    
      const verificarLimiteEExecutar = (callback) => {
        if (imageUris.length >= 2) {
          Alert.alert('Você só pode adicionar até duas imagens.');
        } else {
          callback();
        }
      };
      // Final Cam

    const handle = () => {
        return null;
    };

    return (
        <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#ecf0f1'}}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Notificar Foco</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Mensagem</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva uma breve descrição"
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                </View>

                <CheckBox
                    title="Capturar minha localização"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected}
                    onPress={() => setIsSelected(!isSelected)}
                    containerStyle={{ backgroundColor: 'tranparent', borderWidth: 0 }}
                />
                
                <RederizarMapa />

                {/* Camera */} 
                <View style={styles.containerCamera}>
                    <ButtonIcon
                        texto="Tirar foto"
                        icon={<Feather name="camera" size={24} color="white" />}
                        onPress={() => verificarLimiteEExecutar(obterImagemCam)} 
                        style={styles.buttonCameraBlue} 
                        textStyle={styles.buttonText} 
                        />
                    <ButtonIcon
                        texto="Fazer upload"
                        icon={<Feather name="upload" size={24} color="white" />}
                        onPress={() => verificarLimiteEExecutar(obterImagemGaleria)} 
                        style={styles.buttonCameraBlue}
                        textStyle={styles.buttonText} 
                    />

                    <View style={styles.imageWrapper}> 
                        {
                        imageUris.map((uri, index) => (
                            <View key={index} style={styles.imageContainer}>
                            <Image source={{ uri }} style={styles.image} />
                            <Button 
                                texto="Cancelar"
                                onPress={() => removerImagem(uri)} 
                                style={styles.buttonCameraRed}
                                textStyle={styles.buttonText} 
                            />
                            </View>
                        ))
                      }
                    </View>
                </View>
                            
                <View style={styles.buttonWrapper} >
                    <Button
                        texto="Enviar" 
                        onPress={handle} 
                        style={styles.buttonEnviar} 
                        textStyle={styles.customText} 
                    />
                    <Button
                        texto="Cancelar" 
                        onPress={handle} 
                        style={styles.buttonCancelar} 
                        textStyle={styles.customText} 
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        width: '90%',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20
    },
    inputWrapper: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 100,
        borderColor: '#ccc',
        backgroundColor: '#d9d9d9',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    // Cam 
    containerCamera: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        width: '100%',
    },
    imageWrapper:{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
    },
    imageContainer: {
        width: '45%',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
    },
    placeholder: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    // com icone
    buttonCameraBlue: {
        width: '100%',
        padding: 12,
        backgroundColor: '#1351b4',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonCameraRed: {
        width: '100%',
        padding: 8,
        backgroundColor: '#dc3545',
        borderRadius: 5,
        alignItems: 'center',
    }, 
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    buttonWrapper: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    buttonEnviar: {
        width: '45%',
        borderRadius: 4,
        backgroundColor: 'green'
    },
    buttonCancelar: {
        width: '45%',
        borderRadius: 4,
        backgroundColor: 'red'
    }
});
