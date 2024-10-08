import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ListaAgente({ focos, navigation }) {
    return (
        <View style={styles.container}>
            {focos?.map((foco) => (
                <View key={foco.id} style={styles.card}>
                        <View style={styles.cardzinho}>
                            <Image 
                                source={{ uri: `https://emfocoapi.onrender.com/api/foco/image/${foco.image}`}} 
                                style={styles.image} 
                            />
                            <Text style={styles.description}>{foco.description}</Text>
                            {foco.status === 'aberto' ? ( 
                                <FontAwesome name="warning" size={24} color="orange" />
                            ) : (
                                <Feather name="check" size={30} color="green" />
                            )}
                        </View>
                        <Pressable
                            onPress={() => navigation.navigate('Concluir', { id: foco.id })}
                        >
                            <Text style={styles.textButton}>Concluir Foco</Text>
                        </Pressable>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center' 
    },
    cardzinho: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
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
    textButton: {
        fontWeight: '600',
        marginTop: 10
    }
});