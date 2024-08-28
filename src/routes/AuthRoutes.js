import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import { Login } from '../screens/login';
import { Sobre } from '../screens/sobre';
import { Contato } from '../screens/contato';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  	return(
  	    <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="Contato" component={Contato} />
        </Stack.Navigator>
    );
}