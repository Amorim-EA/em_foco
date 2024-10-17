import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

const RenderizarMapa = ({ localizacao, region }) => {
    return (
    <MapView
        style={styles.mapa}
        region={region}
    >
      {localizacao && (
        <React.Fragment>
        <Marker
          coordinate={{
            latitude: localizacao.latitude,
            longitude: localizacao.longitude,
          }}
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
      )}
    </MapView>
    );
  };
  
const styles = StyleSheet.create({
  mapa: {
    backgroundColor: '#d9d9d9',
    width: '90%',
    height: 200,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
},
})

export default RenderizarMapa;