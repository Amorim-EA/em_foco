import React from 'react';
import { View } from 'react-native';
import CardFocoCidadao from '../../../components/CardFocoCidadao';

export default function Listagem() {
  const quantidade = [1, 2, 3, 4, 5]
  return (
      <View>
          {quantidade?.map((foco) => (
            <CardFocoCidadao foto={foco.foco} descricao={foco.descricao} status={foco.status} />
          ))}
      </View>
  );
}

