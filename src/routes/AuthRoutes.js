import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import Contato from '../screens/contato/index';
import Login from "../screens/login";
import Sobre from '../screens/sobre';

const Stack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
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
            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    title: 'Entre Em Contato Conosco',
                    headerTitleStyle: {
                        fontSize: 22,
                    },
                }}
            />
        </Stack.Navigator>
    );
}