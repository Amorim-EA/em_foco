import { Feather, FontAwesome } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ListaAgente({ focos, navigation }) {
    return (
        <View style={styles.container}>
            {focos?.map((foco, index) => (
                <View key={index} style={styles.card}>
                        <View style={styles.cardzinho}>
                        <Image source={{ uri: `http://localhost:3003/api/foco/image/${foco.image}`}} style={styles.imagem} />
                            <Text style={styles.description}>{foco.description}</Text>
                            {foco.status === 'aberto' ? ( 
                                <FontAwesome name="warning" size={24} color="orange" />
                            ) : (
                                <Feather name="check" size={30} color="green" />
                            )}
                        </View>
                        {foco.status === 'aberto' &&
                            <Pressable
                                onPress={() => 
                                 navigation.navigate('Concluir', {id: foco._id})
                                }
                          >
                            <Text style={styles.textButton}>Concluir Foco</Text>
                          </Pressable>
                          
                        }
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
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center'
    },
    cardzinho: {
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imagem: {
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