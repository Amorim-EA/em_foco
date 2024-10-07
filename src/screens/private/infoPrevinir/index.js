import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';


export default function InfoPrevinir({ navigation }) {
  const action = () => {
    console.log('clicado');
  }
  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: 4}}>
          <View style={styles.card}>
            <Text style={styles.title}>Prevenção da Dengue</Text>
            <Image style={styles.img} source={require('../../../assets/image-home3.png')} />
            <Text style={styles.textCard}>A melhor forma de prevenção da dengue é evitar a proliferação do mosquito Aedes Aegypti, eliminando água armazenada que podem se tornar possíveis criadouros, como em vasos de plantas, lagões de água, pneus, garrafas pláticas, piscinas sem uso e sem manutenção, e até mesmo em recipientes pequenos, como tampas de garrafas.</Text>
            <Text style={styles.textCard}>Roupas que minimizem a exposição da pele durante o dia - quando os mosquitos são mais ativos - proporcionam alguma proteção às picadas e podem ser uma das medidas adotadas, principalmente durante surtos. Repelentes e inseticidas também podem ser usados, seguindo as instruções do rótulo. </Text>
            <Text style={styles.textCard}>No momento, só existe uma vacina contra dengue registrada na Anvisa, que esta disponível na rede privada. Ela é usada em 3 doses no intervalo de 1 ano e só deve ser aplicada, segundo o fabricante, a OMS e a ANVISA, em pessoas que já tiveram pelo menos uma infecção por dengue. </Text>
            <Text style={styles.textCard}>Esta vacina não está disponível no SUS, mas o Ministério da Saúde acompanha os estudos de outras vacinas.</Text>
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
    fontWeight: '600',
  },
  textCard: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'justify'
  },
  buttonVoltar: {
    backgroundColor: '#00c14d',
  },
})

