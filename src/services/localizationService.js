import * as Location from 'expo-location';

export const getCoordernadas = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
        let userLocation = await Location.getCurrentPositionAsync({});
        return { latitude: userLocation.coords.latitude,longitude: userLocation.coords.longitude};
    } else {
        Alert.alert(
        'Permissão negada',
        'Você precisa permitir a localização para acessar este recurso.',
        );
    }
};

export const getAddressFromCoords = async (localizacao) => {
  let data = await Location.reverseGeocodeAsync({localizacao});
  console.log(data[0]);
}