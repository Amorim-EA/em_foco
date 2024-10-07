import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';

export default function Contato() {
  const handle = () => {
    console.log('clicado')
  }
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Contato ou Sugestão</Text>
          <View style={styles.inputWrapper}>
              <InputText
                placeholder="Nome"
              />
              <InputText
                placeholder="Email"
              />
              <InputText
                placeholder="Assunto"
              />
              <InputText
                placeholder="Escreva uma breve mensagem"
                multiline={true}
                numberOfLines={4}
              />
          </View>
          <View style={styles.buttonWrapper}>
            <Button 
                  texto="Enviar" 
                  onPress={handle} 
                  style={styles.customButtonGreen} 
                  textStyle={styles.customText} 
            />
            <Button 
                  texto="Voltar" 
                  onPress={handle} 
                  style={styles.customButtonBlue} 
                  textStyle={styles.customText} 
            />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20,
  },
  inputWrapper: {
    width: '90%',
    marginTop: 20
  },
  buttonWrapper: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  customButtonGreen: {
    width: '48%',
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  customButtonBlue: {
    width: '48%',
    padding: 15,
    backgroundColor: '#1351b4',
    borderRadius: 5,
    alignItems: 'center',
  },
  customText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});