import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { userToAgent } from '../../services/apiUser';

const CardUserSolicitado = ({ name, email}) => {
  const aceitarSolicitacao = async () => {
    try{
      await userToAgent(email);
    } catch{
      return null
    }
  }
  return (
    <View style={styles.card}>
      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={[styles.button, { backgroundColor: '#e0f8e9' }]}
          onPress={aceitarSolicitacao}
        >
          <Feather name="check" size={24} color="green" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardUserSolicitado;
