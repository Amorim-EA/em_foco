import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/private/home';
import InfoDengue from '../../screens/private/InfoDengue';
import InfoPrevinir from '../../screens/private/infoPrevinir';
import InfoSintomas from '../../screens/private/infoSintomas/infoSistomas';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="InfoDengue"
                component={InfoDengue}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="InfoSintomas"
                component={InfoSintomas}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="InfoPrevinir"
                component={InfoPrevinir}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}