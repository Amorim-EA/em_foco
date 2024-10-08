import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import RenderizarMapa from '../../../components/Mapa';
import { AuthContext } from '../../../contexts/AuthContext';
import { getOneFoco, updateFoco } from '../../../services/apiFoco';

export default function ConcluirFoco({ route, navigation }) {
    const { user } = useContext(AuthContext);

    const [descricao, setDescricao] = useState('')
    const [acao, setAcao] = useState('')

    const [foco, setFoco] = useState({});
    
    const { id } = route.params;

    useEffect(() => {
        async function focoData()  {
            await getOneFoco(id);
        }
        setFoco({ ...focoData });
    }, [id]);

    const updateForm = async () => {
        try {
            const acoesFoco = {
                acao: acao,
                author: use.name
            }
            await updateFoco(acoesFoco, id);  
            Alert.alert("Sucesso", "Foco alterado com sucesso!");

            navigation.navigate('Listagem');
        } catch {
            Alert.alert("Erro", "Ocorreu um erro ao alterar o foco.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Concluir Foco</Text>
            <View style={styles.form}>
            <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Mensagem</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={descricao}
                        onChangeText={value => setFoco(value)} 
                    />
                </View>

                <RenderizarMapa latitude={foco.latitude} longitude={foco.longitude} />

                {foco.imagem && <Image source={{ uri: foco.imagem }} style={styles.image} />}

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Ações Executadas</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={descricao}
                        onChangeText={value => setDescricao(value)} 
                    />
                </View>

                <Button title="Concluir!" onPress={updateForm} />
                <Button title="Cancelar!" onPress={() => navigation.navigate('Listagem')} />
            </View>
        </View>
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
});