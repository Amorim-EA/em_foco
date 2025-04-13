import Button from '@/components/Button';
import InputText from '@/components/InputText';
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato() {
  const [assunto, setAssunto] = useState('');
  const [msg, setMsg] = useState('');

  const handle = () => {
    const email = 'emfoco.dengue@gmail.com';
    const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(msg)}`;
    Linking.openURL(url);
  };

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Envie nos um email</Text>
          <View style={styles.inputWrapper}>
              <InputText
                placeholder="Nome"
              />
              <InputText
                placeholder="Email"
              />
              <InputText
                placeholder="Assunto"
                value={assunto}
                onChangeText={value => setAssunto(value)}
              />
              <InputText
                placeholder="Escreva uma breve mensagem"
                multiline={true}
                numberOfLines={4}
                value={msg}
                onChangeText={value => setMsg(value)}
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