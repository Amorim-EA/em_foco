import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';


export default function InfoSintomas({ navigation }) {
  const sintomas = [
    'Febre alta > 38.5°C.',
    'Dores musculares intensas.',
    'Dor ao movimentar os olhos.',
    'Mal estar.',
    'Falta de apetite.',
    'Dor de cabeça.',
    'Manchas vermelhas no corpo.',
  ];

  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: 4}}>
          <View style={styles.card}>
          <Text style={styles.title}>Principais Sintomas</Text>
          <Image style={styles.img} source={require('../../../assets/image-home2.png')} />
              {sintomas.map((sintoma, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.itemText}>{sintoma}</Text>
                </View>
              ))}
          </View>
          <Button
              texto="Pagina Inicial" 
              onPress={() =>  navigation.navigate('Home')} 
              style={styles.buttonVoltar} 
              textStyle={styles.customText} 
          />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    paddingBottom: 25,
    paddingTop: 20,
  },
  img: {
    width: '98%',
    height: 130,
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '650',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
  buttonVoltar: {
    backgroundColor: '#00c14d',
  },
})

