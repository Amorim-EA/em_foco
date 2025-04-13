import { AuthContext } from '@/contexts/AuthContext';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import AdministradorNavigator from './AdministradorNavigator';
import AgenteNavigator from './AgenteNavigator';
import AuthNavigator from './AuthNavigator';
import CidadaoNavigator from './CidadaoNavigator';

export default function RootNavigator() {
  const { user } = useContext(AuthContext);
  
  const [isConnected, setIsConnected] = useState(true); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  let Navigator;
  if (user) {
    switch (user.type) {
      case 'admin':
        Navigator = AdministradorNavigator;
        break;
      case 'agente':
        Navigator = AgenteNavigator;
        break;
      case 'cidadao':
        Navigator = CidadaoNavigator;
        break;
      default:
        Navigator = AuthNavigator;
        break;
    }
  } else {
    Navigator = AuthNavigator;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
       {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#1351b4" />
        </View>
        ) : (
          !isConnected ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <Text style={{ fontSize: 18, color: 'red', marginBottom: 10 }}>
                Sem conexão com a internet
              </Text>
              <ActivityIndicator size="large" color="red" />
            </View>
          ) : (
            <Navigator />
          )
        )}
    </NavigationContainer>
  );
}
