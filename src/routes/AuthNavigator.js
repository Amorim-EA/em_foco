import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Autenticar from "../screens/public/autenticar";
import Cadastro from "../screens/public/cadastro";
import Inicio from "../screens/public/inicio";
import Sobre from '../screens/public/sobre';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Autenticar"
                component={Autenticar}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    title: 'Sobre Nós',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                }}
            />
        </Stack.Navigator>
    );
}