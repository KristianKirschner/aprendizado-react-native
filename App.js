import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View>
      <Text>Projeto aaMapas</Text>

      <MapView
        style={{ width: 350, height: 350 }}
        initialRegion={{
          latitude: -23.5492243,
          longitude: -46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
