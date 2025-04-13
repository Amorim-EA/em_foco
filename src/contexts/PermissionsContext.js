import * as Location from 'expo-location';
import React, { createContext, useContext, useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';

const PermissionsContext = createContext();

export const PermissionsProvider = ({ children }) => {
  const [locationGranted, setLocationGranted] = useState(null);
  const [location, setLocation] = useState(null);

  const solicitarPermissaoLocalizacao = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      setLocationGranted(true);
      const local = await Location.getCurrentPositionAsync({});
      setLocation(local);
    } else {
      setLocationGranted(false);
      Alert.alert(
        'Permissão negada',
        'Você precisa permitir a localização para acessar este recurso.',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Abrir Configurações',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL('app-settings:');
              } else {
                Linking.openSettings();
              }
            },
          },
        ]
      );
    }
  };

  return (
    <PermissionsContext.Provider
      value={{
        locationGranted,
        location,
        solicitarPermissaoLocalizacao,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

export const usePermissions = () => useContext(PermissionsContext);
