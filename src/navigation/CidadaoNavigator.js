import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import Notificar from '../screens/Cidadao/notificar';
import Listagem from '../screens/private/Listagem';
import Contato from '../screens/public/contato';
import Sobre from '../screens/public/sobre';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

export default function CidadaoNavigator() {
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
							component={HomeNavigator}
							options={{ 
								drawerIcon: ({color, size}) => <Feather name="home" color={"white"} size={size} />,
								drawerLabel: "Inicio"
							}}
						/>
						<Drawer.Screen 
							name="Notificar" 
							component={Notificar} 
							options={{ 
								drawerIcon: ({color, size}) => <Feather name="plus" color={"white"} size={size} />,
								drawerLabel: "Notificar"
							}}
						/>
						<Drawer.Screen 
							name="Listagem" 
							component={Listagem} 
							options={{ 
								drawerIcon: ({color, size}) => <FontAwesome6 name="table-list" color={"white"} size={size} />,
								drawerLabel: "Focos"
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