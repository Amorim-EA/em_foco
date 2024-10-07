
import { Feather } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardFocoCidadao = ({ foto, descicao, status }) => {
  return (
      <View style={styles.card}>
        <Image 
          style={styles.imagem}/>
        <View style={styles.meioCard}>
          <Text style={styles.description}>{description}</Text>
          <Link style={styles.link}></Link>
        </View>
        {status  === 'aberto' ? ( 
          <Feather name="check" size={24} color="green" />
        ): (
          <FontAwesome name="warning" size={30} color="orange" />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    card: {

    },
    imagem: {

    },
    meioCard: {

    },
    description: {

    },
    link: {
      
    }
  })
  
  export default CardFocoCidadao;