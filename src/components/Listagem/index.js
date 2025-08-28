import { Feather, FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, StyleSheet,} from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function Listagem({ focos, fetchFocos, navigation }) {
    const { user } = useAuth();
    
    useFocusEffect(
        useCallback(() => {
            fetchFocos();
        }, [])
    );

    return (
        <FlatList
            data={focos}
            keyExtractor={foco => foco.id}
            renderItem={({ foco }) => (
                <View key={index} style={styles.card}>
                    <View style={styles.cardzinho}>
                        <Image
                            source={{ uri: foco.image }}
                            style={styles.imagem}
                        />
                        <Text style={styles.description}>{foco.description}</Text>
                        {foco.status === 'aberto' ? (
                            <FontAwesome name="warning" size={24} color="orange" />
                        ) : (
                            <Feather name="check" size={30} color="green" />
                        )}
                    </View>
                    {foco.status === 'aberto' && user.role === 'agente' && (
                        <Pressable
                            onPress={() => navigation.navigate('Concluir', { id: foco._id })}
                        >
                            <Text style={styles.textButton}>Concluir Foco</Text>
                        </Pressable>
                    )}
                </View>
            )}
        />
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
  