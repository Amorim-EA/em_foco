import { useAuth } from '@/contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import AgenteNavigator from './AgenteNavigator';
import AuthNavigator from './AuthNavigator';
import CidadaoNavigator from './CidadaoNavigator';

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  let Navigator;
  if (user) {
    switch (user.role) {
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
      <Navigator />
    </NavigationContainer>
  );
}
