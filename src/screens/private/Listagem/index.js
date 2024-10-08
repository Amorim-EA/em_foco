import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ListaAgente from '../../../components/ListarAgente';
import ListaCidadao from '../../../components/ListarCidadao';
import { AuthContext } from '../../../contexts/AuthContext';
import { getAllFoco } from '../../../services/apiFoco';

export default function Listagem() {
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
      {user.type === 'cidadao' ? (
        <ListaCidadao focos={focos} />
      ) : (
        <ListaAgente focos={focos} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
