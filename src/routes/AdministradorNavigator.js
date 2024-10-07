import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import Home from '../screens/Administrador/home';
import Contato from '../screens/public/contato/index';
import Sobre from '../screens/public/sobre';

const Drawer = createDrawerNavigator();

export default function AdministradorNavigator() {
    return(
				<Drawer.Navigator 
					initialRouteName='Home'
					screenOptions={{
						title: '',
						headerStyle: {
							backgroundColor: '#000', 
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						drawerStyle: {
							backgroundColor: '#000', 
							width: 240,
						},
						drawerLabelStyle: {
							color: 'white',
						},
						headerRight: () => (
							<Image
								source={require('../assets/logo.png')}
								style={{ width: 40, height: 40, marginRight: 10 }}
							/>
						),
					}}
				>
						<Drawer.Screen 
							name="Home" 
							component={Home}
							options={{ 
								drawerIcon: ({color, size}) => <FontAwesome6 name="users-gear" color={"white"} size={size} />,
								drawerLabel: "Inicio"
							}}
						/>
            <Drawer.Screen 
							name="Contato" 
							component={Contato}
							options={{ 
								drawerIcon: ({color, size}) => <Feather name="mail" color={"white"} size={size} />,
								drawerLabel: "Contato"
							}}
						/>
           <Drawer.Screen 
							name="Sobre" 
							component={Sobre}
							options={{ 
								drawerIcon: ({color, size}) => <FontAwesome6 name="users" color={"white"} size={size} />,
								drawerLabel: "Sobre"
							}}
						/>
				</Drawer.Navigator>
    );
}