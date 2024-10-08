import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListaAgente({ focos, navigation }) {
    return (
        <View style={styles.container}>
            {focos?.map((foco) => (
                <View key={foco.id} style={styles.card}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Concluir', { foco })}
                    >
                        <View style={styles.cardzinho}>
                            <Image 
                                source={{ uri: foco.imagem }} 
                                style={styles.image} 
                            />
                            <Text style={styles.description}>{foco.description}</Text>
                            {foco.status === 'aberto' ? ( 
                                <Feather name="check" size={24} color="green" />
                            ) : (
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
        elevation: 2,
        shadowColor: '#000',
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
    description: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
});
