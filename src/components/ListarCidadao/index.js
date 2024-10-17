import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ListaCidadao({ focos }) {
    return (
        <ScrollView style={styles.container}>
            {focos?.map((foco, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.cardzinho}>
                        <Image
                            source={{ uri: `http://192.168.15.84:3003/api/foco/image/${foco.image}` }}
                            style={styles.image}
                        />
                        <Text style={styles.description}>{foco.description}</Text>
                        {foco.status === 'fechado' ? (
                            <Feather name="check" size={24} color="green" />
                        ) : (
                            <FontAwesome name="warning" size={30} color="orange" />
                        )}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#ff5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center',
    },
    cardzinho: {
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
        borderRadius: 5,
    },
    description: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'left',
        flex: 1,
        marginLeft: 10,
    },
});
