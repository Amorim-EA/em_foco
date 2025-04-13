import Button from '@/components/Button';
import RenderizarMapa from '@/components/Mapa';
import { AuthContext } from '@/contexts/AuthContext';
import { getOneFoco, updateFoco } from '@/services/apiFoco';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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
            const data = await getOneFoco(route.params.id, user.token); 
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
                agente: user.name,
            };
            await updateFoco(route.params.id, updateData, user.token);
            Alert.alert("Foco alterado com sucesso!");
            navigation.navigate('Listagem');
        } catch {
            Alert.alert("Erro", "Ocorreu um erro ao alterar o foco.");
        }
    };

    return (
        <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#ecf0f1', paddingBottom: 25, paddingTop: 4 }}>
        <View style={styles.container}>
            <Text style={styles.title}>Resolver foco da dengue</Text>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>O que há no local</Text>
                    <Text style={styles.textDescricao}>
                        {descricao}   
                    </Text>
                </View>

                <RenderizarMapa localizacao={location} region={region} />

                <Image source={{ uri: `https://api-emfoco.onrender.com/api/foco/image/${uri}` }} style={styles.image} />
                
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>O que foi feito?</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={acao}
                        onChangeText={value => setAcao(value)} 
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button 
                        texto="Enviar"
                        onPress={() => updateForm()} 
                        style={styles.buttonEnviar}
                        textStyle={styles.buttonText}
                    />
                    <Button 
                        texto="Cancelar"
                        onPress={() => 
                            navigation.navigate('Listagem')
                        } 
                        style={styles.buttonCancelar}
                        textStyle={styles.buttonText} />
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ecf0f1',
    },
    title: {
        fontSize: 33,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textDescricao: {

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
        fontSize: 20,
        fontWeight: 'bold',
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
    image: {
        width: '100%',
        height: 280,
        marginVertical: 16,
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
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});
