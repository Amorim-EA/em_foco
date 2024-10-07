import React from 'react';
import { View } from 'react-native';
import ListaCidadao from '../../../components/ListaCidadao';
import { getAllFoco } from '../../../services/apiFoco';

export default async function ListagemCidadao() {
  const focosTodos = await getAllFoco;
  // qual filtrar por usuario 

  return (
      <View>
          {focos ?.map((foco) => (
            <ListaCidadao foto={foco.foco} descricao={foco.descricao} status={foco.status} />
          ))}
      </View>
  );
}

