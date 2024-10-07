import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AdministradorNavigator from './AdministradorNavigator';
import AgenteNavigator from './AgenteNavigator';
import AuthNavigator from './AuthNavigator';
import CidadaoNavigator from './CidadaoNavigator';

export default function RootNavigator() {
  const { user, checkLogin } = useContext(AuthContext);

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <NavigationContainer>
        {user ? (
        user.type === 'admin' ? <AdministradorNavigator /> :
        user.type === 'agente' ? <AgenteNavigator /> :
        <CidadaoNavigator />
        ) : (
        <AuthNavigator /> 
        )}
    </NavigationContainer>
  );
}
