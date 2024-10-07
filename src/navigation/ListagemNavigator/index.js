import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Listagem from '../../screens/private/listagem';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
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
                name="Foco"
                component={Foco}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}