import React from 'react';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

export default function Routes() {
    const logado = false;
    return(
        logado ? <AppRoutes /> : <AuthRoutes />
    )
}