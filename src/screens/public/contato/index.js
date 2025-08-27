import Button from '@/components/Button';
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Contato({navigation}) {
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');
  const [msg, setMsg] = useState('');

  const handle = () => {
    const email = 'emfoco.dengue@gmail.com';
    const mensagem = `Olá, me chamo ${nome}\n\n${msg}\n\nAtenciosamente ${nome}`
    const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Envie nos um email</Text>
          <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Nome"
                placeholderTextColor="#666" 
                value={nome}
                onChangeText={value => setNome(value)}
              />
              <TextInput
                placeholder="Assunto"
                value={assunto}
                placeholderTextColor="#666" 
                onChangeText={value => setAssunto(value)}
              />
              <TextInput
                placeholder="Escreva uma breve mensagem"
                multiline={true}
                placeholderTextColor="#666" 
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
                  onPress={() =>  navigation.navigate('Home')} 
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