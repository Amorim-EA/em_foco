import { AuthContext } from '@/contexts/AuthContext';
import Home from '@/screens/Administrador/home';
import Contato from '@/screens/public/contato/index';
import Sobre from '@/screens/public/sobre';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Image, View } from 'react-native';

const LogoutComponent = () => {
  return <View />;
};

const Drawer = createDrawerNavigator();

export default function AdministradorNavigator() {
	  const { logout } = useContext(AuthContext);
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
								style={{ width: 35, height: 35, marginRight: 10 }}
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
						<Drawer.Screen 
                name="Logout" 
                component={LogoutComponent}
								options={{ 
									drawerIcon: ({color, size}) => <Feather name="log-out" color={"white"} size={size} />,
									drawerLabel: "Sair"
								}}
                listeners={{
                    drawerItemPress: () => logout(), 
                }} 
            />
				</Drawer.Navigator>
    );
}