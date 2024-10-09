import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaAgente from '../../../components/ListarAgente';
import ListaCidadao from '../../../components/ListarCidadao';
import { AuthContext } from '../../../contexts/AuthContext';
import { getAllFoco } from '../../../services/apiFoco';

export default function Listagem({navigation}) {
  const { user } = useContext(AuthContext);
  const [focos, setFocos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllFoco();
        setFocos(response);
        console.log(response)
      } catch (error) {
        console.error("Erro ao buscar os focos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.text}>Local</Text>
        <Text style={styles.text}>Status</Text>
      </View>
      {user.type === 'cidadao' ? (
        <ListaCidadao focos={focos} />
      ) : (
        <ListaAgente focos={focos} navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
