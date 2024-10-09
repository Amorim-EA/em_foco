import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {
    getCurrentPositionAsync,
    requestForegroundPermissionsAsync
} from 'expo-location';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../../components/Button';
import ButtonIcon from '../../../components/ButtonIcon';
import RederizarMapa from '../../../components/Mapa';
import { AuthContext } from '../../../contexts/AuthContext';
import { postFoco } from '../../../services/apiFoco';



export default function Notificar() {
    const { user } = useContext(AuthContext);

    const [isSelected, setIsSelected] = useState(false);
    const [location, setLocation] = useState('');
    const [descricao, setDescricao] = useState()
    const [author, setAuthor] = useState('');
    const [imageFile, setImageFile] = useState()
    
    // Capturar Localização
    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync(); 
        if (granted) {
          const currentPosition = await getCurrentPositionAsync();
          setLocation(currentPosition);
          Alert.alert(location);
        }
    }

    const CapturarLocalizacao = async () => {
        if(isSelected) {
            await requestLocationPermissions();
        }
    }

    useEffect(() => {
         CapturarLocalizacao()
    }, [isSelected])

    // fim

    const handlePickerCamera = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            Alert.alert(
                'Permissão necessária',
                'Permita que sua aplicação acesse a câmera.'
            );
            return;
        }

        const { assets, canceled } = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            quality: 1,
        });

        if (canceled) {
            Alert.alert('Operação cancelada', 'Você cancelou a captura de imagem.');
        } else {
            const filename = assets[0].uri.substring(assets[0].uri.lastIndexOf('/') + 1);
            const extend = filename.split('.')[1];
            setImageFile({
                name: filename,
                uri: assets[0].uri,
                type: 'image/' + extend,
            })
            console.log(imageFile.uri)
        }
    };

    const handlePickerGaleria = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            Alert.alert(
                'Permissão necessária',
                'Permita que sua aplicação acesse as imagens da galeria.'
            );
            return;
        }

        const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            quality: 1,
        });

        if (canceled) {
            Alert.alert('Operação cancelada', 'Você cancelou a seleção de imagem.');
        } else {
            const filename = assets[0].uri.substring(assets[0].uri.lastIndexOf('/') + 1);
            const extend = filename.split('.')[1];
            setImageFile({
                name: filename,
                uri: assets[0].uri,
                type: 'image/' + extend,
            })
            console.log(imageFile.uri)
        }
    }
    

    const handleNotificar = async () => {
        if (!descricao || !location || !location.coords.longitude || !location.coords.latitude || !imageFile) {
            Alert.alert('Por favor, preencha todos os campos e adicione a imagem.');
            return;
        }
        setAuthor(user.name);
        const foco = {
            descricao,
            longitude: location.coords.longitude, 
            latitude: location.coords.latitude,
            imageFile: imageFile,
            cidadao: author
        };

       console.log(foco)
    
        const result = await postFoco(foco);
    
        if (result) {
            Alert.alert('Foco enviado com sucesso!');
            setDescricao('');
            setLocation(null);
            setIsSelected(false);
            setimageFile(null);
        } else {
            Alert.alert('Erro ao enviar foco. Tente novamente.');
        }
    };


    //longitude={location.coords.longitude} latitude={location.coords.latitude}

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
                        value={descricao}
                        onChangeText={value => setDescricao(value)} 
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
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />

                 <RederizarMapa /> 

                <View style={styles.containerCamera}>
                    <ButtonIcon
                        texto="Tirar foto"
                        icon={<Feather name="camera" size={24} color="white" />}
                        onPress={handlePickerCamera} 
                        style={styles.buttonCameraBlue} 
                        textStyle={styles.buttonText} 
                    />
                    <ButtonIcon
                        texto="Fazer upload"
                        icon={<Feather name="upload" size={24} color="white" />}
                        onPress={handlePickerGaleria} 
                        style={styles.buttonCameraBlue}
                        textStyle={styles.buttonText} 
                    />

                    <View style={styles.imageWrapper}> 
                        {imageFile && (
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: imageFile.uri }} style={styles.image} />
                                <Button 
                                    texto="Cancelar imagem"
                                    onPress={() => setImageFile(null)} 
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
                        onPress={() => handleNotificar} 
                        style={styles.buttonEnviar} 
                        textStyle={styles.customText} 
                    />
                   <Button
                        texto="Cancelar" 
                        onPress={() => {
                            setDescricao('');
                            setIsSelected(false);
                            setImageFile(null);
                            setLocation(null)
                        }}
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
        alignItems: 'center',
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
        width: "100%",
    },
    imageWrapper: {
        marginTop: 20,
        alignItems: 'center',
        width: 250,
        height: 250,
        backgroundColor: '#d9d9d9',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
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
