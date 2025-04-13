import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: '#fff', flex: 1, paddingTop: 16}}>
        <View style={styles.containerTextos}>
          <Text style={styles.title}>Sobre</Text>
          <Text style={styles.textParagraph}>
            Olá! Somos a equipe de desenvolvimento do aplicativo para mapeamento de focos da dengue, comprometidos em utilizar a tecnologia para combater a propagação da dengue em nossa comunidade. Nossa equipe é composta pelo professor orientador e dois estudantes do Instituto Federal de Mato Grosso do Sul (IFMS).
          </Text>
          <Text style={styles.textParagraph}>
            Este projeto não é apenas uma iniciativa acadêmica, mas sim uma resposta direta de controlar a disseminação da dengue em nossa região. Através da análise e mapeamento dos focos da doença, buscamos fornecer dados valiosos para as autoridades de saúde e para a população, a fim de orientar ações preventivas e de combate eficazes.
          </Text>
          <Text style={styles.textParagraph}>
            Agradecemos pelo apoio e pela oportunidade de contribuir para a saúde pública por meio deste projeto. Junte-se a nós nessa missão contra a dengue!
          </Text>
         </View>
          <View style={styles.teamWrapper}>
              <Text style={styles.titleTeam}>Desenvolvedores</Text>
              <View style={styles.cardWrapper}>
                  <View style={styles.card}>
                      <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYRg3UbwFBdhdZ6hlOtx_jiHlkxRz5Zodwca5R-k&s' }} />
                      <Text  style={styles.textName}>Renato Garcia</Text>
                      <Text  style={styles.textFuncao}>Docente</Text>
                  </View>
                  <View style={styles.card}>
                      <Image style={styles.img} source={{ uri: 'https://avatars.githubusercontent.com/u/101286204?v=4' }} />
                      <Text  style={styles.textName}>Erick Amorim</Text>
                      <Text  style={styles.textFuncao}>Dicente</Text>
                  </View>
                  <View style={styles.card}>
                      <Image style={styles.img} source={{ uri: 'https://avatars.githubusercontent.com/u/100858468?v=4' }} />
                      <Text style={styles.textName}>Eder Amorim</Text>
                      <Text style={styles.textFuncao}>Dicente</Text>
                  </View>
              </View>
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    paddingTop: 16,
    width: '100%',
  
  },
  containerTextos:{
    width: '90%',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
  },
  textParagraph: {
    fontSize: 17,
    textAlign: 'justify',
    marginBottom: 5,
    marginTop: 5,
    width: '100%'
  },
  teamWrapper: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 20, 
    flexWrap: 'no-wrap',
  },
  titleTeam: {
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cardWrapper: {
    width: '100%',
    marginTop: 30,
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#fff',
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
    objectFit: 'cover',
    backgroundColor: '#333',
  },
  textName: {
    fontSize: 16,
  },
  textFuncao: {
    fontSize: 14,
    textAlign: 'center',
  },
});
