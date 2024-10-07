import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';

export default function Autenticar({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleLogin = async () => {
    if (validar()) {
      try {
        const user = { 
          email: email, 
          password: password 
        };
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  };

  const validar = () => {
    let error = false;
    setErrorEmail('');
    setErrorPassword('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorEmail('Preencha seu e-mail corretamente');
      error = true;
    }
    if (!password) {
      setErrorPassword('Preencha a senha');
      error = true;
    }
    return !error;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputText
          placeholder="E-mail"
          onChangeText={value => {
            setEmail(value);
            setErrorEmail('');
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />
        <InputText
          placeholder="Senha"
          onChangeText={value => setPassword(value)}
          errorMessage={errorPassword}
          secureTextEntry={true}
        />
      <Button
        texto={isLoading ? "Carregando..." : "Entrar"}
        onPress={handleLogin} 
        style={styles.buttonBlue} 
        textStyle={styles.buttonText} 
        disabled={isLoading}
      />
      <Button 
        texto="Não tenho cadastro!" 
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.buttonGreen} 
        textStyle={styles.buttonText} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonBlue: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1351b4',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonGreen: {
    width: '100%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
