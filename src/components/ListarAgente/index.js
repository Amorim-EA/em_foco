import { Feather, FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

export default function ListaAgente({ focos, fetchFocos, navigation }) {
    const { user } = useContext(AuthContext);
    
    useFocusEffect(
        useCallback(() => {
            fetchFocos(user.token);
        }, [])
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#ecf0f1', paddingBottom: 25, paddingTop: 4 }}>
            {focos?.map((foco, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.cardzinho}>
                        <Image
                            source={{ uri: `https://api-emfoco.onrender.com/api/foco/image/${foco.image}` }}
                            style={styles.imagem}
                        />
                        <Text style={styles.description}>{foco.description}</Text>
                        {foco.status === 'aberto' ? (
                            <FontAwesome name="warning" size={24} color="orange" />
                        ) : (
                            <Feather name="check" size={30} color="green" />
                        )}
                    </View>
                    {foco.status === 'aberto' && (
                        <Pressable
                            onPress={() => navigation.navigate('Concluir', { id: foco._id })}
                        >
                            <Text style={styles.textButton}>Concluir Foco</Text>
                        </Pressable>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '98%',
        marginBottom: 16,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
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
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        textAlign: 'left',
        flex: 1,
        marginLeft: 10,
        maxWidth: '70%',
    },
    textButton: {
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
    },
});
