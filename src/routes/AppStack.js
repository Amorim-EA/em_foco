import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import { Tab } from './TabRoutes';

const Stack = createStackNavigator();

export default function AppStack() {
  	return(
  	    <Stack.Navigator>
            <Stack.Screen name="Home" component={Tab} />
        </Stack.Navigator>
    );
}