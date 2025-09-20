import Button from '@/components/Button';
import RenderizarMapa from '@/components/Mapa';
import { useAuth } from '@/contexts/AuthContext';
import { getOneFoco, updateFoco, addComment, deleteComment } from '@/services/focoServices';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function ConcluirFoco({ route, navigation }) {
    const { user } = useAuth();

    const [descricao, setDescricao] = useState('');
    const [location, setLocation] = useState(null);
    const [comment, setComment] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [imageError, setImageError] = useState(false);
    const [foco, setFoco] = useState({});
    const [region, setRegion] = useState({
        latitude: -22.238,
        longitude: -53.3437,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    });

    // Novos estados
    const [loading, setLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        async function focoData() {
            setLoading(true);
            try {
                const data = await getOneFoco(route.params.id);
                if (data) {
                    setFoco(data);
                    setDescricao(data.description);
                    setUrlImage(data.image);
                    setLocation(data.localizacao);

                    setRegion({
                        latitude: data.localizacao.latitude,
                        longitude: data.localizacao.longitude,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.04,
                    });
                    setImageError(false);
                }
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível carregar os dados do foco.');
            } finally {
                setLoading(false);
            }
        }

        focoData();
    }, [route.params.id]);

    const updateForm = async () => {
        try {
            const updateData = {
                status: 'resolvido',
                resolvidoBy: user.uid,
            };
            await updateFoco(route.params.id, updateData);
            Alert.alert("Foco alterado com sucesso!");
            confirmarResolucao
            Alert.alert(
                'Comfirmar',
                'Tem certeza que deseja resolver o foco?',
                [
                    { text: 'Não', style: 'cancel' },
                    { text: 'Sim', onPress: () => navigation.navigate('Listagem') },
                ]
            );
        } catch {
            Alert.alert("Erro", "Ocorreu um erro ao alterar o foco.");
        }
    };

    const handleDeleteComment = async (commentId) => {
        const result = await deleteComment(foco.id, commentId);
        if (result.success) {
            Alert.alert('Sucesso', result.message);
            const updatedFoco = await getOneFoco(foco.id);
            setFoco(updatedFoco);
        } else {
            Alert.alert('Erro', result.message);
        }
    };

    const ordenarComments = [...(foco.comments || [])].sort((a, b) => {
        return (b.data?.seconds || 0) - (a.data?.seconds || 0);
    });

    const renderItem = ({ item }) => (
        <View style={styles.commentItem}>
            <Text style={styles.commentText}>{item.mensagem}</Text>

            {user.role === "agente" && item.autorId === user.uid && (
                <Button
                    texto="Excluir"
                    onPress={() => handleDeleteComment(item.id)}
                    style={styles.buttonExcluir}
                    textStyle={styles.buttonText}
                />
            )}

            <Text style={styles.commentData}>
                {item.data?.toDate ? item.data.toDate().toLocaleString() : 'Data indisponível'}
            </Text>
        </View>
    );

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="green" />
            </View>
        );
    }

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

                    {imageError ? (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Não foi possível carregar a imagem.</Text>
                    ) : (
                        <Image source={{ uri: urlImage }} style={styles.image} onError={() => setImageError(true)} />
                    )}

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>O que foi feito?</Text>
                        <FlatList
                            style={styles.commentWrapper}
                            data={ordenarComments}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>

                    {user.role === 'agente' && (
                        <>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#666"
                                    multiline={true}
                                    numberOfLines={4}
                                    textAlignVertical="top"
                                    value={comment}
                                    onChangeText={value => setComment(value)}
                                    editable={!isSending}
                                />
                                <Button
                                    texto={isSending ? "Enviando..." : "Enviar Comentário"}
                                    onPress={async () => {
                                        if (comment.length < 7) {
                                            Alert.alert('Erro', 'O comentário deve ter no mínimo 7 caracteres.');
                                        } else {
                                            setIsSending(true);
                                            try {
                                                await addComment(foco.id, {
                                                    id: uuidv4(),
                                                    autorId: user.uid,
                                                    mensagem: comment,
                                                });
                                                setComment('');
                                                const updatedFoco = await getOneFoco(foco.id);
                                                setFoco(updatedFoco);
                                            } catch (error) {
                                                Alert.alert('Erro', 'Erro ao enviar comentário.');
                                            } finally {
                                                setIsSending(false);
                                            }
                                        }
                                    }}
                                    style={styles.buttonEnviar}
                                    textStyle={styles.buttonText}
                                    disabled={isSending}
                                />
                            </View>

                            <View style={styles.buttonWrapper}>
                                <Button
                                    texto="Resolver Foco"
                                    onPress={() => updateForm()}
                                    style={styles.buttonEnviar}
                                    textStyle={styles.buttonText}
                                />
                                <Button
                                    texto="Cancelar"
                                    onPress={confirmCancel}
                                    style={styles.buttonCancelar}
                                    textStyle={styles.buttonText}
                                />
                            </View>
                        </>
                    )}
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
    commentWrapper: {
        maxHeight: 300,
    },
    commentText: {
        fontSize: 16,
        marginBottom: 5,
    },
    commentData: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
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
    buttonExcluir: {
        backgroundColor: '#cc3333',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
});
