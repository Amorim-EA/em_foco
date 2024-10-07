import React from 'react';
import AdministradorNavigator from './AdministradorNavigator';
import AgenteNavigator from './AgenteNavigator';
import AuthNavigator from './AuthNavigator';
import CidadaoNavigator from './CidadaoNavigator';

export default function Routes() {
    /**
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const dadosUsuario = await SecureStore.getItemAsync('usuario');
                if (dadosUsuario) {
                    setUser(JSON.parse(dadosUsuario));
                }
            } catch (error) {
                console.error("Erro ao recuperar os dados do usuário:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const isAdm = user?.email === "emfoco.dengue@gmail.com";
    const isAgent = user?.agente === true; */
    const isLogado = true;

    return (
        <>
            {isLogado ? false ? <AdministradorNavigator /> : false ? <AgenteNavigator /> : <CidadaoNavigator /> : <AuthNavigator />}
        </>
    );
}
