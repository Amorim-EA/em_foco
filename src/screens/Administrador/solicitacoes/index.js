import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardUserSolicitado from '../../../components/CardUserSolicitacoes';
import { getUsersSolicitado } from '../../../functions/handlerAcessApi';

export default function Solicitacoes() {
  const [users, setUsers] = useState([]);
  async function loadUsers(){
    try {
        const response = await getUsersSolicitado();
        setUsers(response);
    } catch {
        console.error("Erro ao obter os usuários:");
    }
};

  useEffect(() => {
    loadUsers();
}, []);

  return (
      <View style={styles.contaniner}>
          {users ? (
            users?.map((user, index) => (
              <CardUserSolicitado name={user.name} email={user.email} index={index}/>
            ))
          ) : (
            <Text style={styles.text}>Não há solicitações no momento!</Text>
          )}
      </View>
  );
}

const styles = StyleSheet.create({
  contaniner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: "600"
  },
})