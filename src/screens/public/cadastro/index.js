import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import { postUser } from '../../../services/apiUser';

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
        await postUser(newUser);
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Autenticar')
      } catch (error) {
        alert('Ocorreu um erro ao cadastrar. Tente novamente.');
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
    <SafeAreaView style={styles.container}>
      <View style={styles.cardcad}>
        <Text style={styles.titulo}>Cadastrar-se</Text>
        <InputText
          placeholder="Nome"
          onChangeText={value => {
            setName(value);
            setErrorName('');
          }}
          errorMessage={errorName}
        />
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
          placeholder="CPF (somente numeros sem .)"
          onChangeText={value => {
            setCpf(value);
            setErrorCpf('');
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          errorMessage={errorCpf}
        />
        <InputText
          placeholder="Senha"
          onChangeText={value => setPassword(value)}
          errorMessage={errorPassword}
          secureTextEntry={true}
        />

        <CheckBox
          title="Sou um agente de endemia!"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}
        />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardcad: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  textCheck: {
    fontSize: 16,
    color: '#333',
  },
  buttongreen: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonred: {
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
