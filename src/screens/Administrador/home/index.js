import { getUsersSolicitado } from '@/services/apiUser';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Solicitacoes from '../solicitacoes';

import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    try {
      const response = await getUsersSolicitado(user,token);
      setUsers(response);
    } catch (error) {
      console.error("Erro ao obter os usuários:", error);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', flex: 1, paddingTop: 4 }}>
      <Text style={styles.title}>Solicitações Pendentes para Agente</Text>
      <Solicitacoes users={users} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
});
