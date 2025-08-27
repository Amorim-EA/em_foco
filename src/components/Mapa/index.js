import { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const RenderizarMapa = ({ localizacao, region }) => {
  const mapRef = useRef(null);

  const markerLocation = {
    ...localizacao,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    if (mapRef.current && localizacao) {
      mapRef.current.animateToRegion(markerLocation, 1000);
    }
  }, [localizacao]);

  return (
    <MapView
      ref={mapRef}
      style={styles.mapa}
      region={region}
      provider={PROVIDER_GOOGLE}
    >
      {localizacao && (
        <>
          <Marker
            coordinate={{
              latitude: localizacao.latitude,
              longitude: localizacao.longitude,
            }}
            title="Foco da Dengue"
            description="O foco da dengue está neste local"
          />
          <Circle
            center={localizacao}
            radius={10}
            strokeColor="rgba(255, 0, 0, 1)"
            fillColor="rgba(255, 0, 0, 0.5)"
          />
        </>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapa: {
    backgroundColor: '#d9d9d9',
    width: '100%',
    height: 280,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default RenderizarMapa;
