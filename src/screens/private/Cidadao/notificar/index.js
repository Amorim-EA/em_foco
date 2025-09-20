import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import RenderizarMapa from '@/components/Mapa';
import { AuthContext } from '@/contexts/AuthContext';
import { createFocoData } from '@/services/focoServices';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { getCoordernadas, getAddressFromCoords } from './services/locationService';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TirarFoto, PegarFoto } from '@/services/imageService';
import { Ionicons } from '@expo/vector-icons';

export default function Notificar({ navigation }) {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [location, setLocation] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [region, setRegion] = useState({
        latitude: -22.238,
        longitude:  -53.3437,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    });

    useEffect(() => {
        const CapturarLocalizacao = async () => {
            if (isSelected) {
                console.log('Capturando localizacao!');
                const coords = await getCoordernadas();
                setLocation(coords);
                setRegion({...region, coords})
                console.log(location);
            } else {
                console.log('Localizacao apagada!');
                setLocation(null);
            }
        };
        CapturarLocalizacao();
    }, [isSelected]);

    const handlePickImage = async () => {
        const foto = await PegarFoto();
        setImageFile(foto);
    }

    const handletakePhoto = async () => {
        const foto = await TirarFoto();
        setImageFile(foto);
    }

    const limparForm = () => {
        setDescricao('');
        setLocation(null);
        setIsSelected(false);
        setImageFile(null);
    }

    const handleNotificar = async () => {
        if (!descricao) {
          Alert.alert('Preencha a descrição');
          return;
        }
        if (!location) {
            Alert.alert('Precisamos da sua localização');
            return;
        }
        if (!imageFile) {
            Alert.alert('Precisamos da imagem');
            return;
        }
      
        setLoading(true);

      try {
        const isConnected = await checkConnection();

        const cidade = isConnected ? await getAddressFromCoords(location) : user.cidade;
      
        const focoData = {
            usuario: user.uid,
            titulo,
            descricao,
            localizacao: location,
            imagem: imageFile.uri,
            cidade,
        }

        const response = await createFocoData(focoData);  

        if (!response.success) {
            throw new Error('Erro ao criar foco');
        }
                
        console.log("Foco cadastrado com sucesso! ID: " + response.id);
        Alert.alert("Sucesso!", "Notificação enviada com sucesso. Agradecemos sua colaboração!");
        limparForm();
        navigation.navigate('Listagem');
      } catch (error) {
        Alert.alert('Erro ao enviar foco. Tente novamente.');
        console.log("Ocorreu um erro ao enviar o foco:", error);
      } finally {
        setLoading(false);
      }
    }

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
                        placeholderTextColor="#666" 
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
                    <Ionicons name="location-sharp" size={24} color="white" />
                    <Text style={styles.paragraph}>Capturar minha localização</Text>
                </View>

                <RenderizarMapa localizacao={location} region={region} /> 

                <View style={styles.containerCamera}>
                    <ButtonIcon
                        texto="Tirar foto"
                        icon={<Ionicons name="camera" size={24} color="white" /> />}
                        onPress={handletakePhoto} 
                        style={styles.buttonCameraBlue} 
                        textStyle={styles.buttonText} 
                    />
                    <ButtonIcon
                        texto="Fazer upload"
                        icon={<Feather name="upload" size={24} color="white" />}
                        onPress={handlePickImage} 
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
                <ButtonIcon
                    texto={loading ? 'Enviando...' : 'Enviar'}
                    icon={<Ionicons name="location-sharp" size={24} color="white" />}
                    onPress={handleNotificar}
                    disabled={loading}
                    style={styles.buttonEnviar}
                    textStyle={styles.customText}
                />
                   <Button
                        texto="Cancelar" 
                        onPress={() => {
                            limparForm();
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