import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Solicitacoes from '../solicitacoes';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', flex: 1, paddingTop: 4}}>
        <Text style={styles.title}>Solicitações Pendentes para Agente</Text>
        <Solicitacoes />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  contaniner: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },

})