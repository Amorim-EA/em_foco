
import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ListaCidadao({focos}){
  return (
      <View style={styles.container}>
      {focos?.map((foco, index) => (
          <View key={index} style={styles.card}>
                  <View style={styles.cardzinho}>
                      <Image source={{ uri: `http://localhost:3003/api/foco/image/${foco.image}`}} style={styles.image} />
                      <Text style={styles.description}>{foco.description}</Text>
                      {foco.status  === 'fechado' ? ( 
                            <Feather name="check" size={24} color="green" />
                          ): (
                            <FontAwesome name="warning" size={30} color="orange" />
                          )}
                  </View>
          </View>
      ))}
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        width: '90%',
        marginBottom: 16,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    cardzinho: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
  image: {
      width: 100,
      height: 100,
      marginBottom: 8,
  },
  description: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
      textAlign: 'center',
  },
});
