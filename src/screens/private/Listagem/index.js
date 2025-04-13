import ListaAgente from '@/components/ListarAgente';
import ListaCidadao from '@/components/ListarCidadao';
import { AuthContext } from '@/contexts/AuthContext';
import { getAllFoco } from '@/services/apiFoco';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Listagem({navigation}) {
  const { user } = useContext(AuthContext);
  const [focos, setFocos] = useState([]);

  async function fetchData() {
    try {
      const response = await getAllFoco(user.token);
      setFocos(response);
      console.log(response)
    } catch (error) {
      console.error("Erro ao buscar os focos:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.text}>Local</Text>
        <Text style={styles.text}>Status</Text>
      </View>
      {user.type === 'cidadao' ? (
        <ListaCidadao focos={focos} fetchFocos={fetchData} />
      ) : (
        <ListaAgente focos={focos} fetchFocos={fetchData} navigation={navigation}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
