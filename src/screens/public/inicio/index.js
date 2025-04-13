import Button from '@/components/Button';
import { Link } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <ImageBackground
      source={require('@/assets/background-inicio.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <Text style={styles.title}>Em Foco!</Text>
      <View style={styles.wrapper}>
        <Button 
          texto="Cadastrar"
          onPress={() => navigation.navigate('Cadastro')}          
          style={styles.customButton}
          textStyle={styles.customText}
        />
        <Button
          texto="Entrar" 
          onPress={() => navigation.navigate('Autenticar')}
          style={styles.customButton} 
          textStyle={styles.customText} 
        />
        
        <Link to={{ screen: 'Sobre' }}>
          <Text style={styles.textLink}>Sobre</Text>
        </Link>
      </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%',
    width: '100%',

  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginTop: '20%',
  },
  wrapper: {
    width: '75%',
    alignItems: 'center',
    marginTop: '100%',
    marginBottom: 15,
  },
  customButton: {
    backgroundColor: '#1351b4', 
    width: '100%', 
    padding: 15, 
    marginBottom: 4,
  },
  customText: {
    fontWeight: '600',
    color: 'white',  
    textAlign: 'center', 
  },
  textLink: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 8,
    textDecorationLine: 'none',
  }
});
