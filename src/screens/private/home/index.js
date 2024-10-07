import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';


export default function Home({ navigation }) {
  const action = () => {
    console.log('clicado');
  }
  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingBottom: 25, paddingTop: 4 }}>

          <Pressable
            style={styles.iconTextWrapper}
            onPress={() =>  navigation.navigate('Listagem')} 
          >
            <FontAwesome name="warning" size={30} color="orange" />
            <Text style={[styles.textInfo, { color: 'red' }]}>{3} Novos focos encontrados!</Text>
          </Pressable>

          <View style={styles.buttonsWrapper}>
            <Text style={styles.title}>Viu um foco da Dengue?</Text>
            <Button
                texto="Notificar" 
                onPress={() =>  navigation.navigate('Notificar')} 
                style={styles.buttonNotificar} 
                textStyle={styles.textButton} 
            />
            <Button 
                texto="Focos Notificados" 
                onPress={action} 
                style={styles.buttonListagem} 
                textStyle={styles.textButton} 
            />
          </View>

          <Pressable
            style={styles.card}
            onPress={() =>  navigation.navigate('InfoDengue')} 
          >
          <Image style={styles.img} source={require('../../../assets/image-home1.png')} />
          <Text style={styles.titleCard}>O que é Dengue?</Text>
            <Text style={styles.textCard}>
              Informações sobre a dengue.
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() =>  navigation.navigate('InfoSintomas')} 
          >
            <Image style={styles.img} source={require('../../../assets/image-home2.png')} />
            <Text style={styles.titleCard}>Principais Sintomas</Text>
            <Text style={styles.textCard}>Identificando os sistemas.</Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() =>  navigation.navigate('InfoPrevinir')} 
          >
            <Image style={styles.img} source={require('../../../assets/image-home3.png')} />
            <Text style={styles.titleCard}>Prevenção da Dengue</Text>
            <Text style={styles.textCard}>Cuidados a serem tomados contra a dengue.</Text>
          </Pressable>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconTextWrapper: {
    width: '90%',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 15,
  },
  textInfo: {
    fontSize: 17,
  },
  buttonsWrapper: {
    marginTop: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
  },
  buttonNotificar: {
    backgroundColor: '#00c14d',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
  },
  buttonListagem: {
    backgroundColor: '#99c321',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 25,
    borderRadius: 5,
    width: '80%',
  },

  card: {
    width: '80%',
    marginBottom: 25,
  },
  img: {
    width: '100%',
    height: 130
  },
  titleCard: {
    fontSize: 16,
    fontWeight: '600'
  },
})