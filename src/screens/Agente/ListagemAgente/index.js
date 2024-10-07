import React from 'react';
import { View } from 'react-native';
import ListaAgente from '../../../components/Lista';

export default async function ListagemAgente() {
  const focos = await getAllFoco;
  return (
      <View style={styles.container}>
          <ListaAgente focos={focos}/>
      </View>
  );
}