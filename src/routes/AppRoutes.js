import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

export default function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="TabRoutes" component={TabRoutes}  options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}