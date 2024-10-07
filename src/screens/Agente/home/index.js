import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
      <View style={styles.container}>
          <Pressable style={styles.iconTextWrapper}>
            <FontAwesome name="warning" size={35} color="yellow" />
            <Text style={styles.textInfo}>{3} Novos focos encontrados!</Text>
          </Pressable>

          <Pressable
            style={styles.card}
          >
          <Image style={styles.img} source={{ uri: '' }} />
          <Text style={styles.titleCard}>O que é a Dengue?</Text>
            <Text style={styles.textCard}>
              Informações sobre a dengue.
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
          >
            <Image style={styles.img} source={{ uri: '' }} />
            <Text style={styles.titleCard}>Principais Sintomas</Text>
            <Text style={styles.textCard}>Identificando os sistemas.</Text>
          </Pressable>

          <Pressable
            style={styles.card}
          >
            <Image style={styles.img} source={{ uri: '' }} />
            <Text style={styles.titleCard}>Prevenção da Dengue</Text>
            <Text style={styles.textCard}>Cuidados a serem tomados contra a dengue.</Text>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  iconTextWrapper: {

  },
  textInfo: {

  },
  buttonsWrapper: {

  },
  title: {

  },
  card: {

  },
  titleCard: {

  },
  textCard: {

  }
})