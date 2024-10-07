import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getFoco, updateFoco } from '../../../services/apiFoco';

export default function ComcluirFoco() {
    const [foco, setFoco] = useState({
        descricao: '',
        acao: '',
        agente: '',
    });
  
    useEffect(() => {
        // LISTAGEM AGENT ! AO APERTAR EM UM CARD DE FOCO TRAZ PRA CA E PEGA O ID DO FOCO QUE PRESSIONOU
        const findFoco = async () => {
            const focoFind = await getFoco(focoId);

        // CARREGA AS INFORMAÇÕES DO FOCO UNICO
            setFoco({ ...foco, descricao: focoFind.descricao, email: focoFind.email });
        };
        findFoco();
    }, []);

    const updateForm = async () => {
        try {
            await updateFoco(foco, focoId);
            Alert.alert("Sucesso", "Foco alterado com sucesso!");

        // volta para listagem 
        } catch {
            Alert.alert("Erro", "Ocorreu um erro ao alterar o foco.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>concluir Foco</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome"
                    value={foco.descricao}
                    onChangeText={(value) => setFoco({ ...foco, descricao: value })}
                />

                {
                  /*
                  mapa parametros   foco.longitude && foco.latitude
                  */
                }

                <Image source={foco.imagem} style={styles.image} />

                <TextInput
                    style={styles.input}
                    placeholder="Digite a senha"
                    value={foco.acao}
                    onChangeText={(value) => setFoco({ ...foco, acao: value })}
                />

                <Button title="Concluir !" onPress={updateForm} />
                <Button title="Cancelar !" onPress={console.log('voltar')} />

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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom: 12,
    },
});
