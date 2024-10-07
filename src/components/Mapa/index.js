import React from 'react';
import { Platform, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import WebMap, { WebMarker } from 'react-native-web-maps';

const RederizarMapa = ({ latitude, longitude }) => {

  const renderMap = () => {
    if (Platform.OS === 'web') {
      return (
        <WebMap
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: -22.238,
            longitude: -53.3437,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          <WebMarker latitude={latitude} longitude={longitude} />
        </WebMap>
      );
    } else {
      return (
        <MapView
          provider={PROVIDER_GOOGLE}
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
            title={`Você está aqui`}
            description={`cadastrando foco neste local`}
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
    }
  };

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
};

export default RederizarMapa;

/** 
const Mapa = ({ latitude, longitude }) => {
  const localizacao = {
    latitude: latitude,
    longitude: longitude,
  };
  return (
    <View style={styles.card}>
      <MapView
        style={styles.map}
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
            title={`Você está aqui`}
            description={`cadastrando foco neste local`}
          />
          <Circle
            center={localizacao}
            radius={10}
            strokeColor="rgba(255, 0, 0, 1)"
            fillColor="rgba(255, 0, 0, 0.5)"
          />
        </React.Fragment>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {

  },
  map: {
    width: '90%',
    height: '50%'
  }
});
*/