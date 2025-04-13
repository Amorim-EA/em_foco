import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import RenderizarMapa from '@/components/Mapa';
import { AuthContext } from '@/contexts/AuthContext';
import { postFoco } from '@/services/apiFoco';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, Linking, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Notificar() {
    const { user } = useContext(AuthContext);

    const [isSelected, setIsSelected] = useState(false);
    const [location, setLocation] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [author, setAuthor] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [region, setRegion] = useState({
        latitude: -22.238,
        longitude:  -53.3437,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    });
    
    // Capturar Localização
    async function solicitarPermissaoLocalizacao(){
        const { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status === 'granted') {
          let userLocation = await Location.getCurrentPositionAsync({});
          setLocation({
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
          });
          setRegion({
              ...region,
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
          });
        } else {
          Alert.alert(
            'Permissão negada',
            'Você precisa permitir a localização para acessar este recurso.',
            [
              { text: 'Cancelar', style: 'cancel' },
              {
                text: 'Abrir Configurações',
                onPress: () => {
                  if (Platform.OS === 'ios') {
                    Linking.openURL('app-settings:');
                  } else {
                    Linking.openSettings();
                  }
                },
              },
            ]
          );
        }
      };

    const CapturarLocalizacao = async () => {
        if (isSelected) {
            console.log('Capturando localizacao!')
            await solicitarPermissaoLocalizacao();
            console.log(location)
        } else {
            console.log('Localizacao apagada!')
            setLocation(null)
        }
    };

    useEffect(() => {
        CapturarLocalizacao();
    }, [isSelected]);

    const handlePickerCamera = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            Alert.alert('Permissão necessária', 'Permita que sua aplicação acesse a câmera.');
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
            });
        }
    };

    const handlePickerGaleria = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            Alert.alert('Permissão necessária', 'Permita que sua aplicação acesse as imagens da galeria.');
            return;
        }

        const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaType,
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
            });
        }
    };

    function limparForm(){
        setDescricao('');
        setLocation(null);
        setIsSelected(false);
        setImageFile(null);
    }

    const handleNotificar = async () => {
        if (!descricao || !location || !location.longitude || !location.latitude || !imageFile) {
            Alert.alert('Por favor, preencha todos os campos e adicione a imagem.');
            return;
        }
        setAuthor(user.name);

        // Criar um FormData para enviar os dados e o arquivo de imagem
        const formData = new FormData();
        formData.append('description', descricao);
        formData.append('longitude', location.longitude);
        formData.append('latitude', location.latitude);
        formData.append('cidadao', author);
        formData.append('imageFile', {
            uri: imageFile.uri,
            name: imageFile.name,
            type: imageFile.type
        });
        
        const result = await postFoco(formData, user.token); // Fazendo o post com FormData
        
        if (result) {
            Alert.alert('Foco enviado com sucesso!');
            limparForm()
            navigation.navigate('Listagem')
        } else {
            Alert.alert('Erro ao enviar foco. Tente novamente.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#ecf0f1' }}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Mapear foco</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Descreva o que há no local</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={2}
                        textAlignVertical="top"
                        value={descricao}
                        onChangeText={value => setDescricao(value)} 
                    />
                </View>

                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isSelected}
                        onValueChange={() => {setIsSelected(!isSelected)}}
                        color={isSelected ? '#28a745' : undefined}
                    />
                    <Text style={styles.paragraph}>Capturar minha localização</Text>
                </View>

                <RenderizarMapa localizacao={location} region={region} /> 

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
                        onPress={handleNotificar}
                        style={styles.buttonEnviar} 
                        textStyle={styles.customText} 
                    />
                   <Button
                        texto="Cancelar" 
                        onPress={() => {
                            setDescricao('');
                            setIsSelected(false);
                            setImageFile(null);
                            setLocation(null);
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
        marginBottom: 20,
    },
    title: {
        fontSize: 33,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputWrapper: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    input: {
        height: 80,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: '500',    
    },
    containerCamera: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        width: "100%",
    },
    imageWrapper: {
        marginTop: 25,
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#d9d9d9',
        marginBottom: 40,
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
        backgroundColor: '#28a745'
    },
    buttonCancelar: {
        width: '45%',
        borderRadius: 4,
        backgroundColor: 'red'
    }
});