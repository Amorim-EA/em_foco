import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Notificar } from '../screens/notificar/Notificar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <NavigationContainer>
          	<Tab.Navigator>
            		<Tab.Screen name="Inicio" component={Home} />
            		<Tab.Screen name="Notificar" component={Notificar} />
          	</Tab.Navigator>
        </NavigationContainer>
    );
}