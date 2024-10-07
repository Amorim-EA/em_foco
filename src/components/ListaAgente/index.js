import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListaAgente({ focos }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {focos?.map((foco, index) => (
                <View key={index} style={styles.card}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(/*pagina concluirfoco*/'', { focoId: foco.id })} // Navegação para a página de alteração
                    >
                        <View style={styles.cardzinho}>
                            <Image source={foco.imagem} style={styles.image} />
                            <Text style={styles.description}>{foco.description}</Text>
                            {status  === 'aberto' ? ( 
                                  <Feather name="check" size={24} color="green" />
                                ): (
                                  <FontAwesome name="warning" size={30} color="orange" />
                                )}
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        elevation: 2, // Sombras em Android
        shadowColor: '#000', // Sombras em iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    cardzinho: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
});
