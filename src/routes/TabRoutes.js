import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Notificar } from '../screens/notificar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
          	<Tab.Navigator>
            		<Tab.Screen name="Home" component={Home} />
            		<Tab.Screen name="Notificar" component={Notificar} />
          	</Tab.Navigator>
    );
}