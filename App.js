import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [regiao, setRegiao] = useState({
    latitude: -23.5492243,
    longitude: -46.5813785,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.texto}>Projeto Mapas</Text>
        <Button
          title="Brasília"
          onPress={() =>
            setRegiao(prev => ({
              ...prev,
              latitude: -15.793889,
              longitude: -47.882778,
            }))
          }
        />

        <Button
          title="São Paulo"
          onPress={() =>
            setRegiao(prev => ({
              ...prev,
              latitude: -23.55052,
              longitude: -46.633308,
            }))
          }
        />

        <Button
          title="Ourinhos"
          onPress={() =>
            setRegiao(prev => ({
              ...prev,
              latitude: -22.9797,
              longitude: -49.8707,
            }))
          }
        />
        <Text>
          {regiao.latitude.toFixed(7)} {regiao.longitude.toFixed(7)}
        </Text>
      </View>

      <MapView
        style={styles.mapa}
        region={regiao}
        onRegionChangeComplete={novaRegiao => {
          setRegiao({
            latitude: novaRegiao.latitude,
            longitude: novaRegiao.longitude,
            latitudeDelta: novaRegiao.latitudeDelta,
            longitudeDelta: novaRegiao.longitudeDelta,
          });
        }}

        onPress={(e) => alert(e.nativeEvent.coordinate.latitude + ' ' + e.nativeEvent.coordinate.longitude)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#000',
    zIndex: 1,
  },
  mapa: {
    width: '100%',
    height: '100%',
  },
});

