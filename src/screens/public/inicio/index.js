import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01c47f',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: '30%',
  },
  wrapper: {
    width: '65%',
    alignItems: 'center',
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
    fontWeight: '600',
    fontSize: 28,
    marginTop: 8,
    textDecorationLine: 'none',
  }
});
