import 'leaflet/dist/leaflet.css'; // Importar os estilos do leaflet
import React from 'react';
import { Platform, View } from 'react-native';

const RenderizarMapa = ({ latitude, longitude }) => {
  const localizacao = { latitude, longitude };
/** 
       return (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ width: '90%', height: '40%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <WebMarker position={[latitude, longitude]}>
            <Popup>Você está aqui cadastrando um foco.</Popup>
          </WebMarker>
        </MapContainer>
      );
    } else {
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -22.238,
            longitude: -53.3437,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          <React.Fragment>
            <Marker
              coordinate={localizacao}
              title="Você está aqui"
              description="Cadastrando foco neste local"
            />
            <Circle
              center={localizacao}
              radius={10}
              strokeColor="rgba(255, 0, 0, 1)"
              fillColor="rgba(255, 0, 0, 0.5)"
            />
          </React.Fragment>
        </MapView>
      );
*/
  const renderMap = () => {
    if (Platform.OS === 'web') {

    }
  };

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
};

export default RenderizarMapa;