import ConcluirFoco from '@/screens/Agente/ConcluirFoco';
import Listagem from '@/screens/private/Listagem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function ListagemNavigator() {
    return (
        <Stack.Navigator initialRouteName="Listagem">
            <Stack.Screen
                name="Listagem"
                component={Listagem}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Concluir"
                component={ConcluirFoco}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}