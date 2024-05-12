import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import { Login } from '../screens/login/Login';
import { Sobre } from '../screens/sobre/Sobre';
import { Contato } from '../screens/contato/Contato';

const Stack = createStackNavigator();

export default function AuthStack() {
  	return(
  	    <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="Contato" component={Contato} />
        </Stack.Navigator>
    );
}