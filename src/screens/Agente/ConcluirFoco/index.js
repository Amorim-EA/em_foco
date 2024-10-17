import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../../components/Button';
import RenderizarMapa from '../../../components/Mapa';
import { AuthContext } from '../../../contexts/AuthContext';
import { getOneFoco, updateFoco } from '../../../services/apiFoco';

export default function ConcluirFoco({ route, navigation }) {
    const { user } = useContext(AuthContext);

    const [descricao, setDescricao] = useState('');
    const [location, setLocation] = useState(null);
    const [acao, setAcao] = useState('');
    const [uri, setUri] = useState('')
    const [foco, setFoco] = useState({});
    const [region, setRegion] = useState({
        latitude: -22.238,
        longitude:  -53.3437,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    });
    
    useEffect(() => {
        async function focoData() {
            const data = await getOneFoco(route.params.id); 
            setFoco(data); 
            setDescricao(data.description); 
            setUri(data.image)
            setLocation({
                latitude: data.latitude,
                longitude: data.longitude,
            });
            setRegion({
                ...region,
                latitude: data.latitude,
                longitude: data.longitude,
            });
        }
        focoData();
    }, [route.params.id]);

    const updateForm = async () => {
        try {
            const updateData = {
                acao: acao,
                author: user.name,
            };
            await updateFoco(route.params.id, updateData);
            Alert.alert("Sucesso", "Foco alterado com sucesso!");
            navigation.navigate('Listagem');
        } catch {
            Alert.alert("Erro", "Ocorreu um erro ao alterar o foco.");
        }
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Remover Foco</Text>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Mensagem</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={descricao}
                        onChangeText={value => setDescricao(value)}
                    />
                </View>

                <Image source={{ uri: `http://192.168.15.84:3003/api/foco/image/${uri}` }} style={styles.image} />

                <RenderizarMapa  
                    localizacao={location} 
                    region={region} 
                />

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Ações Executadas:</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={acao}
                        onChangeText={value => setAcao(value)} 
                    />
                </View>

                <Button 
                    texto="Enviar"
                    onPress={() => updateForm()} 
                    style={styles.buttonEnviar}
                    textStyle={styles.buttonText}
                />
                <Button 
                    texto="Cancelar"
                    onPress={() => 
                        setImageFile(null)
                    } 
                    style={styles.buttonCancelar}
                    textStyle={styles.buttonText} />
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    form: {
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
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
    image: {
        width: 200,
        height: 200,
        marginVertical: 16,
    },
    buttonEnviar: {
        width: '100%',
        padding: 12,
        backgroundColor: '#1351b4',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonCancelar: {
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
});
