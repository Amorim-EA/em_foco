import React from 'react';
import { Platform } from 'react-native';
import { AuthProvider } from './contexts/AuthContext';
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  console.log(Platform.OS)
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}