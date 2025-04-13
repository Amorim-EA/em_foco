import Button from '@/components/Button';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function InfoDengue({ navigation }) {
  const action = () => {
    console.log('clicado');
  }
  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: 4}}>
          <View style={styles.card}>
            <Text style={styles.title}>O que é Dengue?</Text>
            <Image style={styles.img} source={require('../../../assets/image-home1.png')} />
            <Text style={styles.textCard}>
            É uma doença infecciosa febril aguda, que pode se apresentar de forma benigna ou grave, dependendo de alguns fatores, entre eles: o vírus envolvido, infecção anterior pelo virus da dengue e fatores individuais como doenças crônicas (diabetes, asma brônquica, anemia falciforme).
            </Text>
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
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  textCard: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'justify'
  },
  buttonVoltar: {
    backgroundColor: '#00c14d',
  },
})

