import Button from '@/components/Button';
import InputText from '@/components/InputText';
import { postUser } from '@/services/apiUser';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Cadastro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [isSelected, setSelected] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpf, setErrorCpf] = useState('');

  const handleCadastrar = async () => {
    if (validar()) {
      const newUser = {
        name: name,
        email: email,
        password: password,
        cpf: cpf,
        solicited: isSelected,
      };

      try {
        const response = await postUser(newUser);
        Alert.alert(response);
        if(response == 'Cadastro realizado com sucesso!'){
          navigation.navigate('Autenticar');
        }
      } catch (error) {
        Alert.alert('Ocorreu um erro ao cadastrar. Tente novamente.');
        console.error(error);
      }
    }
  };

  const validar = () => {
    let error = false;
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorCpf('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{11}$/;

    if (!name) {
      setErrorName('Preencha o nome');
      error = true;
    }

    if (!emailRegex.test(email)) {
      setErrorEmail('Preencha seu e-mail corretamente');
      error = true;
    }
    if (!cpfRegex.test(cpf)) {
      setErrorCpf('Preencha seu CPF corretamente');
      error = true;
    }
    if (!password) {
      setErrorPassword('Preencha a senha');
      error = true;
    }
    return !error;
  };

  return (
    <ImageBackground
      source={require('@/assets/background-inicio.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.cardcad}>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <InputText
            placeholder="Nome"
            onChangeText={value => {
              setName(value);
              setErrorName('');
            }}
            errorMessage={errorName}
            styleInput={styles.input}
          />
          <InputText
            placeholder="E-mail"
            onChangeText={value => {
              setEmail(value);
              setErrorEmail('');
            }}
            keyboardType="email-address"
            errorMessage={errorEmail}
            styleInput={styles.input}
          />
          <InputText
            placeholder="CPF (somente numeros sem .)"
            onChangeText={value => {
              setCpf(value);
              setErrorCpf('');
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            errorMessage={errorCpf}
            styleInput={styles.input}
          />
          <InputText
            placeholder="Senha"
            onChangeText={value => setPassword(value)}
            errorMessage={errorPassword}
            secureTextEntry={true}
            styleInput={styles.input}
          />

          <View style={styles.section}>
              <Checkbox
                  style={styles.checkbox}
                  value={isSelected}
                  onValueChange={() => {setSelected(!isSelected)}}
                  color={isSelected ? '#28a745' : undefined}
              />
              <Text style={styles.paragraph}>Eu sou um agente!</Text>
          </View>

          <Button
            texto="Me cadastrar"
            onPress={handleCadastrar}
            style={styles.buttongreen}
            textStyle={styles.buttonText}
          />
          <Button
            texto="Voltar ao inicio"
            onPress={() => navigation.navigate('Inicio')}
            style={styles.buttonred}
            textStyle={styles.buttonText}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardcad: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    width: '280'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  checkbox: {
    margin: 8,
  },
  paragraph: {
    fontSize: 17,
  },
  buttongreen: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonred: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
