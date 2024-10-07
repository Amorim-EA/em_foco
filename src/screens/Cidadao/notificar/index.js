import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../../components/Button';
import ButtonIcon from '../../../components/ButtonIcon';
import RederizarMapa from '../../../components/Mapa';
import { postFoco } from '../../../services/apiFoco'; // Importe sua função para enviar os dados

export default function Notificar() {
    const [foco, setFoco] = useState({
        descricao: '',
        longitude: '',
        latitude: '',
        cidadao: '',
        imageUri: null,
        isSelected: false,
    });

    const requestCameraPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Você precisa conceder permissão para usar a câmera!');
        }
        return status === 'granted';
    };

    const requestGalleryPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Você precisa conceder permissão para acessar a galeria!');
        }
        return status === 'granted';
    };

    const adicionarImagem = (uri) => {
        setFoco((prev) => ({ ...prev, imageUri: uri }));
    };

    const obterImagemCam = async () => {
        const hasPermission = await requestCameraPermission();
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
        const hasPermission = await requestGalleryPermission();
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

    const removerImagem = () => {
        setFoco((prev) => ({ ...prev, imageUri: null })); // Remove a imagem
    };

    const handle = async () => {
        const { descricao, isSelected, imageUri } = foco; // Desestrutura os valores do estado
        if (!descricao || !isSelected || !imageUri) {
            Alert.alert('Por favor, preencha todos os campos e adicione ao menos uma imagem.');
            return;
        }
  
        // Cria um objeto para enviar
        const focoData = {
            descricao,
            isSelected,
            imageUri,
        };

        // Envia os dados para a API
        const result = await postFoco(focoData);

        if (result) {
            Alert.alert('Foco enviado com sucesso!');
            // Limpa o formulário após o envio
            setFoco({ descricao: '', isSelected: false, imageUri: null });
        } else {
            Alert.alert('Erro ao enviar foco. Tente novamente.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#ecf0f1' }}>
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
                        value={foco.descricao} // Atualiza para usar foco
                        onChangeText={(text) => setFoco((prev) => ({ ...prev, descricao: text }))} // Atualiza o estado
                    />
                </View>

                <CheckBox
                    title="Capturar minha localização"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={foco.isSelected} // Atualiza para usar foco
                    onPress={() => setFoco((prev) => ({ ...prev, isSelected: !prev.isSelected }))} // Atualiza o estado
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />
                
                <RederizarMapa />

                {/* Camera */} 
                <View style={styles.containerCamera}>
                    <ButtonIcon
                        texto="Tirar foto"
                        icon={<Feather name="camera" size={24} color="white" />}
                        onPress={obterImagemCam} 
                        style={styles.buttonCameraBlue} 
                        textStyle={styles.buttonText} 
                    />
                    <ButtonIcon
                        texto="Fazer upload"
                        icon={<Feather name="upload" size={24} color="white" />}
                        onPress={obterImagemGaleria} 
                        style={styles.buttonCameraBlue}
                        textStyle={styles.buttonText} 
                    />

                    <View style={styles.imageWrapper}> 
                        {foco.imageUri && ( // Renderiza a imagem apenas se existir
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: foco.imageUri }} style={styles.image} />
                                <Button 
                                    texto="Cancelar"
                                    onPress={removerImagem} 
                                    style={styles.buttonCameraRed}
                                    textStyle={styles.buttonText} 
                                />
                            </View>
                        )}
                    </View>
                </View>
                            
                <View style={styles.buttonWrapper}>
                    <Button
                        texto="Enviar" 
                        onPress={handle} 
                        style={styles.buttonEnviar} 
                        textStyle={styles.customText} 
                    />
                    <Button
                        texto="Cancelar" 
                        onPress={() => setFoco({ descricao: '', isSelected: false, imageUri: null })} // Cancela e limpa o formulário
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
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
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
    imageWrapper: {
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
