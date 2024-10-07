
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default async function ListaCidadao({focos}){
  return (
      <View style={styles.container}>
      {focos?.map((foco, index) => (
          <View key={index} style={styles.card}>
                  <View style={styles.card}>
                      <Image source={foco.imagem} style={styles.image} />
                      <Text style={styles.description}>{foco.description}</Text>
                      {foco.status  === 'aberto' ? ( 
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
