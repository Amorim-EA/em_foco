import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardUserSolicitado from '../../../components/CardUserSolicitacoes';

export default function Solicitacoes({ users }) {
  return (
    <View style={styles.container}>
      {users && users.length > 0 ? (
        users.map((user, index) => (
          <CardUserSolicitado name={user.name} email={user.email} key={index} />
        ))
      ) : (
        <Text style={styles.text}>Não há solicitações no momento!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: "600",
    textAlign: 'center',
    margin: 10,
  },
});
