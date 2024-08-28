import React from 'react';
import { useAuth } from '../contexts/AuthContext'
import { AppRoutes } from './AppRoutes'
import { AuthRoutes } from './AuthRoutes'

export default function Routes() {
    const { logado } = useAuth()
    return(
     	       logado ? <AppStack /> : <AuthStack /> 
    )
}